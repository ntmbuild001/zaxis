import Link from 'next/link'
import Image from 'next/image'
import { Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] relative">
      {/* Top red bar */}
      <div className="h-1 bg-[#DA2517]" />
      
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zaxis_logo_no_bg-vHosBUHYI2ND57FH9OfHZmF9AVqCXY.png"
                alt="Zaxis Contracting LLC"
                width={218}
                height={78}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-[13px] text-[#888888] mb-4 leading-[1.8] border-l-2 border-[#DA2517] pl-4">
              Exquisite craftsmanship. Top-tier communication. Disciplined project management.
            </p>
            <p className="text-[11px] text-[#666666] font-bold tracking-[0.1em] uppercase">Licensed / Bonded / Insured</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[14px] font-bold uppercase tracking-[0.1em] mb-6 text-[#F5F5F5]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#888888] hover:text-[#DA2517] transition-colors duration-75 w-fit uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[14px] font-bold uppercase tracking-[0.1em] mb-6 text-[#F5F5F5]">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[13px] text-[#888888]">
              <a href="tel:+16022838116" className="hover:text-[#DA2517] transition-colors duration-75 font-bold">
                602-283-8116
              </a>
              <a href="mailto:zaxiscontracting@gmail.com" className="hover:text-[#DA2517] transition-colors duration-75">
                zaxiscontracting@gmail.com
              </a>
              <p className="text-[#666666]">Mon - Fri: 7AM - 5PM MST</p>
            </div>
          </div>

          {/* Service Areas + Social */}
          <div>
            <h4 className="font-heading text-[14px] font-bold uppercase tracking-[0.1em] mb-6 text-[#F5F5F5]">
              Service Areas
            </h4>
            <div className="flex flex-col gap-2 text-[13px] text-[#888888] mb-6">
              <p>Phoenix Valley, AZ</p>
              <p>Lake Havasu City, AZ</p>
              <p>Santan Valley, AZ</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/ZaxisContracting/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-[#333333] text-[#888888] hover:text-[#DA2517] hover:border-[#DA2517] transition-all duration-75"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-[#222222]">
          <p className="text-center text-[11px] text-[#666666] tracking-[0.1em] uppercase">
            &copy; {currentYear} ZAXIS CONTRACTING LLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
