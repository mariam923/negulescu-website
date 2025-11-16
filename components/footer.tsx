'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-lg rotate-45"></div>
                <div className="absolute inset-[3px] bg-[#0A0A0A] rounded-lg rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white z-10 font-azonix">N</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight font-azonix uppercase">
                Negulescu
              </h3>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed text-base mb-6">
              Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie pentru rezultate excepționale.
            </p>
            <p className="text-sm text-white/40">
              Condus de Gheorghe Negulescu
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Linkuri Rapide</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="/services"
                className="text-white/60 hover:text-[#4A9EFF] transition-colors text-base"
              >
                Servicii
              </Link>
              <Link
                href="/portfolio"
                className="text-white/60 hover:text-[#4A9EFF] transition-colors text-base"
              >
                Portofoliu
              </Link>
              <Link
                href="/about"
                className="text-white/60 hover:text-[#4A9EFF] transition-colors text-base"
              >
                Despre
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-[#4A9EFF] transition-colors text-base"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Contactează-ne</h4>
            <div className="space-y-4">
              <a
                href="tel:+40763564072"
                className="flex items-center gap-3 text-base text-white/60 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+40 763 564 072</span>
              </a>
              <a
                href="mailto:contact@negulescu.ro"
                className="flex items-center gap-3 text-base text-white/60 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>contact@negulescu.ro</span>
              </a>
              <div className="flex items-center gap-3 text-base text-white/60">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>România</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Negulescu. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
