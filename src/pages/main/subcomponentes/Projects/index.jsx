import portfolioData from '../../../../assets/portfolioData'

const Projects = () => {
  const { projects } = portfolioData

  return (
    <section className="py-margin-desktop bg-surface-dim" id="projetos">
      <div className="max-w-max-width mx-auto px-gutter">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-12">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-glass-fill backdrop-blur-xl border border-slate-700 rounded-xl p-6 hover-ghost-border transition-all duration-300 group"
            >
              <div className="h-32 bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-electric-blue text-4xl">
                  {project.icon}
                </span>
              </div>
              <h3 className="font-body-lg font-bold text-on-surface mb-2">
                {project.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-label-code text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
