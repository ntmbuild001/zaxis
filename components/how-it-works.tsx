'use client'

import { motion } from 'framer-motion'
import { ScrollAnimate } from './scroll-animate'

const steps = [
  {
    number: '01',
    title: 'CONSULTATION',
    description:
      'Reach out to Steve. We\'ll discuss your project, timeline, and vision — no pressure, just honest conversation.',
  },
  {
    number: '02',
    title: 'ESTIMATE',
    description: 'We send a detailed proposal with scope and pricing. Transparent, straightforward, complete.',
  },
  {
    number: '03',
    title: 'COMPLETION',
    description:
      'We put you on the schedule and execute. Clean job sites, quality work, delivered on time.',
  },
]

export function HowItWorks() {

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
              PROCESS
            </span>
            <h2 className="font-heading text-[48px] md:text-[72px] lg:text-[96px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
              HOW IT<br />WORKS
            </h2>
          </div>
        </ScrollAnimate>

        {/* Desktop: Horizontal Stepper */}
        <div className="hidden md:grid grid-cols-3 gap-1">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              className="bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-8 hover:border-[#DA2517] transition-all duration-75 group"
            >
              {/* Large decorative number - black default, red on hover */}
              <div className="mb-6">
                <span className="font-heading text-[96px] text-[#0A0A0A] group-hover:text-[#DA2517] leading-none select-none font-bold transition-colors duration-75">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-[22px] font-bold text-[#0A0A0A] mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Stepper */}
        <div className="flex flex-col gap-1 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
              className="bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-5 hover:border-[#DA2517] transition-all duration-75 group"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16">
                  <span className="font-heading text-[48px] text-[#0A0A0A] group-hover:text-[#DA2517] leading-none select-none font-bold transition-colors duration-75">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1 flex-1 min-w-0">
                  <h3 className="font-heading text-[18px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-tight break-words">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-[13px] leading-[1.8]">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
