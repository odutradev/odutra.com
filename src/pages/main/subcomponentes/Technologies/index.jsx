import { useState, useCallback } from 'react'

import portfolioData from '../../../../assets/data'

const Technologies = () => {
  const [expandedCategory, setExpandedCategory] = useState('frontend')

  const handleToggleCategory = useCallback((categoryId) => {
    setExpandedCategory((previousCategory) => (
      previousCategory === categoryId
        ? null
        : categoryId
    ))
  }, [])

  const { technologyCategories } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface" id="tecnologias">
      <div className="max-w-max-width mx-auto px-gutter">
        <div className="w-full">
          {technologyCategories.map((category, index) => {
            const isExpanded = expandedCategory === category.id

            return (
              <div
                key={category.id}
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
                      {category.count}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 pb-6">
                    {category.items.map((techItem) => (
                      <div
                        key={techItem.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant hover:border-primary transition-colors"
                      >
                        <div className={`w-8 h-8 rounded ${techItem.bg} ${techItem.color} flex items-center justify-center font-bold text-xs`}>
                          {techItem.code}
                        </div>
                        <span className="font-body-md text-on-surface font-medium">
                          {techItem.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Technologies

