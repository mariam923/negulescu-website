'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, Shield, Lightbulb, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precizie',
    description: 'Fiecare instalare este executată cu atenție meticulousă la detalii și acuratețe.',
  },
  {
    icon: Award,
    title: 'Calitate',
    description: 'Utilizăm doar materiale premium și tehnici dovedite pentru rezultate durabile.',
  },
  {
    icon: Shield,
    title: 'Fiabilitate',
    description: 'Servicii și suport de încredere pe tot parcursul fiecărei faze a proiectului.',
  },
  {
    icon: Lightbulb,
    title: 'Inovație',
    description: 'Soluții moderne care combină estetica cu funcționalitatea.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-black via-[#1A1A1A] to-black relative overflow-hidden">
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
              Despre Noi
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Despre Negulescu
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Oferim excelență în instalarea sticlei cu precizie, calitate și inovație
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#1D4ED8] transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Eye className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
                Povestea Noastră
              </h2>
              <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-6">
                Negulescu este specializat în instalarea de uși și ferestre premium din sticlă, oferind soluții moderne, durabile și precise. Munca noastră combină expertiza tehnică cu un design curat și minimalist pentru a îmbunătăți atât spațiile rezidențiale, cât și cele comerciale.
              </p>
              <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
                Cu ani de experiență și un angajament față de excelență, transformăm spațiile cu instalări de sticlă care sunt atât funcționale, cât și frumoase.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-black/5 shadow-2xl">
                <CardContent className="p-8">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-6 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#1D4ED8] transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-black mb-4">
                    Conducere
                  </h3>
                  <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-6">
                    Condusă de <span className="font-semibold text-black">Gheorghe Negulescu</span>, compania menține standarde înalte de calitate, siguranță și meșteșug.
                  </p>
                  <div className="pt-6 border-t border-black/5 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-black mb-1">10+</div>
                      <div className="text-sm text-[#1A1A1A]/60">Ani Experiență</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-black mb-1">31+</div>
                      <div className="text-sm text-[#1A1A1A]/60">Proiecte</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Valorile Noastre
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Principiile care ghidează tot ceea ce facem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full border-black/5 hover:border-[#3B82F6]/50 hover:shadow-2xl hover:shadow-[#3B82F6]/10 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-[#1D4ED8] transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <h3 className="text-xl font-heading font-bold text-black mb-3 group-hover:text-[#3B82F6] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
