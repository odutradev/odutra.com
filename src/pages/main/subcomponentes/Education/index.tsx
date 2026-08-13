import portfolioData from '../../../../assets/data'
import Icon from '../../../../components/Icon'

import type { EducationProps } from './types'

const Education = (_props: EducationProps) => {
  const { education } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface-dim border-t border-outline-variant" id="formacao">
      <div className="max-w-max-width mx-auto px-gutter">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-12">
          Formação Acadêmica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {education.map((item) => (
            <div
              key={item.course}
              className="bg-slate-900 rounded-lg p-6 border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <Icon name={item.icon} className="text-electric-blue mb-4 w-8 h-8" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
