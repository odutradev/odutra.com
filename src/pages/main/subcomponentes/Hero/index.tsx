import portfolioData from '../../../../assets/data'

import type { HeroProps } from './types'

const Hero = (_props: HeroProps) => {
  const { personalInfo } = portfolioData

  return (
    <section className="relative pt-margin-desktop pb-24 bg-grid-pattern overflow-hidden" id="sobre">
      <div className="max-w-max-width mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-fill border border-slate-700 font-label-code text-label-code text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
          {personalInfo.badge}
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-3xl">
          {personalInfo.heroTitle}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
          {personalInfo.heroBio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-blue text-pure-white rounded-lg font-body-md font-medium hover:bg-inverse-primary transition-colors group"
          >
            Vamos conversar
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-on-surface rounded-lg font-body-md font-medium hover:bg-glass-fill transition-colors"
          >
            Ver projetos
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}

export default Hero
