import { AnimatePresence, motion } from 'framer-motion'

import { useTheme } from '../../../../context/ThemeContext'
import portfolioData from '../../../../assets/data'
import Icon from '../../../../components/Icon'

import type { HeaderProps } from './types'

const Header = (_props: HeaderProps) => {
  const { isDarkMode, toggleTheme } = useTheme()

  const { personalInfo, navLinks } = portfolioData

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-glass-fill backdrop-blur-xl border-b border-outline-variant flat no shadows"
    >
      <div className="flex justify-between items-center max-w-max-width mx-auto px-gutter h-16">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="font-headline-md text-headline-md font-bold text-on-surface cursor-pointer"
        >
          {personalInfo.brandName}
        </motion.div>
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
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -30 }}
          aria-label="Toggle Dark Mode"
          className="text-primary hover:text-primary transition-colors duration-300"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? 'dark' : 'light'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name={isDarkMode ? 'dark_mode' : 'light_mode'} className="w-6 h-6" />
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
