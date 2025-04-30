import React from 'react';
import { useTranslations } from '../../../translations';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { WorkTogether } from './WorkTogether';

export const Contact: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="mb-4"><span className="gradient-text">{translations.contact.title}</span></h2>
          <p className="text-gray-300 text-lg">
            {translations.contact.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal">
          <ContactForm />
          <div>
            <ContactInfo />
            <WorkTogether />
          </div>
        </div>
      </div>
    </section>
  );
};