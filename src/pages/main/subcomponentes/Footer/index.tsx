import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

import type { FooterProps } from './types'

const Footer = (_props: FooterProps) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-8 bg-surface border-t border-outline-variant"
    >
      <div className="max-w-max-width mx-auto px-gutter flex justify-center items-center text-on-surface-variant text-sm">
        <span className="flex items-center gap-1.5">
          feito com <FaHeart className="text-red-500 animate-pulse text-xs" /> por <span className="font-semibold text-on-surface">odutradev</span>
        </span>
      </div>
    </motion.footer>
  )
}

export default Footer
