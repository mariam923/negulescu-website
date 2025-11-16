'use client'

import { motion } from 'framer-motion'
import { PortfolioGallery } from '@/components/portfolio-gallery'

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-black via-[#1A1A1A] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white uppercase tracking-wider mb-6"
            >
              Lucrările Noastre
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Portofoliu
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explorează proiectele noastre finalizate care prezintă instalări premium de sticlă
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-1">31+</div>
              <div className="text-sm text-[#1A1A1A]/60">Proiecte Finalizate</div>
            </div>
            <div className="w-px h-12 bg-black/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-1">100%</div>
              <div className="text-sm text-[#1A1A1A]/60">Satisfacție Clienți</div>
            </div>
            <div className="w-px h-12 bg-black/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-1">25+</div>
              <div className="text-sm text-[#1A1A1A]/60">Clienți Mulțumiți</div>
            </div>
            <div className="w-px h-12 bg-black/10"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-1">10+</div>
              <div className="text-sm text-[#1A1A1A]/60">Ani de Experiență</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <PortfolioGallery />
    </div>
  )
}
