import { Translations } from '../types';

export const en: Translations = {
  navbar: {
    home: 'Home',
    about: 'About',
    services: 'Codiara services',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    available: 'DevOps and software developer at Codiara',
    roles: {
      teamManager: 'Development team lead',
      devops: 'DevOps engineer',
      developer: 'Software developer',
    },
    buttons: {
      contact: 'Contact us',
      services: 'Our services',
    },
    connect: 'Connect with me:',
  },
  about: {
    title: 'About me',
    subtitle: 'Passionate about DevOps culture and technical leadership, creating impactful digital solutions.',
    journey: {
      title: 'My journey',
      description1: 'Passionate about DevOps culture and technical leadership, I lead the development team at Codiara, a young and talented company. While we specialize in web development, we go beyond: creating intuitive interfaces and deploying robust infrastructures to deliver scalable, high-impact digital solutions.',
      description2: 'At Codiara, we combine technical expertise with innovative thinking to build solutions that not only meet current needs but are also prepared for future growth.',
    },
    stats: {
      teamMembers: 'Team Members',
      projectsCompleted: 'Projects Completed',
      uptimeAchieved: 'Uptime Achieved',
      supportAvailable: 'Support Available',
    },
    cards: {
      leadership: {
        title: 'Leadership',
        description: 'Technical team management',
      },
      experience: {
        title: 'Experience',
        description: 'DevOps and Web Development',
      },
    },
    connect: 'Let\'s Connect',
    experienceTitle: 'Experience & Education',
    experiences: {
      devops: {
        title: 'DevOps and Software Developer',
        company: 'Codiara',
        period: '2024 – Present',
        description: 'Leading the development team at Codiara, responsible for CI/CD and participating in the design, development, and deployment of web applications.',
      },
      network: {
        title: 'Network Administrator',
        company: '9TECKNIC',
        period: '2023 – 2024',
        description: 'Management of computer network infrastructure.',
      },
      webdev: {
        title: 'Web Application Development',
        company: 'Institut Sa Palomera',
        period: '2023 – 2025',
        description: 'Advanced training focused on modern front-end and back-end development, accessibility, and automated testing.',
      },
      sysadmin: {
        title: 'Network Systems Administration',
        company: 'Institut Sa Palomera',
        period: '2022 – 2024',
        description: 'Specialization in virtualization, scripting, and cybersecurity, with high-performance practical projects.',
      },
    },
  },
  services: {
    title: 'Our services',
    subtitle: 'Comprehensive technology solutions to drive your business forward. We combine expertise with innovation to deliver exceptional results.',
    webdev: {
      title: 'Web application development',
      description: 'Comprehensive development of modern web applications tailored to your business needs.',
      features: [
        'Custom web application development',
        'Progressive web apps (PWA)',
        'Single page applications (SPA)',
        'Responsive design implementation',
        'Performance optimization',
        'API integration and development'
      ],
      benefits: [
        'Enhanced user experience',
        'Increased business efficiency',
        'Scalable solutions',
        'Modern technology stack'
      ]
    },
    cloud: {
      title: 'Cloud infrastructure',
      description: 'Complete cloud solutions to optimize your infrastructure and improve scalability.',
      features: [
        'Cloud architecture design',
        'Infrastructure as code (IaC)',
        'Container orchestration',
        'Microservices architecture',
        'CI/CD pipeline implementation',
        'Cloud security best practices'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved reliability',
        'Enhanced security',
        'Automatic scaling'
      ]
    },
    digital: {
      title: 'Digital kit services',
      description: 'Digital transformation solutions to modernize your business operations.',
      features: [
        'Digital presence establishment',
        'E-commerce implementation',
        'Business process digitalization',
        'Digital marketing tools',
        'Customer relationship management',
        'Analytics and reporting'
      ],
      benefits: [
        'Digital transformation',
        'Increased market reach',
        'Improved customer engagement',
        'Data-driven decisions'
      ]
    },
    consulting: {
      title: 'Technical consulting',
      description: 'Expert advice on technology strategy and implementation.',
      features: [
        'Technology stack assessment',
        'Architecture review and planning',
        'Team augmentation',
        'Technical training',
        'Best practices implementation',
        'Performance optimization'
      ],
      benefits: [
        'Optimized development process',
        'Reduced technical debt',
        'Knowledge transfer',
        'Improved team efficiency'
      ]
    },
    features: 'Key features',
    benefits: 'Benefits',
    getStarted: 'Get started',
  },
  skills: {
    title: 'My skills',
    subtitle: 'An overview of my technical capabilities and leadership experience.',
    leadership: {
      title: 'Leadership',
      skills: [
        { name: 'Team Management', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Mentoring', level: 85 },
        { name: 'Communication', level: 90 },
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
        { name: 'API Design', level: 90 },
      ],
    },
    devops: {
      title: 'DevOps',
      skills: [
        { name: 'CI/CD', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Cloud Services', level: 85 },
      ],
    },
    technologies: ['Next.js', 'Angular', 'Nest.js', 'Node.js', 'Docker', 'Kubernetes'],
  },
  contact: {
    title: 'Contact me',
    subtitle: 'Have a project in mind or want to know more about our services? Don\'t hesitate to reach out.',
    form: {
      title: 'Send me a message',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send message',
      successMessage: 'Thank you for your message! I\'ll get back to you soon.',
    },
    info: {
      title: 'Contact information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    work: {
      title: 'Let\'s work together',
      description: 'At Codiara we\'re available to help transform your digital presence and optimize your infrastructure. Let\'s talk about how we can help your business grow.',
      visitSite: 'Visit website',
      services: 'Our services',
    },
  },
};