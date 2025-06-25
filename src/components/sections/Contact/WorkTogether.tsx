import React from 'react';
import { useTranslations } from '../../../translations';

export const WorkTogether: React.FC = () => {
  const translations = useTranslations();

  return (
    <div className="p-6 border border-gray-800 rounded-xl bg-black-100 relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl"></div>
      <h4 className="text-xl font-bold mb-3">{translations.contact.work.title}</h4>
      <p className="text-gray-300 mb-6">
        {translations.contact.work.description}
      </p>
      <div className="flex gap-4">
        <a href="https://codiara.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
          {translations.contact.work.visitSite}
        </a>
        <a href="#whatCanIdo" className="btn-secondary flex-1">
          {translations.contact.work.services}
        </a>
      </div>
    </div>
  );
};