"use client"

import { Phone, MessageCircle, MapPin, Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'Services', href: '#services' },
      { label: 'Tarifs', href: '#tarifs' },
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
      { label: 'Fast Business', href: '#business' },
    ],
  },
  {
    title: 'Zones',
    links: [
      { label: 'Libreville', href: '#contact' },
      { label: 'Akanda', href: '#contact' },
      { label: 'Owendo', href: '#contact' },
      { label: 'Ntoum', href: '#contact' },
      { label: 'Cap Estérias', href: '#contact' },
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
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#f5a623] flex items-center justify-center shadow-md">
                <span className="text-[#1a5c2a] font-black text-sm">FE</span>
              </div>
              <div>
                <div className="font-black text-lg text-white font-[var(--font-sora)]">
                  Fast Express
                </div>
                <div className="text-[10px] font-medium tracking-widest uppercase text-[#f5a623]">
                  Delivery
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Votre partenaire logistique de confiance à Libreville. Livraison
              de colis, déménagement et services aux entreprises.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="https://wa.me/24166647096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#f5a623] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-[#f5a623]" />
                WhatsApp : 066 64 70 96
              </a>
              <a
                href="tel:0666470096"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#f5a623] transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-[#f5a623]" />
                Tél : 066 64 70 96 / 074 75 57 28
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#f5a623]" />
                Libreville, Gabon
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-[var(--font-sora)] font-bold text-white mb-5 text-sm uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-[#f5a623] text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fast Livraison Express — Libreville, Gabon
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Fait avec <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> au Gabon
          </p>
        </div>
      </div>
    </footer>
  )
}