'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Maximize2, Lock, Boxes, Shield, Wrench, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Instalare Ferestre din Sticlă',
    description: 'Installăm ferestre din sticlă de înaltă calitate, proiectate pentru durabilitate, izolație și estetică modernă.',
    icon: Maximize2,
    features: ['Eficiență Energetică', 'Izolație Sonoră', 'Protecție UV', 'Dimensiuni Personalizate'],
  },
  {
    title: 'Instalare Uși din Sticlă',
    description: 'Instalare specializată de uși din sticlă sigure și elegante pentru spații rezidențiale și comerciale.',
    icon: Lock,
    features: ['Caracteristici de Securitate', 'Design Modern', 'Funcționare Fluidă', 'Rezistent la Intemperii'],
  },
  {
    title: 'Sisteme Glisante din Sticlă',
    description: 'Sisteme glisante moderne și fluide, construite pentru eficiență, confort și optimizarea spațiului.',
    icon: Boxes,
    features: ['Economisire Spațiu', 'Ușor de Folosit', 'Întreținere Minimă', 'Design Elegant'],
  },
  {
    title: 'Fațade Personalizate din Sticlă',
    description: 'Fațade din sticlă realizate la comandă, proiectate pentru precizie, claritate și armonie arhitecturală.',
    icon: Shield,
    features: ['Design Personalizat', 'Integritate Structurală', 'Protecție la Intemperii', 'Estetică Modernă'],
  },
  {
    title: 'Reparații & Întreținere',
    description: 'Servicii fiabile de întreținere și reparații pentru a asigura performanța pe termen lung a tuturor componentelor de sticlă.',
    icon: Wrench,
    features: ['Răspuns Rapid', 'Piese de Calitate', 'Tehnicieni Experți', 'Suport Garanție'],
  },
]

export default function ServicesPage() {
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
              Ce Oferim
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Serviciile Noastre
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Soluții complete de instalare sticlă livrate cu precizie și expertiză
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">31+</div>
                <div className="text-sm text-white/60">Proiecte Finalizate</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-white/60">Rata de Satisfacție</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-white/60">Ani de Experiență</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full border-black/5 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/10 group">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-[#1D4ED8] transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-heading font-bold text-black mb-3 group-hover:text-[#3B82F6] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-base text-[#1A1A1A]/70 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-black/5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-[#3B82F6] flex-shrink-0" />
                            <span className="text-sm text-[#1A1A1A]/60">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Gata să Începem?
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
              Contactează-ne astăzi pentru o consultanță gratuită și lasă-ne să-ți aducem viziunea la viață
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:opacity-90 h-14 px-10 rounded-full shadow-xl hover:shadow-[#3B82F6]/30 transition-all duration-300">
                Contactează-ne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
