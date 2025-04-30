// Language type
export type Language = 'en' | 'es' | 'ca';

// Navbar translations type
export type NavbarTranslations = {
  home: string;
  about: string;
  services: string;
  skills: string;
  contact: string;
};

// Hero translations type
export type HeroTranslations = {
  available: string;
  roles: {
    teamManager: string;
    devops: string;
    developer: string;
  };
  buttons: {
    contact: string;
    services: string;
  };
  connect: string;
};

// About translations type
export type AboutTranslations = {
  title: string;
  subtitle: string;
  journey: {
    title: string;
    description1: string;
    description2: string;
  };
  stats: {
    teamMembers: string;
    projectsCompleted: string;
    uptimeAchieved: string;
    supportAvailable: string;
  };
  cards: {
    leadership: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
  };
  connect: string;
  experienceTitle: string;
  experiences: {
    devops: {
      title: string;
      company: string;
      period: string;
      description: string;
    };
    network: {
      title: string;
      company: string;
      period: string;
      description: string;
    };
    webdev: {
      title: string;
      company: string;
      period: string;
      description: string;
    };
    sysadmin: {
      title: string;
      company: string;
      period: string;
      description: string;
    };
  };
};

// Services translations type
export type ServicesTranslations = {
  title: string;
  subtitle: string;
  webdev: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  cloud: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  digital: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  consulting: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  features: string;
  benefits: string;
  getStarted: string;
};

// Skills translations type
export type SkillsTranslations = {
  title: string;
  subtitle: string;
  leadership: {
    title: string;
    skills: Array<{ name: string; level: number }>;
  };
  frontend: {
    title: string;
    skills: Array<{ name: string; level: number }>;
  };
  backend: {
    title: string;
    skills: Array<{ name: string; level: number }>;
  };
  devops: {
    title: string;
    skills: Array<{ name: string; level: number }>;
  };
  technologies: string[];
};

// Contact translations type
export type ContactTranslations = {
  title: string;
  subtitle: string;
  form: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    successMessage: string;
  };
  info: {
    title: string;
    email: string;
    phone: string;
    location: string;
  };
  work: {
    title: string;
    description: string;
    visitSite: string;
    services: string;
  };
};

// Complete translations type
export type Translations = {
  navbar: NavbarTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  services: ServicesTranslations;
  skills: SkillsTranslations;
  contact: ContactTranslations;
};