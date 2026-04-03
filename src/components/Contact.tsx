"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { MessageCircle, Phone, Clock, MapPin, Mail, Send, CheckCircle } from 'lucide-react'

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

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const subject = encodeURIComponent(`Message de ${form.name} via FastExpress`)
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    )
    window.location.href = `mailto:Fastexpresslbv@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all'

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 bg-[#1a5c2a] relative overflow-hidden"
    >
      {/* Effets d'ombrage en arrière-plan */}
      
      {/* 1. Gradient radial sombre pour profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 pointer-events-none" />
      
      {/* 2. Ombres colorées animées */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 -left-20 w-72 h-72 bg-[#f5a623]/20 rounded-full blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      
      {/* 3. Ombres portées sur les bords */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      {/* 4. Effet de vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
      
      {/* 5. Pattern de fond avec ombre */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* 6. Ombres douces supplémentaires pour les cartes en arrière-plan */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[#f5a623] text-sm font-semibold px-3 py-1 rounded-full mb-3 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            Contact
          </div>
          <h2 className="font-[var(--font-sora)] text-2xl md:text-3xl font-black text-white drop-shadow-lg">
            Contactez-nous{' '}
            <span className="text-[#f5a623] drop-shadow-md">maintenant</span>
          </h2>
          <p className="text-white/60 text-sm mt-2 max-w-md mx-auto">
            Appelez-nous, écrivez sur WhatsApp ou envoyez-nous un message
          </p>
        </motion.div>

        {/* Contact cards avec ombres portées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href || undefined}
              target={card.href?.startsWith('http') ? '_blank' : undefined}
              rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={card.href ? { y: -5, scale: 1.02 } : {}}
              className={`${card.href ? 'cursor-pointer' : 'cursor-default'} bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]`}
            >
              <div className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <card.icon className="w-5 h-5 text-white drop-shadow" />
              </div>
              <h3 className="font-[var(--font-sora)] text-white font-bold text-base mb-1">
                {card.title}
              </h3>
              <p className="text-white font-semibold text-lg drop-shadow">{card.value}</p>
              {card.value2 && (
                <p className="text-[#f5a623] font-semibold text-base drop-shadow">{card.value2}</p>
              )}
            </motion.a>
          ))}
        </div>

        {/* Email contact form avec ombres */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-8 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-shadow duration-500"
        >
          {/* Form header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#f5a623] w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
              <Mail className="w-5 h-5 text-white drop-shadow" />
            </div>
            <div>
              <h3 className="font-[var(--font-sora)] text-white font-bold text-base drop-shadow">
                Envoyer un message
              </h3>
              <p className="text-white/50 text-xs">
                Réponse sous 24h —{' '}
                <a
                  href="mailto:Fastexpresslbv@gmail.com"
                  className="text-[#f5a623] hover:underline transition-colors"
                >
                  fastexpresslbv@gmail.com
                </a>
              </p>
            </div>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 py-8 text-center"
            >
              <CheckCircle className="w-12 h-12 text-[#f5a623] drop-shadow-lg" />
              <p className="text-white font-semibold text-base">Message envoyé !</p>
              <p className="text-white/50 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-[#f5a623] text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs mb-1.5 font-medium">
                    Votre email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs mb-1.5 font-medium">
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Décrivez votre besoin de livraison..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#f5a623] hover:bg-[#e09610] disabled:opacity-70 text-white font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Ouverture du mail…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 drop-shadow" />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="flex items-center justify-center gap-2 text-white/40 text-xs"
        >
          <MapPin className="w-3 h-3 text-[#f5a623] drop-shadow" />
          Libreville, Gabon — Livraison dans toute la zone urbaine
        </motion.div>
      </div>
    </section>
  )
}