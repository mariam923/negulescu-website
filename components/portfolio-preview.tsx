'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const previewImages = [
  '/portfolio/IMG-20250826-WA0040.jpg',
  '/portfolio/IMG-20250826-WA0041.jpg',
  '/portfolio/IMG-20250826-WA0042.jpg',
  '/portfolio/IMG-20250826-WA0043.jpg',
  '/portfolio/IMG-20250826-WA0044.jpg',
  '/portfolio/IMG-20250826-WA0045.jpg',
]

export function PortfolioPreview() {
  return (
    <section className="py-10 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-black mb-4 tracking-tight">
            Proiecte Recente
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
            Explorează portofoliul nostru de instalări premium de sticlă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={image}
                alt={`Portfolio image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="ghost" className="rounded-full px-6 text-base font-medium hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]">
              Vezi toate proiectele
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
