import { useState, useCallback } from 'react'

import portfolioData from '../../../../assets/portfolioData'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((previousMode) => {
      const nextMode = !previousMode
      if (nextMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return nextMode
    })
  }, [])

  const { personalInfo, navLinks } = portfolioData

  return (
    <header className="fixed top-0 w-full z-50 bg-glass-fill backdrop-blur-xl border-b border-outline-variant flat no shadows">
      <div className="flex justify-between items-center max-w-max-width mx-auto px-gutter h-16">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          {personalInfo.brandName}
        </div>
        <nav className="hidden md:flex gap-8 font-body-md text-body-md">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={handleToggleTheme}
          aria-label="Toggle Dark Mode"
          className="text-primary hover:text-primary transition-colors duration-300 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">
            {isDarkMode ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
