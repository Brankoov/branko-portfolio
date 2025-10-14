// src/hooks/useReveal.ts
import { useEffect } from "react";
export function useReveal(selector = ".reveal") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("in")); return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) {
        e.target.classList.add("in"); io.unobserve(e.target);
      }
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
