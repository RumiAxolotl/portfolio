export const skills = [
  { name: 'Linux', level: 90 },
  { name: 'Virtualization (Proxmox, Virtuozzo)', level: 70 },
  { name: 'Shell Scripting', level: 85 },
  { name: 'Web Hosting (cPanel, CloudLinux)', level: 75 },
  { name: 'Monitoring (Grafana, Prometheus, Loki)', level: 75 },
  { name: 'Go', level: 80 },
  { name: 'Docker', level: 65 },
  { name: 'Git', level: 90 },
];

export const projects = [
  {
    title: 'Axolotl-Hyprland',
    description:
      'Dotfile config for ArchLinux with Hyprland, using Catppuccin color scheme. With waybar, wlogout, hyprlock, hypridle and other stuffs.',
    tech: ['Shell Scripting', 'Linux Configuration'],
    url: 'https://github.com/RumiAxolotl/Axolotl-hyprland',
    preview: {
      dark: '/portfolio/projects/axolotl-hyprland/dark.png',
      light: '/portfolio/projects/axolotl-hyprland/light.png',
    },
  },
];

export const experience = [
  {
    company: 'Vietnix Solutions and Technology JSC',
    role: 'System Operation Engineer / R&D Team',
    period: '10/2025 — Present',
    points: [
      'Operated and maintained high-availability virtualization platforms (Proxmox, Virtuozzo) across VPS node clusters.',
      'Managed cPanel/WHM and CloudLinux shared hosting, optimizing resources for thousands of hosted websites.',
      'Planned and executed large-scale server migrations across physical nodes with minimal downtime.',
      'Developed CLI tools (Go) and Bash scripts to automate internal monitoring and streamline team workflows.',
      'Deployed a centralized monitoring and logging stack (Grafana, Prometheus, Loki) and optimized bottlenecks proactively.',
      'Implemented open-source, self-hosted solutions to cut infrastructure costs and strengthen security.',
    ],
  },
];

export const socials = [
  { icon: 'fa-brands fa-github', url: 'https://github.com/RumiAxolotl', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/rumiaxolotl/', label: 'LinkedIn' },
  { icon: 'fa-solid fa-envelope', url: 'mailto:rumiaxolotl@gmail.com', label: 'Email' },
];
