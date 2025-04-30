import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const SocialLinks: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <div className="flex items-center gap-4 mt-10">
      <span className="text-gray-400">{translations.hero.connect}</span>
      <a href="#" className="text-gray-400 hover:text-purple transition-colors">
        <Github />
      </a>
      <a href="#" className="text-gray-400 hover:text-purple transition-colors">
        <Linkedin />
      </a>
    </div>
  );
};