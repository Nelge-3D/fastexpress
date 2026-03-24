"use client"

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react'

const categories = [
  {
    id: 'petits',
    label: 'Petits Colis',
    emoji: '📦',
    subtitle: 'Micro-ondes, TV, petits appareils...',
    color: 'bg-emerald-500',
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
    label: 'Moyen Colis',
    emoji: '🗃️',
    subtitle: 'Meubles, tables et équipements...',
    color: 'bg-blue-500',
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
    emoji: '🚚',
    subtitle: 'Réfrigérateurs, électroménagers...',
    color: 'bg-orange-500',
    routes: [
      { from: 'Akanda', to: 'Libreville', price: '25 000' },
      { from: 'Owendo', to: 'Akanda', price: '30 000' },
      { from: 'Libreville', to: 'Owendo', price: '25 000' },
      { from: 'Owendo', to: 'Ntoum', price: '30 000' },
      { from: 'Libreville', to: 'Cap Estérias', price: '30 000' },
    ],
  },
  {
    id: 'demenagement',
    label: 'Déménagement',
    emoji: '🏠',
    subtitle: 'Service complet de A à Z',
    color: 'bg-purple-500',
    isCategories: true,
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
  const [activeTab, setActiveTab] = useState('petits')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <section id="tarifs" className="py-20 px-4 md:px-8 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Tarifs
          </div>
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Nos prix{' '}
            <span className="text-[#f5a623]">transparents</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Des tarifs clairs et fixes, sans mauvaise surprise. Sélectionnez
            votre type de colis pour voir les prix par zone.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-[#1a5c2a] text-white shadow-lg shadow-green-900/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              {activeTab === cat.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-[#1a5c2a] -z-10"
                />
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
            className="max-w-2xl mx-auto"
          >
            {/* Card */}
            <div className="bg-[#1a5c2a] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
              {/* Card header */}
              <div className="px-8 py-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCategory.emoji}</span>
                  <div>
                    <h3 className="font-[var(--font-sora)] text-white font-bold text-xl">
                      {activeCategory.label}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Routes or categories */}
              <div className="px-8 py-4">
                {activeCategory.isCategories ? (
                  <div className="space-y-3 py-2">
                    {activeCategory.demenagementCategories!.map((item, i) => (
                      <motion.div
                        key={item.cat}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center justify-between py-4 border-b border-white/10 last:border-0"
                      >
                        <div>
                          <div className="text-white font-semibold">
                            {item.cat}
                          </div>
                          <div className="text-white/50 text-sm">{item.desc}</div>
                        </div>
                        <div className="text-[#f5a623] font-black text-right">
                          {item.price}
                          <span className="text-white/60 font-normal text-sm ml-1">
                            Fcfa
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1 py-2">
                    {activeCategory.routes!.map((route, i) => (
                      <motion.div
                        key={`${route.from}-${route.to}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center justify-between py-3.5 border-b border-white/10 last:border-0"
                      >
                        <div className="flex items-center gap-3 text-white">
                          <MapPin className="w-4 h-4 text-white/40 flex-shrink-0" />
                          <span className="font-medium">{route.from}</span>
                          <ArrowRight className="w-4 h-4 text-[#f5a623]" />
                          <span className="font-medium">{route.to}</span>
                        </div>
                        <div className="text-[#f5a623] font-black">
                          {route.price}
                          <span className="text-white/60 font-normal text-sm ml-1">
                            Fcfa
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card footer CTA */}
              <div className="px-8 py-6 bg-black/20">
                <a
                  href="https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20un%20devis%20pour%20une%20livraison."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold py-4 rounded-2xl hover:bg-[#fbbf47] transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Demander un devis sur WhatsApp
                </a>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-gray-400 text-sm mt-4">
              💡 Tarifs bidirectionnels — retour au même prix. Prix TTC, sans frais cachés.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}