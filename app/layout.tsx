import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

export const viewport: Viewport = {
  themeColor: '#191816',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Zaxis Contracting | Remodeling, Custom Garages, Concrete, & Patios | Phoenix Valley & Lake Havasu',
  description: 'Remodeling, RV Garages, Concrete, Patios & Dirt Work. Licensed general contractor serving Phoenix Valley and Lake Havasu City. 20+ years experience, 500+ projects completed.',
  generator: 'v0.app',
  keywords: ['general contractor', 'remodeling', 'RV garages', 'concrete', 'patios', 'Phoenix Valley', 'Lake Havasu', 'Arizona contractor'],
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/',
  },
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-mlqRMP5nHEuR618kQa273m2x5Y5EjF.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-mlqRMP5nHEuR618kQa273m2x5Y5EjF.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zaxiscontractingllc.com',
    siteName: 'Zaxis Contracting LLC',
    title: 'Zaxis Contracting | Remodeling, Custom Garages, Concrete, & Patios | Phoenix Valley & Lake Havasu',
    description: 'Remodeling, RV Garages, Concrete, Patios & Dirt Work. Licensed general contractor serving Phoenix Valley and Lake Havasu City.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaxis Contracting | Remodeling, Custom Garages, Concrete, & Patios | Phoenix Valley & Lake Havasu',
    description: 'Remodeling, RV Garages, Concrete, Patios & Dirt Work. Licensed general contractor serving Phoenix Valley and Lake Havasu City.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Zaxis Contracting LLC',
    description: 'Licensed general contractor specializing in home remodeling, RV garages, concrete work, patios, and earthwork.',
    url: 'https://www.zaxiscontractingllc.com',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zaxis_logo_no_bg-vHosBUHYI2ND57FH9OfHZmF9AVqCXY.png',
    telephone: '+1-602-283-8116',
    email: 'zaxiscontracting@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    areaServed: ['Phoenix Valley', 'Lake Havasu City', 'Arizona'],
    priceRange: '$',
    sameAs: ['https://www.facebook.com/zaxiscontracting'],
    knowsAbout: ['Home Remodeling', 'Custom Garages', 'Concrete Work', 'Patio Covers', 'Excavation', 'Earthwork'],
    experience: '20+ years',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="msvalidate.01" content="7930066C0AD3737BAEE7B0F69539357F" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WVNJB39SCG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WVNJB39SCG');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
