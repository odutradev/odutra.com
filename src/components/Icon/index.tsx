import { SiStyledcomponents, SiGoogleanalytics, SiReactrouter, SiSpringboot, SiTypescript, SiPostgresql, SiKubernetes, SiCloudflare, SiTailwindcss, SiPrometheus, SiJavascript, SiNextdotjs, SiTanstack, SiShadcnui, SiDatadog, SiMongodb, SiRadixui, SiFastapi, SiGrafana, SiMixpanel, SiChakraui, SiExpress, SiGithub, SiPython, SiSentry, SiVercel, SiDocker, SiGraphql, SiLinux, SiNestjs, SiRender, SiFigma, SiNginx, SiReact, SiRedis, SiSass, SiVite, SiHtml5, SiCss, SiGit, SiMui } from 'react-icons/si'
import { MdPrecisionManufacturing, MdLocalFireDepartment, MdDesignServices, MdSportsEsports, MdCalendarToday, MdArrowForward, MdExpandLess, MdExpandMore, MdLocationOn, MdDarkMode, MdLightMode, MdLightbulb, MdSmartToy, MdLanguage, MdSchedule, MdBiotech, MdSchool, MdBrush, MdCall, MdMail, MdLoop } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaNodeJs, FaJava, FaAws } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

import type { IconProps } from './types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  dark_mode: MdDarkMode,
  light_mode: MdLightMode,
  arrow_forward: MdArrowForward,
  mail: MdMail,
  call: MdCall,
  school: MdSchool,
  lightbulb: MdLightbulb,
  biotech: MdBiotech,
  local_fire_department: MdLocalFireDepartment,
  calendar_today: MdCalendarToday,
  schedule: MdSchedule,
  location_on: MdLocationOn,
  expand_less: MdExpandLess,
  expand_more: MdExpandMore,
  precision_manufacturing: MdPrecisionManufacturing,
  smart_toy: MdSmartToy,
  sports_esports: MdSportsEsports,
  photo_camera: FaInstagram,
  instagram: FaInstagram,
  language: MdLanguage,
  brush: MdBrush,
  link: FaLinkedin,
  linkedin: FaLinkedin,
  chakra_ui: SiChakraui,
  css: SiCss,
  html: SiHtml5,
  javascript: SiJavascript,
  material_ui: SiMui,
  next: SiNextdotjs,
  radix: SiRadixui,
  react: SiReact,
  react_router: SiReactrouter,
  sass: SiSass,
  shadcn_ui: SiShadcnui,
  styled_components: SiStyledcomponents,
  tailwindcss: SiTailwindcss,
  tanstack: SiTanstack,
  typescript: SiTypescript,
  vite: SiVite,
  figma: SiFigma,
  ui_ux: MdDesignServices,
  nodejs: FaNodeJs,
  express: SiExpress,
  nestjs: SiNestjs,
  python: SiPython,
  fastapi: SiFastapi,
  java: FaJava,
  springboot: SiSpringboot,
  rest_api: TbApi,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  aws: FaAws,
  nginx: SiNginx,
  cicd: MdLoop,
  linux: SiLinux,
  vercel: SiVercel,
  render: SiRender,
  cloudflare: SiCloudflare,
  kubernetes: SiKubernetes,
  datadog: SiDatadog,
  sentry: SiSentry,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  google_analytics: SiGoogleanalytics,
  mixpanel: SiMixpanel,
  git: SiGit,
  github: SiGithub
}

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) return null

  return <IconComponent className={className} />
}

export default Icon
