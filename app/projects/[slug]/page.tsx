import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allProjects, getProjectBySlug } from '@/lib/projects-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectPageClient } from '@/components/project-page-client'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} | Zaxis Contracting`,
    description: project.description.slice(0, 160),
    alternates: {
      canonical: `https://www.zaxiscontractingllc.com/projects/${slug}`,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main>
      <Header />
      <ProjectPageClient project={project} />
      <Footer />
    </main>
  )
}
