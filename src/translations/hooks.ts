import { useContext } from 'react';
import { LanguageContext } from './context';
import { translations } from './translations';

export const useTranslations = () => {
  const { language } = useContext(LanguageContext);
  return translations[language];
};