import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Zaxis Contracting | 20+ Years of Excellence',
  description: 'Learn about Zaxis Contracting LLC. Licensed contractor with 500+ projects completed. Founded on craftsmanship, quality, and integrity in Phoenix Valley and Lake Havasu.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
