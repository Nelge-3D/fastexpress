"use client"

import { motion, useInView, Variants } from 'motion/react'
import { useRef, useState } from 'react'
import {
  Truck,
  Home,
  ShoppingCart,
  Building2,
  ArrowRight,
  Zap,
  MessageCircle,
} from 'lucide-react'

// ── Services secondaires (Voiture / Déménagement / pro) ──────────────────────
const services = [
  {
    icon: Truck,
    title: 'Petits Colis',
    subtitle: 'Micro-ondes, TV, petits appareils',
    description:
      'Livraison rapide et sécurisée de vos petits colis et appareils électroniques dans tout Libreville.',
    price: 'À partir de 15 000 Fcfa',
    color: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    badge: '📦',
    vehicle: '🚐 Voiture',
  },
  {
    icon: Truck,
    title: 'Moyen Colis',
    subtitle: 'Meubles, tables et équipements',
    description:
      'Transport soigné de vos meubles et équipements de taille moyenne avec notre équipe professionnelle.',
    price: 'À partir de 20 000 Fcfa',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    badge: '🗃️',
    vehicle: '🚐 Voiture',
  },
  {
    icon: Truck,
    title: 'Gros Colis',
    subtitle: 'Réfrigérateurs, machines à laver',
    description:
      'Manutention et livraison de gros électroménagers avec le matériel adapté et une équipe expérimentée.',
    price: 'À partir de 25 000 Fcfa',
    color: 'from-orange-500 to-amber-600',
    bg: 'bg-orange-50',
    badge: '📫',
    vehicle: '🚐 Voiture',
  },
  {
    icon: Home,
    title: 'Déménagement',
    subtitle: 'Service complet de A à Z',
    description:
      'Déménagement professionnel de la catégorie A à C. Emballage, transport et installation inclus.',
    price: 'À partir de 40 000 Fcfa',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    badge: '🏠',
    vehicle: '🚚 Déménagement',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Stockage, préparation & livraison',
    description:
      'Solution logistique complète pour les vendeurs en ligne : stockage, emballage, livraison et encaissement.',
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
    description:
      "Services dédiés aux entreprises : courriers administratifs, courses urgentes, repas d'entreprise.",
    price: 'Sur devis',
    color: 'from-[#1a5c2a] to-[#246b35]',
    bg: 'bg-green-50',
    badge: '🏢',
    highlight: true,
  },
]

