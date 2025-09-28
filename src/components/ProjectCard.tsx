import type { Project } from "../data/projects";
import "./ProjectCard.module.css";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card">
      <header className="card__header">
        <h3 className="card__title">{project.title}</h3>
      </header>
      <p className="card__desc">{project.description}</p>
      <ul className="card__tags">
        {project.stack.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
      <a className="card__link" href={project.url} target="_blank" rel="noreferrer">
        Visa på GitHub →
      </a>
    </article>
  );
}
