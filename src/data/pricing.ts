import { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19.99,
    period: 'month',
    highlighted: true,
    introOffer: {
      price: 9.99,
      duration: '3 months'
    },
    features: [
      'Unlimited photo scanning',
      'AI-powered duplicate detection',
      'Blurry photo detection',
      'Screenshot finder',
      'Storage analytics',
      'Smart recommendations',
      'Priority support'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 49.99,
    period: 'year',
    highlighted: false,
    features: [
      'All Monthly Plan features',
      'Save 79% compared to monthly',
      'Exclusive updates',
      'Advanced analytics',
      'Premium support',
      'Early access to new features'
    ]
  }
]
