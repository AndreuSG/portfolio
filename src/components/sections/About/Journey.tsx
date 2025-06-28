import React from 'react';
import { useTranslations } from '../../../translations';

export const Journey: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{translations.about.journey.title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        {translations.about.journey.description1}
      </p>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        {translations.about.journey.description2}
      </p>
    </div>
  );
};