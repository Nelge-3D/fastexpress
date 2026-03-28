"use client"

import { useRef, useMemo } from 'react'
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
  Shield,
  Clock,
  Headphones,
  TrendingDown,
  FileSpreadsheet,
  Lock,
} from 'lucide-react'

// Types
interface Step {
  icon: React.ElementType
  label: string
  desc: string
  color: string
}

interface Service {
  icon: React.ElementType
  title: string
  desc: string
  color: string
  bg: string
}

interface Advantage {
  icon: React.ElementType
  text: string
}

// Données
const ecommerceSteps: Step[] = [
  { icon: Warehouse, label: 'Stockage', desc: 'Entreposez vos produits chez nous', color: 'bg-emerald-100 text-emerald-700' },
  { icon: PackageCheck, label: 'Préparation', desc: 'Emballage soigné', color: 'bg-blue-100 text-blue-700' },
  { icon: Package, label: 'Gestion', desc: 'Traitement des commandes', color: 'bg-orange-100 text-orange-700' },
  { icon: Bike, label: 'Livraison', desc: 'Transport rapide', color: 'bg-purple-100 text-purple-700' },
  { icon: CreditCard, label: 'Encaissement', desc: 'Paiement sécurisé', color: 'bg-pink-100 text-pink-700' },
]

const administrativeServices: Service[] = [
  {
    icon: FileText,
    title: 'Courriers Administratifs',
    desc: 'Livraison et dépôt auprès des administrations',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Zap,
    title: 'Courses urgentes',
    desc: 'Administrations, partenaires, fournisseurs...',
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
]

const restaurantServices: Service[] = [
  {
    icon: Utensils,
    title: 'Récupération repas',
    desc: 'Commande auprès des restaurants',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: FolderOpen,
    title: 'Transfert dossiers',
    desc: 'Entre bureaux et partenaires',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: UtensilsCrossed,
    title: "Repas d'entreprise",
    desc: 'Menu hebdomadaire personnalisé',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

const advantages: Advantage[] = [
  { icon: Clock, text: 'Livraison express en moins d\'1 heure' },
  { icon: Lock, text: 'Suivi en temps réel de vos colis' },
  { icon: Headphones, text: 'Service client dédié 7j/7' },
  { icon: TrendingDown, text: 'Tarifs préférentiels pour les entreprises' },
  { icon: FileSpreadsheet, text: 'Facturation mensuelle simplifiée' },
  { icon: Shield, text: 'Assurance incluse sur tous les envois' },
]

// Breakpoints responsives (en px)
const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
}

// Composants réutilisables avec padding/margin responsive
const SectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  highlight,
  inView 
}: { 
  badge: string
  title: string
  subtitle: string
  highlight: string
  inView: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="text-center"
    style={{
      marginBottom: 'clamp(2rem, 5vw, 4rem)',
      marginTop: 'clamp(1rem, 3vw, 2rem)',
    }}
  >
    <div className="section-badge inline-flex items-center gap-2 justify-center mb-3 sm:mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
      <span className="text-xs sm:text-sm font-medium text-gray-600">{badge}</span>
    </div>
    <h2 className="font-[var(--font-sora)] font-black text-gray-900 px-4" style={{
      fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
      marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
    }}>
      {title}{' '}
      <span className="text-[#f5a623] whitespace-nowrap">{highlight}</span>
    </h2>
    <p className="text-gray-500 px-4 mx-auto" style={{
      fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
      maxWidth: 'min(90%, 42rem)',
    }}>
      {subtitle}
    </p>
  </motion.div>
)

const ServiceCard = ({ 
  service, 
  index, 
  inView,
  delay = 0.3 
}: { 
  service: Service
  index: number
  inView: boolean
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: delay + index * 0.1, duration: 0.4 }}
    className="flex items-start gap-3 sm:gap-4 group hover:translate-x-1 transition-transform"
  >
    <CheckCircle2 className="flex-shrink-0 mt-0.5" style={{
      width: 'clamp(1rem, 4vw, 1.5rem)',
      height: 'clamp(1rem, 4vw, 1.5rem)',
    }} />
    <div>
      <h4 className="font-semibold text-gray-800 mb-1" style={{
        fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
      }}>
        {service.title}
      </h4>
      <p className="text-gray-500" style={{
        fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
      }}>
        {service.desc}
      </p>
    </div>
  </motion.div>
)

