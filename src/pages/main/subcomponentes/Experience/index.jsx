import { useState, useCallback } from 'react'

import portfolioData from '../../../../assets/portfolioData'

const Experience = () => {
  const [showPreviousExperiences, setShowPreviousExperiences] = useState(true)

  const handleTogglePrevious = useCallback(() => {
    setShowPreviousExperiences((previousState) => !previousState)
  }, [])

  const { experiences } = portfolioData

  return (
    <section className="py-margin-desktop bg-slate-900" id="experiencia">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
            Carreira
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Minha trajetória profissional ao longo dos anos
          </p>
        </div>
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
              {experiences.current.map((item) => (
                <div key={item.company} className="relative w-full">
                  <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} hidden sm:block z-10 shadow-[0_0_0_4px_#0A0A0A]`}></div>
                  <div className="sm:ml-12 flex-grow bg-surface-container rounded-xl p-6 border border-outline-variant hover:border-outline transition-colors">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className={`w-16 h-16 rounded-xl ${item.colorBg} ${item.colorText} flex items-center justify-center shrink-0`}>
                        {item.short ? (
                          <span className="font-headline-md font-bold text-2xl">
                            {item.short}
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-3xl">
                            {item.icon}
                          </span>
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
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            ATUAL
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-4 mb-4">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                            <span className="material-symbols-outlined text-[14px]">
                              calendar_today
                            </span>
                            {item.period}
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                            <span className="material-symbols-outlined text-[14px]">
                              location_on
                            </span>
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-on-surface transition-colors">
                {showPreviousExperiences ? 'expand_less' : 'expand_more'}
              </span>
            </div>

            {showPreviousExperiences && (
              <div className="relative flex flex-col gap-6">
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-outline-variant hidden sm:block"></div>
                {experiences.previous.map((item) => (
                  <div key={item.company} className="relative w-full">
                    <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} hidden sm:block z-10 shadow-[0_0_0_4px_#0A0A0A]`}></div>
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
                              <span className="material-symbols-outlined text-[14px]">
                                calendar_today
                              </span>
                              {item.period}
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant font-label-code text-xs text-on-surface-variant">
                              <span className="material-symbols-outlined text-[14px]">
                                location_on
                              </span>
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
