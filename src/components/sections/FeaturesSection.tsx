"use client"

import { motion } from "framer-motion"
import { FeatureCard } from "@/components/features/FeatureCard"
import { features } from "@/data/features"

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 paper-texture opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-sm font-medium text-primary">✨ Capabilities</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Powerful Features for Your{" "}
            <span className="bg-gradient-to-br from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              Photo Library
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Everything you need to organize, clean, and optimize your photos with AI-powered technology
          </p>
        </motion.div>

        {/* Features Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
