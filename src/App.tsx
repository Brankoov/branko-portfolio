import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";


export default function App() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <h1>Branko – Utvecklare (Java/Spring • React )</h1>
          <p>
            Bygger tydliga gränssnitt, säkra API:er och schyssta pipelines.
            Söker LIA/jobb – hör av dig så visar jag mer!
          </p>
          <div className="hero__links">
            <a className="btn" href="#projects">Se projekt</a>
            <a className="btn" href="#contact">Kontakt</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section" id="about">
          <h2>Om mig</h2>
          <p>
            Hej! Jag är Branko – trivs bäst när jag får lösa problem med Java/Spring och React. 
            Jag håller det enkelt, skriver kod som går att testa och skickar ut ofta. 
            Vill in i ett lag som gillar ordning och leverans.
          </p>
        </section>

        <section className="section" id="projects">
          <h2>Projekt</h2>
          <div className="grid grid--projects">
            {projects.map((p) => (<ProjectCard key={p.title} project={p} />))}
          </div>
        </section>

       <section className="section" id="skills">
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

      <section className="section" id="contact">
          <h2>Kontakt</h2>
          <ul className="kv">
            <li><strong>GitHub</strong> <a href="https://github.com/Brankoov" target="_blank">Brankoov</a></li>
            <li><strong>E-post</strong> <a href="mailto:branko_nikolic@live.se">branko_nikolic@live.se</a></li>
            <li><strong>Telefon</strong> 073-732 11 57</li>
          </ul>
        </section> 

      <footer className="footer">
        © {new Date().getFullYear()} Branko. Built with React + Vite.
      </footer>
    </>
  );
}
