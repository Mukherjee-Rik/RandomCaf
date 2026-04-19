import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Story', 'Menu', 'Gallery', 'Features', 'Contact']

  const handleScroll = (id) => {
    const scrollToSection = () => {
      const element = document.getElementById(id)

      if (!element) return

      const navbarHeight = navRef.current?.offsetHeight ?? 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    if (menuOpen) {
      setMenuOpen(false)
      window.setTimeout(scrollToSection, 250)
      return
    }

    scrollToSection()
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="font-serif text-xl font-bold text-espresso tracking-wide">
            Coffee Tea & Me
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link.toLowerCase())}
                className="font-sans text-sm tracking-widest uppercase text-espresso/70 hover:text-caramel transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleScroll('booking')}
          className="hidden md:inline-block bg-caramel text-cream px-5 py-2 rounded-full text-sm font-sans tracking-wide hover:bg-espresso transition-colors duration-300"
        >
          Book a Table
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-espresso transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-espresso transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-espresso transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-cream border-t border-latte/30 overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map(link => (
                <li key={link}>
                  <button
                    onClick={() => handleScroll(link.toLowerCase())}
                    className="block w-full text-left px-6 py-3 font-sans text-sm tracking-widest uppercase text-espresso/70 hover:text-caramel"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
