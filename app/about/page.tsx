'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { ScrollAnimate, StaggerContainer, StaggerItem } from '@/components/scroll-animate'

const benefits = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind and protection.',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, honest communication throughout every project stage.',
  },
  {
    title: 'Premium Materials',
    description: 'We use only the highest quality materials that stand the test of time.',
  },
  {
    title: 'Clean Job Sites',
    description: 'Professional standards including daily cleanup and minimal disruption.',
  },
]

const team = [
  {
    name: 'Steve Cooke',
    role: 'Founder',
  },
  {
    name: 'Kyle Irwin',
    role: 'Concrete Foreman',
  },
  {
    name: "John O'Malley",
    role: 'Remodel Foreman',
  },
  {
    name: 'Danny Keith',
    role: 'Earthwork Foreman',
  },
  {
    name: 'Alex Johnson',
    role: 'Office Manager',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '20+', label: 'Years Experience' },
  { number: '5★', label: 'Rated' },
]

export default function AboutPage() {
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
            ABOUT US
          </span>
          <h1 className="font-heading text-[32px] sm:text-[42px] md:text-[64px] lg:text-[80px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight px-2">
            YOUR ONE-STOP
            <br />
            CONTRACTOR
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-28 bg-[#F5F5F5] relative">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="border-l-4 border-[#DA2517] pl-8">
                <p className="text-[#666666] text-[16px] leading-[1.8] mb-6">
                  What started as a passion for building and problem-solving has grown into a company built on craftsmanship, reliability, and pride in doing things the right way.
                </p>
                <p className="text-[#666666] text-[16px] leading-[1.8] mb-6">
                  We created this business to be the kind of contractor people wish they could always find — one team capable of handling projects from the ground up. From dirt work and concrete to garages and full remodels, we believe great results come from strong planning, clear communication and a team that genuinely cares about the outcome.
                </p>
                <p className="text-[#666666] text-[16px] leading-[1.8]">
                  At the end of the day, we&apos;re builders who take pride in our work, enjoy what we do, and treat every project like it matters — because it does.
                </p>
              </div>

              {/* Image placeholder - hidden for now */}
              {/* <div className="relative h-96 bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-2 border-[#0A0A0A]/10">
                <span className="text-[#F5F5F5]/30 font-bold text-sm uppercase tracking-wide">Team Photo</span>
              </div> */}
            </div>
          </ScrollAnimate>

          {/* Why Choose Zaxis */}
          <div className="mb-24">
            <ScrollAnimate>
              <div className="text-center mb-12">
                <span className="inline-block bg-[#0A0A0A] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  WHY US
                </span>
                <h2 className="font-heading text-[42px] md:text-[64px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
                  WHY CHOOSE ZAXIS
                </h2>
              </div>
            </ScrollAnimate>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-1" staggerDelay={0.03}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-8 hover:border-[#DA2517] transition-all duration-75 group">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#DA2517] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-heading font-bold text-[#0A0A0A] text-[18px] mb-2 uppercase tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-[#666666] text-[14px] leading-[1.7]">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Team */}
          <div className="mb-24">
            <ScrollAnimate>
              <div className="text-center mb-12">
                <span className="inline-block bg-[#DA2517] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  TEAM
                </span>
                <h2 className="font-heading text-[42px] md:text-[64px] font-bold text-[#0A0A0A] leading-[0.85] uppercase tracking-tight">
                  MEET THE TEAM
                </h2>
              </div>
            </ScrollAnimate>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-1" staggerDelay={0.03}>
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="flex flex-col items-center text-center bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 p-4 hover:border-[#DA2517] transition-all duration-75">
                    <h3 className="font-heading text-[13px] font-bold text-[#0A0A0A] mb-1 uppercase tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#DA2517] font-bold text-[10px] uppercase tracking-wide">{member.role}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Stats */}
          <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-24">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-10 bg-[#0A0A0A] border-2 border-[#0A0A0A]">
                  <p className="font-heading text-[48px] font-bold text-[#DA2517] mb-2">{stat.number}</p>
                  <p className="text-[#F5F5F5] font-bold text-[12px] uppercase tracking-[0.1em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimate>

          {/* CTA */}
          <ScrollAnimate>
            <div className="bg-[#0A0A0A] p-12 md:p-16 text-center relative overflow-hidden">
              {/* Grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
              />
              <div className="relative">
                <h2 className="font-heading text-[32px] md:text-[48px] font-bold text-[#F5F5F5] mb-4 uppercase leading-[0.9] tracking-tight">
                  READY TO WORK TOGETHER?
                </h2>
                <p className="text-[#888888] text-[15px] leading-[1.8] mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss your project. Call us at{' '}
                  <a href="tel:+16022838116" className="text-[#DA2517] hover:text-[#F5F5F5] transition-colors duration-75">
                    602-283-8116
                  </a>{' '}
                  or reach out below.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#DA2517] text-[#F5F5F5] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 border-2 border-[#DA2517] hover:border-[#F5F5F5]"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  )
}
