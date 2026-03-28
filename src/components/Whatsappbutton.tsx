"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [hasShownTooltip, setHasShownTooltip] = useState(false)

  useEffect(() => {
    // Show button after 1.5s
    const showTimer = setTimeout(() => setVisible(true), 1500)

    // Auto-show tooltip after 3s, once
    const tooltipTimer = setTimeout(() => {
      if (!hasShownTooltip) {
        setTooltipOpen(true)
        setHasShownTooltip(true)
        // Auto-hide tooltip after 5s
        setTimeout(() => setTooltipOpen(false), 5000)
      }
    }, 3000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const quickMessages = [
    { text: 'Livrer un colis 📦', msg: 'Bonjour, je veux livrer un colis.' },
    { text: 'Déménager 🏠', msg: 'Bonjour, je veux un service de Déménagement.' },
    { text: 'Service entreprise 🏢', msg: 'Bonjour, je suis intéressé par vos services entreprise.' },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

          {/* Tooltip / Quick menu */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                className="bg-white rounded-3xl shadow-2xl shadow-black/15 p-4 w-64 border border-gray-100"
              >
                {/* Close */}
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pr-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1a5c2a] flex items-center justify-center">
                    <span className="text-[#f5a623] font-black text-xs">FE</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Fast Express</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-600 text-xs font-medium">En ligne</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                  Bonjour 👋 Comment pouvons-nous vous aider aujourd&apos;hui ?
                </p>

                {/* Quick actions */}
                <div className="space-y-2">
                  {quickMessages.map((item) => (
                    <a
                      key={item.text}
                      href={`https://wa.me/24166647096?text=${encodeURIComponent(item.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-gray-50 hover:bg-[#1a5c2a]/5 border border-gray-100 hover:border-[#1a5c2a]/20 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1a5c2a] transition-all"
                    >
                      {item.text}
                      <span className="text-[#f5a623]">→</span>
                    </a>
                  ))}
                </div>

                {/* Main CTA */}
                <a
                  href="https://wa.me/24166647096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-3 rounded-xl transition-colors w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ouvrir WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.5 }}
            onClick={() => setTooltipOpen(!tooltipOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center transition-colors pulse-gold"
            aria-label="Contacter via WhatsApp"
          >
            <AnimatePresence mode="wait">
              {tooltipOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification dot */}
            {!tooltipOpen && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-[#f5a623] rounded-full border-2 border-white flex items-center justify-center"
              >
                <span className="text-[8px] font-black text-[#1a5c2a]">1</span>
              </motion.span>
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}