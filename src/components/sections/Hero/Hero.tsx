import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslations } from '../../../translations';
import { CodeBlock } from './CodeBlock';
import { ProfileImage } from './ProfileImage';
import { Roles } from './Roles';
import { SocialLinks } from './SocialLinks';

export const Hero: React.FC = () => {
  const translations = useTranslations();
  
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="container-custom">
        {/* Mobile and Tablet Layout (Vertical) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto lg:hidden">
          <div className="reveal mb-8 sm:mb-12">
            <ProfileImage />
            
            <div className="inline-block px-3 sm:px-4 py-2 border border-purple rounded-full text-xs sm:text-sm font-semibold text-purple mb-4 sm:mb-6 animate-pulse">
              {translations.hero.available}
            </div>
            
            <h1 className="mb-4 sm:mb-6">
              <span className="gradient-text">Andreu Sánchez Guerrero</span>
            </h1>
            
            <Roles />
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <a href="#contact" className="btn-primary">
                {translations.hero.buttons.contact}
              </a>
              <a href="#whatCanIdo" className="btn-secondary">
                {translations.hero.buttons.whatIdo}
              </a>
            </div>
            
            <SocialLinks />
          </div>
          
          <div className="reveal">
            <CodeBlock />
          </div>
        </div>

        {/* Desktop Layout (Horizontal) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <ProfileImage />
            
            <div className="inline-block px-4 py-2 border border-purple rounded-full text-sm font-semibold text-purple mb-6 animate-pulse">
              {translations.hero.available}
            </div>
            
            <h1 className="mb-6">
              <span className="gradient-text">Andreu Sánchez Guerrero</span>
            </h1>
            
            <Roles />
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                {translations.hero.buttons.contact}
              </a>
              <a href="#whatCanIdo" className="btn-secondary">
                {translations.hero.buttons.whatIdo}
              </a>
            </div>
            
            <SocialLinks />
          </div>
          
          <div className="reveal lg:flex justify-center">
            <CodeBlock />
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-purple transition-colors">
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};