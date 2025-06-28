import { SkillsTranslations } from "../../types";

export const skills: SkillsTranslations = {
  title: "Les meves habilitats",
  subtitle:
    "El meu perfil combina lideratge tècnic, desenvolupament full stack i passió per l'automatització i la millora contínua.",
  leadership: {
    title: "Lideratge i Soft Skills",
    skills: [
      { name: "Comunicació efectiva i empatia", level: 99 },
      { name: "Mentoria i formació de companys", level: 95 },
      { name: "Gestió i coordinació d'equips tècnics", level: 90 },
      { name: "Delegació i confiança en l'equip", level: 85 },
    ],
  },
  frontend: {
    title: "Frontend",
    skills: [
      { name: "TypeScript (codi net i tipat)", level: 97 },
      { name: "Angular (experiència avançada)", level: 95 },
      { name: "React (interfícies modernes i animacions)", level: 90 },
      { name: "Next.js", level: 90 },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Nest.js per a APIs escalables", level: 95 },
      { name: "Node.js (rendiment i escalabilitat)", level: 95 },
      { name: "Disseny i documentació d'APIs REST", level: 90 },
      { name: "BaaS (Supabase, Firebase)", level: 85 },
    ],
  },
  devops: {
    title: "DevOps i Cloud",
    skills: [
      { name: "CI/CD amb GitHub Actions i GitLab", level: 90 },
      { name: "Docker (containers i optimització)", level: 85 },
      { name: "Kubernetes i automatització de desplegaments", level: 85 },
      { name: "Ansible (automatització de servidors)", level: 80 },
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
