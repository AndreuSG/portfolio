import React from 'react';
import { Heart } from 'lucide-react';
import socialLinks from '../shared/const/socialLinks'; // Ajusta la ruta si es necesario

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 py-8 border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Andreu Sánchez Guerrero</h3>
            <p className="text-gray-400 max-w-md">
              Creating digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                aria-label={link.label}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-purple text-gray-400 hover:text-purple transition-colors duration-300"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Andreu Sánchez Guerrero. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-purple" fill="#9d4edd" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};