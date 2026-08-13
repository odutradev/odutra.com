export interface Config {
  pageTitle: string
}

export interface PersonalInfo {
  brandName: string
  badge: string
  name: string
  heroTitle: string
  heroBio: string
  avatarUrl: string
  contactTitle: string
  contactBio: string
  email: string
  phone: string
  phoneUrl: string
  emailUrl: string
  whatsappUrl: string
  copyright: string
}

export interface NavLink {
  label: string
  href: string
}

export interface TechnologyItem {
  name: string
  code: string
  bg: string
  color: string
  icon?: string
}

export interface TechnologyCategory {
  id: string
  title: string
  count: number
  defaultExpanded: boolean
  items: TechnologyItem[]
}

export interface ProjectItem {
  title: string
  description: string
  icon: string
  tags: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  short?: string
  icon?: string
  logoUrl?: string
  colorBg: string
  colorText: string
  period: string
  duration?: string
  startDate?: string
  endDate?: string
  location: string
  badgeColor?: string
  dotColor: string
}

export interface ExperiencesData {
  current: ExperienceItem[]
  previous: ExperienceItem[]
}

export interface EducationItem {
  course: string
  institution: string
  period: string
  icon: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  navLinks: NavLink[]
  technologyCategories: TechnologyCategory[]
  projects: ProjectItem[]
  experiences: ExperiencesData
  education: EducationItem[]
  socialLinks: SocialLink[]
}
