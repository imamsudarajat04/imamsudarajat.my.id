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
    name: 'NexAPI Gateway',
    description: 'High-performance API gateway dengan rate limiting, JWT authentication, dan load balancing. Dibangun menggunakan Go untuk throughput maksimal.',
    techStack: ['Go', 'Redis', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/imamsudarajat',
    live: 'https://nexapi.dev',
    highlight: true,
  },
  {
    id: 2,
    name: 'DataStream Pipeline',
    description: 'Real-time data processing pipeline untuk analytics event dengan Kafka consumer dan PostgreSQL writer. Memproses 1M+ events per hari.',
    techStack: ['Node.js', 'Kafka', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/imamsudarajat',
  },
  {
    id: 3,
    name: 'GraphQL Federation Service',
    description: 'Microservice backend dengan GraphQL Federation, memungkinkan multiple service tergabung dalam satu unified schema.',
    techStack: ['Node.js', 'GraphQL', 'Apollo', 'PostgreSQL'],
    github: 'https://github.com/imamsudarajat',
    live: 'https://demo.imamsudarajat.dev',
  },
  {
    id: 4,
    name: 'Auth Microservice',
    description: 'Layanan autentikasi modular dengan OAuth2, RBAC, dan multi-factor authentication. Mendukung SSO untuk enterprise.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/imamsudarajat',
    highlight: true,
  },
  {
    id: 5,
    name: 'DevOps Monitoring Stack',
    description: 'Infrastructure monitoring dengan Prometheus, Grafana dashboard, dan alerting otomatis via Telegram & email.',
    techStack: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: 'https://github.com/imamsudarajat',
  },
  {
    id: 6,
    name: 'E-Commerce Backend',
    description: 'Backend scalable untuk platform e-commerce dengan inventory management, payment gateway integration, dan order processing.',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/imamsudarajat',
  },
]

export const skills: Skill[] = [
  { name: 'Node.js', category: 'language', level: 90 },
  { name: 'Go', category: 'language', level: 80 },
  { name: 'Python', category: 'language', level: 75 },
  { name: 'TypeScript', category: 'language', level: 85 },
  { name: 'REST API', category: 'framework', level: 95 },
  { name: 'GraphQL', category: 'framework', level: 80 },
  { name: 'FastAPI', category: 'framework', level: 70 },
  { name: 'Express.js', category: 'framework', level: 88 },
  { name: 'PostgreSQL', category: 'database', level: 85 },
  { name: 'Redis', category: 'database', level: 82 },
  { name: 'MongoDB', category: 'database', level: 72 },
  { name: 'MySQL', category: 'database', level: 78 },
  { name: 'Docker', category: 'devops', level: 85 },
  { name: 'Kubernetes', category: 'devops', level: 65 },
  { name: 'CI/CD', category: 'devops', level: 75 },
  { name: 'Linux', category: 'devops', level: 80 },
  { name: 'Git', category: 'tool', level: 90 },
  { name: 'Kafka', category: 'tool', level: 68 },
  { name: 'RabbitMQ', category: 'tool', level: 65 },
  { name: 'Nginx', category: 'tool', level: 72 },
]

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Backend Developer',
    company: 'TechCorp Indonesia',
    period: '2022 — Sekarang',
    description: 'Memimpin pengembangan backend microservices untuk platform fintech dengan 500K+ pengguna aktif. Merancang arsitektur event-driven yang meningkatkan throughput sistem 3x lipat.',
    tech: ['Go', 'Kafka', 'PostgreSQL', 'Kubernetes'],
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Startup Digital XYZ',
    period: '2020 — 2022',
    description: 'Membangun dan memelihara REST API untuk aplikasi e-commerce. Mengimplementasikan sistem caching dengan Redis yang mengurangi latency sebesar 60%.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 3,
    role: 'Junior Backend Developer',
    company: 'Agency IT Bandung',
    period: '2018 — 2020',
    description: 'Mengembangkan backend untuk berbagai klien menggunakan Node.js dan Python. Belajar best practices dalam pengembangan API dan database optimization.',
    tech: ['Node.js', 'Python', 'MySQL', 'Git'],
  },
]
