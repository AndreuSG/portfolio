import React from 'react';
import { useTranslations } from '../../../translations';
import { getTechIcon } from '../../../shared/const/tecnologies-and-icons';

export const TechnologyGrid: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 reveal">
      {translations.skills.technologies.map((tech, index) => {
        const TechIcon = getTechIcon(tech);
        return (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-3 sm:p-4 border border-gray-800 rounded-lg hover:border-purple transition-colors duration-300 aspect-square"
          >
            <TechIcon className="text-purple mb-2 sm:mb-3" size={28} />
            <span className="text-center font-medium text-xs sm:text-sm leading-tight">{tech}</span>
          </div>
        );
      })}
    </div>
  );
};