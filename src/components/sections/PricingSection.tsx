"use client"

import { motion } from "framer-motion"
import { PricingCard } from "@/components/features/PricingCard"
import { pricingTiers } from "@/data/pricing"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include a free trial period. Cancel anytime. No hidden fees.
            Prices shown are in USD.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
