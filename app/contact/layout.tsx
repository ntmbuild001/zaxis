import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Zaxis Contracting LLC',
  description: 'Start your project with Zaxis Contracting. Remodeling, RV Garages, Concrete, Patios & Dirt Work in Phoenix Valley and Lake Havasu City.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
