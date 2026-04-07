'use client'

import { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1)
    } else {
      onNavigate(0) // Loop to start
    }
  }, [currentIndex, images.length, onNavigate])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    } else {
      onNavigate(images.length - 1) // Loop to end
    }
  }, [currentIndex, images.length, onNavigate])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, goNext, goPrev])

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) goNext()
    if (isRightSwipe) goPrev()
  }

  if (!isOpen || images.length === 0) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 flex items-center justify-center"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 bg-[#0A0A0A] border-2 border-[#333333] text-[#F5F5F5] hover:border-[#DA2517] hover:text-[#DA2517] transition-all duration-75"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-[#0A0A0A] border-2 border-[#333333]">
            <span className="text-[#F5F5F5] text-[12px] font-bold uppercase tracking-wide">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Desktop navigation arrows - hidden on mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#0A0A0A] border-2 border-[#333333] text-[#F5F5F5] hover:border-[#DA2517] hover:text-[#DA2517] transition-all duration-75"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#0A0A0A] border-2 border-[#333333] text-[#F5F5F5] hover:border-[#DA2517] hover:text-[#DA2517] transition-all duration-75"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Main content wrapper */}
          <div className="flex flex-col items-center justify-center gap-4 px-4" onClick={(e) => e.stopPropagation()}>
            {/* Image container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="relative w-[90vw] h-[60vh] md:h-[75vh] max-w-[1400px]"
            >
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Mobile navigation arrows - below image, aligned to header boxes */}
            {images.length > 1 && (
              <div className="flex md:hidden justify-between w-[calc(100vw-2rem)]">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goPrev()
                  }}
                  className="p-4 bg-[#0A0A0A] border-2 border-[#333333] text-[#F5F5F5] hover:border-[#DA2517] hover:text-[#DA2517] transition-all duration-75"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goNext()
                  }}
                  className="p-4 bg-[#0A0A0A] border-2 border-[#333333] text-[#F5F5F5] hover:border-[#DA2517] hover:text-[#DA2517] transition-all duration-75"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            )}
          </div>

          {/* Thumbnail strip on desktop */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-1 max-w-[90vw] overflow-x-auto p-2 bg-[#0A0A0A]/80">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate(i)
                }}
                className={`relative w-16 h-12 flex-shrink-0 overflow-hidden border-2 transition-all duration-75 ${
                  i === currentIndex ? 'border-[#DA2517]' : 'border-[#333333] hover:border-[#F5F5F5]/50'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
