"use client"

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react'

const contactCards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '066 64 70 96',
    value2: '074 75 57 28',
    href: 'https://wa.me/24166647096?text=Bonjour%20Fast%20Express,%20je%20voudrais%20une%20livraison.',
    color: 'bg-green-500',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '066 64 70 96',
    value2: '074 75 57 28',
    href: 'tel:0666470096',
    color: 'bg-[#1a5c2a]',
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: 'Lun – Dim',
    value2: '9h – 18h',
    href: null,
    color: 'bg-[#f5a623]',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 bg-[#1a5c2a] relative overflow-hidden"
    >
      {/* Background decoration simplifié */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#f5a623] text-sm font-semibold px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Contact
          </div>
          <h2 className="font-[var(--font-sora)] text-2xl md:text-3xl font-black text-white">
            Contactez-nous{' '}
            <span className="text-[#f5a623]">maintenant</span>
          </h2>
          <p className="text-white/60 text-sm mt-2 max-w-md mx-auto">
            Appelez-nous ou écrivez sur WhatsApp
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href || undefined}
              target={card.href?.startsWith('http') ? '_blank' : undefined}
              rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={card.href ? { y: -2, scale: 1.02 } : {}}
              className={`${card.href ? 'cursor-pointer' : 'cursor-default'} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-all`}
            >
              <div className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-[var(--font-sora)] text-white font-bold text-base mb-1">
                {card.title}
              </h3>
              <p className="text-white font-semibold text-lg">{card.value}</p>
              {card.value2 && (
                <p className="text-[#f5a623] font-semibold text-base">{card.value2}</p>
              )}
            </motion.a>
          ))}
        </div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-white/40 text-xs"
        >
          <MapPin className="w-3 h-3 text-[#f5a623]" />
          Libreville, Gabon — Livraison dans toute la zone urbaine
        </motion.div>
      </div>
    </section>
  )
}