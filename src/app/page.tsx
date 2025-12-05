import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/siteConfig'
import { Analytics } from '@vercel/analytics/next'

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000',
      bestRating: '5',
    },
    description: siteConfig.description,
    applicationSubCategory: 'Photo Cleaner, Duplicate Finder, Storage Manager',
    featureList: [
      'AI-powered duplicate photo detection',
      'Blurry photo finder',
      'Similar photo detection',
      'Large video finder',
      'Screenshot organizer',
      'Storage insights and analytics',
      'One-tap photo cleanup',
      '100% private - no cloud upload',
    ],
    screenshot: [
      '/images/screenshots/launch.PNG',
      '/images/screenshots/analyze.PNG',
      '/images/screenshots/blurry.PNG',
      '/images/screenshots/delete.PNG',
    ],
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    downloadUrl: siteConfig.appStoreUrl,
    softwareVersion: '1.0',
    datePublished: '2024-01-01',
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />
      <ReviewsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
