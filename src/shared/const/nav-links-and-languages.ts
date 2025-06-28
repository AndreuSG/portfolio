import { Language } from '../../translations/types';

export const NAV_LINKS = [
  { nameKey: 'home', href: '#home' },
  { nameKey: 'about', href: '#about' },
  { nameKey: 'services', href: '#whatCanIdo' },
  { nameKey: 'skills', href: '#skills' },
  { nameKey: 'contact', href: '#contact' },
];

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];