const AdvantageItem = ({ 
  advantage, 
  index, 
  inView 
}: { 
  advantage: Advantage
  index: number
  inView: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
    className="flex items-center gap-2 sm:gap-3"
  >
    <advantage.icon className="flex-shrink-0 text-[#1a5c2a]" style={{
      width: 'clamp(0.875rem, 3vw, 1.25rem)',
      height: 'clamp(0.875rem, 3vw, 1.25rem)',
    }} />
    <span className="text-gray-700" style={{
      fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
    }}>{advantage.text}</span>
  </motion.div>
)

export default function Business() {
  const ecommerceRef = useRef(null)
  const servicesRef = useRef(null)
  
  const ecommerceInView = useInView(ecommerceRef, { once: true, margin: '-100px' })
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })

  // Mémorisation des étapes pour éviter les re-rendus inutiles
  const ecommerceStepsMemo = useMemo(() => ecommerceSteps, [])

  return (
    <section 
      id="business" 
      className="bg-gradient-to-b from-gray-50 to-white"
      style={{
        paddingTop: 'clamp(3rem, 8vw, 8rem)',
        paddingBottom: 'clamp(3rem, 8vw, 8rem)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{
        maxWidth: 'min(100%, 1280px)',
      }}>
        <div style={{
          gap: 'clamp(2rem, 6vw, 6rem)',
          display: 'flex',
          flexDirection: 'column',
        }}>
        
        {/* ── E-commerce Section ── */}
        <div ref={ecommerceRef}>
          <SectionHeader
            badge="E-commerce & Entreprises"
            title="Le partenaire logistique des"
            subtitle="Déposez vos produits chez Fast Express, nous gérons toute votre logistique !"
            highlight="vendeurs en ligne"
            inView={ecommerceInView}
          />

          {/* Steps Flow */}
          <div style={{
            marginTop: 'clamp(1.5rem, 5vw, 4rem)',
          }}>
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative" style={{
              gap: 'clamp(1rem, 3vw, 1.5rem)',
            }}>
              {ecommerceStepsMemo.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={ecommerceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full" style={{
                    padding: 'clamp(1rem, 4vw, 1.75rem)',
                  }}>
                    <div className="absolute -top-3 -right-3 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#1a5c2a] text-white text-xs font-black flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                    
                    <div className={`rounded-2xl ${step.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`} style={{
                      width: 'clamp(3rem, 10vw, 4.5rem)',
                      height: 'clamp(3rem, 10vw, 4.5rem)',
                    }}>
                      <step.icon style={{
                        width: 'clamp(1.25rem, 5vw, 2.25rem)',
                        height: 'clamp(1.25rem, 5vw, 2.25rem)',
                      }} />
                    </div>
                    
                    <h3 className="text-gray-800 font-bold mb-2" style={{
                      fontSize: 'clamp(0.875rem, 3.5vw, 1.25rem)',
                    }}>
                      {step.label}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed" style={{
                      fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                  
                  {index < ecommerceStepsMemo.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#f5a623] bg-white rounded-full p-1 shadow-md z-10">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={ecommerceInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-400 mt-8 sm:mt-10 md:mt-12"
            style={{
              fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
            }}
          >
            🔄 De la réception à la livraison finale, nous gérons chaque étape
          </motion.p>
        </div>

        {/* ── Fast Business Services Section ── */}
        <div ref={servicesRef}>
          <SectionHeader
            badge="Fast Business Services"
            title="La solution logistique des"
            subtitle="Confiez vos courriers, vos courses et vos livraisons à Fast Express. Nous gérons tout pour que vous puissiez vous concentrer sur votre activité."
            highlight="entreprises"
            inView={servicesInView}
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{
            gap: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
          }}>
            
            {/* Administrative Services Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              style={{
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
              }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-5 border-b border-gray-100">
                <div className="rounded-xl bg-emerald-100 flex items-center justify-center" style={{
                  width: 'clamp(2rem, 7vw, 3rem)',
                  height: 'clamp(2rem, 7vw, 3rem)',
                }}>
                  <FileText style={{
                    width: 'clamp(1rem, 4vw, 1.5rem)',
                    height: 'clamp(1rem, 4vw, 1.5rem)',
                  }} className="text-emerald-600" />
                </div>
                <h3 className="font-[var(--font-sora)] font-bold text-gray-900" style={{
                  fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
                }}>
                  Services courriers & administratifs
                </h3>
              </div>
              
              <div style={{
                gap: 'clamp(0.75rem, 3vw, 1.25rem)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {administrativeServices.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    inView={servicesInView}
                    delay={0.3}
                  />
                ))}
              </div>
            </motion.div>

            {/* Restaurant Services Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              style={{
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
              }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 md:pb-5 border-b border-gray-100">
                <div className="rounded-xl bg-orange-100 flex items-center justify-center" style={{
                  width: 'clamp(2rem, 7vw, 3rem)',
                  height: 'clamp(2rem, 7vw, 3rem)',
                }}>
                  <Utensils style={{
                    width: 'clamp(1rem, 4vw, 1.5rem)',
                    height: 'clamp(1rem, 4vw, 1.5rem)',
                  }} className="text-orange-600" />
                </div>
                <h3 className="font-[var(--font-sora)] font-bold text-gray-900" style={{
                  fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
                }}>
                  Restauration & logistique
                </h3>
              </div>
              
              <div style={{
                gap: 'clamp(0.75rem, 3vw, 1.25rem)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {restaurantServices.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    inView={servicesInView}
                    delay={0.4}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Advantages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100"
            style={{
              padding: 'clamp(1.5rem, 5vw, 2.5rem)',
              marginBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Zap style={{
                width: 'clamp(1.25rem, 4vw, 1.75rem)',
                height: 'clamp(1.25rem, 4vw, 1.75rem)',
              }} className="text-[#f5a623]" />
              <h3 className="font-[var(--font-sora)] font-bold text-gray-800" style={{
                fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              }}>
                Pourquoi choisir Fast Express Business ?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{
              gap: 'clamp(0.75rem, 3vw, 1.5rem)',
            }}>
              {advantages.map((advantage, index) => (
                <AdvantageItem
                  key={advantage.text}
                  advantage={advantage}
                  index={index}
                  inView={servicesInView}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-[#1a5c2a] to-[#246b35] rounded-2xl sm:rounded-3xl flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-xl"
            style={{
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              gap: 'clamp(1rem, 4vw, 2rem)',
            }}
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#f5a623]" />
            </div>

            <div className="relative z-10 text-center lg:text-left">
              <h3 className="font-[var(--font-sora)] font-black text-white" style={{
                fontSize: 'clamp(1.25rem, 5vw, 2.5rem)',
                marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)',
              }}>
                Besoin d&apos;un{' '}
                <span className="text-[#f5a623]">partenaire fiable ?</span>
              </h3>
              <p className="text-white/80 mx-auto lg:mx-0" style={{
                fontSize: 'clamp(0.75rem, 3vw, 1rem)',
                maxWidth: 'min(100%, 28rem)',
              }}>
                Contactez-nous pour un devis personnalisé adapté à vos besoins.
              </p>
            </div>

            <motion.a
              href="https://wa.me/24166647096?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20les%20services%20Fast%20Business."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 flex-shrink-0 bg-[#f5a623] text-[#1a5c2a] font-bold rounded-xl hover:bg-[#fbbf47] transition-all shadow-lg whitespace-nowrap"
              style={{
                paddingLeft: 'clamp(1rem, 5vw, 2.5rem)',
                paddingRight: 'clamp(1rem, 5vw, 2.5rem)',
                paddingTop: 'clamp(0.75rem, 3vw, 1.25rem)',
                paddingBottom: 'clamp(0.75rem, 3vw, 1.25rem)',
                fontSize: 'clamp(0.75rem, 3vw, 1rem)',
              }}
            >
              Nous contacter →
            </motion.a>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}