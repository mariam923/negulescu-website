'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Play } from 'lucide-react'

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-black mb-4 tracking-tight">
              Lucrările Noastre în Acțiune
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
              Urmărește cum transformăm spațiile cu instalări premium de sticlă
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/video/showcase.mp4" type="video/mp4" />
              </video>
              
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <Play className="h-6 w-6 text-white ml-1" fill="white" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-0">
          <div className="aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source src="/video/showcase.mp4" type="video/mp4" />
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
