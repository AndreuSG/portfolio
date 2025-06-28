import { Translations } from '../../types';
import { navbar } from './navbar';
import { hero } from './hero';
import { about } from './about';
import { services } from './services';
import { skills } from './skills';
import { opensource } from './opensource';
import { contact } from './contact';

export const es: Translations = {
  navbar,
  hero,
  about,
  services,
  skills,
  opensource,
  contact,
} as const;