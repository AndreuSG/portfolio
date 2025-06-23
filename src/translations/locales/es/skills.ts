import { SkillsTranslations } from '../../types';

export const skills: SkillsTranslations = {
  title: 'Mis habilidades',
  subtitle: 'Resumen de mis capacidades técnicas y experiencia en liderazgo.',
  leadership: {
    title: 'Liderazgo',
    skills: [
      { name: 'Gestión de equipos', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Mentoría', level: 85 },
      { name: 'Comunicación', level: 90 },
    ],
  },
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', level: 90 },
      { name: 'Angular', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 85 },
    ],
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'Nest.js', level: 90 },
      { name: 'Node.js', level: 95 },
      { name: 'BaaS', level: 85 },
      { name: 'Diseño de APIs', level: 90 },
    ],
  },
  devops: {
    title: 'DevOps',
    skills: [
      { name: 'CI/CD', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Servicios cloud', level: 85 },
    ],
  },
  technologies: ['Next.js', 'Angular', 'Nest.js', 'Node.js', 'Docker', 'Kubernetes'],
};
