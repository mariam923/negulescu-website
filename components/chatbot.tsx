'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Base de connaissances du site
const knowledgeBase = {
  services: {
    keywords: ['serviciu', 'servicii', 'oferi', 'face', 'instala', 'lucrare', 'lucrez'],
    response: `Oferim 5 servicii principale:\n\n🚪 **Instalare Uși de Sticlă** - Uși moderne, sigure și elegante\n🪟 **Instalare Ferestre** - Soluții eficiente energetic\n🛠️ **Proiectare Personalizată** - Design unic pentru spațiul tău\n⚙️ **Instalare Profesională** - Montaj precis și sigur\n🔧 **Întreținere și Reparații** - Service complet și rapid\n\nVă putem ajuta cu orice proiect de vitraj!`
  },
  contact: {
    keywords: ['contact', 'telefon', 'email', 'adres', 'suna', 'scrie', 'ajunge', 'locati'],
    response: `📞 **Telefon**: +40 763 564 072\n📧 **Email**: contact@negulescu.ro\n📍 **Locație**: România\n\nConducem: Gheorghe Negulescu\n\nNe puteți contacta oricând pentru o consultanță gratuită!`
  },
  about: {
    keywords: ['despre', 'cine', 'companie', 'experiență', 'experient', 'ani', 'echipa', 'gheorghe'],
    response: `Negulescu este specializat în instalarea de uși și ferestre premium din sticlă.\n\n✨ **10+ ani de experiență**\n✨ **31+ proiecte finalizate**\n✨ **100% satisfacție clienți**\n✨ **25+ clienți mulțumiți**\n\nConduși de Gheorghe Negulescu, menținem standarde înalte de calitate, siguranță și meșteșug.`
  },
  portfolio: {
    keywords: ['portfolio', 'portofoliu', 'lucr', 'proiect', 'realizat', 'exemplu', 'model'],
    response: `Am finalizat cu succes peste 31 de proiecte premium!\n\n🏆 Proiectele noastre includ:\n• Instalări rezidențiale moderne\n• Proiecte comerciale de amploare\n• Design personalizat și unic\n• Soluții inovatoare de vitraj\n\nVizitați pagina noastră de Portofoliu pentru a vedea galeria completă!`
  },
  pricing: {
    keywords: ['pret', 'cost', 'tarif', 'cat costa', 'cat costă', 'buget', 'ofert'],
    response: `Pentru o ofertă personalizată, vă rugăm să ne contactați!\n\n💰 Prețurile depind de:\n• Dimensiunile proiectului\n• Tipul de sticlă ales\n• Complexitatea instalării\n• Design personalizat\n\n📞 Contactați-ne la +40 763 564 072 pentru o consultanță gratuită și o ofertă detaliată!`
  },
  quality: {
    keywords: ['calitate', 'material', 'garantie', 'garanți', 'durabil', 'rezistent', 'sigur'],
    response: `🌟 **Calitatea noastră**:\n\n✓ Utilizăm doar materiale premium\n✓ Tehnici dovedite pentru rezultate durabile\n✓ Control strict al calității\n✓ Garanție completă\n✓ Servicii de mentenanță\n\nPrincipiile noastre: Precizie, Calitate, Fiabilitate, Inovație`
  },
  process: {
    keywords: ['proces', 'procedur', 'cum', 'etap', 'derula', 'incepe', 'începe', 'durata', 'timp'],
    response: `📋 **Procesul nostru**:\n\n1️⃣ Consultanță gratuită\n2️⃣ Măsurători precise\n3️⃣ Proiectare personalizată\n4️⃣ Ofertă detaliată\n5️⃣ Instalare profesională\n6️⃣ Verificare finală\n7️⃣ Suport post-instalare\n\nDurata depinde de complexitatea proiectului. Contactați-ne pentru detalii!`
  },
  appointment: {
    keywords: ['programare', 'intalnire', 'întâlnire', 'vizita', 'vizită', 'consultan', 'când'],
    response: `📅 **Programare consultanță**:\n\nPuteți programa o consultanță gratuită contactându-ne:\n\n📞 Telefon: +40 763 564 072\n📧 Email: contact@negulescu.ro\n\nSuntem disponibili să discutăm proiectul dumneavoastră și să oferim soluții personalizate!`
  }
}

const quickReplies = [
  'Ce servicii oferiți?',
  'Care sunt prețurile?',
  'Cum vă pot contacta?',
  'Care este procesul?'
]

function findBestResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  // Salutations
  if (/^(salut|buna|bună|hello|hi|hey|bun|alo|servus)$/i.test(userMessage.trim())) {
    return '👋 Bună ziua! Sunt asistentul virtual Negulescu. Cu ce vă pot ajuta astăzi?'
  }
  
  // Mulțumiri
  if (/multumesc|mulțumesc|mersi|thanks|thank/i.test(lowerMessage)) {
    return '😊 Cu mare plăcere! Dacă aveți alte întrebări, sunt aici să vă ajut!'
  }
  
  // Căutare în baza de cunoștințe
  for (const [category, data] of Object.entries(knowledgeBase)) {
    for (const keyword of data.keywords) {
      if (lowerMessage.includes(keyword)) {
        return data.response
      }
    }
  }
  
  // Răspuns implicit
  return `🤔 Nu sunt sigur că înțeleg complet întrebarea.\n\nVă pot ajuta cu informații despre:\n\n• 🛠️ Serviciile noastre\n• 💰 Prețuri și oferte\n• 📞 Date de contact\n• 📋 Procesul de lucru\n• 🏆 Portofoliul nostru\n\nSau contactați-ne direct la +40 763 564 072 pentru răspunsuri detaliate!`
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 Bună ziua! Sunt asistentul virtual Negulescu. Cu ce vă pot ajuta astăzi?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText) return

    // Ajout du message utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simuler un délai de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-12 w-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white shadow-xl hover:shadow-[#3B82F6]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.5} fill="none" />
            </Button>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-black/10"
          >
            {/* Header */}
            <div className="bg-orange-500 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-base -rotate-45">N</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Asistent Negulescu</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-[#3B82F6] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-[#3B82F6] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-[#3B82F6] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-3 py-2 bg-white border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#3B82F6] hover:text-white rounded-full transition-all duration-200 border border-gray-200 hover:border-[#3B82F6]"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Scrieți mesajul dvs..."
                  className="flex-1 rounded-full border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white rounded-full h-10 w-10 p-0 hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
                <Sparkles className="h-3 w-3" />
                Powered by Negulescu AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
