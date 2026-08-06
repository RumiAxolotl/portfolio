import Reveal from './Reveal.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Projects</h2>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="project-card">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-brands fa-github" /> View Project
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}