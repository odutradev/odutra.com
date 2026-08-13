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
    heroBio: "Desenvolvedor full-stack web e mobile com ampla experiência na criação de sistemas, desde a elaboração e prototipação até o desenvolvimento e entrega. Atualmente, atuo como Desenvolvedor Laboratorista no TJMG e lidero a Lite Technology.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAngyl2Chy7Re_lMQoNqgCKIIrybUJ7rSTZz3_GcFi2DYQN3E03smJLWn_u3eBAxivfRF5y7PPuuigCPDQ4FEL4u9FpfCs8U1UY-h4UIwmO2g_WWvIhsp4oaXr9iAKSIu6BeppzKLCOwQBDEVNamZvG7ii3KA49nRILa9xjdUn97ma4ZXXHVx04X751mCpVYyYWTP419s5juqmdiGvQ809KrEdKkgPEfuWdZk71xmlSQFA5TmLhWhwJ",
    contactTitle: "Entre em contato, vamos trabalhar em seu projeto",
    contactBio: "Vamos criar juntos um website com estética forte e mensagem clara. Pronto para converter.",
    email: "joao.vitornl@gmail.com",
    phone: "+55 (31) 99710-0959",
    phoneUrl: "tel:+5531997100959",
    emailUrl: "mailto:joao.vitornl@gmail.com",
    whatsappUrl: "https://wa.me/5531997100959",
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
      title: "Frontend & Mobile",
      count: 20,
      defaultExpanded: true,
      items: [
        { name: "React", code: "RE", bg: "bg-cyan-100/10", color: "text-cyan-500", icon: "react" },
        { name: "React Native", code: "RN", bg: "bg-cyan-100/10", color: "text-cyan-400", icon: "react_native" },
        { name: "Next.js", code: "NX", bg: "bg-slate-100/10", color: "text-slate-300", icon: "next" },
        { name: "TypeScript", code: "TS", bg: "bg-blue-100/10", color: "text-blue-600", icon: "typescript" },
        { name: "JavaScript", code: "JS", bg: "bg-yellow-100/10", color: "text-yellow-500", icon: "javascript" },
        { name: "HTML5", code: "HT", bg: "bg-orange-100/10", color: "text-orange-500", icon: "html" },
        { name: "CSS3", code: "CS", bg: "bg-blue-100/10", color: "text-blue-500", icon: "css" },
        { name: "Vite", code: "VI", bg: "bg-purple-100/10", color: "text-purple-400", icon: "vite" },
        { name: "Expo", code: "EX", bg: "bg-slate-100/10", color: "text-slate-200", icon: "expo" },
        { name: "Redux", code: "RD", bg: "bg-purple-100/10", color: "text-purple-500", icon: "redux" },
        { name: "React Router", code: "RR", bg: "bg-red-100/10", color: "text-red-500", icon: "react_router" },
        { name: "Sass", code: "SA", bg: "bg-pink-100/10", color: "text-pink-500", icon: "sass" },
        { name: "Styled Components", code: "SC", bg: "bg-pink-100/10", color: "text-pink-400", icon: "styled_components" },
        { name: "TailwindCSS", code: "TW", bg: "bg-sky-100/10", color: "text-sky-500", icon: "tailwindcss" },
        { name: "Bootstrap", code: "BS", bg: "bg-purple-100/10", color: "text-purple-500", icon: "bootstrap" },
        { name: "Chakra UI", code: "CH", bg: "bg-teal-100/10", color: "text-teal-500", icon: "chakra_ui" },
        { name: "Material UI", code: "MU", bg: "bg-blue-100/10", color: "text-blue-400", icon: "material_ui" },
        { name: "Radix UI", code: "RA", bg: "bg-purple-100/10", color: "text-purple-500", icon: "radix" },
        { name: "Shadcn UI", code: "SH", bg: "bg-slate-100/10", color: "text-slate-300", icon: "shadcn_ui" },
        { name: "TanStack", code: "TN", bg: "bg-orange-100/10", color: "text-orange-400", icon: "tanstack" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Linguagens",
      count: 12,
      defaultExpanded: false,
      items: [
        { name: "Node.js", code: "NO", bg: "bg-green-100/10", color: "text-green-500", icon: "nodejs" },
        { name: "Express.js", code: "EX", bg: "bg-slate-100/10", color: "text-slate-300", icon: "express" },
        { name: "NestJS", code: "NE", bg: "bg-red-100/10", color: "text-red-500", icon: "nestjs" },
        { name: "Python", code: "PY", bg: "bg-blue-100/10", color: "text-blue-400", icon: "python" },
        { name: "FastAPI", code: "FA", bg: "bg-teal-100/10", color: "text-teal-400", icon: "fastapi" },
        { name: "Java", code: "JA", bg: "bg-orange-100/10", color: "text-orange-500", icon: "java" },
        { name: "Spring Boot", code: "SB", bg: "bg-green-100/10", color: "text-green-400", icon: "springboot" },
        { name: "C++", code: "CP", bg: "bg-blue-100/10", color: "text-blue-500", icon: "cpp" },
        { name: "REST API", code: "RS", bg: "bg-sky-100/10", color: "text-sky-400", icon: "rest_api" },
        { name: "GraphQL", code: "GQ", bg: "bg-pink-100/10", color: "text-pink-500", icon: "graphql" },
        { name: "JWT", code: "JW", bg: "bg-amber-100/10", color: "text-amber-400", icon: "jwt" },
        { name: "Stripe", code: "ST", bg: "bg-indigo-100/10", color: "text-indigo-400", icon: "stripe" }
      ]
    },
    {
      id: "database",
      title: "Banco de Dados & BaaS",
      count: 5,
      defaultExpanded: false,
      items: [
        { name: "PostgreSQL", code: "PG", bg: "bg-blue-100/10", color: "text-blue-400", icon: "postgresql" },
        { name: "MongoDB", code: "MG", bg: "bg-green-100/10", color: "text-green-500", icon: "mongodb" },
        { name: "SQLite", code: "SL", bg: "bg-sky-100/10", color: "text-sky-400", icon: "sqlite" },
        { name: "Firebase", code: "FB", bg: "bg-amber-100/10", color: "text-amber-500", icon: "firebase" },
        { name: "Redis", code: "RD", bg: "bg-red-100/10", color: "text-red-500", icon: "redis" }
      ]
    },
    {
      id: "infrastructure",
      title: "Infraestrutura & Cloud",
      count: 10,
      defaultExpanded: false,
      items: [
        { name: "Docker", code: "DK", bg: "bg-blue-100/10", color: "text-blue-500", icon: "docker" },
        { name: "Amazon AWS", code: "AW", bg: "bg-amber-100/10", color: "text-amber-500", icon: "aws" },
        { name: "Vercel", code: "VC", bg: "bg-slate-100/10", color: "text-slate-200", icon: "vercel" },
        { name: "Heroku", code: "HK", bg: "bg-purple-100/10", color: "text-purple-400", icon: "heroku" },
        { name: "Glitch", code: "GL", bg: "bg-indigo-100/10", color: "text-indigo-400", icon: "glitch" },
        { name: "Nginx", code: "NX", bg: "bg-green-100/10", color: "text-green-500", icon: "nginx" },
        { name: "Cloudflare", code: "CF", bg: "bg-orange-100/10", color: "text-orange-400", icon: "cloudflare" },
        { name: "Kubernetes", code: "K8", bg: "bg-blue-100/10", color: "text-blue-600", icon: "kubernetes" },
        { name: "Render", code: "RN", bg: "bg-emerald-100/10", color: "text-emerald-400", icon: "render" },
        { name: "CI/CD", code: "CI", bg: "bg-indigo-100/10", color: "text-indigo-400", icon: "cicd" }
      ]
    },
    {
      id: "tools",
      title: "Ferramentas de Desenvolvimento",
      count: 10,
      defaultExpanded: false,
      items: [
        { name: "VS Code", code: "VS", bg: "bg-blue-100/10", color: "text-blue-500", icon: "vscode" },
        { name: "Postman", code: "PM", bg: "bg-orange-100/10", color: "text-orange-500", icon: "postman" },
        { name: "Insomnia", code: "IN", bg: "bg-purple-100/10", color: "text-purple-500", icon: "insomnia" },
        { name: "Arduino IDE", code: "AR", bg: "bg-teal-100/10", color: "text-teal-400", icon: "arduino" },
        { name: "Replit", code: "RP", bg: "bg-orange-100/10", color: "text-orange-400", icon: "replit" },
        { name: "Atom", code: "AT", bg: "bg-green-100/10", color: "text-green-400", icon: "atom" },
        { name: "NPM", code: "NP", bg: "bg-red-100/10", color: "text-red-500", icon: "npm" },
        { name: "Yarn", code: "YN", bg: "bg-blue-100/10", color: "text-blue-400", icon: "yarn" },
        { name: "Notion", code: "NT", bg: "bg-slate-100/10", color: "text-slate-200", icon: "notion" },
        { name: "MS Office", code: "OF", bg: "bg-orange-100/10", color: "text-orange-500", icon: "office" }
      ]
    },
    {
      id: "testing",
      title: "Testes & Qualidade",
      count: 4,
      defaultExpanded: false,
      items: [
        { name: "Jest", code: "JT", bg: "bg-red-100/10", color: "text-red-500", icon: "jest" },
        { name: "Selenium", code: "SE", bg: "bg-green-100/10", color: "text-green-500", icon: "selenium" },
        { name: "ESLint", code: "ES", bg: "bg-indigo-100/10", color: "text-indigo-500", icon: "eslint" },
        { name: "Babel", code: "BB", bg: "bg-yellow-100/10", color: "text-yellow-400", icon: "babel" }
      ]
    },
    {
      id: "design",
      title: "Design, Mídia & Games",
      count: 5,
      defaultExpanded: false,
      items: [
        { name: "Figma", code: "FG", bg: "bg-purple-100/10", color: "text-purple-400", icon: "figma" },
        { name: "Canva", code: "CN", bg: "bg-cyan-100/10", color: "text-cyan-400", icon: "canva" },
        { name: "Photoshop", code: "PS", bg: "bg-blue-100/10", color: "text-blue-500", icon: "photoshop" },
        { name: "Unreal Engine", code: "UE", bg: "bg-slate-100/10", color: "text-slate-300", icon: "unreal" },
        { name: "UI/UX Design", code: "UI", bg: "bg-pink-100/10", color: "text-pink-400", icon: "ui_ux" }
      ]
    },
    {
      id: "versionControl",
      title: "Controle de Versão & Documentação",
      count: 5,
      defaultExpanded: false,
      items: [
        { name: "Git", code: "GT", bg: "bg-orange-100/10", color: "text-orange-500", icon: "git" },
        { name: "GitHub", code: "GH", bg: "bg-slate-100/10", color: "text-slate-300", icon: "github" },
        { name: "GitHub Pages", code: "GP", bg: "bg-slate-100/10", color: "text-slate-300", icon: "github_pages" },
        { name: "GitBook", code: "GB", bg: "bg-blue-100/10", color: "text-blue-400", icon: "gitbook" },
        { name: "Markdown", code: "MD", bg: "bg-slate-100/10", color: "text-slate-200", icon: "markdown" }
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
        logoUrl: "https://i.imgur.com/vCxLJB3.png",
        colorBg: "bg-red-500/10",
        colorText: "text-red-500",
        period: "Nov 2024 - Atualmente",
        startDate: "2024-11-01",
        location: "Híbrido",
        badgeColor: "bg-green-500",
        dotColor: "bg-green-500"
      },
      {
        company: "Lite Technology LTDA",
        role: "Fundador e CEO",
        short: "L",
        logoUrl: "https://i.imgur.com/8zdFUF0.png",
        colorBg: "bg-cyan-500/10",
        colorText: "text-cyan-500",
        period: "Jun 2024 - Atualmente",
        startDate: "2024-06-28",
        location: "Híbrido",
        badgeColor: "bg-green-500",
        dotColor: "bg-cyan-500"
      }
    ],
    previous: [
      {
        company: "Bonfire Tech",
        role: "Fundador e CEO",
        short: "B",
        logoUrl: "https://i.imgur.com/bhaa8wY.png",
        icon: "local_fire_department",
        colorBg: "bg-purple-500/10",
        colorText: "text-purple-500",
        period: "Abr 2022 - Abr 2026",
        startDate: "2022-04-01",
        endDate: "2026-04-01",
        location: "Híbrido",
        dotColor: "bg-purple-500"
      },
      {
        company: "Dexpay",
        role: "Desenvolvedor Front-end",
        short: "D",
        logoUrl: "https://i.imgur.com/zHYoESf.png",
        colorBg: "bg-blue-500/10",
        colorText: "text-blue-500",
        period: "Jun 2024 - Nov 2024",
        startDate: "2024-06-01",
        endDate: "2024-11-01",
        location: "Híbrido",
        dotColor: "bg-blue-500"
      },
      {
        company: "Agência A+ Fácil",
        role: "Desenvolvedor Full-stack",
        short: "A",
        logoUrl: "https://i.imgur.com/9xAkftG.png",
        colorBg: "bg-orange-500/10",
        colorText: "text-orange-500",
        period: "Nov 2021 - Jun 2024",
        startDate: "2021-11-01",
        endDate: "2024-06-01",
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
        startDate: "2021-06-01",
        endDate: "2021-11-01",
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
    { name: "Número", icon: "whatsapp", url: "https://wa.me/5531997100959" },
    { name: "Email", icon: "mail", url: "mailto:joao.vitornl@gmail.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/jo%C3%A3ovitordutra/" },
    { name: "GitHub", icon: "github", url: "https://github.com/odutradev" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/soueudutra" },
    { name: "TikTok", icon: "tiktok", url: "https://tiktok.com/@soueudutra" }
  ]
}

export { config, portfolioData }
export default portfolioData
