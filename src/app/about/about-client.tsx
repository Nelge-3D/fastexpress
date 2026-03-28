"use client"

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { Zap, Shield, Heart, MapPin } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

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

export default function AboutClient() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const searchParams = useSearchParams()

  // Gérer le scroll automatique quand on vient de la navbar
  useEffect(() => {
    // Vérifier si on est sur la page d'accueil avec le hash #apropos
    if (window.location.hash === '#apropos') {
      setTimeout(() => {
        const element = document.getElementById('apropos')
        if (element) {
          const offset = 80 // Hauteur de la navbar fixe
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100) // Petit délai pour s'assurer que le DOM est chargé
    }
  }, [])

  return (
    <section 
      id="apropos" 
      className="bg-white scroll-mt-20"
      ref={ref}
      style={{
        paddingTop: 'clamp(5rem, 12vw, 8rem)', // 80px sur mobile, 128px sur desktop
        paddingBottom: 'clamp(3rem, 8vw, 5rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2rem)',
        paddingRight: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div className="container-custom mx-auto" style={{
        maxWidth: 'min(100%, 1280px)',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{
            marginBottom: 'clamp(2rem, 6vw, 4rem)',
          }}
        >
          <div className="section-badge inline-flex items-center gap-2 justify-center mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            <span className="text-xs sm:text-sm font-medium text-gray-600">À propos</span>
          </div>
          <h2 className="font-[var(--font-sora)] font-black text-gray-900 px-4" style={{
            fontSize: 'clamp(1.75rem, 6vw, 3rem)',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
          }}>
            Fast Livraison{' '}
            <span className="text-[#f5a623]">Express</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 items-center" style={{
          gap: 'clamp(2rem, 6vw, 4rem)',
          marginBottom: 'clamp(3rem, 8vw, 5rem)',
        }}>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{
              fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
            }}>
              Fast Express est une société de livraison et de logistique basée à
              Libreville, au Gabon. Nous proposons des services de livraison de
              colis, de Déménagement ainsi que des solutions logistiques adaptées
              aux particuliers et aux entreprises.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{
              fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
            }}>
              Notre mission : rendre la livraison accessible, rapide et fiable
              pour tous. Que vous soyez un particulier, une entreprise ou un
              acteur du e-commerce, nous avons la solution adaptée à vos besoins.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8" style={{
              fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
            }}>
              Ce qui nous différencie de la concurrence, c&apos;est notre statut
              d&apos;entreprise formellement reconnue par l&apos;État, ainsi que notre
              équipe dédiée de professionnels engagés à offrir un service de
              qualité, sécurisé et digne de confiance.
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
                    className="flex items-center gap-1.5 bg-[#1a5c2a]/5 text-[#1a5c2a] border border-[#1a5c2a]/20 font-semibold rounded-full"
                    style={{
                      paddingLeft: 'clamp(0.75rem, 3vw, 1rem)',
                      paddingRight: 'clamp(0.75rem, 3vw, 1rem)',
                      paddingTop: 'clamp(0.5rem, 2vw, 0.75rem)',
                      paddingBottom: 'clamp(0.5rem, 2vw, 0.75rem)',
                      fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
                    }}
                  >
                    <MapPin className="flex-shrink-0 text-[#f5a623]" style={{
                      width: 'clamp(0.75rem, 3vw, 0.875rem)',
                      height: 'clamp(0.75rem, 3vw, 0.875rem)',
                    }} />
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
            className="grid grid-cols-2"
            style={{
              gap: 'clamp(0.75rem, 3vw, 1rem)',
            }}
          >
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-100 hover:shadow-md transition-all"
                style={{
                  padding: 'clamp(1rem, 4vw, 1.5rem)',
                }}
              >
                <div className={`${val.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4`} style={{
                  width: 'clamp(2rem, 7vw, 2.75rem)',
                  height: 'clamp(2rem, 7vw, 2.75rem)',
                }}>
                  <val.icon style={{
                    width: 'clamp(0.875rem, 3.5vw, 1.25rem)',
                    height: 'clamp(0.875rem, 3.5vw, 1.25rem)',
                  }} />
                </div>
                <h3 className="font-[var(--font-sora)] font-bold text-gray-900 mb-1 sm:mb-2" style={{
                  fontSize: 'clamp(0.875rem, 3.5vw, 1.125rem)',
                }}>
                  {val.title}
                </h3>
                <p className="text-gray-500 leading-relaxed" style={{
                  fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
                }}>
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
          <div className="text-center" style={{
            marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)',
          }}>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Notre équipe
            </p>
            <h3 className="font-[var(--font-sora)] font-black text-gray-900 px-4" style={{
              fontSize: 'clamp(1.25rem, 5vw, 1.875rem)',
            }}>
              Les personnes derrière{' '}
              <span className="text-[#f5a623]">Fast Express</span>
            </h3>
          </div>

          {/* Infinite scroll track */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1a5c2a] via-[#246b35] to-[#1a5c2a]" style={{
            paddingTop: 'clamp(1.5rem, 5vw, 2.5rem)',
            paddingBottom: 'clamp(1.5rem, 5vw, 2.5rem)',
          }}>
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-[#1a5c2a] to-transparent pointer-events-none" style={{
              width: 'clamp(2rem, 8vw, 6rem)',
            }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-[#1a5c2a] to-transparent pointer-events-none" style={{
              width: 'clamp(2rem, 8vw, 6rem)',
            }} />

            {/* Scrolling row */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 28,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="flex w-max"
              style={{
                gap: 'clamp(1rem, 4vw, 2rem)',
              }}
            >
              {allMembers.map((member, i) => (
                <div
                  key={`${member.name}-${i}`}
                  className="flex flex-col items-center gap-2 sm:gap-3 group flex-shrink-0"
                >
                  {/* Avatar circle */}
                  <div className="relative">
                    <div
                      className={`${member.color} rounded-full flex items-center justify-center 
                        shadow-xl ring-4 ring-white/20 group-hover:ring-[#f5a623]/60 
                        transition-all duration-300 group-hover:scale-110`}
                      style={{
                        width: 'clamp(3rem, 10vw, 5rem)',
                        height: 'clamp(3rem, 10vw, 5rem)',
                      }}
                    >
                      <span className="font-[var(--font-sora)] text-white font-black" style={{
                        fontSize: 'clamp(0.875rem, 4vw, 1.125rem)',
                      }}>
                        {member.initials}
                      </span>
                    </div>
                    {/* Online dot */}
                    <span className="absolute bottom-1 right-1 rounded-full border-2 border-[#1a5c2a]" style={{
                      width: 'clamp(0.5rem, 2vw, 0.75rem)',
                      height: 'clamp(0.5rem, 2vw, 0.75rem)',
                    }} />
                  </div>

                  {/* Name & role */}
                  <div className="text-center">
                    <p className="font-[var(--font-sora)] text-white font-bold whitespace-nowrap" style={{
                      fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
                    }}>
                      {member.name}
                    </p>
                    <p className="text-[#f5a623] font-medium whitespace-nowrap mt-0.5" style={{
                      fontSize: 'clamp(0.563rem, 2vw, 0.75rem)',
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tagline under band */}
          <p className="text-center text-gray-400 mt-4 sm:mt-5" style={{
            fontSize: 'clamp(0.688rem, 2.5vw, 0.875rem)',
          }}>
            🤝 Une équipe passionnée, disponible 6j/7 pour votre satisfaction
          </p>
        </motion.div>
      </div>
    </section>
  )
}