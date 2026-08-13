import { motion } from 'framer-motion'

import { scrollToSection } from '../../../../utils/scroll'
import portfolioData from '../../../../assets/data'
import Icon from '../../../../components/Icon'

import type { HeroProps } from './types'

const Hero = (_props: HeroProps) => {
  const { personalInfo } = portfolioData

  return (
    <section className="relative pt-margin-desktop pb-24 bg-grid-pattern overflow-hidden scroll-mt-16" id="sobre">
      <div className="max-w-max-width mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-fill border border-slate-700 font-label-code text-label-code text-on-surface-variant"
        >
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
          {personalInfo.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-3xl"
        >
          {personalInfo.heroTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12"
        >
          {personalInfo.heroBio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#contato"
            onClick={(event) => scrollToSection(event, '#contato')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-blue text-pure-white rounded-lg font-body-md font-medium hover:bg-inverse-primary transition-colors group shadow-lg shadow-electric-blue/20"
          >
            Vamos conversar
            <Icon name="arrow_forward" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#projetos"
            onClick={(event) => scrollToSection(event, '#projetos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-on-surface rounded-lg font-body-md font-medium hover:bg-glass-fill transition-colors"
          >
            Ver projetos
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}

export default Hero

