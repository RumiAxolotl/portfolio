import Reveal from './Reveal.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>

        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 100}>
            <article className="experience-card">
              <div className="experience-head">
                <div>
                  <h3 className="experience-company">{job.company}</h3>
                  <p className="experience-role">{job.role}</p>
                </div>
                <span className="experience-period">
                  <i className="fa-solid fa-calendar-days" /> {job.period}
                </span>
              </div>

              <ul className="experience-list">
                {job.points.map((point) => (
                  <li key={point}>
                    <i className="fa-solid fa-chevron-right" /> {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}