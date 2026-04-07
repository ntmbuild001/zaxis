'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollAnimate, StaggerContainer, StaggerItem } from './scroll-animate'

const services = [
  {
    title: 'REMODELING',
    description:
      'Refresh it or reinvent it. From single-room upgrades to full-home transformations — built with precision, managed with clarity, delivered on time.',
    link: '/services/remodeling',
    image: '/images/service-remodeling.jpg',
  },
  {
    title: 'CUSTOM GARAGES',
    description:
      'Built big. Built right. Custom garages engineered for strength, space, and clean design — from foundation to finish.',
    link: '/services/custom-garages',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN7AV0wLoa6d5EfLrVrhwbViT00jUW.png',
  },
  {
    title: 'CONCRETE',
    description:
      'Strength you can build on. Driveways, slabs, and foundations formed right and finished clean — built to perform for years to come.',
    link: '/services/concrete',
    image: '/images/service-concrete.jpg',
  },
  {
    title: 'PATIOS',
    description:
      'Outdoor living, elevated. Simple extensions or full backyard builds — functional, durable, and designed to impress.',
    link: '/services/patios',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-87dVdDYuCkzj9eboclgUAtPc1m9qD3.png',
  },
  {
    title: 'DIRT WORK / TRENCHES',
    description:
      'Groundwork done right. Grading, excavation, and utility trenches handled accurately and efficiently to set your project up for success.',
    link: '/services/dirt-work-underground',
    image: '/images/dirt-work-3.jpg',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5] relative">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="mb-16">
            <span className="inline-block bg-[#0A0A0A] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              WHAT WE DO
            </span>
            <h2 className="font-heading text-[48px] md:text-[72px] lg:text-[96px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
              OUR<br />SERVICES
            </h2>
          </div>
        </ScrollAnimate>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
          staggerDelay={0.03}
        >
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <Link href={service.link} className="block h-full group">
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
                      {service.title}
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
