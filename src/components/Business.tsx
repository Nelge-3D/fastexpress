"use client"

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Warehouse,
  PackageCheck,
  Package,
  Bike,
  CreditCard,
  FileText,
  Zap,
  FolderOpen,
  Utensils,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const ecommerceSteps = [
  { icon: Warehouse, label: 'Stockage des produits', color: 'bg-emerald-100 text-emerald-700' },
  { icon: PackageCheck, label: 'Préparation & emballage', color: 'bg-blue-100 text-blue-700' },
  { icon: Package, label: 'Gestion des commandes', color: 'bg-orange-100 text-orange-700' },
  { icon: Bike, label: 'Livraison clients', color: 'bg-purple-100 text-purple-700' },
  { icon: CreditCard, label: 'Encaissement du paiement', color: 'bg-pink-100 text-pink-700' },
]

const businessServices = [
  {
    icon: FileText,
    title: 'Courriers Administratifs',
    desc: 'Livraison et dépôt auprès des administrations',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Zap,
    title: 'Courses urgentes en ville',
    desc: 'Administrations, partenaires, clients, fournisseurs...',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Package,
    title: 'Colis & Documents',
    desc: 'Récupération et livraison sécurisée',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Utensils,
    title: 'Récupération de repas',
    desc: 'Commande auprès des restaurants pour vos équipes',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: FolderOpen,
    title: 'Transfert de dossiers',
    desc: 'Entre bureaux et partenaires',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: UtensilsCrossed,
    title: "Repas d'entreprise",
    desc: 'Service traiteur avec menu hebdomadaire',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

export default function Business() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const ref2 = useRef(null)
  const inView2 = useInView(ref2, { once: true, margin: '-100px' })

  return (
    <section id="business" className="py-20 px-4 md:px-8 bg-[#f9fafb]">
      <div className="container-custom space-y-24">

        {/* ── E-commerce section ── */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              E-commerce & Entreprises
            </div>
            <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Le partenaire logistique des{' '}
              <span className="text-[#f5a623]">vendeurs en ligne</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Déposez vos produits chez Fast Express, nous gérons{' '}
              <strong className="text-[#1a5c2a]">toute votre logistique</strong> !
            </p>
          </motion.div>

          {/* Steps flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 flex-wrap">
            {ecommerceSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.4, ease: 'backOut' }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all min-w-[130px] max-w-[160px] text-center border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 text-sm font-semibold leading-tight">
                    {step.label}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#1a5c2a] text-white text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>

                {/* Arrow between steps */}
                {i < ecommerceSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="text-[#f5a623] hidden md:block"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Fast Business Services ── */}
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
              Fast Business Services
            </div>
            <h2 className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              La solution logistique des{' '}
              <span className="text-[#f5a623]">entreprises</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Confiez vos courriers, vos courses et vos livraisons à Fast Express.
              Nous gérons tout pour que vous puissiez vous concentrer sur votre activité.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {businessServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className={`${service.bg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="font-[var(--font-sora)] font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#1a5c2a] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-[#f5a623]" />
                  Disponible maintenant
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#1a5c2a] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#f5a623]" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white" />
            </div>

            <div className="relative z-10">
              <h3 className="font-[var(--font-sora)] text-2xl md:text-3xl font-black text-white mb-2">
                Votre entreprise a besoin d&apos;un{' '}
                <span className="text-[#f5a623]">partenaire fiable ?</span>
              </h3>
              <p className="text-white/70">
                Contactez-nous pour un devis personnalisé adapté à vos besoins.
              </p>
            </div>

            <motion.a
              href="https://wa.me/24166647096?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20les%20services%20Fast%20Business."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex-shrink-0 bg-[#f5a623] text-[#1a5c2a] font-bold px-8 py-4 rounded-2xl hover:bg-[#fbbf47] transition-all shadow-lg"
            >
              Nous contacter →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}