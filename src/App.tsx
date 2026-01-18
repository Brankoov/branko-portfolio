import "./App.css";
import Particles from "./components/Particles";
import ProjectCard from "./components/ProjectCard";
//import ThemeToggle from "./components/ThemeToggle";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <header className="hero hero--with-bg">
       {/* <ThemeToggle /> {/* liten flytande knapp uppe till höger */}

        <Particles
          className="hero__bg"
          particleCount={500}
          particleSpread={8}
          speed={0.15}
          alpha
          baseSize={80}
          sizeRandomness={0.5}
          hoverParallax
          hoverFactor={0.9}
          cameraDistance={15}
        />
        <div className="container hero__content">
          <h1>Branko – Utvecklare (Java/Spring • React )</h1>
          <p>
            Utvecklare med fokus på Java/Spring och React. 
            Just nu gör jag min LIA på Softronic och tar examen
            i slutet av våren. Jag ser fram emot att ta steget ut i 
            arbetslivet på riktigt.
          </p>
          <div className="hero__links">
            <a className="btn" href="#projects">Se projekt</a>
            <a className="btn" href="#contact">Kontakt</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section reveal about" id="about">
  <div className="about__grid">
    <figure className="about__media">
      <picture>
        <source srcSet="/CVbild.jpg" type="image/jpg" />
        <source srcSet="/me.webp" type="image/webp" />
        <img
          src="/me.jpg"
          alt="Porträtt av Branko Nikolic"
          width={420}
          height={420}
          loading="lazy"
          className="avatar"
        />
      </picture>
    </figure>

    <div className="about__content">
      <h2>Om mig</h2>
      <p>
        Jag heter Branko och jag älskar att lära mig nya saker. 
        Jag är en lagspelare som gillar att testa, misslyckas snabbt 
        och förbättra mig längs vägen.
        Jag söker en LIA där jag får växa som utvecklare, bygga tillsammans med 
        andra och lära mig de språk och verktyg som teamet använder — oavsett stack.
      </p>

      <ul className="about__chips" aria-label="Snabbfakta">
        <li>Java / Spring Boot</li>
        <li>React / TypeScript</li>
        
      </ul>

      <div className="about__actions">
        <a className="btn" href="#projects">Se projekt</a>
        <a className="btn btn--outline" href="/BrankoCV.pdf" download>
          Ladda ner CV
        </a>
      </div>
    </div>
  </div>
</section>


        <section className="section reveal" id="projects">
          <h2>Projekt</h2>
          <div className="grid grid--projects">
            {projects.map((p) => (<ProjectCard key={p.title} project={p} />))}
          </div>
        </section>

        <section className="section reveal" id="skills">
          <h2>Tech-stack</h2>
          <ul className="kv">
            <li><strong>Programmering & språk</strong> {skills.programming.join(", ")}</li>
            <li><strong>Databaser</strong> {skills.databases.join(", ")}</li>
            <li><strong>Ramverk & bibliotek</strong> {skills.frameworks.join(", ")}</li>
            <li><strong>Verktyg & plattformar</strong> {skills.tools.join(", ")}</li>
            <li><strong>Språk</strong> {skills.languages.join(", ")}</li>
          </ul>
        </section>
      </main>

      <section className="section reveal" id="contact">
        <h2>Kontakt</h2>
        <ul className="kv">
          <li>
            <strong>GitHub</strong>{" "}
            <a href="https://github.com/Brankoov" target="_blank" rel="noopener noreferrer">
              Brankoov
            </a>
          </li>
          <li>
            <strong>E-post</strong>{" "}
            <a id="mail" href="mailto:branko_nikolic@live.se">
              branko_nikolic@live.se
            </a>
            <button
              type="button"
              className="btn btn--sm"
              onClick={() => navigator.clipboard.writeText("branko_nikolic@live.se")}
              style={{ marginLeft: 8 }}
            >
              Kopiera
            </button>
          </li>
          <li><strong>Telefon</strong> 073-732 11 57</li>
        </ul>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Branko. Built with React + Vite.
      </footer>
    </>
  );
}
