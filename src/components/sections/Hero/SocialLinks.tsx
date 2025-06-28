import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const SocialLinks: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <div className="flex items-center gap-4 lg:justify-start justify-center">
      <span className="text-gray-400 text-sm sm:text-base">{translations.hero.connect}</span>
      <a href="https://github.com/AndreuSG" target='_blank' className="text-gray-400 hover:text-purple transition-colors">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/andreu-sanchez-guerrero/" target='_blank' className="text-gray-400 hover:text-purple transition-colors">
        <Linkedin size={20} />
      </a>
    </div>
  );
};