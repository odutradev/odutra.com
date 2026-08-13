import portfolioData from '../../../../assets/data'

const Footer = () => {
  const { personalInfo } = portfolioData

  return (
    <footer className="w-full py-8 bg-surface border-t border-outline-variant">
      <div className="max-w-max-width mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-headline-md text-xl font-bold text-on-surface">
          {personalInfo.brandName}
        </div>
        <div className="text-on-surface-variant font-label-caps text-label-caps">
          {personalInfo.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
