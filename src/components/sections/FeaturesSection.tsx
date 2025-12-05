"use client"

import { motion } from "framer-motion"
import { FeatureCard } from "@/components/features/FeatureCard"
import { features } from "@/data/features"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
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
            Powerful Features for Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Photo Library
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to organize, clean, and optimize your photos with AI-powered technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
