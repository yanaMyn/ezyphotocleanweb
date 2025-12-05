import { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19.99,
    period: 'month',
    highlighted: false,
    introOffer: {
      price: 9.99,
      duration: '3 days',
    },
    features: [
      'Unlimited photo scanning',
      'AI-powered duplicate detection',
      'Blurry photo detection',
      'Screenshot finder',
      'Storage analytics',
      'Smart recommendations',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 34.99,
    period: 'year',
    highlighted: true,
    introOffer: {
      price: 29.99,
      duration: '3 days',
    },
    features: [
      'All Monthly Plan features',
      'Save 58% compared to monthly',
      'Unlimited photo scanning',
      'AI-powered duplicate detection',
      'Blurry photo detection',
      'Screenshot finder',
      'Storage analytics',
      'Smart recommendations',
    ],
  },
]
