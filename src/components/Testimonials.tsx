"use client"

import { motion, AnimatePresence } from 'motion/react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mbadinga',
    role: 'Commerçante',
    location: 'Libreville, PK12',
    image: '/testimonials/client1.jpg',
    rating: 5,
    text: 'Fast Express est devenu mon partenaire de confiance pour toutes mes livraisons. Les livreurs sont professionnels et ponctuels. Mon colis a été livré en moins de 24h à mon client à Owendo. Je recommande vivement !',
    date: '15 mars 2026',
  },
  {
    id: 2,
    name: 'Marc Essono',
    role: "Chef d'entreprise",
    location: 'Libreville, Glass',
    image: '/testimonials/client2.jpg',
    rating: 5,
    text: 'Service client réactif 7j/7 et livreurs géolocalisés, ça change tout ! Je peux suivre mes livraisons en temps réel et mes clients sont toujours satisfaits. Le déménagement de nos bureaux a été parfaitement organisé.',
    date: '28 février 2026',
  },
  {
    id: 3,
    name: 'Amélie Ntoutoume',
    role: 'Particulier',
    location: 'Libreville, Akébé',
    image: '/testimonials/client3.jpg',
    rating: 5,
    text: "Un service fiable et rapide ! Je fais appel à Fast Express depuis 6 mois et jamais déçue. Les livreurs sont formés et très courtois. Une équipe professionnelle à l'écoute de ses clients.",
    date: '10 mars 2026',
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 md:w-4 md:h-4 ${
            i < rating ? 'fill-[#f5a623] text-[#f5a623]' : 'text-white/30'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Gestion du swipe tactile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) nextTestimonial()
    if (isRightSwipe) prevTestimonial()
    setTouchStart(0)
    setTouchEnd(0)
  }

  const current = testimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section
      id="temoignages"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Image de fond en 16:9 avec overlay optimisé */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/testimonials/testimonials-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay sombre avec opacité responsive */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
      </div>

      {/* Background decorations simplifiées pour mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: 'clamp(16px, 4vw, 40px) clamp(16px, 4vw, 40px)',
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#f5a623]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#f5a623]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section header - Tailles optimisées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#f5a623]/10 backdrop-blur border border-[#f5a623]/30 rounded-full px-3 py-1.5 mb-3 sm:mb-4"
          >
            <Quote className="w-3 h-3 text-[#f5a623]" />
            <span className="text-[#f5a623] text-xs font-medium">Ils nous font confiance</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Ce que nos clients{' '}
            <span className="text-[#f5a623] relative inline-block whitespace-nowrap">
              disent de nous
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5a623]/40 rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation buttons - Position optimisée */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur border border-white/20 rounded-full p-2 md:p-3 hover:bg-[#f5a623] hover:border-[#f5a623] transition-all duration-300 group disabled:opacity-50"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#1a5c2a]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur border border-white/20 rounded-full p-2 md:p-3 hover:bg-[#f5a623] hover:border-[#f5a623] transition-all duration-300 group disabled:opacity-50"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#1a5c2a]" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
                  {/* Layout responsive optimisé */}
                  <div className="flex flex-col md:grid md:grid-cols-[auto,1fr] gap-5 md:gap-6 lg:gap-8 items-center md:items-start">
                    {/* Left - Photo client */}
                    <div className="flex flex-col items-center md:items-start flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#f5a623]/30 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-[#f5a623]/50 bg-white/10">
                          <Image
                            src={current.image}
                            alt={current.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(current.name)}&background=f5a623&color=fff&size=128&bold=true&rounded=true`
                            }}
                          />
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute -bottom-1 -right-1 bg-[#f5a623] rounded-full p-1 shadow-lg"
                        >
                          <Quote className="w-2.5 h-2.5 text-[#1a5c2a]" />
                        </motion.div>
                      </div>
                      <div className="mt-3 text-center md:text-left">
                        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{current.name}</h3>
                        <p className="text-white/60 text-xs">{current.role}</p>
                        <p className="text-white/40 text-[10px]">{current.location}</p>
                      </div>
                    </div>

                    {/* Right - Témoignage */}
                    <div className="flex-1 w-full">
                      {/* Rating and date */}
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                        <StarRating rating={current.rating} />
                        <span className="text-white/40 text-xs">{current.date}</span>
                      </div>

                      {/* Text - Tailles de texte adaptatives */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center md:text-left"
                      >
                        &quot;{current.text}&quot;
                      </motion.blockquote>

                      {/* Signature */}
                      <div className="flex items-center justify-center md:justify-start gap-3 pt-3 border-t border-white/10">
                        <div className="w-6 md:w-8 h-px bg-[#f5a623]" />
                        <p className="text-white/50 text-xs">
                          {current.name}, {current.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicators - Espacement optimisé */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 md:w-8 h-1.5 bg-[#f5a623] rounded-full'
                    : 'w-1.5 h-1.5 bg-white/30 rounded-full hover:bg-white/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats - Grille responsive optimisée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#f5a623]">98%</div>
            <div className="text-white/60 text-xs sm:text-sm">Satisfaction client</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#f5a623]">24h</div>
            <div className="text-white/60 text-xs sm:text-sm">Délai moyen</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#f5a623]">7j/7</div>
            <div className="text-white/60 text-xs sm:text-sm">Service client</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}