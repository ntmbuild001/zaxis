'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import { MapPin, ArrowLeft, ArrowRight, Check } from 'lucide-react'

const locations = [
  { id: 'phoenix', label: 'Phoenix Valley', description: 'Scottsdale, Gilbert, Mesa, Chandler, Queen Creek, San Tan Valley & more' },
  { id: 'havasu', label: 'Lake Havasu City', description: '' },
]

const serviceOptions = [
  { id: 'remodeling', label: 'Remodeling' },
  { id: 'custom-garages', label: 'Custom Garages' },
  { id: 'concrete', label: 'Concrete' },
  { id: 'patios', label: 'Patios' },
  { id: 'dirt-work', label: 'Dirt Work / Underground' },
  { id: 'other', label: 'Other' },
]

const timelineOptions = [
  { id: 'asap', label: 'ASAP' },
  { id: '1-3-months', label: '1-3 Months' },
  { id: '3-6-months', label: '3-6 Months' },
  { id: 'planning', label: 'Just Planning' },
]

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    location: '',
    services: [] as string[],
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const { toast } = useToast()

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const canProceed = () => {
    if (step === 1) return !!formData.location
    if (step === 2) return formData.services.length > 0
    if (step === 3) return !!formData.timeline
    return formData.name && formData.phone && formData.email
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const selectedServices = serviceOptions
        .filter(s => formData.services.includes(s.id))
        .map(s => s.label)
        .join(', ')
      
      const selectedLocation = locations.find(l => l.id === formData.location)?.label || ''
      const selectedTimeline = timelineOptions.find(t => t.id === formData.timeline)?.label || ''

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceArea: formData.location,
          services: formData.services,
          timeline: formData.timeline,
          projectDetails: formData.message,
        }),
      })

      if (response.ok) {
        toast({
          title: 'Thank You!',
          description: "We'll be in touch shortly.",
        })
        setFormData({ location: '', services: [], timeline: '', name: '', email: '', phone: '', message: '' })
        setStep(1)
      } else {
        toast({ 
          title: 'Error', 
          description: 'Something went wrong. Please call us at 602-283-8116.', 
          variant: 'destructive' 
        })
      }
    } catch {
      toast({ 
        title: 'Error', 
        description: 'Something went wrong. Please call us at 602-283-8116.', 
        variant: 'destructive' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
  }

  const [direction, setDirection] = useState(1)

  const goNext = () => {
    if (!canProceed()) return
    setDirection(1)
    if (step === totalSteps) {
      handleSubmit()
    } else {
      setStep((s) => s + 1)
    }
  }

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(1, s - 1))
  }

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="h-1 bg-[#0A0A0A]/10 mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-[#DA2517]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>

      {/* Step Indicator */}
      <p className="text-[11px] text-[#666666] mb-6 font-bold tracking-[0.15em] uppercase">
        STEP {step} / {totalSteps}
      </p>

      {/* Step Content */}
      <div className="min-h-[300px] relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <h3 className="font-heading text-[28px] md:text-[36px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-tight">
                WHERE IS YOUR PROJECT?
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] mb-6">Select your service area.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setFormData((prev) => ({ ...prev, location: loc.id }))}
                    className={`flex items-start gap-4 p-6 border-2 text-left transition-all duration-75 ${
                      formData.location === loc.id
                        ? 'border-[#DA2517] bg-[#DA2517]/5'
                        : 'border-[#0A0A0A]/10 bg-[#FFFFFF] hover:border-[#DA2517]'
                    }`}
                  >
                    <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${formData.location === loc.id ? 'text-[#DA2517]' : 'text-[#666666]'}`} />
                    <div>
                      <p className="font-bold text-[#0A0A0A] text-[14px] uppercase tracking-wide">{loc.label}</p>
                      <p className="text-[12px] text-[#666666] mt-1">{loc.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <h3 className="font-heading text-[28px] md:text-[36px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-tight">
                WHAT DO YOU NEED?
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] mb-6">Select all that apply.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {serviceOptions.map((service) => {
                  const isSelected = formData.services.includes(service.id)
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`relative p-5 border-2 text-center font-bold text-[12px] uppercase tracking-wide transition-all duration-75 ${
                        isSelected
                          ? 'border-[#DA2517] bg-[#DA2517]/5 text-[#0A0A0A]'
                          : 'border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] hover:border-[#DA2517]'
                      }`}
                    >
                      {isSelected && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-[#DA2517]" />
                      )}
                      {service.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <h3 className="font-heading text-[28px] md:text-[36px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-tight">
                WHEN DO YOU WANT TO START?
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] mb-6">Select your preferred timeline.</p>
              <div className="grid grid-cols-2 gap-2">
                {timelineOptions.map((option) => {
                  const isSelected = formData.timeline === option.id
                  return (
                    <button
                      key={option.id}
                      onClick={() => setFormData((prev) => ({ ...prev, timeline: option.id }))}
                      className={`relative p-5 border-2 text-center font-bold text-[12px] uppercase tracking-wide transition-all duration-75 ${
                        isSelected
                          ? 'border-[#DA2517] bg-[#DA2517]/5 text-[#0A0A0A]'
                          : 'border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] hover:border-[#DA2517]'
                      }`}
                    >
                      {isSelected && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-[#DA2517]" />
                      )}
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <h3 className="font-heading text-[28px] md:text-[36px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-tight">
                YOUR DETAILS
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] mb-6">Fill in your details and we&apos;ll be in touch.</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] text-[14px] focus:outline-none focus:border-[#DA2517] placeholder:text-[#888888] transition-colors duration-75"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] text-[14px] focus:outline-none focus:border-[#DA2517] placeholder:text-[#888888] transition-colors duration-75"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] text-[14px] focus:outline-none focus:border-[#DA2517] placeholder:text-[#888888] transition-colors duration-75"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-[#0A0A0A]/10 bg-[#FFFFFF] text-[#0A0A0A] text-[14px] focus:outline-none focus:border-[#DA2517] resize-none placeholder:text-[#888888] transition-colors duration-75"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-[#0A0A0A]/10">
        {step > 1 ? (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-[#0A0A0A] text-[12px] font-bold uppercase tracking-[0.1em] hover:text-[#DA2517] transition-colors duration-75"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={goNext}
          disabled={!canProceed() || isLoading}
          className="bg-[#DA2517] text-[#F5F5F5] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#0A0A0A] transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 border-2 border-[#DA2517] hover:border-[#0A0A0A]"
        >
          {isLoading ? 'SENDING...' : step === totalSteps ? 'SUBMIT REQUEST' : 'NEXT'}
          {!isLoading && step < totalSteps && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
