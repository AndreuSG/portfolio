import React from 'react';
import { useTranslations } from '../../../translations';
import { ServiceCard } from './ServiceCard';
import { getServices } from './const/services';

export const WhatCanIdo: React.FC = () => {
  const translations = useTranslations();

  
  const services = getServices(translations);

  return (
    <section id="whatCanIdo" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="mb-4"><span className="gradient-text">{translations.services.title} </span></h2>
          <p className="text-gray-300 text-lg">
            {translations.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};