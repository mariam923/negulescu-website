import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Negulescu - Instalare Profesională Uși și Ferestre din Sticlă'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
          position: 'relative',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              borderRadius: '16px',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                transform: 'rotate(-45deg)',
                fontSize: '50px',
                fontWeight: 700,
                color: 'white',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                display: 'flex',
              }}
            >
              N
            </div>
          </div>
          <div
            style={{
              fontSize: '50px',
              fontWeight: 600,
              color: 'white',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              display: 'flex',
            }}
          >
            Negulescu
          </div>
        </div>
        
        {/* Title */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            maxWidth: '900px',
            marginBottom: '20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            lineHeight: 1.2,
          }}
        >
          Instalare Profesională Uși și Ferestre din Sticlă
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            maxWidth: '800px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
          }}
        >
          Soluții premium de instalare sticlă combinând design modern cu inginerie de precizie
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
