import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <ReviewsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
