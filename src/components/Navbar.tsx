"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// Types
interface NavLink {
  label: string
  href: string
  isPage: boolean
  hash?: string
}

const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/', isPage: true, hash: 'accueil' },
  { label: 'Services', href: '#services', isPage: false },
  { label: 'Entreprises', href: '/business', isPage: true },
  { label: 'À propos', href: '/about', isPage: true },
  { label: 'Contact', href: '#contact', isPage: false },
]

const SCROLL_OFFSET = 80
const SCROLL_THRESHOLD = 50

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  
  const pathname = usePathname()
  const router = useRouter()
  
  // États dérivés
  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'
  const shouldShowScrolledStyle = scrolled || !isHomePage

  // Gestion du scroll avec throttling
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > SCROLL_THRESHOLD)
          
          if (isHomePage) {
            const sections = navLinks
              .filter(link => !link.isPage)
              .map(link => link.href.replace('#', ''))
            
            let currentSection = 'accueil'
            for (const section of sections.reverse()) {
              const element = document.getElementById(section)
              if (element && window.scrollY >= element.offsetTop - SCROLL_OFFSET) {
                currentSection = section
                break
              }
            }
            setActiveSection(currentSection)
          }
          
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Appel initial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Fonction de scroll smooth
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      return true
    }
    return false
  }, [])

  // Gestion des clics sur les liens
  const handleLinkClick = useCallback((link: NavLink) => {
    setMobileOpen(false)
    
    const { href, isPage, hash } = link
    
    if (isPage) {
      if (hash && href === '/') {
        // Navigation vers l'accueil avec hash
        router.push('/')
        setTimeout(() => {
          scrollToElement(hash)
        }, 100)
      } else {
        router.push(href)
      }
      return
    }
    
    // Pour les ancres
    const targetId = href.replace('#', '')
    
    if (isHomePage) {
      scrollToElement(targetId)
    } else {
      // Redirection vers l'accueil avec le hash
      router.push(`/#${targetId}`)
    }
  }, [isHomePage, router, scrollToElement])

  // Vérification si un lien est actif
  const isActiveLink = useCallback((link: NavLink): boolean => {
    if (link.isPage) {
      if (link.label === 'Accueil') return isHomePage
      return pathname === link.href
    }
    return isHomePage && activeSection === link.href.replace('#', '')
  }, [isHomePage, pathname, activeSection])

  // Styles dynamiques
  const getTextColor = useCallback((isActive: boolean) => {
    if (isActive) {
      return shouldShowScrolledStyle ? 'text-[#1a5c2a]' : 'text-[#f5a623]'
    }
    return shouldShowScrolledStyle ? 'text-gray-600 hover:text-[#1a5c2a]' : 'text-white/80 hover:text-white'
  }, [shouldShowScrolledStyle])

  const getButtonColor = useCallback(() => {
    return shouldShowScrolledStyle
      ? 'bg-[#1a5c2a] text-white hover:bg-[#246b35]'
      : 'bg-[#f5a623] text-[#1a5c2a] hover:bg-[#fbbf47]'
  }, [shouldShowScrolledStyle])

  // Mémorisation des liens pour éviter les re-rendus inutiles
  const desktopLinks = useMemo(() => navLinks.map((link) => {
    const isActive = isActiveLink(link)
    const textColor = getTextColor(isActive)
    
    if (link.isPage) {
      return (
        <Link key={link.href} href={link.href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${textColor}`}
          >
            {link.label}
            {isActive && (
              <motion.span
                layoutId="activeNav"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5a623]"
              />
            )}
          </motion.button>
        </Link>
      )
    }
    
    return (
      <button
        key={link.href}
        onClick={() => handleLinkClick(link)}
        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${textColor}`}
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
  }), [isActiveLink, getTextColor, handleLinkClick])

  const mobileLinks = useMemo(() => navLinks.map((link, index) => {
    if (link.isPage) {
      return (
        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-[#1a5c2a]/5 hover:text-[#1a5c2a] font-medium transition-all text-left cursor-pointer"
          >
            <span>{link.label}</span>
            <span className="text-[#f5a623]">→</span>
          </motion.div>
        </Link>
      )
    }
    
    return (
      <motion.button
        key={link.href}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        onClick={() => handleLinkClick(link)}
        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-[#1a5c2a]/5 hover:text-[#1a5c2a] font-medium transition-all text-left"
      >
        <span>{link.label}</span>
        <span className="text-[#f5a623]">→</span>
      </motion.button>
    )
  }), [handleLinkClick])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldShowScrolledStyle
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" passHref>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="relative w-15 h-10">
                  <Image
                    src="/logo.png"
                    alt="Fast Express Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className={`font-black text-base tracking-tight font-[var(--font-sora)] ${
                      shouldShowScrolledStyle ? 'text-[#1a5c2a]' : 'text-white'
                    }`}
                  >
                    Fast Livraison
                  </span>
                  <span
                    className={`text-[10px] font-medium tracking-widest uppercase ${
                      shouldShowScrolledStyle ? 'text-[#f5a623]' : 'text-[#f5a623]/80'
                    }`}
                  >
                    Express
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {desktopLinks}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="tel:0666470096"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md ${getButtonColor()}`}
              >
                <Phone className="w-4 h-4" />
                Appeler
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                shouldShowScrolledStyle
                  ? 'text-[#1a5c2a] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
                {mobileLinks}
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