// Moto routes from image
const motoRoutes = [
  { from: 'Libreville', to: 'Libreville', price: '2 000' },
  { from: 'Libreville', to: 'Akanda', price: '3 000' },
  { from: 'Akanda', to: 'Akanda', price: '2 000' },
  { from: 'Libreville', to: 'Bikele', price: '3 000' },
  { from: 'Akanda', to: 'PK12/Bikele', price: '3 000' },
  { from: 'Libreville / Bikele', to: 'Owendo', price: '3 000' },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Services() {
  // ── États Voiture Express ─────────────────────────────────────────────
  const [activeVehicle, setActiveVehicle] = useState<'Voiture' | 'Déménagement'>('Voiture')
  const [activeSubCat, setActiveSubCat] = useState('petits')

  const VoitureSubCats = [
    {
      id: 'petits',
      label: 'Petits Colis',
      emoji: '📦',
      desc: 'Micro-ondes, TV, petits appareils',
      routes: [
        { from: 'Akanda', to: 'Libreville', price: '15 000' },
        { from: 'Owendo', to: 'Akanda', price: '20 000' },
        { from: 'Libreville', to: 'Owendo', price: '15 000' },
        { from: 'Owendo', to: 'Ntoum', price: '20 000' },
        { from: 'Libreville', to: 'Cap Estérias', price: '20 000' },
      ],
    },
    {
      id: 'moyens',
      label: 'Moyens Colis',
      emoji: '🗃️',
      desc: 'Tables, meubles moyens, équipements',
      routes: [
        { from: 'Akanda', to: 'Libreville', price: '20 000' },
        { from: 'Owendo', to: 'Akanda', price: '25 000' },
        { from: 'Libreville', to: 'Owendo', price: '20 000' },
        { from: 'Owendo', to: 'Ntoum', price: '25 000' },
        { from: 'Libreville', to: 'Cap Estérias', price: '25 000' },
      ],
    },
    {
      id: 'gros',
      label: 'Gros Colis',
      emoji: '📫',
      desc: 'Réfrigérateurs, gros électroménagers',
      routes: [
        { from: 'Akanda', to: 'Libreville', price: '25 000' },
        { from: 'Owendo', to: 'Akanda', price: '30 000' },
        { from: 'Libreville', to: 'Owendo', price: '25 000' },
        { from: 'Owendo', to: 'Ntoum', price: '30 000' },
        { from: 'Libreville', to: 'Cap Estérias', price: '30 000' },
      ],
    },
  ]

  const demenagementCats = [
    { cat: 'Catégorie A', desc: 'Studio / petit appartement', price: '40 000 — 60 000' },
    { cat: 'Catégorie B', desc: 'Appartement moyen / maison', price: '60 000 — 100 000' },
    { cat: 'Catégorie C', desc: 'Grande maison / villa', price: '100 000 — 150 000' },
  ]

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="services" 
      className={`
        bg-[#f9fafb]
        /* Mobile (par défaut) */
        py-12 px-4
        /* Tablette (640px et plus) */
        sm:py-16 sm:px-6
        /* Desktop (1024px et plus) */
        lg:py-20 lg:px-8
        /* Grands écrans (1280px et plus) */
        xl:py-24 xl:px-12 
      `}
    >
      <div className={`
        container-custom mx-auto
        /* Mobile */
        max-w-full
        /* Tablette */
        sm:max-w-[640px]
        /* Desktop */
        lg:max-w-[1024px]
        /* Grand écran */
        xl:max-w-[1280px]
        /* Écran large */
        2xl:max-w-[1536px]
      `}>
        {/* ── Header ───────────────────────────────────────────────────── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`
            text-center
            /* Mobile */
            mb-10
            /* Tablette */
            sm:mb-12
            /* Desktop */
            lg:mb-16
          `}
        >
          <div className="section-badge inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Nos Services
          </div>
          <h2 className={`
            font-[var(--font-sora)] font-black text-gray-900
            /* Mobile */
            text-2xl mb-3
            /* Tablette */
            sm:text-3xl sm:mb-3.5
            /* Desktop */
            lg:text-4xl lg:mb-4
            /* Grand écran */
            xl:text-5xl
          `}>
            Des solutions pour{' '}
            <span className="text-[#f5a623]">chaque besoin</span>
          </h2>
          <p className={`
            text-gray-500
            /* Mobile */
            text-base max-w-sm mx-auto
            /* Tablette */
            sm:text-lg sm:max-w-xl
            /* Desktop */
            lg:text-xl lg:max-w-2xl
          `}>
            Que vous soyez un particulier ou une entreprise, Fast Express a la
            solution logistique adaptée à vos besoins.
          </p>
        </motion.div>

        {/* ── MOTO EXPRESS HERO ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className={`
            /* Mobile */
            mb-8
            /* Tablette */
            sm:mb-9
            /* Desktop */
            lg:mb-10
          `}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#f5a623] shadow-2xl shadow-yellow-400/20">

            {/* Two-column layout on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left — identity */}
              <div className={`
                bg-[#f5a623]
                /* Mobile */
                px-5 py-8 gap-4
                /* Tablette */
                sm:px-6 sm:py-9 sm:gap-5
                /* Desktop */
                lg:px-8 lg:py-10 lg:gap-6
                flex flex-col justify-between
              `}>
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#1a5c2a] text-[#f5a623] text-xs font-black px-3 py-1.5 rounded-full mb-5">
                    <Zap className="w-3.5 h-3.5" />
                    Service Populaire
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`
                      /* Mobile */
                      text-4xl
                      /* Desktop */
                      lg:text-5xl
                    `}>🛵</span>
                    <h3 className={`
                      font-[var(--font-sora)] text-[#1a5c2a] font-black
                      /* Mobile */
                      text-2xl
                      /* Tablette */
                      sm:text-3xl
                      leading-tight
                    `}>
                      Moto Express
                    </h3>
                  </div>

                  <p className={`
                    text-[#1a5c2a]/75
                    /* Mobile */
                    text-sm leading-relaxed
                    /* Tablette */
                    sm:text-base
                  `}>
                    Livraison ultra-rapide de documents, repas, médicaments,
                    courses du quotidien — partout dans Libreville et ses communes.
                  </p>
                </div>

                {/* Perks */}
                <ul className="space-y-2">
                  {[
                    '⚡ Livraison en moins d\'1 heure',
                    '📍 Suivi en temps réel',
                    '🔒 Colis pris en charge avec soin',
                    '↔️ Tarifs bidirectionnels',
                  ].map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-[#1a5c2a] font-semibold text-sm">
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20une%20livraison%20moto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1a5c2a] text-white font-bold py-4 rounded-2xl hover:bg-[#246b35] transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Commander maintenant
                </a>
              </div>

              {/* Right — price table */}
              <div className={`
                bg-[#1a5c2a]
                /* Mobile */
                px-5 py-8
                /* Tablette */
                sm:px-6 sm:py-9
                /* Desktop */
                lg:px-8 lg:py-10
                flex flex-col justify-center
              `}>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                  Tarifs par zone
                </p>
                <div className="space-y-0">
                  {motoRoutes.map((route, i) => (
                    <motion.div
                      key={`${route.from}-${route.to}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                    >
                      <div className="flex items-center gap-2 text-white text-sm">
                        <span className="text-white/40 text-xs">📍</span>
                        <span className="font-medium text-xs sm:text-sm">{route.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#f5a623] flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">{route.to}</span>
                      </div>
                      <span className="text-[#f5a623] font-black text-sm whitespace-nowrap ml-2">
                        {route.price}
                        <span className="text-white/50 font-normal text-xs ml-1">Fcfa</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-white/30 text-xs mt-5">
                  💡 Prix TTC · Sans frais cachés · Retour au même tarif
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Voiture EXPRESS HERO ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25 }}
          className={`
            /* Mobile */
            mb-8
            /* Tablette */
            sm:mb-9
            /* Desktop */
            lg:mb-10
          `}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#f5a623] shadow-2xl shadow-yellow-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left */}
              <div className={`
                bg-gradient-to-br from-white-500 to-white-600
                /* Mobile */
                px-5 py-8 gap-6
                /* Tablette */
                sm:px-6 sm:py-9 sm:gap-7
                /* Desktop */
                lg:px-8 lg:py-10 lg:gap-8
                flex flex-col justify-between h-full
              `}>
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#246b35] text-white text-xs font-black px-3 py-1.5 rounded-full mb-5">
                    🚐 Service Flexible
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`
                      /* Mobile */
                      text-4xl
                      /* Desktop */
                      lg:text-5xl
                    `}>🚐</span>
                    <h3 className={`
                      font-[var(--font-sora)] text-black font-black
                      /* Mobile */
                      text-2xl
                      /* Tablette */
                      sm:text-3xl
                      leading-tight
                    `}>
                      Voiture Express
                    </h3>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-2 mb-5 flex-wrap">
                    {(['Voiture', 'Déménagement'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveVehicle(tab)}
                        className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                          activeVehicle === tab
                            ? 'bg-white text-black-600 shadow-md'
                            : 'bg-white/20 text-black hover:bg-white/30'
                        }`}
                      >
                        {tab === 'Voiture' ? '🚐' : '🚚'}
                        {tab === 'Voiture' ? 'Voiture' : 'Déménagement'}
                      </button>
                    ))}
                  </div>

                  <p className={`
                    text-black/80
                    /* Mobile */
                    text-sm leading-relaxed
                    /* Tablette */
                    sm:text-base
                  `}>
                    {activeVehicle === 'Voiture'
                      ? 'Transport de colis de toutes tailles — micro-ondes, TV, meubles, électroménagers — dans Libreville et ses communes.'
                      : 'Déménagement professionnel complet de la catégorie A à C. Emballage, transport et installation inclus.'}
                  </p>
                </div>

                {/* Perks */}
                <ul className="space-y-2">
                  {(activeVehicle === 'Voiture'
                    ? [
                        '🔒 Manutention soignée',
                        '🗺️ Libreville · Akanda · Owendo · Ntoum · Cap Estérias',
                        '💪 Équipe professionnelle',
                        '⚡ Livraison rapide',
                      ]
                    : [
                        '📦 Emballage inclus',
                        '🏠 Installation sur place',
                        '🔑 Clé en main de A à Z',
                        '🤝 Devis gratuit sur demande',
                      ]
                  ).map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-black font-semibold text-sm"
                    >
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20un%20devis%20${
                    activeVehicle === 'Voiture'
                      ? 'Voiture'
                      : 'd%C3%A9m%C3%A9nagement'
                  }.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demander un devis via WhatsApp"
                  className="mt-2 flex items-center justify-center gap-2 bg-[#1a5c2a] text-white font-bold py-4 rounded-2xl hover:bg-[#246b35] transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Demander un devis
                </a>
              </div>

              {/* Right */}
              <div className={`
                bg-green-900
                /* Mobile */
                px-5 py-8
                /* Tablette */
                sm:px-6 sm:py-9
                /* Desktop */
                lg:px-8 lg:py-10
                flex flex-col justify-center
              `}>
                {/* Voiture */}
                {activeVehicle === 'Voiture' && (
                  <>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {VoitureSubCats.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveSubCat(cat.id)}
                          className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all ${
                            activeSubCat === cat.id
                              ? 'bg-amber-400 text-blue-900'
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {cat.emoji} {cat.label}
                        </button>
                      ))}
                    </div>

                    {VoitureSubCats
                      .filter((c) => c.id === activeSubCat)
                      .map((cat) => (
                        <div key={cat.id}>
                          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">
                            {cat.desc}
                          </p>

                          <div>
                            {cat.routes.map((route, i) => (
                              <motion.div
                                key={`${route.from}-${route.to}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.07 }}
                                className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                              >
                                <div className="flex items-center gap-2 text-white text-sm">
                                  <span className="text-white/40 text-xs">📍</span>
                                  <span className="font-medium text-xs sm:text-sm">{route.from}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#f5a623]" />
                                  <span className="font-medium text-xs sm:text-sm">{route.to}</span>
                                </div>

                                <span className="text-amber-400 font-black text-sm whitespace-nowrap ml-2">
                                  {route.price}
                                  <span className="text-white/50 font-normal text-xs ml-1">
                                    Fcfa
                                  </span>
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </>
                )}

                {/* Déménagement */}
                {activeVehicle === 'Déménagement' && (
                  <>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                      Tarifs Déménagement
                    </p>

                    <div>
                      {demenagementCats.map((item, i) => (
                        <motion.div
                          key={item.cat}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="py-4 border-b border-white/10 last:border-0"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-white font-bold text-sm">
                                {item.cat}
                              </p>
                              <p className="text-white/50 text-xs mt-0.5">
                                {item.desc}
                              </p>
                            </div>

                            <span className="text-amber-400 font-black text-sm whitespace-nowrap">
                              {item.price}
                              <span className="text-white/50 font-normal text-xs ml-1">
                                Fcfa
                              </span>
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}

                <p className="text-white/30 text-xs mt-5">
                  💡 Prix TTC · Sans frais cachés · Devis gratuit sur demande
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Divider label ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">
            🚐 Voiture &amp; 🚚 Déménagement
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        {/* ── Secondary services slider ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#f9fafb] to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#f9fafb] to-transparent z-10" />

          <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`snap-start shrink-0 w-[75%] sm:w-[50%] lg:w-[26%] relative group bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                  service.highlight ? 'ring-2 ring-[#f5a623]/30' : ''
                }`}
              >
                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />

                {/* Vehicle chip */}
                {service.vehicle && (
                  <span className="inline-block text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full mb-3">
                    {service.vehicle}
                  </span>
                )}

                {/* Icon */}
                <div className={`${service.bg} w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 text-xl sm:text-2xl`}>
                  {service.badge}
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-sora)] text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#f5a623] font-bold text-xs sm:text-sm">
                    {service.price}
                  </span>
                  <motion.a
                    href="https://wa.me/24166647096"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1 text-[#1a5c2a] text-xs sm:text-sm font-semibold hover:text-[#f5a623] transition-colors"
                  >
                    Commander <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Pro badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-[#f5a623] text-[#1a5c2a] text-xs font-black px-2.5 py-1 rounded-full">
                    Pro
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
          

      </div>
    </section>
  )
}