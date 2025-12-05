export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  details?: string[]
}

export interface Review {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  date: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  highlighted: boolean
  introOffer?: {
    price: number
    duration: string
  }
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  appStoreUrl: string
  supportUrl: string
  privacyPolicyUrl: string
  termsUrl: string
}
