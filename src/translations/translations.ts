import { Language, Translations } from './types';
import { ca } from './locales/ca';
import { es } from './locales/es';
import { en } from './locales/en';

export const translations: Record<Language, Translations> = {
  ca,
  es,
  en,
};