'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AppStoreButton } from '@/components/shared/AppStoreButton'
import { PricingTier } from '@/types'
import { Check } from 'lucide-react'

interface PricingCardProps {
  tier: PricingTier
  index: number
}

export function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='h-full'
    >
      <Card
        className={`h-full border-0 transition-all ${
          tier.highlighted
            ? 'glass-card scale-105 shadow-2xl ring-2 ring-primary/50'
            : 'glass-card hover:scale-105 hover:shadow-xl'
        }`}
      >
        <CardHeader>
          {tier.highlighted && (
            <Badge className='mb-4 w-fit bg-gradient-to-r from-blue-500 to-violet-500'>
              Most Popular
            </Badge>
          )}
          <CardTitle className='text-2xl'>{tier.name}</CardTitle>
          <CardDescription className='text-base'>
            <div className='mt-4 flex items-baseline gap-2'>
              {tier.introOffer && (
                <span className='text-3xl font-bold text-foreground'>
                  ${tier.introOffer.price}
                </span>
              )}
              <span
                className={`text-4xl font-bold text-foreground ${
                  tier.introOffer ? 'line-through opacity-50' : ''
                }`}
              >
                ${tier.price}
              </span>
              <span className='text-muted-foreground'>/{tier.period}</span>
            </div>
            {tier.introOffer && (
              <p className='mt-2 text-sm text-primary font-medium'>
                Free trials: {tier.introOffer.duration}
              </p>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='space-y-3'>
            {tier.features.map((feature, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-primary mt-0.5' />
                <span className='text-sm text-muted-foreground'>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <AppStoreButton
            size='lg'
            variant={tier.highlighted ? 'default' : 'outline'}
            className='w-full'
          />
        </CardFooter>
      </Card>
    </motion.div>
  )
}
