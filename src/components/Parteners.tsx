"use client"

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'

// Types
interface Partner {
  id: number
  name: string
  logo: string
  description?: string
  website?: string
}

// Données des partenaires
const partners: Partner[] = [
  {
    id: 1,
    name: 'Jamila Market',
    logo: '/partners/jamila-market.png',
    description: 'Market',
    website: '#',
  },
  {
    id: 2,
    name: 'Messane Boutique',
    logo: '/partners/messane-boutique.png',
    description: 'Boutique',
    website: '#',
  },
  {
    id: 3,
    name: 'Madame Luxe',
    logo: '/partners/madame-luxe.png',
    description: 'Luxe',
    website: '#',
  },
]

export default function Partners() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden"
      style={{
        paddingTop: 'clamp(2rem, 6vw, 4rem)',
        paddingBottom: 'clamp(2rem, 6vw, 4rem)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{
        maxWidth: 'min(100%, 1280px)',
      }}>
        {/* Section Header - Plus sobre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 justify-center mb-3 sm:mb-4">
            <span className="w-1 h-1 rounded-full bg-[#f5a623]" />
            <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Partenaires
            </span>
          </div>
          <h2 className="font-bold text-gray-900 px-4" style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
          }}>
            Nos <span className="text-[#f5a623]">partenaires</span>
          </h2>
          <p className="text-gray-500 px-4 mx-auto" style={{
            fontSize: 'clamp(0.875rem, 3vw, 1rem)',
            maxWidth: 'min(90%, 36rem)',
          }}>
            Des enseignes partenaires qui nous font confiance
          </p>
        </motion.div>

        {/* Partners Grid - Plus sobre */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 sm:p-6 transition-all duration-300 hover:opacity-80 cursor-pointer">
                {/* Logo Container */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        // Fallback si l'image n'existe pas
                        const target = e.target as HTMLImageElement
                        target.src = `https://placehold.co/200x200/f5f5f5/cccccc?text=${encodeURIComponent(partner.name.charAt(0))}`
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Nom du partenaire - Plus discret */}
              <div className="text-center mt-2">
                <p className="text-gray-500 text-xs sm:text-sm font-medium group-hover:text-[#f5a623] transition-colors duration-300">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien de partenariat - Plus sobre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-gray-400 text-xs sm:text-sm">Devenez partenaire</span>
            <motion.a
              href="https://wa.me/24166647096?text=Bonjour%2C%20je%20souhaite%20devenir%20partenaire%20de%20Fast%20Express."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="text-[#f5a623] font-medium text-xs sm:text-sm hover:underline"
            >
              Nous rejoindre →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}