'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const schema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Please enter a valid email address'),
  industry: z.string().min(1, 'Please enter your industry'),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Submission failed')
      }
      setSubmitState('success')
      reset()
    } catch (err) {
      setSubmitState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full font-sans text-sm text-navy bg-white border rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-200 placeholder:text-silver-slate/60 ${
      hasError ? 'border-red-400 focus:ring-red-400/40' : 'border-navy/20 focus:border-gold'
    }`

  const labelClass = 'font-mono text-xs uppercase tracking-widest text-navy/70 mb-1.5 block'

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="1000" cy="100" r="300" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight">
              Book Your Free
              <br />
              <span className="text-gold">Consultation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <SectionHeader
                eyebrow="Contact Details"
                heading="Reach Us Directly"
                subtext="Our London team is available Monday to Friday. The first hour is always free."
              />

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-gold">Phone</span>
                <a
                  href="tel:+447585367081"
                  className="font-playfair text-2xl font-bold text-navy hover:text-gold transition-colors"
                >
                  +44 7585 367081
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-gold">
                  Registered Address
                </span>
                <address className="not-italic font-sans text-base text-navy leading-relaxed">
                  Unit 6, 160 Eltham Hill<br />
                  London SE9 5EA<br />
                  United Kingdom
                </address>
                <p className="font-sans text-sm text-silver-slate mt-1">
                  Registered and operating in the United Kingdom.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-col gap-3 bg-white border border-navy/10 rounded-sm p-6">
                {[
                  '✓ No obligation — first hour is free',
                  '✓ Registered in England & Wales',
                  '✓ Active in 6 countries',
                  '✓ Response within 24 hours',
                ].map((item) => (
                  <p key={item} className="font-sans text-sm text-navy/80 flex items-start gap-2">
                    <span className="text-gold font-bold">{item.slice(0, 1)}</span>
                    {item.slice(1)}
                  </p>
                ))}
              </div>

              {/* Industries */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gold mb-3 block">
                  We Specialise In
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Textile & Fashion', 'Horeca', 'Cosmetics', 'E-commerce'].map((ind) => (
                    <span
                      key={ind}
                      className="font-sans text-xs text-navy border border-navy/20 px-3 py-1 rounded-full"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-navy/10 rounded-sm p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                    >
                      {/* Animated checkmark */}
                      <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
                        <motion.svg
                          className="w-10 h-10 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                        </motion.svg>
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-navy mb-2">
                          Booking Received
                        </h3>
                        <p className="font-sans text-base text-silver-slate">
                          We&apos;ll be in touch within 24 hours to confirm your free consultation.
                        </p>
                      </div>
                      <div className="font-sans text-sm text-navy/60 bg-off-white p-4 rounded-sm w-full">
                        <p>Unit 6, 160 Eltham Hill, London SE9 5EA</p>
                        <p>+44 7585 367081</p>
                      </div>
                      <button
                        onClick={() => setSubmitState('idle')}
                        className="font-sans text-sm text-gold hover:text-gold/70 transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-6"
                      noValidate
                    >
                      <div>
                        <h2 className="font-playfair text-2xl font-bold text-navy mb-1">
                          Book My Free Hour
                        </h2>
                        <p className="font-sans text-sm text-silver-slate">
                          Fill in your details and we&apos;ll arrange your complimentary consultation.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className={labelClass}>
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            {...register('name')}
                            type="text"
                            placeholder="Jane Smith"
                            className={inputClass(!!errors.name)}
                            autoComplete="name"
                          />
                          {errors.name && (
                            <p className="font-sans text-xs text-red-500 mt-1.5">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label className={labelClass}>
                            Company Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            {...register('company')}
                            type="text"
                            placeholder="Acme Ltd"
                            className={inputClass(!!errors.company)}
                            autoComplete="organization"
                          />
                          {errors.company && (
                            <p className="font-sans text-xs text-red-500 mt-1.5">
                              {errors.company.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className={labelClass}>
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="jane@company.com"
                          className={inputClass(!!errors.email)}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="font-sans text-xs text-red-500 mt-1.5">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Industry */}
                        <div>
                          <label className={labelClass}>
                            Industry <span className="text-red-400">*</span>
                          </label>
                          <input
                            {...register('industry')}
                            type="text"
                            placeholder="e.g. Textile, Retail, Logistics..."
                            className={inputClass(!!errors.industry)}
                          />
                          {errors.industry && (
                            <p className="font-sans text-xs text-red-500 mt-1.5">
                              {errors.industry.message}
                            </p>
                          )}
                        </div>

                        {/* Preferred Date */}
                        <div>
                          <label className={labelClass}>Preferred Date</label>
                          <input
                            {...register('preferredDate')}
                            type="date"
                            min={today}
                            className={inputClass(false)}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className={labelClass}>Message / Goals</label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="Tell us about your business and what you hope to achieve..."
                          className={`${inputClass(false)} resize-none`}
                        />
                      </div>

                      {/* Error message */}
                      {submitState === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-sm p-4">
                          <p className="font-sans text-sm text-red-600">{errorMessage}</p>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitState === 'loading'}
                        className="w-full bg-gold text-navy font-sans font-bold text-sm py-4 rounded-sm hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {submitState === 'loading' ? (
                          <>
                            <svg
                              className="w-4 h-4 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Book My Free Hour'
                        )}
                      </button>

                      <p className="font-sans text-xs text-silver-slate text-center">
                        By submitting, you agree to be contacted by Ladzo Limited regarding your enquiry.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
