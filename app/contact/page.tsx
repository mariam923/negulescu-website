'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

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
              Contact
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Contactează-ne
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Contactează-ne pentru o consultanță sau pentru a discuta proiectul tău
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-black mb-6">
                    Trimite-ne un mesaj
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nume</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:opacity-90 shadow-lg hover:shadow-[#3B82F6]/30 transition-all">
                      Trimite Mesaj
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-heading font-bold text-black mb-6">
                  Informații de Contact
                </h2>
              </div>

              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-[#1D4ED8] transition-all duration-300">
                      <Phone className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Telefon</h3>
                      <a
                        href="tel:+40763564072"
                        className="text-[#1A1A1A]/70 hover:text-[#3B82F6] transition-colors"
                      >
                        +40 763 564 072
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-[#1D4ED8] transition-all duration-300">
                      <Mail className="h-6 w-6 text-black group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Email</h3>
                      <a
                        href="mailto:contact@negulescu.ro"
                        className="text-[#1A1A1A]/70 hover:text-[#3B82F6] transition-colors"
                      >
                        contact@negulescu.ro
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
