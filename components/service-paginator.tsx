'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '@/lib/services-data'

interface ServicePaginatorProps {
  currentSlug: string
}

export function ServicePaginator({ currentSlug }: ServicePaginatorProps) {
  const currentIndex = services.findIndex((s) => s.slug === currentSlug)
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null
  const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="bg-[#0A0A0A] border-t border-[#F5F5F5]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex items-center justify-between">
        {/* Previous */}
        {prev ? (
          <Link
            href={`/services/${prev.slug}`}
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
          >
            <ArrowLeft
              size={18}
              className="text-[#DA2517] transition-transform duration-150 group-hover:-translate-x-1 flex-shrink-0"
            />
            <span className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#F5F5F5]/60 group-hover:text-[#F5F5F5] transition-colors duration-150 truncate sm:truncate-none">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
          >
            <span className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#F5F5F5]/60 group-hover:text-[#F5F5F5] transition-colors duration-150 truncate sm:truncate-none">
              {next.title}
            </span>
            <ArrowRight
              size={18}
              className="text-[#DA2517] transition-transform duration-150 group-hover:translate-x-1 flex-shrink-0"
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
