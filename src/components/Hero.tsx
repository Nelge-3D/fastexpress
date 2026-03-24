"use client"

import { motion, Variants } from 'motion/react'
import { MessageCircle, Phone, MapPin, Package, Clock, Star } from 'lucide-react'

const stats = [
  { icon: Package, value: '5 000+', label: 'Colis livrés' },
  { icon: MapPin, value: '5', label: 'Zones couvertes' },
  { icon: Clock, value: '24h', label: 'Délai moyen' },
  { icon: Star, value: 'Libreville', label: '& environs' },
]

const floatingBadge = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.15, duration: 0.5, ease: 'backOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden animated-bg"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 blob-1"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [5, 0, 5] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#f5a623]/10 blob-2"
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-white/3 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#f5a623]/20 border border-[#f5a623]/30 text-[#f5a623] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              🛵 Livraison & Déménagement à Libreville
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
            >
              Vos colis livrés{' '}
              <span className="text-[#f5a623] relative">
                rapidement
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-[#f5a623]/30 rounded-full origin-left"
                />
              </span>
              <br />
              partout à Libreville
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Fast Express, votre partenaire logistique de confiance. Livraison
              de colis, déménagement et services aux entreprises dans tout
              Libreville.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="https://wa.me/24166647096?text=Bonjour%20Fast%20Express,%20je%20voudrais%20commander%20une%20livraison."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="pulse-gold flex items-center gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold px-7 py-4 rounded-2xl shadow-lg shadow-yellow-400/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Commander via WhatsApp
              </motion.a>

              <motion.a
                href="tel:0666470096"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 border-2 border-white/40 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                066 64 70 96
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={floatingBadge as Variants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#f5a623] mx-auto mb-1" />
                  <div className="text-white font-black text-lg font-[var(--font-sora)]">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Scooter visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Big circle bg */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-white/5 border border-white/10" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-white/5 border border-white/10" />

            {/* Scooter emoji / icon animated */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 text-center"
            >
              <div className="text-[160px] leading-none select-none filter drop-shadow-2xl">
                🛵
              </div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 text-white/60 text-sm font-medium tracking-widest uppercase"
              >
                En route pour vous
              </motion.div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-8 right-8 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center text-base">
                📦
              </div>
              <div>
                <div className="text-xs font-bold text-gray-800">Colis récupéré</div>
                <div className="text-xs text-green-600 font-medium">En livraison</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 left-4 bg-[#f5a623] rounded-2xl p-3 shadow-xl"
            >
              <div className="text-white text-xs font-bold">⚡ Livraison express</div>
              <div className="text-white/80 text-xs">Dans les 24h</div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute bottom-8 right-4 bg-white rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-1">
                {'⭐'.repeat(5).split('').map((star, i) => (
                  <span key={i} className="text-xs">⭐</span>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-800 mt-1">Clients satisfaits</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}