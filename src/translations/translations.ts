import { Language, Translations } from './types';
import { ca } from './locales/ca/index';
import { es } from './locales/es/index';
import { en } from './locales/en/index';

export const translations: Record<Language, Translations> = {
  ca,
  es,
  en,
};