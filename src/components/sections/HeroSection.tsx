'use client'

import { motion } from 'framer-motion'
import { AppStoreButton } from '@/components/shared/AppStoreButton'
import { HeroIllustration } from '@/components/shared/HeroIllustration'
import { siteConfig } from '@/data/siteConfig'
import { Sparkles, Shield, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden py-20 lg:py-32'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-violet-900/20' />

      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-20 right-10 h-64 w-64 rounded-full bg-violet-400/30 blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-8 inline-flex'
          >
            <div className='glass-card rounded-full px-6 py-2 text-sm font-medium'>
              <div className='flex items-center gap-2'>
                <Sparkles className='h-4 w-4 text-blue-500' />
                <span>AI-Powered Photo Cleaning</span>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl'
          >
            <span className='bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
              {siteConfig.name}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-4 text-xl text-muted-foreground lg:text-2xl'
          >
            {siteConfig.description}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mb-8 text-lg font-semibold text-primary lg:text-xl'
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mb-12'
          >
            <AppStoreButton size='lg' className='text-lg px-8 py-6' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
