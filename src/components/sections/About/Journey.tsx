import React from 'react';
import { useTranslations } from '../../../translations';

export const Journey: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">{translations.about.journey.title}</h3>
      <p className="text-gray-300 mb-4">
        {translations.about.journey.description1}
      </p>
      <p className="text-gray-300">
        {translations.about.journey.description2}
      </p>
    </div>
  );
};