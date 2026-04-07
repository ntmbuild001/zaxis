import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Zaxis Contracting | Remodeling, Custom Garages, Concrete, & Patios | Phoenix Valley & Lake Havasu'
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
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Logo */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zaxis_logo_no_bg-vHosBUHYI2ND57FH9OfHZmF9AVqCXY.png"
          alt="Zaxis Contracting LLC"
          width={500}
          height={180}
          style={{ marginBottom: '40px' }}
        />
        
        {/* Tagline */}
        <div
          style={{
            color: '#F5F5F5',
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            letterSpacing: '0.05em',
          }}
        >
          Your One-Stop Contractor
        </div>
        
        {/* Services */}
        <div
          style={{
            color: '#888888',
            fontSize: '24px',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Remodeling • Custom Garages • Concrete • Patios • Dirt Work
        </div>
        
        {/* Location */}
        <div
          style={{
            color: '#DA2517',
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '30px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Phoenix Valley & Lake Havasu City, AZ
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
