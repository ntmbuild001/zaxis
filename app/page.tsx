import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { MapPin } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Global grain overlay */}
      <div className="grain-overlay" />
      
      <Header />
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <HowItWorks />
      <Testimonials />

      {/* Contact / Quote Form Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#F5F5F5] relative">
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column - Form */}
            <div className="flex-1 max-w-xl">
              <div className="mb-12">
                <span className="inline-block bg-[#0A0A0A] text-[#F5F5F5] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  CONTACT
                </span>
                <h2 className="font-heading text-[48px] md:text-[64px] font-bold text-[#0A0A0A] leading-[0.85] mb-4 uppercase tracking-tight">
                  START YOUR<br />PROJECT
                </h2>
                <p className="text-[#666666] text-[14px] leading-[1.8] border-l-2 border-[#DA2517] pl-4">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column - Map */}
            <div className="flex-1 max-w-xl lg:pt-[140px]">
              <div className="overflow-hidden border-2 border-[#0A0A0A]/10 h-full">
                <div className="bg-[#0A0A0A] px-6 py-4 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#DA2517]" />
                  <span className="font-bold text-[#F5F5F5] text-[12px] uppercase tracking-[0.15em]">Service Area</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500000!2d-113.0!3d33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zaxis Contracting Service Area — Phoenix Valley and Lake Havasu City"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
