'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a fermé le widget
    const dismissed = localStorage.getItem('chatbot-dismissed')
    if (dismissed === 'true') {
      setIsDismissed(true)
      return
    }

    // Afficher le bouton après 5 secondes
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDismissed(true)
    setIsOpen(false)
    localStorage.setItem('chatbot-dismissed', 'true')
  }

  return (
    <>
      {/* Bouton Flottant */}
      <AnimatePresence>
        {!isOpen && isVisible && !isDismissed && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 group"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative h-14 w-14 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label="Ouvrir le chat"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-white"
              />
            </motion.button>
            
            {/* Bouton Fermer */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={handleDismiss}
              className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-gray-800 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Fermer le chat définitivement"
              title="Fermer le chat"
            >
              <X className="h-3 w-3" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fenêtre de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg rotate-45 flex items-center justify-center">
                <span className="text-white font-bold text-lg -rotate-45">N</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Asistent Negulescu</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-sm">👋 Bună ziua! Sunt asistentul virtual Negulescu. Cu ce vă pot ajuta astăzi?</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Scrieți mesajul dvs..."
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              />
              <button
                onClick={() => {
                  if (message.trim()) {
                    console.log('Message:', message)
                    setMessage('')
                  }
                }}
                disabled={!message.trim()}
                className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white rounded-full h-10 w-10 flex items-center justify-center hover:opacity-90 disabled:opacity-50 transition-all"
                aria-label="Envoyer le message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
