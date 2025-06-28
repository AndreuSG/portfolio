import React from 'react';
import { Github, Star, GitBranch, Code2, Rocket, Clock } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const ComingSoon: React.FC = () => {
  const translations = useTranslations();

  const features = [
    {
      icon: Code2,
      title: translations.opensource.features.tools.title,
      description: translations.opensource.features.tools.description,
    },
    {
      icon: Rocket,
      title: translations.opensource.features.automation.title,
      description: translations.opensource.features.automation.description,
    },
    {
      icon: GitBranch,
      title: translations.opensource.features.templates.title,
      description: translations.opensource.features.templates.description,
    },
  ];

  return (
    <div className="reveal">
      {/* Coming Soon Card */}
      <div className="relative max-w-4xl mx-auto mb-16">
        {/* Background glow */}
        <div className="absolute -inset-1 bg-gradient-purple rounded-2xl blur-lg opacity-30 animate-pulse"></div>
        
        {/* Main card */}
        <div className="relative bg-black border border-gray-800 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple/5 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-purple flex items-center justify-center animate-pulse">
                <Github size={40} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
              {translations.opensource.comingSoon.title}
            </h3>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {translations.opensource.comingSoon.subtitle}
            </p>
            
            {/* Status indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-black-100 rounded-full border border-gray-800">
                <Clock size={16} className="text-purple" />
                <span className="text-sm text-gray-300">{translations.opensource.comingSoon.inDevelopment}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black-100 rounded-full border border-gray-800">
                <Star size={16} className="text-yellow-500" />
                <span className="text-sm text-gray-300">{translations.opensource.comingSoon.openSource}</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/AndreuSG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Github size={18} />
                {translations.opensource.comingSoon.followGithub}
              </a>
              <a 
                href="#contact" 
                className="btn-secondary flex items-center justify-center"
              >
                {translations.opensource.comingSoon.getNotified}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 bg-black border border-gray-800 rounded-xl hover:border-purple transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center mb-4 group-hover:bg-purple/20 transition-colors duration-300">
              <feature.icon className="text-purple" size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-white">{feature.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};