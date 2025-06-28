import React from 'react';
import { useTranslations } from '../../../translations';
import { SkillCategory } from './SkillCategory';
import { TechnologyGrid } from './TechnologyGrid';

export const Skills: React.FC = () => {
  const translations = useTranslations();

  return (
    <section id="skills" className="section bg-black-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal">
          <h2 className="mb-4"><span className="gradient-text">{translations.skills.title}</span></h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {translations.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 reveal">
          <SkillCategory category="leadership" />
          <SkillCategory category="frontend" />
          <SkillCategory category="backend" />
          <SkillCategory category="devops" />
        </div>

        <TechnologyGrid />
      </div>
    </section>
  );
};