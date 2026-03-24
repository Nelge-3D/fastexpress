"use client"

import { motion, useInView, Variants } from 'motion/react'
import { useRef } from 'react'
import {
  Package,
  PackageOpen,
  Truck,
  Home,
  ShoppingCart,
  Building2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Petits Colis',
    subtitle: 'Micro-ondes, TV, petits appareils',
    description: 'Livraison rapide et sécurisée de vos petits colis et appareils électroniques dans tout Libreville.',
    price: 'À partir de 15 000 Fcfa',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    badge: '🏍️',
  },
  {
    icon: PackageOpen,
    title: 'Moyen Colis',
    subtitle: 'Meubles, tables et équipements',
    description: 'Transport soigné de vos meubles et équipements de taille moyenne avec notre équipe professionnelle.',
    price: 'À partir de 20 000 Fcfa',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    badge: '📦',
  },
  {
    icon: Truck,
    title: 'Gros Colis',
    subtitle: 'Réfrigérateurs, machines à laver',
    description: 'Manutention et livraison de gros électroménagers avec le matériel adapté et une équipe expérimentée.',
    price: 'À partir de 25 000 Fcfa',
    color: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-50',
    badge: '🚚',
  },
  {
    icon: Home,
    title: 'Déménagement',
    subtitle: 'Service complet de A à Z',
    description: 'Déménagement professionnel de la catégorie A à C. Emballage, transport et installation inclus.',
    price: 'À partir de 40 000 Fcfa',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    badge: '🏠',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Stockage, préparation & livraison',
    description: 'Solution logistique complète pour les vendeurs en ligne : stockage, emballage, livraison et encaissement.',
    price: 'Sur devis',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50',
    badge: '🛒',
    highlight: true,
  },
  {
    icon: Building2,
    title: 'Fast Business',
    subtitle: 'Courses et services logistiques',
    description: "Services dédiés aux entreprises : courriers administratifs, courses urgentes, repas d'entreprise.",
    price: 'Sur devis',
    color: 'from-[#1a5c2a] to-[#246b35]',
    bg: 'bg-green-50',
    badge: '🏢',
    highlight: true,
  },
]

// Correction : Ajout du type "Variants" pour éviter l'erreur sur "ease"
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5, 
      ease: 'easeOut' 
    },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-[#f9fafb]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Nos Services
          </div>
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Des solutions pour{' '}
            <span className="text-[#f5a623]">chaque besoin</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Que vous soyez un particulier ou une entreprise, Fast Express a la
            solution logistique adaptée à vos besoins.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                service.highlight ? 'ring-2 ring-[#f5a623]/30' : ''
              }`}
            >
              {/* Gradient top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />

              {/* Icon */}
              <div
                className={`${service.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-2xl`}
              >
                {service.badge}
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-sora)] text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#f5a623] font-bold text-sm">
                  {service.price}
                </span>
                <motion.a
                  href="https://wa.me/24166647096"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 text-[#1a5c2a] text-sm font-semibold hover:text-[#f5a623] transition-colors"
                >
                  Commander <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-[#f5a623] text-[#1a5c2a] text-xs font-black px-2.5 py-1 rounded-full">
                  Pro
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}