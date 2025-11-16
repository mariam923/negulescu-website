import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Negulescu - Instalare Profesională Uși și Ferestre din Sticlă',
    short_name: 'Negulescu',
    description: 'Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie pentru rezultate excepționale.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
