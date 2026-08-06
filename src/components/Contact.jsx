import Reveal from './Reveal.jsx';
import { socials } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-text">
            Let&apos;s connect! I&apos;m always open to discussing new opportunities and
            collaborations.
          </p>
          <a href="mailto:rumiaxolotl@gmail.com" className="contact-email">
            <i className="fa-solid fa-envelope" /> rumiaxolotl@gmail.com
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="social-links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-link"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}