"use client"

import { motion, Variants } from 'motion/react'
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Package, 
  Clock, 
  Star, 
  Smartphone, 
  Bell,
} from 'lucide-react'
import Image from 'next/image'

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

const WHATSAPP_ORDER = 'https://wa.me/24166647096?text=Bonjour%2C%20je%20voudrais%20passer%20une%20commande.'
const WHATSAPP_CALL  = 'https://wa.me/24177520785'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a5c2a] pt-15 md:pt-20 pb-15"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c2a] via-[#1f6a32] to-[#0f3d1d]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#f5a623]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px]"
        />
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
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-10 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
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
              pour vos colis et Déménagements.
            </motion.p>

            {/* CTAs — WhatsApp */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#f5a623] text-[#1a5c2a] font-bold px-7 py-4 rounded-2xl shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Commander sur WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={WHATSAPP_CALL}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* RIGHT — App "Fast Delivery" coming soon */}
<div className="hidden lg:flex justify-center items-center relative">
  {/* Glow simple */}
  <div className="absolute w-80 h-80 bg-[#f5a623]/20 rounded-full blur-3xl" />

  <motion.div
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="relative z-10 w-72"
  >
    {/* App card épurée */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
      
      {/* App icon avec image réelle */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-4"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/20">
            <Image
              src="/appicon.jpeg"
              alt="Fast Express app"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Petit badge de notification */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"
          />
        </div>
      </motion.div>

      {/* Titre simplifié */}
      <div className="text-center">
        <h3 className="text-white font-bold text-xl">Fast Delivery</h3>
        <p className="text-white/50 text-xs">by Fast Express</p>
      </div>

      {/* Badge "Bientôt" */}
      <div className="flex justify-center my-3">
        <span className="inline-flex items-center gap-1.5 bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#f5a623] text-xs font-medium px-3 py-1 rounded-full">
          <Clock className="w-3 h-3" />
          Bientôt disponible
        </span>
      </div>

      {/* Description courte */}
      <p className="text-white/60 text-xs text-center leading-relaxed mb-4">
        Commandez et suivez vos livraisons en temps réel
      </p>

      {/* Boutons stores simplifiés */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2 opacity-60">
          <Smartphone className="w-4 h-4 text-white/60" />
          <div>
            <div className="text-white/40 text-[8px]">Bientôt sur</div>
            <div className="text-white text-xs font-semibold">App Store</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2 opacity-60">
          <Smartphone className="w-4 h-4 text-white/60" />
          <div>
            <div className="text-white/40 text-[8px]">Bientôt sur</div>
            <div className="text-white text-xs font-semibold">Google Play</div>
          </div>
        </div>
      </div>

      {/* CTA WhatsApp */}
      <motion.a
        href={WHATSAPP_ORDER}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-center gap-2 bg-[#f5a623] text-[#1a5c2a] font-semibold text-xs py-2 rounded-xl transition-all"
      >
        <Bell className="w-3 h-3" />
        Me notifier
      </motion.a>
    </div>

    {/* Petit badge flottant */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute -bottom-3 -right-4 bg-[#1a5c2a] border border-[#f5a623]/40 rounded-xl px-2 py-1 flex items-center gap-1 shadow-lg"
    >
      <Smartphone className="w-3 h-3 text-[#f5a623]" />
      <span className="text-white text-[10px] font-medium">iOS • Android</span>
    </motion.div>
  </motion.div>
</div>
        </div>
      </div>
    </section>
  )
}