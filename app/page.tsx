'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Maximize2, Lock, Wrench, Boxes, Shield } from 'lucide-react'
import { VideoSection } from '@/components/video-section'
import { PortfolioPreview } from '@/components/portfolio-preview'

const services = [
  {
    title: 'Instalare Ferestre din Sticlă',
    description: 'Ferestre din sticlă de înaltă calitate, proiectate pentru durabilitate, izolație și estetică modernă.',
    icon: Maximize2,
  },
  {
    title: 'Instalare Uși din Sticlă',
    description: 'Uși din sticlă sigure și elegante pentru spații rezidențiale și comerciale.',
    icon: Lock,
  },
  {
    title: 'Sisteme Glisante din Sticlă',
    description: 'Sisteme glisante moderne și fluide, construite pentru eficiență și optimizarea spațiului.',
    icon: Boxes,
  },
  {
    title: 'Fațade Personalizate din Sticlă',
    description: 'Fațade din sticlă realizate la comandă, proiectate pentru precizie și armonie arhitecturală.',
    icon: Shield,
  },
  {
    title: 'Reparații & Întreținere',
    description: 'Servicii fiabile de întreținere și reparații pentru performanță pe termen lung.',
    icon: Wrench,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
              alt="Modern glass architecture"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          {/* Subtle vignette for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10 py-32 pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#3B82F6] uppercase tracking-wider shadow-lg">Soluții Premium de Geam</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl"
            >
              Instalare Profesională
              <br />
              Uși și Ferestre din Sticlă
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed font-normal mb-10 drop-shadow-lg"
            >
              Meșteșug premium, soluții moderne și inginerie de precizie pentru instalări de sticlă durabile și elegante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:opacity-90 h-14 px-10 rounded-full text-base font-medium shadow-2xl hover:shadow-[#3B82F6]/30 transition-all duration-300">
                    Solicită Ofertă
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/portfolio">
                  <Button size="lg" variant="ghost" className="h-14 px-10 rounded-full text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30">
                    Vezi Lucrările
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ y: -5 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-8 bg-white/95 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-2xl border border-white/20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <div className="text-3xl font-semibold text-black">31+</div>
                <div className="text-sm text-[#1A1A1A]/60">Proiecte</div>
              </motion.div>
              <div className="w-px h-12 bg-black/10"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="text-3xl font-semibold text-black">100%</div>
                <div className="text-sm text-[#1A1A1A]/60">Satisfacție</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Services Grid */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-black mb-4 tracking-tight">
              Expertiza Noastră
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
              Soluții complete de instalare sticlă pentru fiecare nevoie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="h-full p-8 bg-white rounded-2xl border border-black/5 hover:shadow-xl hover:border-black/10 transition-all duration-300 group">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-[#1D4ED8] transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="ghost" className="rounded-full px-6 text-base font-medium hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]">
                Vezi toate serviciile
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1] tracking-tight">
                Gata să Îți Transformi
                <br />
                Spațiul?
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Contactează-ne pentru o consultanță și descoperă cum soluțiile noastre premium de sticlă pot ridica proiectul tău.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:opacity-90 h-14 px-10 rounded-full text-base font-medium shadow-2xl hover:shadow-[#3B82F6]/30 transition-all duration-300">
                  Solicită Ofertă
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="ghost" className="h-14 px-10 rounded-full text-base font-medium text-white hover:bg-white/10 border border-white/20">
                  Vezi Lucrările
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
