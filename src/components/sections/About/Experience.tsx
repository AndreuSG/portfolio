import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const Experience: React.FC = () => {
  const translations = useTranslations();

  const experiences = [
    {
      icon: Briefcase,
      title: translations.about.experiences.devops.title,
      company: translations.about.experiences.devops.company,
      period: translations.about.experiences.devops.period,
      description: translations.about.experiences.devops.description,
    },
    {
      icon: Briefcase,
      title: translations.about.experiences.network.title,
      company: translations.about.experiences.network.company,
      period: translations.about.experiences.network.period,
      description: translations.about.experiences.network.description,
    },
    {
      icon: GraduationCap,
      title: translations.about.experiences.webdev.title,
      company: translations.about.experiences.webdev.company,
      period: translations.about.experiences.webdev.period,
      description: translations.about.experiences.webdev.description,
    },
    {
      icon: GraduationCap,
      title: translations.about.experiences.sysadmin.title,
      company: translations.about.experiences.sysadmin.company,
      period: translations.about.experiences.sysadmin.period,
      description: translations.about.experiences.sysadmin.description,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">{translations.about.experienceTitle}</h3>
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <div 
            key={index} 
            className="relative pl-10 pb-6 border-l border-gray-800 last:border-0 last:pb-0"
          >
            <div className="absolute left-0 top-0 w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full bg-black border border-purple">
              <item.icon size={18} className="text-purple" />
            </div>
            <div className="pt-1">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <div className="flex flex-wrap justify-between text-sm mb-2">
                <span className="text-purple">{item.company}</span>
                <span className="text-gray-400">{item.period}</span>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};