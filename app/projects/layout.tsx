import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Projects Portfolio | Zaxis Contracting LLC',
  description: 'View completed projects from Zaxis Contracting. 500+ successful remodels, garages, concrete, and more in Arizona. Real projects. Real results.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
