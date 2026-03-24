"use client"

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Entreprises', href: '#business' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleLinkClick('#accueil')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-[#f5a623] flex items-center justify-center shadow-md">
                <span className="text-[#1a5c2a] font-black text-sm">FE</span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-black text-base tracking-tight font-[var(--font-sora)] ${
                    scrolled ? 'text-[#1a5c2a]' : 'text-white'
                  }`}
                >
                  Fast Express
                </span>
                <span
                  className={`text-[10px] font-medium tracking-widest uppercase ${
                    scrolled ? 'text-[#f5a623]' : 'text-[#f5a623]/80'
                  }`}
                >
                  Delivery
                </span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? scrolled
                          ? 'text-[#1a5c2a]'
                          : 'text-[#f5a623]'
                        : scrolled
                        ? 'text-gray-600 hover:text-[#1a5c2a]'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5a623]"
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="tel:0666470096"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'bg-[#1a5c2a] text-white hover:bg-[#246b35]'
                    : 'bg-[#f5a623] text-[#1a5c2a] hover:bg-[#fbbf47]'
                } shadow-md`}
              >
                <Phone className="w-4 h-4" />
                Appeler
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-[#1a5c2a] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100 md:hidden"
          >
            <div className="container-custom px-4 py-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-[#1a5c2a]/5 hover:text-[#1a5c2a] font-medium transition-all text-left"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#f5a623]">→</span>
                  </motion.button>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/24166647096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center rounded-xl py-3.5"
                  onClick={() => setMobileOpen(false)}
                >
                  💬 Commander via WhatsApp
                </a>
                <a
                  href="tel:0666470096"
                  className="flex items-center justify-center gap-2 border-2 border-[#1a5c2a] text-[#1a5c2a] font-semibold py-3.5 rounded-xl hover:bg-[#1a5c2a] hover:text-white transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  066 64 70 96
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}