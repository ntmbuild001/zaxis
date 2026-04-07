'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolled = forceScrolled || scrolled

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-75 ${
        isScrolled
          ? 'bg-[#0A0A0A] border-b-2 border-[#DA2517]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zaxis_logo_no_bg-vHosBUHYI2ND57FH9OfHZmF9AVqCXY.png"
              alt="Zaxis Contracting LLC"
              width={218}
              height={78}
              className="h-16 w-auto"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-bold tracking-[0.1em] text-[#F5F5F5]/80 hover:text-[#DA2517] transition-colors duration-75 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block bg-[#DA2517] text-[#F5F5F5] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 border-2 border-[#DA2517] hover:border-[#F5F5F5]"
            >
              GET ESTIMATE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F5F5] hover:text-[#DA2517] transition-colors duration-75"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 top-20 bg-[#0A0A0A] z-40 md:hidden"
          >
            {/* Grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
              }}
            />
            <nav className="relative flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-[#F5F5F5] text-[36px] font-bold uppercase tracking-tight hover:text-[#DA2517] transition-colors duration-75"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.03, duration: 0.1 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#DA2517] text-[#F5F5F5] px-10 py-5 text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-all duration-75 border-2 border-[#DA2517]"
                >
                  START PROJECT →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
