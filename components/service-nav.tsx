'use client'

import Link from 'next/link'
import { services } from '@/lib/services-data'

interface ServiceNavProps {
  currentSlug: string
}

export function ServiceNav({ currentSlug }: ServiceNavProps) {
  return (
    <div className="sticky top-[72px] z-40 bg-[#F5F5F5] border-b-2 border-[#0A0A0A]/10">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
          {services.map((service) => {
            const isActive = currentSlug === service.slug
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`flex-shrink-0 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-75 border-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#DA2517] text-[#F5F5F5] border-[#DA2517]'
                    : 'bg-[#FFFFFF] text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#DA2517] hover:text-[#DA2517]'
                }`}
              >
                {service.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
