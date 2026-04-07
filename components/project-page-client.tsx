'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Clock, Ruler, ChevronRight } from 'lucide-react'
import { ScrollAnimate, StaggerContainer, StaggerItem } from './scroll-animate'
import { Lightbox } from './lightbox'
import { type ProjectData, getRelatedProjects } from '@/lib/projects-data'

function CountUpNumber({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1000
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center px-1">
      <p className="font-heading text-[24px] md:text-[40px] font-bold text-[#DA2517] mb-1 leading-tight">
        {count}
        {suffix}
      </p>
      <p className="text-[#888888] text-[10px] md:text-[11px] uppercase font-bold tracking-[0.08em] leading-tight">{label}</p>
    </div>
  )
}

export function ProjectPageClient({ project }: { project: ProjectData }) {
  const related = getRelatedProjects(project.slug, 3)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filter to only images (no YouTube embeds) for the lightbox
  const galleryImages = project.photos
    .filter(photo => photo.type !== 'youtube' && photo.image)
    .map(photo => photo.image as string)

  const openLightbox = (photoIndex: number) => {
    // Find the corresponding index in galleryImages (skip youtube entries)
    let imageIndex = 0
    for (let i = 0; i < photoIndex; i++) {
      if (project.photos[i].type !== 'youtube' && project.photos[i].image) {
        imageIndex++
      }
    }
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {/* Dark Hero */}
      <section className="relative bg-[#0A0A0A] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#888888] hover:text-[#F5F5F5] transition-colors duration-75 mb-8"
            >
              <ArrowLeft size={16} />
              <span className="text-[12px] font-bold uppercase tracking-[0.1em]">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Type badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.05 }}
          >
            <span className="inline-block bg-[#DA2517] text-[#F5F5F5] text-[10px] font-bold uppercase tracking-[0.1em] px-4 py-2 mb-6">
              {project.type}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.1 }}
            className="font-heading text-[36px] md:text-[56px] lg:text-[72px] font-bold text-[#F5F5F5] leading-[0.85] mb-6 max-w-3xl uppercase tracking-tight"
          >
            {project.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-[#888888] text-[12px]"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-[#DA2517]" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-[#DA2517]" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-[#DA2517]" />
              {project.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Ruler size={14} className="text-[#DA2517]" />
              {project.sqft} sq ft
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2-Column: Content Left + Sticky Specs Right */}
      <section className="py-16 md:py-24 bg-[#F5F5F5] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 min-w-0">
              <ScrollAnimate>
                <h2 className="font-heading text-[24px] md:text-[32px] font-bold text-[#0A0A0A] mb-4 uppercase tracking-tight">
                  PROJECT OVERVIEW
                </h2>
                <div className="border-l-4 border-[#DA2517] pl-6 mb-8">
                  <p className="text-[#666666] text-[15px] leading-[1.8]">{project.description}</p>
                </div>
              </ScrollAnimate>

              <ScrollAnimate delay={0.05}>
                <h3 className="font-heading text-[20px] font-bold text-[#0A0A0A] mb-3 uppercase tracking-tight">
                  THE CHALLENGE
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.8] mb-8">{project.challenge}</p>
              </ScrollAnimate>

              <ScrollAnimate delay={0.1}>
                <h3 className="font-heading text-[20px] font-bold text-[#0A0A0A] mb-3 uppercase tracking-tight">
                  OUR SOLUTION
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.8]">{project.solution}</p>
              </ScrollAnimate>
            </div>

            {/* Right column: sticky specs card */}
            <div className="lg:w-[360px] flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <ScrollAnimate>
                  <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-6">
                    <h3 className="font-heading font-bold text-[#0A0A0A] text-[14px] mb-5 uppercase tracking-tight">
                      Project Specs
                    </h3>
                    <div className="flex flex-col gap-4">
                      {project.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-start gap-4 pb-3 border-b border-[#0A0A0A]/10 last:border-b-0 last:pb-0">
                          <span className="text-[#888888] text-[12px] uppercase tracking-wide">{spec.label}</span>
                          <span className="text-[#0A0A0A] text-[13px] font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t-2 border-[#0A0A0A]/10">
                      <Link
                        href="/contact"
                        className="block w-full bg-[#DA2517] text-[#F5F5F5] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-center hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 border-2 border-[#DA2517] hover:border-[#0A0A0A]"
                      >
                        GET A SIMILAR QUOTE
                      </Link>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                GALLERY
              </span>
              <h2 className="font-heading text-[32px] md:text-[48px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight">
                PROJECT GALLERY
              </h2>
            </div>
          </ScrollAnimate>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
            staggerDelay={0.03}
          >
            {project.photos.map((photo, i) => (
              <StaggerItem key={i}>
                {photo.type === 'youtube' && photo.url ? (
                  <div className="relative bg-[#111111] overflow-hidden aspect-[4/3] group border-2 border-[rgba(255,255,255,0.08)] hover:border-[#DA2517] transition-all duration-75">
                    <iframe
                      src={`${photo.url}?autoplay=1&mute=1&loop=1&playlist=${photo.url.split('/').pop()}&rel=0&modestbranding=1&controls=1&showinfo=0`}
                      title={photo.caption}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : photo.image ? (
                  <button
                    onClick={() => openLightbox(i)}
                    className="relative bg-[#111111] overflow-hidden aspect-[4/3] group border-2 border-[rgba(255,255,255,0.08)] hover:border-[#DA2517] transition-all duration-75 cursor-pointer w-full"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-100 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Caption overlay on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-[#0A0A0A]/95 p-4 border-t-2 border-[#DA2517] opacity-0 group-hover:opacity-100 transition-opacity duration-75">
                      <p className="text-[#F5F5F5] text-[12px] font-bold uppercase tracking-wide">{photo.caption}</p>
                    </div>
                  </button>
                ) : (
                  <div className="relative bg-[#111111] overflow-hidden aspect-[4/3] group border-2 border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                    <span className="text-[#F5F5F5]/20 text-sm font-bold uppercase">{photo.caption}</span>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Project Videos */}
          {project.videos && project.videos.length > 0 && (
            <ScrollAnimate className="mt-8">
              <div className="flex justify-center gap-4 flex-wrap">
                {project.videos.map((video, i) => (
                  <div key={i} className="w-full max-w-[280px]">
                    <div className="relative aspect-[9/16] bg-[#111111] border-2 border-[rgba(255,255,255,0.08)] overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                    </div>
                    <p className="text-center text-[#888888] text-[11px] uppercase tracking-wide mt-3 font-bold">{video.caption}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          )}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-[#F5F5F5] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <span className="inline-block bg-[#0A0A0A] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                TIMELINE
              </span>
              <h2 className="font-heading text-[32px] md:text-[48px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
                OUR PROCESS
              </h2>
            </div>
          </ScrollAnimate>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-[#DA2517]" />

            <div className="flex flex-col gap-10">
              {project.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.1, delay: i * 0.03 }}
                  className="flex gap-5 md:gap-6 items-start"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#0A0A0A] border-2 border-[#DA2517] flex items-center justify-center z-10">
                    <span className="text-[#DA2517] font-heading font-bold text-[14px]">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="pt-1.5 md:pt-2.5">
                    <h3 className="font-heading text-[18px] font-bold text-[#0A0A0A] mb-1 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] text-[14px] leading-[1.8]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar with Count-Up */}
      <section className="bg-[#0A0A0A] py-16 md:py-20 relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-[#111111] border-2 border-[rgba(255,255,255,0.08)] p-6 hover:border-[#DA2517] transition-all duration-75">
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24 bg-[#F5F5F5] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-10">
              <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                MORE WORK
              </span>
              <h2 className="font-heading text-[32px] md:text-[48px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
                RELATED PROJECTS
              </h2>
            </div>
          </ScrollAnimate>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-10"
            staggerDelay={0.03}
          >
            {related.map((rel, index) => (
              <StaggerItem key={rel.id}>
                <Link href={`/projects/${rel.slug}`} className="block">
                  <div className="group relative bg-[#0A0A0A] overflow-hidden aspect-square border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75 cursor-pointer">
                    {rel.image ? (
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#F5F5F5]/30 font-bold text-sm uppercase">{rel.type}</span>
                      </div>
                    )}

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-all duration-75 pointer-events-none" />

                    {/* Number */}
                    <span className="absolute top-3 right-3 font-heading text-[#F5F5F5] text-[48px] font-bold leading-none opacity-20">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-[#DA2517] text-[#F5F5F5] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em]">
                      {rel.type}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out bg-[#0A0A0A]/95 p-5 border-t-2 border-[#DA2517]">
                      <p className="font-heading text-[#F5F5F5] font-bold text-[18px] mb-1 uppercase tracking-tight">
                        {rel.title}
                      </p>
                      <p className="text-[#888888] text-[11px] mb-3 uppercase tracking-wide">{rel.location}</p>
                      <span className="text-[#DA2517] text-[11px] font-bold uppercase tracking-[0.1em] inline-flex items-center gap-1">
                        {'VIEW PROJECT'}
                        <ChevronRight size={14} />
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
              className="inline-block border-2 border-[#0A0A0A] text-[#0A0A0A] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#0A0A0A] hover:text-[#F5F5F5] transition-all duration-75"
            >
              VIEW ALL PROJECTS
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimate>
            <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              GET STARTED
            </span>
            <h2 className="font-heading text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#F5F5F5] leading-[0.85] mb-6 uppercase tracking-tight">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-[#888888] text-[15px] leading-[1.8] max-w-xl mx-auto mb-10">
              Whether it&apos;s concrete, block walls, patio covers, or garages &mdash; we&apos;ll bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#DA2517] text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 border-2 border-[#DA2517] hover:border-[#F5F5F5]"
              >
                START YOUR PROJECT
              </Link>
              <a
                href="tel:+16022838116"
                className="inline-block border-2 border-[#F5F5F5]/30 text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5]/10 transition-all duration-75 bg-transparent"
              >
                CALL 602-283-8116
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </>
  )
}
