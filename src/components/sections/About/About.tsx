import React from 'react';
import { useTranslations } from '../../../translations';
import { Journey } from './Journey';
import { Stats } from './Stats';
import { Cards } from './Cards';
import { Experience } from './Experience';
import { ProfileSection } from './ProfileSection';

export const About: React.FC = () => {
  const translations = useTranslations();

  return (
    <section id="about" className="section bg-black-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="mb-4"><span className="gradient-text">{translations.about.title}</span></h2>
          <p className="text-gray-300 text-lg">
            {translations.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal">
            <Journey />
            <Stats />
            <Cards />
            <a href="#contact" className="btn-primary">
              {translations.about.connect}
            </a>
          </div>

          <div className="order-1 lg:order-2 reveal">
            <ProfileSection />
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};