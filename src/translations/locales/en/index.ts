import { Translations } from '../../types';
import { navbar } from './navbar';
import { hero } from './hero';
import { about } from './about';
import { services } from './services';
import { skills } from './skills';
import { contact } from './contact';

export const en: Translations = {
  navbar,
  hero,
  about,
  services,
  skills,
  contact,
} as const;