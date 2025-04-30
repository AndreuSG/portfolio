import React from 'react';
import { Award, Clock } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const Cards: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="p-4 border border-gray-800 rounded-lg hover:border-purple transition-colors duration-300">
        <Award className="text-purple mb-3" size={24} />
        <h4 className="text-lg font-semibold mb-1">{translations.about.cards.leadership.title}</h4>
        <p className="text-gray-400">{translations.about.cards.leadership.description}</p>
      </div>
      <div className="p-4 border border-gray-800 rounded-lg hover:border-purple transition-colors duration-300">
        <Clock className="text-purple mb-3" size={24} />
        <h4 className="text-lg font-semibold mb-1">{translations.about.cards.experience.title}</h4>
        <p className="text-gray-400">{translations.about.cards.experience.description}</p>
      </div>
    </div>
  );
};