import type { Project, Skill, Experience, NavItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'ChangeLogs',
    description: 'A comprehensive change logs tracking package for Laravel 11+ that automatically tracks all model changes (create, update, delete, restore) with detailed audit trails.',
    techStack: ['PHP 8.2+', 'Laravel 11.0+', 'MySQL', 'PostgresSQL', 'SQLite'],
    github: 'https://github.com/imamsudarajat04/change-logs',
    highlight: true,
  },
  {
    id: 2,
    name: 'API Undangandarikita',
    description: 'Building a digital wedding invitation API using Go/Gin, GORM, Docker and PostgresSQL',
    techStack: ['Go', 'Gin', 'GORM', 'Docker', 'PostgreSQL'],
    github: '#',
    live: 'https://api.ceritadua.my.id/api/health',
  },
  {
    id: 3,
    name: 'Dashboard Undangandarikita',
    description: 'The Undangandarikita Dashboard lets you manage digital invitations, guests, RSVPs, and messages all in one platform.',
    techStack: ['VueJS', 'TypeScript', 'Tailwindcss'],
    github: '#',
    live: 'https://undangan.ceritadua.my.id/'
  },
]

export const skills: Skill[] = [
  { name: 'Laravel', category: 'language', level: 95 },
  { name: 'Go', category: 'language', level: 90 },
  { name: 'VueJS', category: 'language', level: 90 },
  { name: 'TypeScript', category: 'language', level: 90 },
  { name: 'Flutter', category: 'language', level: 85 },
  { name: 'REST API', category: 'framework', level: 95 },
  { name: 'GraphQL', category: 'framework', level: 80 },
  { name: 'PostgreSQL', category: 'database', level: 90 },
  { name: 'Redis', category: 'database', level: 85 },
  { name: 'MongoDB', category: 'database', level: 85 },
  { name: 'MySQL', category: 'database', level: 90 },
  { name: 'Docker', category: 'devops', level: 85 },
  { name: 'AWS', category: 'devops', level: 85 },
  { name: 'CI/CD', category: 'devops', level: 85 },
  { name: 'Linux', category: 'devops', level: 90 },
  { name: 'GitHub Actions', category: 'devops', level: 90 },
  { name: 'Git', category: 'tool', level: 90 },
  { name: 'Kafka', category: 'tool', level: 80 },
  { name: 'RabbitMQ', category: 'tool', level: 80 },
  { name: 'Nginx', category: 'tool', level: 80 },
]

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Fullstack Engineer',
    company: 'CV. Sagara Mobile & Konekin',
    period: 'June 2024 — Present',
    description: 'Driving end-to-end fullstack development for products at CV. Sagara Mobile & Konekin.',
    highlights: [
      'Built and maintained scalable backend services and APIs to support high-traffic business operations.',
      'Developed and integrated frontend modules for internal dashboards and customer-facing applications.',
      'Implemented asynchronous workflows with message queues and caching to improve performance and reliability.',
      'Collaborated cross-functionally with product and design teams to deliver features from planning to production.',
      'Improved deployment consistency and delivery speed through containerized environments and CI/CD practices.',
    ],
    tech: ['Laravel', 'TypeScript', 'VueJS', 'InertiaJS', 'RabbitMQ', 'Docker', 'Tailwindcss', 'Flutter', 'Redis', 'MySQL'],
  },
  {
    id: 2,
    role: 'IT Support',
    company: 'PT. Cenderamata Kalimanta Nusantara',
    period: 'August 2023 — Feb 2024',
    highlights: [
        'Provide technical support and troubleshooting for hardware and software issues.',
        'Assist in the maintenance and updating of IT infrastructure.',
        'Coordinate with team members to resolve complex technical issues.'
    ],
    tech: ['Linux'],
  },
  {
    id: 3,
    role: 'Freelance Developer (SIMRS Project)',
    company: 'RSUD Tanjung Uban',
    period: 'Oct 2022 — Jan 2023',
    highlights: [
        'Work on the development of the Hospital Management Information System (SIMRS).',
        'Design and implement system functions in accordance with client requirements.',
        'Test and refine the system to ensure it meets performance standards.'
    ],
    tech: ['Laravel', 'VueJS', 'Bootstrap', 'MySQL', 'Git'],
  },
  {
    id: 4,
    role: 'Fullstack Developer (Laravel)',
    company: 'Pusat Al-Quran Indonesia',
    period: 'August 2020 — August 2022',
    highlights: [
        'Developing and maintaining web applications using Laravel.',
        'Collaborating with the media team to determine and design new features.',
        'Ensuring the performance, quality and responsiveness of applications.'
    ],
    tech: ['Laravel', 'Bootstrap', 'JQuery', 'DataTable'],
  },
]
