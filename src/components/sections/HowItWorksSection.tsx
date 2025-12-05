'use client'

import { motion } from 'framer-motion'
import { Download, Scan, CheckCircle2, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Download & Install',
    description:
      'Get Ezy Photo Clean from the App Store and install it on your device',
    icon: Download,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Scan Your Library',
    description:
      'Our AI instantly analyzes your photos to find duplicates, blurry images, and more',
    icon: Scan,
    color: 'from-violet-500 to-violet-600',
  },
  {
    number: '03',
    title: 'Review & Clean',
    description:
      'Smart suggestions help you quickly decide what to keep and what to delete',
    icon: CheckCircle2,
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '04',
    title: 'Enjoy Free Space',
    description:
      'Reclaim gigabytes of storage and keep your photo library organized',
    icon: Sparkles,
    color: 'from-pink-500 to-pink-600',
  },
]

export function HowItWorksSection() {
  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>
            How It{' '}
            <span className='bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
              Works
            </span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            Clean your photo library in 4 simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative'
              >
                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent' />
                )}

                <div className='glass-card rounded-3xl p-6 text-center h-full hover:scale-105 transition-transform'>
                  {/* Number Badge */}
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 mb-4'>
                    <span className='text-sm font-bold text-muted-foreground'>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className='mb-4 inline-flex'>
                    <div
                      className={`rounded-2xl p-4 bg-gradient-to-br ${step.color}`}
                    >
                      <Icon className='h-8 w-8 text-white' />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className='mb-3 text-xl font-bold'>{step.title}</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "1M+", label: "Photos Cleaned" },
            { value: "50TB+", label: "Space Saved" },
            { value: "4.9★", label: "App Store Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}
