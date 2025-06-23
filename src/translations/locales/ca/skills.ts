import { SkillsTranslations } from '../../types';

export const skills: SkillsTranslations = {
  title: 'Les meves habilitats',
  subtitle: 'Resum de les meves capacitats tècniques i experiència en lideratge.',
  leadership: {
    title: 'Lideratge',
    skills: [
      { name: 'Gestió d’equips', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Mentoria', level: 85 },
      { name: 'Comunicació', level: 90 },
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
      { name: 'Disseny d’APIs', level: 90 },
    ],
  },
  devops: {
    title: 'DevOps',
    skills: [
      { name: 'CI/CD', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Serveis cloud', level: 85 },
    ],
  },
  technologies: ['Next.js', 'Angular', 'Nest.js', 'Node.js', 'Docker', 'Kubernetes'],
};
