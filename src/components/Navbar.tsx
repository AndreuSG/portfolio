import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext, Language, useTranslations } from '../translations';
import logoImg from '../assets/img/A.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = useTranslations();
  
  const navLinks = [
    { name: translations.navbar.home, href: '#home' },
    { name: translations.navbar.about, href: '#about' },
    { name: translations.navbar.services, href: '#projects' },
    { name: translations.navbar.skills, href: '#skills' },
    { name: translations.navbar.contact, href: '#contact' },
  ];

  const languages = [
    { code: 'ca' as Language, name: 'Català' },
    { code: 'es' as Language, name: 'Español' },
    { code: 'en' as Language, name: 'English' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-50/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={logoImg} 
            alt="Andreu Sánchez Guerrero Logo" 
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="font-bold text-xl">Andreu Sánchez Guerrero</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-purple transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-300">
              <Globe size={18} />
              {languages.find(lang => lang.code === language)?.name}
            </button>
            <div className="absolute right-0 mt-2 w-40 py-2 bg-black-50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full px-4 py-2 text-left hover:bg-purple/10 transition-colors duration-300 ${
                    language === lang.code ? 'text-purple' : 'text-gray-300'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black-50/95 backdrop-blur-md shadow-md py-4 animate-slide-down">
          <nav className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-purple py-2 px-4 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-2">
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 flex items-center gap-2">
                  <Globe size={18} />
                  Language
                </span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`py-2 px-4 text-left rounded-md hover:bg-purple/10 transition-colors duration-300 ${
                      language === lang.code ? 'text-purple' : 'text-gray-300'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};