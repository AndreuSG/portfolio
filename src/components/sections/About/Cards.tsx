import React from 'react';
import { Award, Clock } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const Cards: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
      <div className="p-4 sm:p-6 border border-gray-800 rounded-lg hover:border-purple transition-colors duration-300">
        <Award className="text-purple mb-3" size={24} />
        <h4 className="text-base sm:text-lg font-semibold mb-2">{translations.about.cards.leadership.title}</h4>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{translations.about.cards.leadership.description}</p>
      </div>
      <div className="p-4 sm:p-6 border border-gray-800 rounded-lg hover:border-purple transition-colors duration-300">
        <Clock className="text-purple mb-3" size={24} />
        <h4 className="text-base sm:text-lg font-semibold mb-2">{translations.about.cards.experience.title}</h4>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{translations.about.cards.experience.description}</p>
      </div>
    </div>
  );
};