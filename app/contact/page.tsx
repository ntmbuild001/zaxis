import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Zaxis Contracting',
  description: 'Get in touch with Zaxis Contracting. Licensed general contractor serving Phoenix Valley and Lake Havasu City. Call 602-283-8116.',
  alternates: {
    canonical: 'https://www.zaxiscontractingllc.com/contact',
  },
}

export default function ContactPage() {
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
            CONTACT
          </span>
          <h1 className="font-heading text-[42px] md:text-[64px] lg:text-[80px] font-bold text-[#F5F5F5] leading-[0.85] uppercase tracking-tight">
            GET IN TOUCH
          </h1>
          <p className="text-[#888888] text-[15px] leading-[1.8] max-w-2xl mx-auto mt-6">
            Have a project in mind? Let&apos;s discuss your vision and create something exceptional together.
          </p>
        </div>
      </section>

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
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-[24px] font-bold text-[#0A0A0A] mb-6 uppercase tracking-tight">
                START YOUR PROJECT
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-[24px] font-bold text-[#0A0A0A] uppercase tracking-tight">
                CONTACT INFORMATION
              </h2>

              <div className="flex flex-col gap-6">
                {/* Phone */}
                <div className="flex gap-4 p-5 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75">
                  <Phone className="w-5 h-5 text-[#DA2517] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1 text-[14px] uppercase tracking-wide">Steve Cooke — Founder</h3>
                    <a href="tel:+16022838116" className="text-[#DA2517] hover:text-[#0A0A0A] text-lg font-bold transition-colors duration-75">
                      602-283-8116
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-5 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75">
                  <Mail className="w-5 h-5 text-[#DA2517] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1 text-[14px] uppercase tracking-wide">Email</h3>
                    <a href="mailto:zaxiscontracting@gmail.com" className="text-[#DA2517] hover:text-[#0A0A0A] transition-colors duration-75">
                      zaxiscontracting@gmail.com
                    </a>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="flex gap-4 p-5 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75">
                  <MapPin className="w-5 h-5 text-[#DA2517] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1 text-[14px] uppercase tracking-wide">Service Areas</h3>
                    <p className="text-[#666666] text-[14px] leading-[1.7]">Phoenix Valley (Scottsdale, Gilbert, Mesa, Chandler, Queen Creek)</p>
                    <p className="text-[#666666] text-[14px] leading-[1.7]">Lake Havasu City</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-5 bg-[#FFFFFF] border-2 border-[#0A0A0A]/10 hover:border-[#DA2517] transition-all duration-75">
                  <Clock className="w-5 h-5 text-[#DA2517] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1 text-[14px] uppercase tracking-wide">Business Hours</h3>
                    <p className="text-[#666666] text-[14px] leading-[1.7]">Monday - Friday: 7:00 AM - 5:00 PM MST</p>
                  </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="bg-[#0A0A0A] border-2 border-[#0A0A0A] p-6">
                <h3 className="font-heading font-bold text-[#F5F5F5] text-[14px] mb-3 uppercase tracking-wide">
                  Why Choose Us
                </h3>
                <p className="text-[#DA2517] text-[16px] font-bold">Licensed / Bonded / Insured</p>
              </div>
            </div>
          </div>

          {/* Service Area Map */}
          <div className="overflow-hidden border-2 border-[#0A0A0A]/10">
            <div className="bg-[#0A0A0A] px-6 py-4 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#DA2517]" />
              <span className="font-bold text-[#F5F5F5] text-[12px] uppercase tracking-[0.15em]">Service Area — Phoenix Valley &amp; Lake Havasu City</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500000!2d-113.0!3d33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaxis Contracting Service Area — Phoenix Valley and Lake Havasu City"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
