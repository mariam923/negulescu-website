'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Servicii', href: '/services' },
  { name: 'Portofoliu', href: '/portfolio' },
  { name: 'Despre', href: '/about' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/10"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-lg rotate-45 group-hover:rotate-[50deg] transition-transform duration-300"></div>
              <div className="absolute inset-[3px] bg-white rounded-lg rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-[#111111] z-10" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>N</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-[#111111] tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Negulescu
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  pathname === item.href
                    ? 'text-black bg-black/5'
                    : 'text-[#1A1A1A]/60 hover:text-black hover:bg-black/5'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link href="/contact" className="hidden md:block">
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#3B82F6]/30">
              Contactați-ne
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-black/5"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                    pathname === item.href
                      ? 'text-black bg-black/5'
                      : 'text-[#1A1A1A]/60 hover:text-black hover:bg-black/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white rounded-full text-base font-medium hover:opacity-90 transition-all duration-200 shadow-md">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
