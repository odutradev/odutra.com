import { motion } from 'framer-motion'

import portfolioData from '../../../../assets/data'

import type { FooterProps } from './types'

const Footer = (_props: FooterProps) => {
  const { personalInfo } = portfolioData

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-8 bg-surface border-t border-outline-variant"
    >
      <div className="max-w-max-width mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-headline-md text-xl font-bold text-on-surface">
          {personalInfo.brandName}
        </div>
        <div className="text-on-surface-variant font-label-caps text-label-caps">
          {personalInfo.copyright}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
