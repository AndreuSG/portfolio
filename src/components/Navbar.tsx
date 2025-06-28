import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext, useTranslations } from '../translations';
import { NAV_LINKS, LANGUAGES } from '../shared/const/nav-links-and-languages';
import logoImg from '../assets/img/A.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const translations = useTranslations();

  const navLinks = NAV_LINKS.map((link) => ({
    ...link,
    name: translations.navbar[link.nameKey as keyof typeof translations.navbar],
  }));

  const languages = LANGUAGES;

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

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
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
            <span className="font-bold text-xl hidden sm:block">Andreu Sánchez Guerrero</span>
            <span className="font-bold text-lg sm:hidden">A.S.G</span>
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
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-purple text-white rounded-lg hover:shadow-purple transition-all duration-300">
                <Globe size={18} />
                {languages.find((lang) => lang.code === language)?.name}
              </button>
              <div className="absolute right-0 mt-2 w-40 py-2 bg-black-50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-800">
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
            className="md:hidden text-gray-300 hover:text-purple transition-colors duration-300 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black-50 border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img
                src={logoImg}
                alt="Logo"
                className="w-6 h-6 rounded object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-sm text-white truncate">
                  Andreu Sánchez
                </div>
                <div className="font-semibold text-sm text-white truncate">
                  Guerrero
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0 ml-2"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-purple/10 rounded-lg transition-all duration-300 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Section */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 px-4 py-2 text-gray-400 text-sm font-medium mb-3">
                <Globe size={16} />
                Language
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between py-3 px-4 text-left rounded-lg transition-all duration-300 ${
                      language === lang.code 
                        ? 'text-purple bg-purple/10 border border-purple/20' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="text-lg">{lang.name}</span>
                    {language === lang.code && (
                      <span className="w-2 h-2 bg-purple rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};