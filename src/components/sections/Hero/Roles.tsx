import React from 'react';
import { useTranslations } from '../../../translations';

export const Roles: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <div className="space-y-2 mb-8">
      <p className="text-gray-300 text-xl">{translations.hero.roles.teamManager}</p>
      <p className="text-gray-300 text-xl">{translations.hero.roles.devops}</p>
      <p className="text-gray-300 text-xl">{translations.hero.roles.developer}</p>
    </div>
  );
};