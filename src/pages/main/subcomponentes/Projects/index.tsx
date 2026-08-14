import { motion } from 'framer-motion'

import portfolioData from '@assets/data'
import Icon from '@components/Icon'

import type { ProjectsProps } from './types'

const Projects = (_props: ProjectsProps) => {
  const { projects } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface-dim scroll-mt-16" id="projetos">
      <div className="max-w-max-width mx-auto px-gutter">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline-md text-headline-md text-on-surface mb-12"
        >
          Projetos em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-glass-fill backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover-ghost-border transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-32 bg-slate-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon name={project.icon} className="text-electric-blue w-10 h-10" />
                  </motion.div>
                </div>
                <h3 className="font-body-lg font-bold text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-label-code text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
