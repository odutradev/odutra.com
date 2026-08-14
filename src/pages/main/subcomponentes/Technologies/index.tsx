import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import portfolioData from '@assets/data'
import Icon from '@components/Icon'

const Technologies = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('languages')

  const handleToggleCategory = useCallback((categoryId: string) => {
    setExpandedCategory((previousCategory) => (
      previousCategory === categoryId
        ? null
        : categoryId
    ))
  }, [])

  const { technologyCategories } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface scroll-mt-16" id="tecnologias">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="w-full">
          {technologyCategories.map((category, index) => {
            const isExpanded = expandedCategory === category.id

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={index > 0 ? "border-t border-outline-variant" : ""}
              >
                <button
                  onClick={() => handleToggleCategory(category.id)}
                  className="w-full flex items-center justify-between py-4 text-on-surface hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-headline-md text-2xl font-semibold">
                      {category.title}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium">
                      {category.items.length}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="expand_more" className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden -mx-4 px-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-6 px-1 py-1">
                        {category.items.map((techItem, techIndex) => (
                          <motion.div
                            key={techItem.name}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.04 }}
                            whileHover={{ scale: 1.03, y: -2 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant hover:border-primary transition-colors cursor-default relative hover:z-10"
                          >
                            <div className={`w-8 h-8 rounded ${techItem.bg} ${techItem.color} flex items-center justify-center font-bold text-xs shrink-0`}>
                              {techItem.icon ? (
                                <Icon name={techItem.icon} className="w-5 h-5" />
                              ) : (
                                techItem.code
                              )}
                            </div>
                            <span className="font-body-md text-on-surface font-medium">
                              {techItem.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Technologies
