import { SkillsTranslations } from '../../types';

export const skills: SkillsTranslations = {
  title: "My Skills",
  subtitle:
    "My profile blends technical leadership, full stack development, and a passion for automation and continuous improvement.",
  leadership: {
    title: "Leadership & Soft Skills",
    skills: [
      { name: "Effective communication and empathy", level: 99 },
      { name: "Mentoring and peer training", level: 95 },
      { name: "Managing and coordinating technical teams", level: 90 },
      { name: "Delegation and team trust", level: 85 },
    ],
  },
  frontend: {
    title: "Frontend",
    skills: [
      { name: "TypeScript (clean and typed code)", level: 97 },
      { name: "Angular (advanced experience)", level: 95 },
      { name: "React (modern interfaces and animations)", level: 90 },
      { name: "Next.js", level: 90 },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Nest.js for scalable APIs", level: 95 },
      { name: "Node.js (performance and scalability)", level: 95 },
      { name: "REST API design and documentation", level: 90 },
      { name: "BaaS (Supabase, Firebase)", level: 85 },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    skills: [
      { name: "CI/CD with GitHub Actions and GitLab", level: 90 },
      { name: "Docker (containers and optimization)", level: 85 },
      { name: "Kubernetes and deployment automation", level: 85 },
      { name: "Ansible (server automation)", level: 80 },
    ],
  },
  technologies: [
    "Docker",
    "Kubernetes",
    "Angular",
    "Nest.js",
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
