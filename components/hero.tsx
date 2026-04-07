'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const tickerItems = [
  { icon: 'shield', text: 'Licensed. Bonded. Insured.' },
  { icon: 'brick', text: 'Built From The Ground Up.' },
  { icon: 'star',   text: 'Client Approved.' },
]

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DA2517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function BrickIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 100 80" fill="none" stroke="#DA2517" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Top face */}
      <polygon points="20,15 80,15 95,30 35,30" />
      {/* Front face */}
      <polygon points="20,15 20,55 35,70 35,30" />
      {/* Right face */}
      <polygon points="80,15 95,30 95,70 80,55 20,55 20,15" />
      {/* Bottom edge */}
      <line x1="20" y1="55" x2="80" y2="55" />
      <line x1="80" y1="55" x2="95" y2="70" />
      <line x1="35" y1="70" x2="95" y2="70" />
      <line x1="20" y1="55" x2="35" y2="70" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DA2517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

const iconMap = { shield: ShieldIcon, brick: BrickIcon, star: StarIcon }

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZAXIS-hero-v0-2sz0DgYDfhCAcTmRTcJdU4BHoQFTMX.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/[0.87] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
          {/* Left: Text Content */}
          <div className="max-w-3xl lg:pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className="mb-8"
            >
              <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase">
                PHOENIX VALLEY / LAKE HAVASU
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              className="font-heading text-[36px] sm:text-[44px] md:text-[64px] lg:text-[86px] font-bold leading-[0.85] mb-8 uppercase tracking-tight w-full"
            >
              <span className="text-[#F5F5F5] block">YOUR</span>
              <span className="text-[#DA2517] block glitch-hover">ONE-STOP</span>
              <span className="text-[#F5F5F5] block">CONTRACTOR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.15 }}
              className="text-[#888888] text-[13px] md:text-[16px] leading-[1.8] max-w-[480px] mb-10 border-l-2 border-[#DA2517] pl-6 pr-4"
            >
              True one-stop contracting — exquisite craftsmanship, top-tier communication, disciplined project management. Start to finish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#DA2517] text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 text-center border-2 border-[#DA2517] hover:border-[#F5F5F5]"
              >
                START YOUR PROJECT →
              </Link>
              <a
                href="#portfolio"
                className="inline-block border-2 border-[#F5F5F5] text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 text-center bg-transparent"
              >
                VIEW WORK
              </a>
            </motion.div>
          </div>

          {/* Right: desktop stat cards removed — replaced by ticker below */}
        </div>
      </div>

      {/* Marquee ticker — sits at the absolute bottom, overlapping hero/services boundary */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#0A0A0A] h-[52px] flex items-center overflow-hidden border-t border-[#DA2517]">
        <div className="animate-ticker flex">
          {/* First set */}
          <div className="flex shrink-0">
            {tickerItems.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <span key={i} className="inline-flex items-center gap-3 px-10 text-[#F5F5F5] text-[12px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                  <Icon />
                  {item.text}
                </span>
              )
            })}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0">
            {tickerItems.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <span key={`dup-${i}`} className="inline-flex items-center gap-3 px-10 text-[#F5F5F5] text-[12px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                  <Icon />
                  {item.text}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
