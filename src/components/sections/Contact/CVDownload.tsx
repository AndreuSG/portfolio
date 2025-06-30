import React from 'react';
import { Download, FileText } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const CVDownload: React.FC = () => {
  const translations = useTranslations();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv-andreu-sanchez-guerrero.pdf';
    link.download = 'CV-Andreu-Sanchez-Guerrero.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {/* Floating Technologies Background - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="floating-tech tech-1">
          <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center border border-purple/20">
            <span className="text-purple font-bold text-sm">A</span>
          </div>
        </div>
        <div className="floating-tech tech-2">
          <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center border border-purple/20">
            <span className="text-purple font-bold text-xs">R</span>
          </div>
        </div>
        <div className="floating-tech tech-3">
          <div className="w-14 h-14 rounded-lg bg-purple/10 flex items-center justify-center border border-purple/20">
            <span className="text-purple font-bold text-sm">N</span>
          </div>
        </div>
        <div className="floating-tech tech-4">
          <div className="w-11 h-11 rounded-lg bg-purple/10 flex items-center justify-center border border-purple/20">
            <span className="text-purple font-bold text-xs">D</span>
          </div>
        </div>
        <div className="floating-tech tech-5">
          <div className="w-13 h-13 rounded-lg bg-purple/10 flex items-center justify-center border border-purple/20">
            <span className="text-purple font-bold text-sm">K</span>
          </div>
        </div>
      </div>

      {/* CV Download Section */}
      <div className="relative z-10 p-6 sm:p-8 border border-gray-800 rounded-xl bg-black-50/80 backdrop-blur-sm hover:border-purple transition-all duration-300">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-purple flex items-center justify-center">
            <FileText size={28} className="text-white" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-3 gradient-text">
            {translations.contact.cv?.title || 'Descargar CV'}
          </h3>
          
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            {translations.contact.cv?.description || 'Descarga mi currículum completo con toda mi experiencia profesional y habilidades técnicas.'}
          </p>
          
          <button
            onClick={handleDownload}
            className="btn-primary flex items-center justify-center gap-2 mx-auto group"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            {translations.contact.cv?.download || 'Descargar CV'}
          </button>
          
          <p className="text-xs text-gray-500 mt-3">
            PDF • {translations.contact.cv?.updated || 'Actualizado'} 2024
          </p>
        </div>
      </div>
    </div>
  );
};