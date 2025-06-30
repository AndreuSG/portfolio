import React from 'react';
import { Download, FileText } from 'lucide-react';
import { useTranslations } from '../../../translations';
import cvPdf from '../../../assets/img/cv-andreu-sanchez-guerrero.pdf';

export const CVDownload: React.FC = () => {
  const translations = useTranslations();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV-Andreu-Sanchez-Guerrero.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {/* CV Download Section */}
      <div className="relative z-10 p-6 sm:p-8 border border-gray-800 rounded-xl bg-black-50/80 backdrop-blur-sm hover:border-purple transition-all duration-300">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-purple flex items-center justify-center">
            <FileText size={28} className="text-white" />
          </div>
          
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