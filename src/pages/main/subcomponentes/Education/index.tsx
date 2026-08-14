import { motion } from 'framer-motion'

import portfolioData from '@assets/data'
import Icon from '@components/Icon'

import type { EducationProps } from './types'

const Education = (_props: EducationProps) => {
  const { education } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface-dim border-t border-outline-variant scroll-mt-16" id="formacao">
      <div className="max-w-max-width mx-auto px-gutter">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline-md text-headline-md text-on-surface mb-12"
        >
          Formação Acadêmica
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {education.map((item, index) => (
            <motion.div
              key={item.course}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-900 rounded-lg p-6 border border-slate-700 flex flex-col justify-between hover:border-primary transition-colors cursor-default"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-fit"
                >
                  <Icon name={item.icon} className="text-electric-blue mb-4 w-8 h-8" />
                </motion.div>
                <h3 className="font-body-md font-bold text-on-surface mb-2">
                  {item.course}
                </h3>
                <p className="font-label-code text-label-code text-on-surface-variant">
                  {item.institution}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <span className="font-label-caps text-label-caps text-secondary">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
