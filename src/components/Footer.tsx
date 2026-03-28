"use client"

import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'Services', href: '#services' },
      { label: 'Entreprises', href: '#business' },
      { label: 'À propos', href: '#apropos' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Petits Colis', href: '#services' },
      { label: 'Moyen Colis', href: '#services' },
      { label: 'Gros Colis', href: '#services' },
      { label: 'Déménagement', href: '#services' },
      { label: 'E-commerce', href: '#business' },
    ],
  },
]

const handleNavClick = (href: string) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-10 pb-6 px-4 md:px-8">
      <div className="container-custom">
  
        {/* ── MOBILE VERSION ───────────────────────── */}
        <div className="md:hidden flex flex-col items-center text-center gap-4 mb-6">
  
          {/* Brand */}
          <div>
            <div className="font-bold text-lg text-white font-[var(--font-sora)]">
              Fast Express
            </div>
            <div className="text-[10px] tracking-widest uppercase text-gray-500">
              Delivery
            </div>
          </div>
  
          {/* Short description */}
          <p className="text-gray-500 text-xs max-w-xs">
            Livraison rapide à Libreville
          </p>
  
          {/* CTA principal */}
          <a
            href="https://wa.me/24166647096"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a5c2a] text-white text-xs font-bold px-4 py-2.5 rounded-xl"
          >
            <MessageCircle className="w-4 h-4" />
            Commander
          </a>
  
          {/* Contact minimal */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="tel:0666470096" className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Appeler
            </a>
  
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Libreville
            </span>
          </div>
        </div>
  
        {/* ── DESKTOP VERSION ───────────────────────── */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-8">
  
          {/* BRAND */}
          <div>
            <div className="mb-4">
              <div className="font-bold text-lg text-white font-[var(--font-sora)]">
                Fast Express
              </div>
              <div className="text-[10px] font-medium tracking-widest uppercase text-gray-500">
                Delivery
              </div>
            </div>
  
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Livraison rapide et fiable à Libreville
            </p>
  
            <div className="space-y-2">
              <a
                href="https://wa.me/24166647096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-white"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp : 066 64 70 96
              </a>
  
              <a
                href="tel:0666470096"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-white"
              >
                <Phone className="w-3 h-3" />
                066 64 70 96 / 074 75 57 28
              </a>
  
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                Libreville, Gabon
              </div>
            </div>
          </div>
  
          {/* LINKS */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-[var(--font-sora)] font-semibold text-white text-xs uppercase tracking-wider mb-3">
                {group.title}
              </h4>
  
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-500 hover:text-white text-xs"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* ── BOTTOM ───────────────────────── */}
        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Fast Express Delivery
          </p>
  
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Fait avec <Heart className="w-2.5 h-2.5 text-red-500 fill-red-500" /> au Gabon
          </p>
        </div>
  
      </div>
    </footer>
  )
}