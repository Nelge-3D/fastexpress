"use client"

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { MapPin, ArrowRight, MessageCircle, Zap } from 'lucide-react'

const categories = [
  {
    id: 'moto',
    label: 'Moto Express',
    emoji: '🛵',
    subtitle: 'Livraison rapide de documents, repas, courses...',
    badge: 'Populaire',
    color: 'bg-[#f5a623]',
    highlight: true,
    routes: [
      { from: 'Libreville', to: 'Libreville', price: '2 000' },
      { from: 'Libreville', to: 'Akanda', price: '3 000' },
      { from: 'Akanda', to: 'Akanda', price: '2 000' },
      { from: 'Libreville', to: 'Bikele', price: '3 000' },
      { from: 'Akanda', to: 'PK12/Bikele', price: '3 000' },
      { from: 'Libreville / Bikele', to: 'Owendo', price: '3 000' },
    ],
  },
  {
    id: 'Voiture',
    label: 'Voiture',
    emoji: '🚐',
    subtitle: 'Micro-ondes, TV, meubles, électroménagers...',
    color: 'bg-blue-500',
    highlight: false,
    subCategories: [
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
    ],
  },
  {
    id: 'Déménagement',
    label: 'Déménagement',
    emoji: '🚚',
    subtitle: 'Déménagement complet de A à Z',
    color: 'bg-purple-500',
    highlight: false,
    isDemenagement: true,
    demenagementCategories: [
      {
        cat: 'Catégorie A',
        desc: 'Studio / petit appartement',
        price: '40 000 — 60 000',
      },
      {
        cat: 'Catégorie B',
        desc: 'Appartement moyen / maison',
        price: '60 000 — 100 000',
      },
      {
        cat: 'Catégorie C',
        desc: 'Grande maison / villa',
        price: '100 000 — 150 000',
      },
    ],
  },
]

