"use client"

import { motion } from "framer-motion"
import { AppStoreButton } from "@/components/shared/AppStoreButton"
import { siteConfig } from "@/data/siteConfig"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-pink-600" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Clean Your Photo Library?
          </h2>
          <p className="mb-8 text-lg text-white/90 lg:text-xl">
            Join thousands of users who trust {siteConfig.name} to keep their photos organized and secure.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <AppStoreButton size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-0" />
            <a
              href={siteConfig.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="font-semibold">Learn more</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
