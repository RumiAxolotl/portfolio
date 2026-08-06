import Reveal from './Reveal.jsx';
import { skills } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="avatar">
              <div className="avatar-ring" />
              <img
                src="/portfolio/Profile.png"
                alt="Profile Picture of Rumi Axolotl"
                className="avatar-image"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="about-info">
            <h3 className="about-name">Rumi Axolotl</h3>
            <h4 className="about-role">Backend Developer</h4>
            <p className="about-text">
              I&apos;m a software developer with experience in Node.js and Linux. I enjoy building
              efficient and scalable web applications using Node.js and leveraging the power of
              Linux for server management. With strong problem-solving skills and attention to
              detail, I strive to provide high-quality software solutions. I am passionate about
              continuous learning and staying up to date with the latest technology in the
              industry.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <h4 className="skills-title">Skills</h4>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-head">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-level-text">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}