export default function Tarifs() {
  const [activeTab, setActiveTab] = useState('moto')
  const [activeSubCat, setActiveSubCat] = useState('petits')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const activeCategory = categories.find((c) => c.id === activeTab)!
  const activeSubCategory =
    activeCategory.subCategories?.find((s) => s.id === activeSubCat) ??
    activeCategory.subCategories?.[0]

  return (
    <section 
      id="tarifs" 
      className={`
        bg-white
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
        {/* Header */}
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
            lg:mb-14
            /* Grand écran */
            xl:mb-16
          `}
        >
          <div className="section-badge inline-flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Tarifs
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
            Nos prix{' '}
            <span className="text-[#f5a623]">transparents</span>
          </h2>
          <p className={`
            text-gray-500
            /* Mobile */
            text-base max-w-sm mx-auto
            /* Tablette */
            sm:text-lg sm:max-w-md
            /* Desktop */
            lg:text-xl lg:max-w-xl
          `}>
            Des tarifs clairs et fixes, sans mauvaise surprise. Choisissez votre
            type de véhicule pour voir les prix par zone.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`
            flex flex-wrap justify-center gap-2
            /* Mobile */
            mb-8
            /* Tablette */
            sm:gap-3 sm:mb-9
            /* Desktop */
            lg:mb-10
          `}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id)
                if (cat.subCategories) setActiveSubCat(cat.subCategories[0].id)
              }}
              className={`
                relative flex items-center gap-1.5 sm:gap-2 rounded-2xl 
                text-xs sm:text-sm font-semibold transition-all duration-300
                /* Mobile */
                px-3 py-2
                /* Tablette */
                sm:px-4 sm:py-2.5
                /* Desktop */
                lg:px-5 lg:py-3
                ${
                  activeTab === cat.id
                    ? cat.highlight
                      ? 'bg-[#f5a623] text-[#1a5c2a] shadow-lg shadow-yellow-400/30'
                      : 'bg-[#1a5c2a] text-white shadow-lg shadow-green-900/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              <span className="text-base sm:text-lg">{cat.emoji}</span>
              <span>{cat.label}</span>
              {cat.badge && (
                <span
                  className={`
                    text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    ${
                      activeTab === cat.id
                        ? 'bg-[#1a5c2a] text-white'
                        : 'bg-[#f5a623] text-[#1a5c2a]'
                    }
                  `}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Prices panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`
              mx-auto
              /* Mobile */
              max-w-full
              /* Tablette */
              sm:max-w-xl
              /* Desktop */
              lg:max-w-2xl
            `}
          >
            {/* ── MOTO EXPRESS ── */}
            {activeCategory.id === 'moto' && (
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/20 border-2 border-[#f5a623]">
                {/* Golden header */}
                <div className={`
                  bg-[#f5a623]
                  /* Mobile */
                  px-5 py-5
                  /* Tablette */
                  sm:px-6 sm:py-6
                  /* Desktop */
                  lg:px-8 lg:py-6
                `}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">{activeCategory.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-[var(--font-sora)] text-[#1a5c2a] font-black text-lg sm:text-xl">
                            {activeCategory.label}
                          </h3>
                          <span className="flex items-center gap-1 bg-[#1a5c2a] text-[#f5a623] text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                            <Zap className="w-3 h-3" />
                            Populaire
                          </span>
                        </div>
                        <p className="text-[#1a5c2a]/70 text-xs sm:text-sm">
                          {activeCategory.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Routes */}
                <div className="bg-[#1a5c2a] px-5 sm:px-6 lg:px-8 py-4">
                  <div className="space-y-1 py-2">
                    {activeCategory.routes!.map((route, i) => (
                      <motion.div
                        key={`${route.from}-${route.to}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center justify-between py-3 sm:py-3.5 border-b border-white/10 last:border-0"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 text-white">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm">{route.from}</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#f5a623]" />
                          <span className="font-medium text-xs sm:text-sm">{route.to}</span>
                        </div>
                        <div className="text-[#f5a623] font-black text-xs sm:text-sm">
                          {route.price}
                          <span className="text-white/60 font-normal text-xs ml-1">Fcfa</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 bg-[#1a5c2a]">
                  <a
                    href="https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20une%20livraison%20moto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold py-3 sm:py-4 rounded-2xl hover:bg-[#fbbf47] transition-all hover:shadow-lg text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Commander une livraison moto
                  </a>
                </div>
              </div>
            )}

            {/* ── Voiture ── */}
            {activeCategory.id === 'Voiture' && (
              <div className="bg-[#1a5c2a] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
                {/* Header */}
                <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{activeCategory.emoji}</span>
                    <div>
                      <h3 className="font-[var(--font-sora)] text-white font-bold text-lg sm:text-xl">
                        {activeCategory.label}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm">{activeCategory.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Sub-category pills */}
                <div className="px-5 sm:px-6 lg:px-8 pt-5 pb-2 flex gap-2 flex-wrap">
                  {activeCategory.subCategories!.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubCat(sub.id)}
                      className={`
                        flex items-center gap-1 sm:gap-1.5 rounded-xl 
                        text-xs sm:text-sm font-semibold transition-all duration-200
                        /* Mobile */
                        px-2.5 py-1.5
                        /* Tablette */
                        sm:px-3 sm:py-2
                        /* Desktop */
                        lg:px-4 lg:py-2
                        ${
                          activeSubCat === sub.id
                            ? 'bg-[#f5a623] text-[#1a5c2a]'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }
                      `}
                    >
                      <span className="text-sm sm:text-base">{sub.emoji}</span>
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>

                {/* Sub-cat desc */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubCat}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 sm:px-6 lg:px-8 pb-2 pt-1"
                  >
                    <p className="text-white/40 text-[10px] sm:text-xs">
                      {activeSubCategory?.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Routes */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubCat}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 sm:px-6 lg:px-8 py-2"
                  >
                    <div className="space-y-1 py-2">
                      {activeSubCategory?.routes.map((route, i) => (
                        <motion.div
                          key={`${route.from}-${route.to}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-center justify-between py-3 sm:py-3.5 border-b border-white/10 last:border-0"
                        >
                          <div className="flex items-center gap-2 sm:gap-3 text-white">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 flex-shrink-0" />
                            <span className="font-medium text-xs sm:text-sm">{route.from}</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#f5a623]" />
                            <span className="font-medium text-xs sm:text-sm">{route.to}</span>
                          </div>
                          <div className="text-[#f5a623] font-black text-xs sm:text-sm">
                            {route.price}
                            <span className="text-white/60 font-normal text-xs ml-1">Fcfa</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 bg-black/20">
                  <a
                    href="https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20un%20devis%20pour%20une%20livraison%20Voiture."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold py-3 sm:py-4 rounded-2xl hover:bg-[#fbbf47] transition-all hover:shadow-lg text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Demander un devis sur WhatsApp
                  </a>
                </div>
              </div>
            )}

            {/* ── Déménagement ── */}
            {activeCategory.id === 'Déménagement' && (
              <div className="bg-[#1a5c2a] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
                {/* Header */}
                <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 border-b border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{activeCategory.emoji}</span>
                    <div>
                      <h3 className="font-[var(--font-sora)] text-white font-bold text-lg sm:text-xl">
                        {activeCategory.label}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm">{activeCategory.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="px-5 sm:px-6 lg:px-8 py-4">
                  <div className="space-y-3 py-2">
                    {activeCategory.demenagementCategories!.map((item, i) => (
                      <motion.div
                        key={item.cat}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center justify-between py-3 sm:py-4 border-b border-white/10 last:border-0"
                      >
                        <div>
                          <div className="text-white font-semibold text-sm sm:text-base">
                            {item.cat}
                          </div>
                          <div className="text-white/50 text-xs sm:text-sm">
                            {item.desc}
                          </div>
                        </div>
                        <div className="text-[#f5a623] font-black text-xs sm:text-sm text-right">
                          {item.price}
                          <span className="text-white/60 font-normal text-xs ml-1">Fcfa</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 sm:px-6 lg:px-8 py-5 sm:py-6 bg-black/20">
                  <a
                    href="https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20un%20devis%20pour%20un%20d%C3%A9m%C3%A9nagement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold py-3 sm:py-4 rounded-2xl hover:bg-[#fbbf47] transition-all hover:shadow-lg text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Demander un devis Déménagement
                  </a>
                </div>
              </div>
            )}

            {/* Note */}
            <p className={`
              text-center text-gray-400
              /* Mobile */
              text-xs mt-4
              /* Tablette */
              sm:text-sm sm:mt-5
              /* Desktop */
              lg:text-base lg:mt-6
            `}>
              💡 Tarifs bidirectionnels — retour au même prix. Prix TTC, sans frais cachés.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}