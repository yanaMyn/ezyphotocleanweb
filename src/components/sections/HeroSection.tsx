'use client'

import { motion } from 'framer-motion'
import { AppStoreButton } from '@/components/shared/AppStoreButton'
import { siteConfig } from '@/data/siteConfig'
import { Sparkles, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden paper-texture bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-violet-900/20'>
      {/* Subtle animated elements */}
      <div className='absolute inset-0 overflow-hidden opacity-40'>
        <motion.div
          className='absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-400/30 blur-3xl'
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl'
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 lg:px-8 py-16 lg:py-24'>
        <div className='grid lg:grid-cols-12 gap-12 items-center'>
          {/* Left content - asymmetric */}
          <div className='lg:col-span-7'>
            {/* Large serif heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='mb-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight'
            >
              <span className='bg-gradient-to-br from-primary via-primary/90 to-accent bg-clip-text text-transparent'>
                {siteConfig.name}
              </span>
            </motion.h1>

            {/* Description with refined typography */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='mb-6 text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl font-light'
            >
              {siteConfig.description}
            </motion.p>

            {/* Tagline with elegant styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='mb-10 flex items-center gap-3'
            >
              <div className='h-px w-12 bg-primary/40'></div>
              <p className='text-base lg:text-lg font-medium text-primary italic'>
                {siteConfig.tagline}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4 items-start'
            >
              <AppStoreButton
                size='lg'
                className='text-base px-8 py-6 elegant-shadow'
              />

              {/* Trust indicators */}
              <div className='flex flex-col gap-2 text-sm text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <Shield className='h-4 w-4 text-blue-600 dark:text-blue-400' />
                  <span>100% Private & Secure</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Zap className='h-4 w-4 text-violet-600 dark:text-violet-400' />
                  <span>Lightning Fast Processing</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visual element - photo grid showcase */}
          <div className='lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='relative'
            >
              {/* Decorative photo frames */}
              <div className='grid grid-cols-2 gap-4'>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='photo-frame aspect-[3/4] rounded-2xl overflow-hidden elegant-shadow'
                >
                  <Image
                    src='/images/screenshots/result .PNG'
                    alt='App Launch Screenshot'
                    width={400}
                    height={533}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='photo-frame aspect-[3/4] rounded-2xl overflow-hidden elegant-shadow mt-8'
                >
                  <Image
                    src='/images/screenshots/delete.PNG'
                    alt='Delete Feature Screenshot'
                    width={400}
                    height={533}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='absolute -bottom-4 -left-4 glass-card rounded-2xl px-6 py-4 elegant-shadow'
              >
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary'>1000+</div>
                  <div className='text-xs text-muted-foreground font-medium'>
                    Photos Cleaned
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom curve decoration */}
      <div
        className='absolute bottom-0 left-0 right-0 h-24 bg-background'
        style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)',
        }}
      />
    </section>
  )
}
