import { Translations } from '../types';

export const ca: Translations = {
  navbar: {
    home: 'Inici',
    about: 'Sobre mi',
    services: 'Serveis Codiara',
    skills: 'Habilitats',
    contact: 'Contacte',
  },
  hero: {
    available: 'DevOps i Desenvolupador de Software a Codiara',
    roles: {
      teamManager: 'Cap d\'equip de desenvolupament',
      devops: 'Enginyer DevOps',
      developer: 'Desenvolupador de software',
    },
    buttons: {
      contact: 'Contacta\'ns',
      services: 'Els nostres serveis',
    },
    connect: 'Connecta amb mi:',
  },
  about: {
    title: 'Sobre mi',
    subtitle: 'Apassionat per la cultura DevOps i el lideratge tècnic, creant solucions digitals d\'impacte.',
    journey: {
      title: 'La meva trajectòria',
      description1: 'Apassionat per la cultura DevOps i el lideratge tècnic, lidero l\'equip de desenvolupament a Codiara, una empresa jove i talentosa. Si bé ens especialitzem en desenvolupament web, anem més enllà: creem interfícies intuïtives i despleguem infraestructures robustes per oferir solucions digitals escalables i d\'alt impacte.',
      description2: 'A Codiara, combinem l\'experiència tècnica amb el pensament innovador per construir solucions que no només satisfan les necessitats actuals, sinó que també estan preparades per al creixement futur.',
    },
    stats: {
      teamMembers: 'Membres de l\'equip',
      projectsCompleted: 'Projectes completats',
      uptimeAchieved: 'Disponibilitat assolida',
      supportAvailable: 'Suport disponible',
    },
    cards: {
      leadership: {
        title: 'Lideratge',
        description: 'Gestió d\'equips tècnics',
      },
      experience: {
        title: 'Experiència',
        description: 'DevOps i Desenvolupament Web',
      },
    },
    connect: 'Connectem',
    experienceTitle: 'Experiència i formació',
    experiences: {
      devops: {
        title: 'DevOps i Desenvolupador de Software',
        company: 'Codiara',
        period: '2024 – Present',
        description: 'Liderant l\'equip de desenvolupament a Codiara, responsable de CI/CD i participant en el disseny, desenvolupament i desplegament d\'aplicacions web.',
      },
      network: {
        title: 'Administrador de Xarxes',
        company: '9TECKNIC',
        period: '2023 – 2024',
        description: 'Gestió de la infraestructura de xarxes informàtiques.',
      },
      webdev: {
        title: 'Desenvolupament d\'Aplicacions Web',
        company: 'Institut Sa Palomera',
        period: '2023 – 2025',
        description: 'Formació avançada centrada en desenvolupament front-end i back-end modern, accessibilitat i proves automatitzades.',
      },
      sysadmin: {
        title: 'Administració de Sistemes en Xarxa',
        company: 'Institut Sa Palomera',
        period: '2022 – 2024',
        description: 'Especialització en virtualització, scripting i ciberseguretat, amb projectes pràctics d\'alt rendiment.',
      },
    },
  },
  services: {
    title: 'Els Nostres serveis',
    subtitle: 'Solucions tecnològiques integrals per impulsar el teu negoci. Combinem experiència amb innovació per oferir resultats excepcionals.',
    webdev: {
      title: 'Desenvolupament d\'Aplicacions Web',
      description: 'Desenvolupament integral d\'aplicacions web modernes adaptades a les necessitats del teu negoci.',
      features: [
        'Desenvolupament d\'aplicacions web personalitzades',
        'Aplicacions web progressives (PWA)',
        'Aplicacions d\'una sola pàgina (SPA)',
        'Implementació de disseny responsiu',
        'Optimització del rendiment',
        'Integració i desenvolupament d\'APIs'
      ],
      benefits: [
        'Millora de l\'experiència d\'usuari',
        'Augment de l\'eficiència empresarial',
        'Solucions escalables',
        'Stack tecnològic modern'
      ]
    },
    cloud: {
      title: 'Infraestructura cloud',
      description: 'Solucions cloud completes per optimitzar la teva infraestructura i millorar l\'escalabilitat.',
      features: [
        'Disseny d\'arquitectura cloud',
        'Infraestructura com a codi (IaC)',
        'Orquestració de contenidors',
        'Arquitectura de microserveis',
        'Implementació de pipelines CI/CD',
        'Millors pràctiques de seguretat cloud'
      ],
      benefits: [
        'Reducció de costos operatius',
        'Millora de la fiabilitat',
        'Seguretat millorada',
        'Escalat automàtic'
      ]
    },
    digital: {
      title: 'Serveis kit digital',
      description: 'Solucions de transformació digital per modernitzar les operacions del teu negoci.',
      features: [
        'Establiment de presència digital',
        'Implementació d\'e-commerce',
        'Digitalització de processos empresarials',
        'Eines de màrqueting digital',
        'Gestió de relacions amb clients',
        'Analítica i informes'
      ],
      benefits: [
        'Transformació digital',
        'Major abast de mercat',
        'Millora de l\'engagement amb clients',
        'Decisions basades en dades'
      ]
    },
    consulting: {
      title: 'Consultoria tècnica',
      description: 'Assessorament expert en estratègia tecnològica i implementació.',
      features: [
        'Avaluació de stack tecnològic',
        'Revisió i planificació d\'arquitectura',
        'Augment d\'equips',
        'Formació tècnica',
        'Implementació de millors pràctiques',
        'Optimització del rendiment'
      ],
      benefits: [
        'Procés de desenvolupament optimitzat',
        'Reducció del deute tècnic',
        'Transferència de coneixement',
        'Millora de l\'eficiència de l\'equip'
      ]
    },
    features: 'Característiques principals',
    benefits: 'Beneficis',
    getStarted: 'Començar',
  },
  skills: {
    title: 'Les meves habilitats',
    subtitle: 'Una visió general de les meves capacitats tècniques i experiència en lideratge.',
    leadership: {
      title: 'Lideratge',
      skills: [
        { name: 'Gestió d\'equips', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Mentoria', level: 85 },
        { name: 'Comunicació', level: 90 },
      ],
    },
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', level: 90 },
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 85 },
      ],
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Nest.js', level: 90 },
        { name: 'Node.js', level: 95 },
        { name: 'BaaS', level: 85 },
        { name: 'Disseny d\'APIs', level: 90 },
      ],
    },
    devops: {
      title: 'DevOps',
      skills: [
        { name: 'CI/CD', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Serveis cloud', level: 85 },
      ],
    },
    technologies: ['Next.js', 'Angular', 'Nest.js', 'Node.js', 'Docker', 'Kubernetes'],
  },
  contact: {
    title: 'Contacta amb mi',
    subtitle: 'Tens un projecte en ment o vols saber més sobre els nostres serveis? No dubtis en contactar-nos.',
    form: {
      title: 'Envia\'m un missatge',
      name: 'El teu nom',
      email: 'El teu email',
      subject: 'Assumpte',
      message: 'El teu missatge',
      send: 'Enviar missatge',
      successMessage: 'Gràcies pel teu missatge! Em posaré en contacte amb tu aviat.',
    },
    info: {
      title: 'Informació de contacte',
      email: 'Email',
      phone: 'Telèfon',
      location: 'Ubicació',
    },
    work: {
      title: 'Treballem junts',
      description: 'A Codiara estem disponibles per ajudar a transformar la teva presència digital i optimitzar la teva infraestructura. Parlem sobre com podem ajudar el teu negoci a créixer.',
      visitSite: 'Visitar web',
      services: 'Els nostres serveis',
    },
  },
};