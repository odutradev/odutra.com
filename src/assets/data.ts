import type { PortfolioData, Config } from './types'

const config: Config = {
  pageTitle: "ODUTRADEV"
}

const portfolioData: PortfolioData = {
  personalInfo: {
    brandName: "odutradev",
    badge: "Desenvolvedor Full-Stack & CEO",
    name: "João Vitor",
    heroTitle: "Opa, eu sou João Dutra",
    heroBio: "Desenvolvedor full-stack web e mobile com ampla experiência na criação de sistemas, desde a elaboração e prototipação até o desenvolvimento e entrega. Atualmente, atuo como Desenvolvedor Laboratorista no TJMG e lidero projetos educacionais com a Bonfire Tech.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAngyl2Chy7Re_lMQoNqgCKIIrybUJ7rSTZz3_GcFi2DYQN3E03smJLWn_u3eBAxivfRF5y7PPuuigCPDQ4FEL4u9FpfCs8U1UY-h4UIwmO2g_WWvIhsp4oaXr9iAKSIu6BeppzKLCOwQBDEVNamZvG7ii3KA49nRILa9xjdUn97ma4ZXXHVx04X751mCpVYyYWTP419s5juqmdiGvQ809KrEdKkgPEfuWdZk71xmlSQFA5TmLhWhwJ",
    contactTitle: "Entre em contato, vamos trabalhar em seu projeto",
    contactBio: "Vamos criar juntos um website com estética forte e mensagem clara. Pronto para converter.",
    email: "joao.vitornl@gmail.com",
    phone: "+55 (31) 99710-0959",
    phoneUrl: "tel:+5531997100959",
    emailUrl: "mailto:joao.vitornl@gmail.com",
    copyright: "© 2024 odutradev. Built for high performance."
  },
  navLinks: [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" }
  ],
  technologyCategories: [
    {
      id: "frontend",
      title: "Frontend",
      count: 16,
      defaultExpanded: true,
      items: [
        { name: "Chakra UI", code: "CH", bg: "bg-teal-100/10", color: "text-teal-500", icon: "chakra_ui" },
        { name: "CSS", code: "CS", bg: "bg-blue-100/10", color: "text-blue-500", icon: "css" },
        { name: "HTML", code: "HT", bg: "bg-orange-100/10", color: "text-orange-500", icon: "html" },
        { name: "JavaScript", code: "JS", bg: "bg-yellow-100/10", color: "text-yellow-500", icon: "javascript" },
        { name: "Material UI", code: "MU", bg: "bg-blue-100/10", color: "text-blue-400", icon: "material_ui" },
        { name: "Next", code: "NX", bg: "bg-slate-100/10", color: "text-slate-300", icon: "next" },
        { name: "Radix", code: "RA", bg: "bg-purple-100/10", color: "text-purple-500", icon: "radix" },
        { name: "React", code: "RE", bg: "bg-cyan-100/10", color: "text-cyan-500", icon: "react" },
        { name: "React Router", code: "RR", bg: "bg-red-100/10", color: "text-red-500", icon: "react_router" },
        { name: "Sass", code: "SA", bg: "bg-pink-100/10", color: "text-pink-500", icon: "sass" },
        { name: "Shadcn UI", code: "SH", bg: "bg-slate-100/10", color: "text-slate-300", icon: "shadcn_ui" },
        { name: "Styled Components", code: "SC", bg: "bg-yellow-100/10", color: "text-yellow-400", icon: "styled_components" },
        { name: "TailwindCSS", code: "TW", bg: "bg-sky-100/10", color: "text-sky-500", icon: "tailwindcss" },
        { name: "Tanstack", code: "TS", bg: "bg-orange-100/10", color: "text-orange-400", icon: "tanstack" },
        { name: "Typescript", code: "TY", bg: "bg-blue-100/10", color: "text-blue-600", icon: "typescript" },
        { name: "Vite", code: "VI", bg: "bg-purple-100/10", color: "text-purple-400", icon: "vite" }
      ]
    },
    {
      id: "design",
      title: "Design",
      count: 2,
      defaultExpanded: false,
      items: [
        { name: "Figma", code: "FG", bg: "bg-purple-100/10", color: "text-purple-400", icon: "figma" },
        { name: "UI/UX Design", code: "UI", bg: "bg-pink-100/10", color: "text-pink-400", icon: "ui_ux" }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      count: 9,
      defaultExpanded: false,
      items: [
        { name: "Node.js", code: "NO", bg: "bg-green-100/10", color: "text-green-500", icon: "nodejs" },
        { name: "Express", code: "EX", bg: "bg-slate-100/10", color: "text-slate-300", icon: "express" },
        { name: "NestJS", code: "NE", bg: "bg-red-100/10", color: "text-red-500", icon: "nestjs" },
        { name: "Python", code: "PY", bg: "bg-blue-100/10", color: "text-blue-400", icon: "python" },
        { name: "FastAPI", code: "FA", bg: "bg-teal-100/10", color: "text-teal-400", icon: "fastapi" },
        { name: "Java", code: "JA", bg: "bg-orange-100/10", color: "text-orange-500", icon: "java" },
        { name: "Spring Boot", code: "SB", bg: "bg-green-100/10", color: "text-green-400", icon: "springboot" },
        { name: "REST API", code: "RS", bg: "bg-sky-100/10", color: "text-sky-400", icon: "rest_api" },
        { name: "GraphQL", code: "GQ", bg: "bg-pink-100/10", color: "text-pink-500", icon: "graphql" }
      ]
    },
    {
      id: "database",
      title: "Banco de Dados",
      count: 3,
      defaultExpanded: false,
      items: [
        { name: "PostgreSQL", code: "PG", bg: "bg-blue-100/10", color: "text-blue-400", icon: "postgresql" },
        { name: "MongoDB", code: "MG", bg: "bg-green-100/10", color: "text-green-500", icon: "mongodb" },
        { name: "Redis", code: "RD", bg: "bg-red-100/10", color: "text-red-500", icon: "redis" }
      ]
    },
    {
      id: "infrastructure",
      title: "Infraestrutura",
      count: 9,
      defaultExpanded: false,
      items: [
        { name: "Docker", code: "DK", bg: "bg-blue-100/10", color: "text-blue-500", icon: "docker" },
        { name: "AWS", code: "AW", bg: "bg-amber-100/10", color: "text-amber-500", icon: "aws" },
        { name: "Nginx", code: "NX", bg: "bg-green-100/10", color: "text-green-500", icon: "nginx" },
        { name: "CI/CD", code: "CI", bg: "bg-indigo-100/10", color: "text-indigo-400", icon: "cicd" },
        { name: "Linux", code: "LX", bg: "bg-yellow-100/10", color: "text-yellow-500", icon: "linux" },
        { name: "Vercel", code: "VC", bg: "bg-slate-100/10", color: "text-slate-200", icon: "vercel" },
        { name: "Render", code: "RN", bg: "bg-emerald-100/10", color: "text-emerald-400", icon: "render" },
        { name: "Cloudflare", code: "CF", bg: "bg-orange-100/10", color: "text-orange-400", icon: "cloudflare" },
        { name: "Kubernetes", code: "K8", bg: "bg-blue-100/10", color: "text-blue-600", icon: "kubernetes" }
      ]
    },
    {
      id: "observability",
      title: "Observabilidade e Analytics",
      count: 6,
      defaultExpanded: false,
      items: [
        { name: "Datadog", code: "DD", bg: "bg-purple-100/10", color: "text-purple-400", icon: "datadog" },
        { name: "Sentry", code: "ST", bg: "bg-red-100/10", color: "text-red-400", icon: "sentry" },
        { name: "Grafana", code: "GF", bg: "bg-orange-100/10", color: "text-orange-400", icon: "grafana" },
        { name: "Prometheus", code: "PR", bg: "bg-red-100/10", color: "text-red-500", icon: "prometheus" },
        { name: "Google Analytics", code: "GA", bg: "bg-amber-100/10", color: "text-amber-400", icon: "google_analytics" },
        { name: "Mixpanel", code: "MP", bg: "bg-indigo-100/10", color: "text-indigo-400", icon: "mixpanel" }
      ]
    },
    {
      id: "versionControl",
      title: "Controle de Versões",
      count: 2,
      defaultExpanded: false,
      items: [
        { name: "Git", code: "GT", bg: "bg-orange-100/10", color: "text-orange-500", icon: "git" },
        { name: "GitHub", code: "GH", bg: "bg-slate-100/10", color: "text-slate-300", icon: "github" }
      ]
    }
  ],
  projects: [
    {
      title: "Bonfire Tech App",
      description: "Plataforma educacional focada em comunicação escolar e gestão de aprendizado.",
      icon: "school",
      tags: ["React Native", "Node.js"]
    },
    {
      title: "Lite Technology Solutions",
      description: "Sistemas sob medida para automação de processos e inteligência de dados.",
      icon: "lightbulb",
      tags: ["Next.js", "PostgreSQL"]
    },
    {
      title: "UaiLab Innovation Prototype",
      description: "Protótipo de solução inovadora para modernização do setor público.",
      icon: "biotech",
      tags: ["TypeScript", "Docker"]
    }
  ],
  experiences: {
    current: [
      {
        company: "Tribunal de Justiça de Minas Gerais (TJMG)",
        role: "Desenvolvedor Laboratorista",
        short: "T",
        colorBg: "bg-red-500/10",
        colorText: "text-red-500",
        period: "Nov 2024 - Atualmente",
        duration: "1 mês",
        location: "Belo Horizonte, MG",
        badgeColor: "bg-green-500",
        dotColor: "bg-green-500"
      },
      {
        company: "Bonfire Tech",
        role: "Fundador e CEO",
        icon: "local_fire_department",
        colorBg: "bg-purple-500/10",
        colorText: "text-purple-500",
        period: "Abr 2022 - Atualmente",
        duration: "2 anos e 8 meses",
        location: "Híbrido",
        badgeColor: "bg-green-500",
        dotColor: "bg-purple-500"
      }
    ],
    previous: [
      {
        company: "Dexpay",
        role: "Desenvolvedor Front-end",
        short: "D",
        colorBg: "bg-blue-500/10",
        colorText: "text-blue-500",
        period: "Jun 2024 - Nov 2024",
        duration: "5 meses",
        location: "Híbrido",
        dotColor: "bg-blue-500"
      },
      {
        company: "Agência A+ Fácil",
        role: "Desenvolvedor Full-stack",
        short: "A",
        colorBg: "bg-orange-500/10",
        colorText: "text-orange-500",
        period: "Nov 2021 - Jun 2024",
        duration: "2 anos e 7 meses",
        location: "Remoto",
        dotColor: "bg-orange-500"
      },
      {
        company: "Zenitech",
        role: "Desenvolvedor Full-stack",
        short: "Z",
        colorBg: "bg-teal-500/10",
        colorText: "text-teal-500",
        period: "Jun 2021 - Nov 2021",
        duration: "5 meses",
        location: "Remoto",
        dotColor: "bg-teal-500"
      }
    ]
  },
  education: [
    {
      course: "Engenharia de Software",
      institution: "Estácio",
      period: "Nov/2023 - Nov/2027",
      icon: "school"
    },
    {
      course: "Técnico em Mecatrônica",
      institution: "SENAI",
      period: "Mar/2025 - Ago/2026",
      icon: "precision_manufacturing"
    },
    {
      course: "Robótica & Ind. 4.0",
      institution: "SENAI",
      period: "Nov/2023 - Nov/2025",
      icon: "smart_toy"
    },
    {
      course: "Design & Desenv. Games",
      institution: "Escola Saga",
      period: "Fev/2022 - Fev/2023",
      icon: "sports_esports"
    }
  ],
  socialLinks: [
    { name: "Instagram", icon: "photo_camera", url: "#" },
    { name: "Website", icon: "language", url: "#" },
    { name: "Design", icon: "brush", url: "#" },
    { name: "LinkedIn", icon: "link", url: "https://linkedin.com/in/joãovitordutra/" }
  ]
}

export { config, portfolioData }
export default portfolioData
