export interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  github: string
  live?: string
  highlight?: boolean
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'database' | 'devops' | 'tool'
  level: number
}

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  description?: string | null
  highlights?: string[]
  tech: string[]
}

export interface NavItem {
  label: string
  href: string
}
