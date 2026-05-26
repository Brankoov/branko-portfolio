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
          <h1>Branko – Utvecklare (Next.js/React • Java/Spring)</h1>
          <p>
            Systemutvecklare med en stabil grund i Java och Spring Boot, som just nu 
            fokuserar mest på att bygga och förvalta applikationer i React och Next.js. Den här 
            sidan är min digitala hubb för projekt jag pillar med vid sidan av.
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
        Jag heter Branko. Min utvecklingsresa drivs av nyfikenhet och en vilja att hela 
        tiden lära mig nya saker. Som utvecklare gillar jag att ta min tid och vara noggrann – 
        att bygga robust och stabil kod som håller över tid är väldigt viktigt för mig.
      </p>

      <ul className="about__chips" aria-label="Snabbfakta">
        <li>Next.js / React / TypeScript</li>
        <li>Java / Spring Boot</li>
        <li>SQL (MSSQL / PostgreSQL)</li>
      </ul>

      <div className="about__actions">
        <a className="btn" href="#projects">Se projekt</a>
        <button 
          className="btn btn--outline" 
          onClick={() => alert("Håller på att uppdatera mitt CV för tillfället, återkom gärna snart!")}
        >
          Ladda ner CV
        </button>
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
