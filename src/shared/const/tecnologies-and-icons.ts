import { 
  SiTypescript, 
  SiPhp, 
  SiNextdotjs, 
  SiAngular, 
  SiReact, 
  SiNestjs, 
  SiNodedotjs, 
  SiLaravel, 
  SiDocker, 
  SiKubernetes, 
  SiAnsible 
} from 'react-icons/si';
import { Cpu } from 'lucide-react';
import { ComponentType } from 'react';

export const TECHNOLOGY_ICONS: { [key: string]: ComponentType<{ size?: number; className?: string }> } = {
  'TypeScript': SiTypescript,
  'PHP': SiPhp,
  'Next.js': SiNextdotjs,
  'Angular': SiAngular,
  'React': SiReact,
  'Nest.js': SiNestjs,
  'Node.js': SiNodedotjs,
  'Laravel': SiLaravel,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Ansible': SiAnsible,
  'Payload CMS': SiNextdotjs,
};

export const getTechIcon = (tech: string) => {
  return TECHNOLOGY_ICONS[tech] || Cpu;
};