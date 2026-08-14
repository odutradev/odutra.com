import { motion } from 'framer-motion'

import portfolioData from '@assets/data'
import Icon from '@components/Icon'

import type { ContactProps } from './types'

const Contact = (_props: ContactProps) => {
  const { personalInfo, socialLinks } = portfolioData

  return (
    <section className="py-margin-desktop bg-slate-900 border-t border-outline-variant scroll-mt-16" id="contato">
      <div className="max-w-max-width mx-auto px-gutter py-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant shrink-0"
              >
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h2 className="font-display-lg-mobile md:font-headline-md text-on-surface leading-tight">
                {personalInfo.contactTitle}
              </h2>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-md">
              {personalInfo.contactBio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <motion.a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-between bg-slate-900 border border-on-surface text-on-surface px-6 py-4 rounded-lg group hover:bg-on-surface hover:text-slate-900 transition-all duration-300"
            >
              <span className="font-label-caps tracking-widest">
                SOLICITAR ORÇAMENTO
              </span>
              <Icon name="arrow_forward" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  title={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface-variant hover:border-primary hover:text-primary transition-all"
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
