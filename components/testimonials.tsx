'use client'

import { Star } from 'lucide-react'
import { ScrollAnimate, StaggerContainer, StaggerItem } from './scroll-animate'

const testimonials = [
  {
    name: 'AMY M.',
    text: 'Steve, his foreman Brian and the crew did a fantastic job on our driveway extensions and extra slab on our side yard. They were very accommodating, quick with responses to requests/questions, and were priced very fairly! Top notch professionalism, quality of work, and they didn\'t leave a mess. Zaxis has a 5 star rating for a reason! Thank you for your hard work, we love it!',
    stars: 5,
  },
  {
    name: 'JASON L.',
    text: 'We hired them to build our detached garage and couldn\'t be happier. The attention to detail and quality of work was incredible. The crew was professional, respectful of our property, and clearly takes pride in what they do.',
    stars: 5,
  },
  {
    name: 'SARAH M.',
    text: 'From start to finish the communication was appreciated. We always knew what was happening and the project stayed right on budget. Wonderful craftsmanship — we are so happy with our remodel. Thank you Steve and Zaxis team!!',
    stars: 5,
  },
  {
    name: 'MELISSA R.',
    text: 'So pleased with the results. Our new patio and concrete work has truly transformed our backyard — turning it into a place we like to spend our time now. We really appreciate the work done. Would definitely recommend Zaxis for the job. Thank you again!',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative">
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
              TESTIMONIALS
            </span>
            <h2 className="font-heading text-[48px] md:text-[72px] lg:text-[96px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight">
              CLIENT<br />FEEDBACK
            </h2>
          </div>
        </ScrollAnimate>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-1" staggerDelay={0.03}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-[#111111] border-2 border-[rgba(255,255,255,0.08)] p-8 hover:border-[#DA2517] transition-all duration-75 h-full flex flex-col group">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#DA2517] text-[#DA2517]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#888888] text-[14px] leading-[1.8] mb-6 flex-1 group-hover:text-[#CCCCCC] transition-colors duration-75">
                  {'\u201C'}{testimonial.text}{'\u201D'}
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t-2 border-[rgba(255,255,255,0.08)]">
                  <span className="font-bold text-[#F5F5F5] text-[12px] tracking-[0.1em] uppercase">{testimonial.name}</span>
                  <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
