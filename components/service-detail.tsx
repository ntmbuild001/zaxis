'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { ScrollAnimate } from './scroll-animate'
import { Lightbox } from './lightbox'

interface ServiceDetailProps {
  id: string
  title: string
  description: string
  image: string
  video?: string
  longDescription: string
  includes: string[]
  whyChoose: string[]
  projectImages?: string[]
}

export function ServiceDetail({ title, image, video, longDescription, includes, whyChoose, projectImages }: ServiceDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // For mobile, show shortened "DIRT WORK" instead of full title
  const displayTitle = title.includes('Dirt Work / Underground') ? (
    <>
      <span className="md:hidden">DIRT WORK</span>
      <span className="hidden md:inline">DIRT WORK / UNDERGROUND</span>
    </>
  ) : (
    title
  )

  return (
    <>
      {/* Lightbox */}
      {projectImages && projectImages.length > 0 && (
        <Lightbox
          images={projectImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}

      <div className="flex flex-col gap-12">
        {/* Hero Banner with Image */}
      <div className="relative h-48 md:h-[50vh] bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-2 border-[#0A0A0A]/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/60" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <h1 className="relative z-10 font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] text-center uppercase tracking-tight px-3 sm:px-4 md:px-6 leading-[1.1]">
          {displayTitle}
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Video + Description Row */}
          <ScrollAnimate>
            <div className={`flex flex-col ${video ? 'md:flex-row' : ''} gap-8`}>
              {video && (
                <div className="flex-shrink-0 w-full md:w-[280px] mx-auto md:mx-0">
                  <div className="relative aspect-[9/16] bg-[#0A0A0A] border-2 border-[#0A0A0A]/10 overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              )}
              <div className="flex-1 border-l-4 border-[#DA2517] pl-6">
                <p className="text-[#666666] text-[16px] leading-[1.8]">{longDescription}</p>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <div>
              <h2 className="font-heading text-[24px] md:text-[32px] font-bold text-[#0A0A0A] mb-6 uppercase tracking-tight">
                {"WHAT'S INCLUDED"}
              </h2>
              <div className="flex flex-col gap-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75">
                    <Check className="w-5 h-5 text-[#DA2517] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0A0A0A] text-[14px] leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <div>
              <h2 className="font-heading text-[24px] md:text-[32px] font-bold text-[#0A0A0A] mb-6 uppercase tracking-tight">
                WHY CHOOSE ZAXIS
              </h2>
              <div className="flex flex-col gap-3">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#0A0A0A] border-2 border-[#0A0A0A]">
                    <span className="font-heading font-bold text-[#DA2517] flex-shrink-0 text-[18px]">—</span>
                    <span className="text-[#F5F5F5] text-[14px] leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          {/* Project Examples Grid */}
          <ScrollAnimate>
            <div>
              <h2 className="font-heading text-[24px] md:text-[32px] font-bold text-[#0A0A0A] mb-6 uppercase tracking-tight">
                PROJECT EXAMPLES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                {projectImages && projectImages.length > 0 ? (
                  projectImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="aspect-square bg-[#0A0A0A] relative overflow-hidden border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75 group cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${title} project ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-100 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </button>
                  ))
                ) : (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-[#0A0A0A] flex items-center justify-center border-2 border-[#0A0A0A]/10"
                    >
                      <span className="text-[#F5F5F5]/20 text-xs font-bold uppercase">{title} #{i + 1}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-8">
            <Link
              href="/contact"
              className="block w-full bg-[#DA2517] text-[#F5F5F5] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-center hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 mb-6 border-2 border-[#DA2517] hover:border-[#0A0A0A]"
            >
              REQUEST {title.toUpperCase()} ESTIMATE
            </Link>

            <div className="pt-6 border-t-2 border-[#0A0A0A]/10">
              <p className="text-[11px] text-[#888888] mb-3 font-bold uppercase tracking-[0.1em]">Contact</p>
              <p className="text-[#0A0A0A] font-bold mb-1 text-[14px]">Steve Cooke — Founder</p>
              <a href="tel:+16022838116" className="block text-[#DA2517] hover:text-[#0A0A0A] font-bold mb-1 transition-colors duration-75 text-[16px]">
                602-283-8116
              </a>
              <a href="mailto:zaxiscontracting@gmail.com" className="block text-[#DA2517] hover:text-[#0A0A0A] font-bold transition-colors duration-75 text-[13px]">
                zaxiscontracting@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
