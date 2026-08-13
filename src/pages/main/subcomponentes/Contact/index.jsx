import portfolioData from '../../../../assets/data'

const Contact = () => {
  const { personalInfo, socialLinks } = portfolioData

  return (
    <section className="py-margin-desktop bg-slate-900 border-t border-outline-variant" id="contato">
      <div className="max-w-max-width mx-auto px-gutter py-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant shrink-0">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-display-lg-mobile md:font-headline-md text-on-surface leading-tight">
                {personalInfo.contactTitle}
              </h2>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-md">
              {personalInfo.contactBio}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <a
              href={personalInfo.emailUrl}
              className="inline-flex items-center justify-between bg-slate-900 border border-on-surface text-on-surface px-6 py-4 rounded-lg group hover:bg-on-surface hover:text-slate-900 transition-all duration-300"
            >
              <span className="font-label-caps tracking-widest">
                SOLICITAR ORÇAMENTO
              </span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <div className="flex flex-col gap-4">
              <a
                href={personalInfo.emailUrl}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  mail
                </span>
                <span className="font-body-md">
                  {personalInfo.email}
                </span>
              </a>
              <a
                href={personalInfo.phoneUrl}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  call
                </span>
                <span className="font-body-md">
                  {personalInfo.phone}
                </span>
              </a>
            </div>
            <hr className="border-outline-variant" />
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  className="w-12 h-12 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface-variant hover:border-primary hover:text-primary transition-all"
                >
                  <span className="material-symbols-outlined">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
