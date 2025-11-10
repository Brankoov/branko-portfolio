import type { Project } from "../data/projects";
import styles from "./ProjectCard.module.css";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, description, stack, live, repo, repoFrontend, url, image } = project;

  // Välj “huvudlänk” för hela kortet (företrädesvis live, annars repo, repoFrontend, url)
  const primaryHref = live || repo || repoFrontend || url;

  return (
    <article className={styles.card}>
      {image && (
        <figure className={styles.media}>
          <img
            src={image}
            alt={`${title} – förhandsbild`}
            loading="lazy"
            className={styles.thumb}
          />
        </figure>
      )}

      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <p className={styles.desc}>{description}</p>

      {!!stack?.length && (
        <ul className={styles.tags} aria-label="Teknikstack">
          {stack.map((t) => (
            <li key={t} className={styles.tag}>{t}</li>
          ))}
        </ul>
      )}

      {(live || repo || repoFrontend || url) && (
        <div className={styles.actions}>
          {live && (
            <a
              className={styles.btn}
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo ↗
            </a>
          )}

          {repo && (
            <a
              className={`${styles.btn} ${styles.btnGhost}`}
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo  ↗
            </a>
          )}

          {repoFrontend && (
            <a
              className={`${styles.btn} ${styles.btnGhost}`}
              href={repoFrontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo (FE) ↗
            </a>
          )}

          {!live && !repo && !repoFrontend && url && (
            <a
              className={`${styles.btn} ${styles.btnGhost}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Öppna ↗
            </a>
          )}
        </div>
      )}

      {/* Gör hela kortet klickbart om primaryHref finns */}
      {primaryHref && (
        <a
          className={styles.blockLink}
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Öppna ${title}`}
        />
      )}
    </article>
  );
}
