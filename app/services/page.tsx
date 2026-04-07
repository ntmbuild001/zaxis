import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services-data'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Zaxis Contracting',
  description: 'Remodeling, Custom Garages, Concrete, Patios & Dirt Work services. Licensed general contractor serving Phoenix Valley and Lake Havasu City.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />

      {/* Dark page hero with grain */}
      <section className="bg-[#0A0A0A] pt-32 pb-16 md:pt-40 md:pb-20 relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            WHAT WE DO
          </span>
          <h1 className="font-heading text-[42px] md:text-[64px] lg:text-[80px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight">
            OUR SERVICES
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F5F5] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="block h-full group">
                <div className="h-full bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75 flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="h-[280px] overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-100 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-all duration-75 pointer-events-none" />
                    {/* Number */}
                    <span className="absolute top-4 left-4 font-heading text-[#F5F5F5] text-[48px] font-bold leading-none opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-6 pb-8 flex flex-col flex-1 border-t-4 border-[#DA2517]">
                    <h3 className="font-heading text-[18px] md:text-[22px] font-bold text-[#0A0A0A] uppercase tracking-tight mb-3 break-words hyphens-auto">
                      {service.title.toUpperCase()}
                    </h3>
                    <p className="text-[#666666] text-[14px] leading-[1.7] mb-5 flex-1">
                      {service.description}
                    </p>
                    <span className="text-[#0A0A0A] font-bold text-[12px] tracking-[0.1em] uppercase inline-flex items-center gap-2 group-hover:text-[#DA2517] transition-colors duration-75">
                      LEARN MORE
                      <span className="inline-block transition-transform duration-75 group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
