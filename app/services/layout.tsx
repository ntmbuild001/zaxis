import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contracting Services | Remodeling, Garages, Concrete & Patios',
  description: 'Zaxis offers complete contracting services: home remodeling, custom RV garages, concrete work, patio covers, and dirt work. 20+ years of Arizona construction expertise.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
