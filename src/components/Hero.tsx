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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a5c2a]"
    >
      {/* 🔥 Background amélioré */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c2a] via-[#1f6a32] to-[#0f3d1d]" />

        {/* Glow doré */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#f5a623]/20 rounded-full blur-[120px]"
        />

        {/* Glow secondaire */}
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#f5a623]/20 border border-[#f5a623]/30 text-[#f5a623] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              Livraison rapide à Libreville
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Livrez vos colis{' '}
              <span className="text-[#f5a623] relative">
                en toute confiance
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-1 left-0 right-0 h-1 bg-[#f5a623]/40 rounded-full origin-left"
                />
              </span>
              <br />
              partout à Libreville
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/70 text-lg mb-8 max-w-lg"
            >
              Fast Express vous garantit une livraison rapide, sécurisée et fiable
              pour vos colis et déménagements.
            </motion.p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold px-7 py-4 rounded-2xl shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Commander
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="flex items-center gap-3 border border-white/30 text-white px-7 py-4 rounded-2xl backdrop-blur"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={floatingBadge as Variants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#f5a623] mx-auto mb-1" />
                  <div className="text-white font-bold">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center relative">

            {/* Cercle glow */}
            <div className="absolute w-[400px] h-[400px] bg-[#f5a623]/10 rounded-full blur-3xl" />

            {/* Carte UI stylée */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-white rounded-3xl p-6 shadow-2xl w-[280px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1a5c2a] rounded-xl flex items-center justify-center text-white">
                  🛵
                </div>
                <div>
                  <div className="font-bold text-gray-800">Course en cours</div>
                  <div className="text-xs text-gray-500">Livraison active</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-3">
                📍 Batterie IV → Charbonnages
              </div>

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "30%" }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-full bg-[#f5a623]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}