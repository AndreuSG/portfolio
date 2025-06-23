import React from 'react';
import { Users, Code, Cpu, Globe } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const Stats: React.FC = () => {
  const translations = useTranslations();
  
  const stats = [
    {
      icon: Users,
      value: 'Orchestration & Deployment',
      label: translations.about.stats.orchestrationAndDeployment,
    },
    {
      icon: Code,
      value: 'Full-Stack Development',
      label: translations.about.stats.fullStack,
    },
    {
      icon: Cpu,
      value: '99.9%',
      label: translations.about.stats.uptimeAchieved,
    },
    {
      icon: Globe,
      value: 'Proactive Support',
      label: translations.about.stats.supportAvailable,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8 bg-black p-6 rounded-xl border border-gray-800">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4 bg-black-100 rounded-lg hover:bg-purple/10 transition-colors duration-300">
          <stat.icon className="mx-auto mb-2 text-purple" size={24} />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};