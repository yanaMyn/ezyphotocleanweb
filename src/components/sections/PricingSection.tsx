'use client'

import { motion } from 'framer-motion'
import { PricingCard } from '@/components/features/PricingCard'
import { pricingTiers } from '@/data/pricing'

export function PricingSection() {
  return (
    <section
      id='pricing'
      className='py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-blue-50/50 dark:from-slate-900/50 dark:via-violet-900/10 dark:to-blue-900/10'
    >
      {/* Background texture */}
      <div className='absolute inset-0 paper-texture opacity-50' />

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-12 max-w-3xl text-center'
        >
          <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5'>
            <span className='text-sm font-medium text-primary'>💎 Pricing</span>
          </div>
          <h2 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl'>
            Simple,{' '}
            <span className='bg-gradient-to-br from-primary via-primary/90 to-accent bg-clip-text text-transparent'>
              Transparent Pricing
            </span>
          </h2>
          <p className='text-lg lg:text-xl text-muted-foreground leading-relaxed'>
            Choose the plan that works best for you
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2'>
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mx-auto mt-16 max-w-2xl text-center'
        >
          <div className='glass-card rounded-2xl px-8 py-6'>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              All plans include a free trial period. Cancel anytime. No hidden
              fees. Prices shown are in USD.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
