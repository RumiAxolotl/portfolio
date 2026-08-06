import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#about" className="navbar-brand">RumiAxolotl</a>

      <nav className={`navbar-links ${open ? 'open' : ''}`} aria-label="Navigation">
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </header>
  );
}
