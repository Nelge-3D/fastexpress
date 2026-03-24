"use client"

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { MessageCircle, Phone, Clock, MapPin, ArrowRight } from 'lucide-react'

const contactCards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '066 64 70 96',
    desc: 'Réponse rapide, commande en ligne',
    href: 'https://wa.me/24166647096?text=Bonjour%20Fast%20Express,%20je%20voudrais%20une%20livraison.',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    cta: 'Envoyer un message',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '066 64 70 96',
    value2: '074 75 57 28',
    desc: 'Appelez-nous directement',
    href: 'tel:0666470096',
    color: 'bg-[#1a5c2a]',
    hoverColor: 'hover:bg-[#246b35]',
    cta: 'Appeler maintenant',
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: 'Lun – Sam',
    value2: '7h – 21h',
    desc: 'Disponibles 6 jours / 7',
    href: null,
    color: 'bg-[#f5a623]',
    hoverColor: '',
    cta: null,
  },
]

const quickMessages = [
  { text: 'Je veux livrer un colis', emoji: '📦' },
  { text: 'Je veux déménager', emoji: '🏠' },
  { text: 'Service entreprise', emoji: '🏢' },
  { text: 'Demander un devis', emoji: '💬' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-[#1a5c2a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blob-1" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#f5a623]/10 blob-2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#f5a623] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Contact
          </div>
          <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Contactez-nous{' '}
            <span className="text-[#f5a623]">maintenant</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Besoin d&apos;une livraison ? Appelez-nous ou écrivez-nous sur WhatsApp.
            Nous sommes là pour vous !
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 text-center hover:bg-white/15 transition-all"
            >
              <div className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-[var(--font-sora)] text-white font-bold text-lg mb-1">
                {card.title}
              </h3>
              <p className="text-white/50 text-sm mb-3">{card.desc}</p>
              <p className="text-white font-bold text-xl">{card.value}</p>
              {card.value2 && (
                <p className="text-[#f5a623] font-bold text-xl">{card.value2}</p>
              )}
              {card.href && card.cta && (
                <motion.a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-5 flex items-center justify-center gap-2 ${card.color} ${card.hoverColor} text-white font-semibold py-3 px-6 rounded-xl transition-colors`}
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick WhatsApp messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm font-medium mb-4 uppercase tracking-widest">
            Messages rapides WhatsApp
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickMessages.map((msg, i) => (
              <motion.a
                key={msg.text}
                href={`https://wa.me/24166647096?text=${encodeURIComponent(msg.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-[#f5a623] border border-white/20 hover:border-[#f5a623] text-white hover:text-[#1a5c2a] font-semibold text-sm px-5 py-3 rounded-full transition-all"
              >
                <span>{msg.emoji}</span>
                {msg.text}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-2 text-white/40 text-sm"
        >
          <MapPin className="w-4 h-4 text-[#f5a623]" />
          Basé à Libreville, Gabon — Service disponible dans toute la zone urbaine
        </motion.div>
      </div>
    </section>
  )
}