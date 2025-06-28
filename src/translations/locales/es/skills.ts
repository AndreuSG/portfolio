import { SkillsTranslations } from '../../types';

export const skills: SkillsTranslations = {
  title: "Mis habilidades",
  subtitle:
    "Mi perfil combina liderazgo técnico, desarrollo full stack y pasión por la automatización y la mejora continua.",
  leadership: {
    title: "Liderazgo y Soft Skills",
    skills: [
      { name: "Comunicación efectiva y empatía", level: 99 },
      { name: "Mentoría y formación de compañeros", level: 95 },
      { name: "Gestión y coordinación de equipos técnicos", level: 90 },
      { name: "Delegación y confianza en el equipo", level: 85 },
    ],
  },
  frontend: {
    title: "Frontend",
    skills: [
      { name: "TypeScript (código limpio y tipado)", level: 97 },
      { name: "Angular (experiencia avanzada)", level: 95 },
      { name: "React (interfaces modernas y animaciones)", level: 90 },
      { name: "Next.js", level: 90 },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Nest.js para APIs escalables", level: 95 },
      { name: "Node.js (rendimiento y escalabilidad)", level: 95 },
      { name: "Diseño y documentación de APIs REST", level: 90 },
      { name: "BaaS (Supabase, Firebase)", level: 85 },
    ],
  },
  devops: {
    title: "DevOps y Cloud",
    skills: [
      { name: "CI/CD con GitHub Actions y GitLab", level: 90 },
      { name: "Docker (contenedores y optimización)", level: 85 },
      { name: "Kubernetes y automatización de despliegues", level: 85 },
      { name: "Ansible (automatización de servidores)", level: 80 },
    ],
  },
  technologies: [
    "Angular",
    "Nest.js",
    "Docker",
    "Kubernetes",
    "Ansible",
    "React",
    "Next.js",
    "Payload CMS",
    "Node.js",
    "Laravel",
    "TypeScript",
    "PHP",
  ],
};
