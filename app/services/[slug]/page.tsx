import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetail } from '@/components/service-detail'
import { ServicePaginator } from '@/components/service-paginator'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service Not Found | Zaxis Contracting' }
  return {
    title: `${service.title} | Zaxis Contracting`,
    description: service.longDescription.slice(0, 160),
    alternates: {
      canonical: `https://www.zaxiscontractingllc.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header forceScrolled />
      <section className="bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ServiceDetail {...service} />
        </div>
      </section>
      <ServicePaginator currentSlug={slug} />
      <Footer />
    </main>
  )
}
