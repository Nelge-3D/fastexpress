"use client"

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Zap, Shield, Heart, MapPin } from 'lucide-react'

const members = [
  { name: 'Jean-Marc Obame', role: 'Fondateur & CEO', initials: 'JO', color: 'bg-[#1a5c2a]' },
  { name: 'Sandrine Mba', role: 'Responsable Livraisons', initials: 'SM', color: 'bg-[#f5a623]' },
  { name: 'Patrick Nguema', role: 'Chef des Coursiers', initials: 'PN', color: 'bg-emerald-600' },
  { name: 'Aurore Biyoghe', role: 'Service Client', initials: 'AB', color: 'bg-amber-500' },
  { name: 'Rodrigue Ella', role: 'Logistique & Stocks', initials: 'RE', color: 'bg-[#246b35]' },
  { name: 'Fatima Mouele', role: 'E-commerce & Pro', initials: 'FM', color: 'bg-yellow-600' },
  { name: 'Cédric Ossomba', role: 'Chauffeur Senior', initials: 'CO', color: 'bg-green-700' },
  { name: 'Laure Minko', role: 'Comptabilité', initials: 'LM', color: 'bg-[#d4891a]' },
]

// Duplicate for infinite scroll effect
const allMembers = [...members, ...members]

const values = [
  {
    icon: Zap,
    title: 'Rapidité',
    desc: 'Livraison dans les meilleurs délais, toujours dans les temps.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    desc: 'Vos colis sont entre de bonnes mains, traités avec soin.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Heart,
    title: 'Confiance',
    desc: 'Un service client attentif et à l\'écoute en permanence.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: MapPin,
    title: 'Proximité',
    desc: 'Présent dans toutes les zones de Libreville et environs.',
    color: 'bg-green-100 text-green-600',
  },
]

const zones = [
  'Libreville', 'Akanda', 'Owendo', 'Ntoum', 'Cap Estérias',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="apropos" className="py-20 px-4 md:px-8 bg-white">
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            À propos
          </div>
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Fast Livraison{' '}
            <span className="text-[#f5a623]">Express</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fast Express est une société de livraison et de logistique basée à
              Libreville, au Gabon. Nous offrons des services de livraison de
              colis, de déménagement et de solutions logistiques pour les
              particuliers et les entreprises.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Notre mission : rendre la livraison accessible, rapide et fiable
              pour tous. Que vous soyez un particulier ou un vendeur en ligne,
              nous avons la solution qu&apos;il vous faut.
            </p>

            {/* Zones */}
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                Zones couvertes
              </p>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone, i) => (
                  <motion.span
                    key={zone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-1.5 bg-[#1a5c2a]/5 text-[#1a5c2a] border border-[#1a5c2a]/20 text-sm font-semibold px-4 py-2 rounded-full"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#f5a623]" />
                    {zone}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className={`${val.color} w-11 h-11 rounded-2xl flex items-center justify-center mb-4`}>
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="font-[var(--font-sora)] font-bold text-gray-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Members scrolling band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Notre équipe
            </p>
            <h3 className="font-[var(--font-sora)] text-2xl md:text-3xl font-black text-gray-900">
              Les personnes derrière{' '}
              <span className="text-[#f5a623]">Fast Express</span>
            </h3>
          </div>

          {/* Infinite scroll track */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a5c2a] via-[#246b35] to-[#1a5c2a] py-10 px-0">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#1a5c2a] to-transparent pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#1a5c2a] to-transparent pointer-events-none" />

            {/* Scrolling row */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 28,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="flex gap-8 w-max"
            >
              {allMembers.map((member, i) => (
                <div
                  key={`${member.name}-${i}`}
                  className="flex flex-col items-center gap-3 group flex-shrink-0"
                >
                  {/* Avatar circle */}
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center 
                        shadow-xl ring-4 ring-white/20 group-hover:ring-[#f5a623]/60 
                        transition-all duration-300 group-hover:scale-110`}
                    >
                      <span className="font-[var(--font-sora)] text-white font-black text-lg">
                        {member.initials}
                      </span>
                    </div>
                    {/* Online dot */}
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1a5c2a]" />
                  </div>

                  {/* Name & role */}
                  <div className="text-center">
                    <p className="font-[var(--font-sora)] text-white font-bold text-sm whitespace-nowrap">
                      {member.name}
                    </p>
                    <p className="text-[#f5a623] text-xs font-medium whitespace-nowrap mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tagline under band */}
          <p className="text-center text-gray-400 text-sm mt-5">
            🤝 Une équipe passionnée, disponible 6j/7 pour votre satisfaction
          </p>
        </motion.div>
      </div>
    </section>
  )
}