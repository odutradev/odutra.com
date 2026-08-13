import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import portfolioData from '../../../../assets/data'
import Icon from '../../../../components/Icon'

import type { ExperienceProps } from './types'

const Experience = (_props: ExperienceProps) => {
  const [showPreviousExperiences, setShowPreviousExperiences] = useState<boolean>(false)

  const handleTogglePrevious = useCallback(() => {
    setShowPreviousExperiences((previousState) => !previousState)
  }, [])

  const { experiences } = portfolioData

  return (
    <section className="py-margin-desktop bg-slate-900" id="experiencia">
      <div className="max-w-max-width mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
            Carreira
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Minha trajetória profissional ao longo dos anos
          </p>
        </motion.div>
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="font-label-caps text-label-caps text-green-500 tracking-wider">
                ATUALMENTE
              </h3>
              <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center font-label-code text-xs border border-green-500/20">
                {experiences.current.length}
              </span>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="absolute left-[15px] top-6 bottom-6 w-px bg-outline-variant hidden sm:block"></div>
              {experiences.current.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative w-full"
                >
                  <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} hidden sm:block z-10 ring-4 ring-slate-900`}></div>
                  <div className="sm:ml-12 flex-grow bg-surface-container rounded-xl p-6 border border-outline-variant hover:border-outline transition-colors">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className={`w-16 h-16 rounded-xl ${item.colorBg} ${item.colorText} flex items-center justify-center shrink-0`}>
                        {item.short ? (
                          <span className="font-headline-md font-bold text-2xl">
                            {item.short}
                          </span>
                        ) : (
                          <Icon name={item.icon || ''} className="w-8 h-8" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
                          <div>
                            <h4 className="font-headline-md text-xl font-bold text-on-surface mb-1">
                              {item.role}
                            </h4>
                            <p className="font-body-md text-on-surface-variant">
                              {item.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-label-caps text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                            ATUAL
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-4 mb-4">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                            <Icon name="calendar_today" className="w-3.5 h-3.5" />
                            {item.period}
                          </div>
                          {item.duration && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                              <Icon name="schedule" className="w-3.5 h-3.5" />
                              {item.duration}
                            </div>
                          )}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                            <Icon name="location_on" className="w-3.5 h-3.5" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div
              onClick={handleTogglePrevious}
              className="flex items-center gap-3 mb-8 cursor-pointer group select-none"
            >
              <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-wider group-hover:text-on-surface transition-colors">
                Experiências anteriores
              </h3>
              <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-code text-xs border border-outline-variant">
                {experiences.previous.length}
              </span>
              <motion.div
                animate={{ rotate: showPreviousExperiences ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name="expand_more" className="w-4 h-4 text-on-surface-variant group-hover:text-on-surface transition-colors" />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {showPreviousExperiences && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="relative flex flex-col gap-6 pb-4">
                    <div className="absolute left-[15px] top-6 bottom-6 w-px bg-outline-variant hidden sm:block"></div>
                    {experiences.previous.map((item, index) => (
                      <motion.div
                        key={item.company}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.1 }}
                        className="relative w-full"
                      >
                        <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} hidden sm:block z-10 ring-4 ring-slate-900`}></div>
                        <div className="sm:ml-12 flex-grow bg-surface-container opacity-80 hover:opacity-100 rounded-xl p-6 border border-outline-variant hover:border-outline transition-all">
                          <div className="flex flex-col sm:flex-row gap-6">
                            <div className={`w-16 h-16 rounded-xl ${item.colorBg} ${item.colorText} flex items-center justify-center shrink-0`}>
                              <span className="font-headline-md font-bold text-2xl">
                                {item.short}
                              </span>
                            </div>
                            <div className="flex-grow">
                              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
                                <div>
                                  <h4 className="font-headline-md text-xl font-bold text-on-surface mb-1">
                                    {item.role}
                                  </h4>
                                  <p className="font-body-md text-on-surface-variant">
                                    {item.company}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-3 mt-4 mb-4">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                                  <Icon name="calendar_today" className="w-3.5 h-3.5" />
                                  {item.period}
                                </div>
                                {item.duration && (
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                                    <Icon name="schedule" className="w-3.5 h-3.5" />
                                    {item.duration}
                                  </div>
                                )}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                                  <Icon name="location_on" className="w-3.5 h-3.5" />
                                  {item.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
