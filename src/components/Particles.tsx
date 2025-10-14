import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

type ParticlesProps = {
  className?: string;
  particleCount?: number;        // basvärde, justeras responsivt
  particleSpread?: number;
  speed?: number;
  colors?: string[];
  hoverParallax?: boolean;
  hoverFactor?: number;
  alpha?: boolean;               // mjuka partiklar
  baseSize?: number;             // px vid z=0 (justeras med distans)
  sizeRandomness?: number;       // 0–1
  cameraDistance?: number;
  rotate?: boolean;
  disabled?: boolean;            // manuell kill-switch
};

const DEFAULT_COLORS = ["#ffffff", "#a3bffa", "#9ae6b4"];

function hexToRgb01(hex: string): [number, number, number] {
  let h = hex.replace(/^#/, "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function Particles({
  className = "",
  particleCount = 300,
  particleSpread = 9,
  speed = 0.18,
  colors = DEFAULT_COLORS,
  hoverParallax = true,
  hoverFactor = 0.8,
  alpha = true,
  baseSize = 90,
  sizeRandomness = 0.6,
  cameraDistance = 18,
  rotate = true,
  disabled = false,
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respektera prefers-reduced-motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (disabled || prefersReduced) return;

    // --- Init renderer ---
    const renderer = new Renderer({
      alpha: true,
      depth: false,
      antialias: true,
      powerPreference: "high-performance",
    });
    const gl = renderer.gl;
    // begränsa DPR för batteri/CPU
    (renderer as any).dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 16 });
    camera.position.set(0, 0, cameraDistance);

    // Responsivt antal partiklar
    const pickCount = () => {
      const w = container.clientWidth || window.innerWidth;
      if (w < 420) return Math.max(120, Math.floor(particleCount * 0.45));
      if (w < 768) return Math.max(160, Math.floor(particleCount * 0.6));
      if (w < 1200) return Math.floor(particleCount * 0.85);
      return particleCount;
    };

    // Storlek
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    // Hover-parallax
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      (mouseRef as MutableRefObject<any>).current = { x, y };
    };
    if (hoverParallax) container.addEventListener("mousemove", onMove);

    // --- Build geometry data ---
    const count = pickCount();
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // punkt jämt i enhets-sfär (rejection sampling + cubic radius)
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
      const [cr, cg, cb] = hexToRgb01(colors[Math.floor(Math.random() * colors.length)]);
      cols.set([cr, cg, cb], i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: cols },
    });

    const vertex = /* glsl */ `
      attribute vec3 position;
      attribute vec4 random;
      attribute vec3 color;
      uniform mat4 modelMatrix, viewMatrix, projectionMatrix;
      uniform float uTime, uSpread, uBaseSize, uSizeRnd;
      varying vec4 vRnd;
      varying vec3 vCol;
      void main() {
        vRnd = random;
        vCol = color;
        vec3 pos = position * uSpread;
        pos.z *= 10.0;

        vec4 mPos = modelMatrix * vec4(pos, 1.0);
        float t = uTime;
        mPos.x += sin(t * random.z + 6.2831 * random.w) * mix(0.08, 1.2, random.x);
        mPos.y += sin(t * random.y + 6.2831 * random.x) * mix(0.08, 1.2, random.w);
        mPos.z += sin(t * random.w + 6.2831 * random.y) * mix(0.08, 1.2, random.z);

        vec4 mvPos = viewMatrix * mPos;
        // storlek faller av med avståndet för rimlig perspektivkänsla
        float size = uBaseSize * (1.0 + uSizeRnd * (random.x - 0.5));
        gl_PointSize = size / max(1.0, length(mvPos.xyz));
        gl_Position = projectionMatrix * mvPos;
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;
      uniform float uTime, uAlpha;
      varying vec4 vRnd;
      varying vec3 vCol;
      void main() {
        vec2 uv = gl_PointCoord.xy;
        float d = length(uv - vec2(0.5));
        // mjukt rundat “glow”
        float circle = smoothstep(0.5, 0.35, d);
        vec3 tint = vCol + 0.18 * sin(uv.yxx + uTime + vRnd.y * 6.2831);
        float a = mix(1.0, circle, uAlpha); // om uAlpha=1 → mjuk alfa-kant
        if (a < 0.02) discard;
        gl_FragColor = vec4(tint, a);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: baseSize },
        uSizeRnd: { value: sizeRandomness },
        uAlpha: { value: alpha ? 1 : 0 },
      },
    });

    const points = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let raf = 0;
    let last = performance.now();
    let tAcc = 0;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = now - last;
      last = now;
      tAcc += dt * speed;
      program.uniforms.uTime.value = tAcc * 0.001;

      if (hoverParallax) {
        points.position.x = -mouseRef.current.x * hoverFactor;
        points.position.y = -mouseRef.current.y * hoverFactor;
      } else {
        points.position.x = 0.0;
        points.position.y = 0.0;
      }
      if (rotate) {
        points.rotation.x = Math.sin(tAcc * 0.00022) * 0.1;
        points.rotation.y = Math.cos(tAcc * 0.0005) * 0.14;
        points.rotation.z += 0.008 * speed;
      }
      renderer.render({ scene: points, camera });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (hoverParallax) container.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      try {
        container.contains(gl.canvas) && container.removeChild(gl.canvas);
      } catch {}
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    colors.join("|"),
    hoverParallax,
    hoverFactor,
    alpha,
    baseSize,
    sizeRandomness,
    cameraDistance,
    rotate,
    disabled,
  ]);

  return <div ref={containerRef} className={`relative w-full h-full ${className}`} />;
}
