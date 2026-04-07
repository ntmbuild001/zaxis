'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ScrollAnimate, StaggerContainer, StaggerItem } from './scroll-animate'
import { featuredProjects } from '@/lib/projects-data'

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0A0A] relative">
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
            <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              PORTFOLIO
            </span>
            <h2 className="font-heading text-[48px] md:text-[72px] lg:text-[96px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight">
              RECENT<br />WORK
            </h2>
          </div>
        </ScrollAnimate>

        {/* 2x2 Featured Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12" staggerDelay={0.03}>
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.id}>
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="group relative bg-[#111111] border-2 border-[rgba(255,255,255,0.08)] overflow-hidden aspect-[4/3] hover:border-[#DA2517] transition-all duration-75 cursor-pointer">
                  {/* Project image or placeholder */}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-100 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#F5F5F5]/30 font-bold text-sm uppercase">{project.type}</span>
                    </div>
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[#0A0A0A]/50 group-hover:bg-[#0A0A0A]/30 transition-all duration-75 pointer-events-none" />

                  {/* Number */}
                  <span className="absolute top-4 right-4 font-heading text-[#F5F5F5] text-[72px] font-bold leading-none opacity-20">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#DA2517] text-[#F5F5F5] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em]">
                    {project.type}
                  </div>

                  {/* Hover overlay slides up */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out bg-[#0A0A0A]/95 p-6 border-t-2 border-[#DA2517]">
                    <p className="font-heading text-[#F5F5F5] font-bold text-[24px] mb-1 uppercase tracking-tight">
                      {project.title}
                    </p>
                    <p className="text-[#888888] text-[12px] mb-3 uppercase tracking-wide">{project.location}</p>
                    <span className="text-[#DA2517] text-[12px] font-bold uppercase tracking-[0.1em] inline-flex items-center gap-2">
                      VIEW PROJECT
                      <span className="inline-block transition-transform duration-75 group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimate className="text-center">
          <Link
            href="/projects"
            className="inline-block border-2 border-[#F5F5F5] text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75"
          >
            VIEW ALL PROJECTS
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  )
}
