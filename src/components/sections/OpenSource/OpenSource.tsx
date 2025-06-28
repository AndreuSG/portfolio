import React from 'react';
import { useTranslations } from '../../../translations';
import { ComingSoon } from './ComingSoon';

export const OpenSource: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <section id="opensource" className="section bg-black-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 reveal">
          <h2 className="mb-6">
            <span className="gradient-text">{translations.opensource.title}</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            {translations.opensource.subtitle}
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {translations.opensource.description}
            </p>
          </div>
        </div>
        
        <ComingSoon />
      </div>
    </section>
  );
};