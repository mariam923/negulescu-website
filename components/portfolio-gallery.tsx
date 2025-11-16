'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const portfolioImages = [
  'IMG-20250826-WA0040.jpg',
  'IMG-20250826-WA0041.jpg',
  'IMG-20250826-WA0042.jpg',
  'IMG-20250826-WA0043.jpg',
  'IMG-20250826-WA0044.jpg',
  'IMG-20250826-WA0045.jpg',
  'IMG-20250826-WA0046.jpg',
  'IMG-20250826-WA0047.jpg',
  'IMG-20250826-WA0048.jpg',
  'IMG-20250826-WA0049.jpg',
  'IMG-20250826-WA0050.jpg',
  'IMG-20250826-WA0051.jpg',
  'IMG-20250826-WA0052.jpg',
  'IMG-20250826-WA0053.jpg',
  'IMG-20250826-WA0054.jpg',
  'IMG-20250826-WA0055.jpg',
  'IMG-20250826-WA0056.jpg',
  'IMG-20250826-WA0057.jpg',
  'IMG-20250826-WA0058.jpg',
  'IMG-20250826-WA0059.jpg',
  'IMG-20250826-WA0060.jpg',
  'IMG-20250826-WA0061.jpg',
  'IMG-20250826-WA0062.jpg',
  'IMG-20250826-WA0063.jpg',
  'IMG-20250826-WA0064.jpg',
  'IMG-20250826-WA0065.jpg',
  'IMG-20250826-WA0066.jpg',
  'IMG-20250826-WA0067.jpg',
  'IMG-20250826-WA0068.jpg',
  'IMG-20250826-WA0069.jpg',
  'IMG-20250826-WA0070.jpg',
]

export function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < portfolioImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <>
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-[#F4F4F4] shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={`/portfolio/${image}`}
                alt={`Portfolio image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={index < 6 ? "eager" : "lazy"}
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-black border-0">
          {selectedImage !== null && (
            <div className="relative">
              <div className="relative aspect-auto max-h-[90vh]">
                <Image
                  src={`/portfolio/${portfolioImages[selectedImage]}`}
                  alt={`Portfolio image ${selectedImage + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                {selectedImage > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="ml-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                )}
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                {selectedImage < portfolioImages.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="mr-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                )}
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md">
                <p className="text-white text-sm">
                  {selectedImage + 1} / {portfolioImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
