import { MdPrecisionManufacturing, MdLocalFireDepartment, MdSportsEsports, MdCalendarToday, MdArrowForward, MdExpandLess, MdExpandMore, MdLocationOn, MdDarkMode, MdLightMode, MdLightbulb, MdSmartToy, MdLanguage, MdSchedule, MdBiotech, MdSchool, MdBrush, MdCall, MdMail } from 'react-icons/md'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

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
  linkedin: FaLinkedin
}

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = iconMap[name]

  if (!IconComponent) return null

  return <IconComponent className={className} />
}

export default Icon
