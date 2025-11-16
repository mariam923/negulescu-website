import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatWidget } from '@/components/chat-widget'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Negulescu - Instalare Profesională Uși și Ferestre din Sticlă',
  description: 'Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie pentru rezultate excepționale.',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest',
  metadataBase: new URL('https://negulescu.ro'),
  verification: {
    google: '8c3ee44c402fa7b9',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://negulescu.ro',
    siteName: 'Negulescu',
    title: 'Negulescu - Instalare Profesională Uși și Ferestre din Sticlă',
    description: 'Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie pentru rezultate excepționale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Negulescu - Instalare Profesională Uși și Ferestre din Sticlă',
    description: 'Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie pentru rezultate excepționale.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={roboto.className}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
