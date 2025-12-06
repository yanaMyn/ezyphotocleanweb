"use client"

import { motion } from "framer-motion"
import { AppStoreButton } from "@/components/shared/AppStoreButton"
import { siteConfig } from "@/data/siteConfig"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 film-grain">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600" />

      {/* Subtle animated elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-20 left-10 h-96 w-96 rounded-full bg-white/20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <Sparkles className="h-24 w-24 text-white" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="photo-frame bg-white/95 dark:bg-background/95 backdrop-blur-sm rounded-3xl p-12 lg:p-16 text-center elegant-shadow">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ready to Clean Your{" "}
                <span className="bg-gradient-to-br from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                  Photo Library?
                </span>
              </h2>
              <p className="mb-10 text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Join thousands of users who trust {siteConfig.name} to keep their photos organized, optimized, and secure.
              </p>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <AppStoreButton
                  size="lg"
                  className="text-base px-10 py-7 elegant-shadow hover:scale-105 transition-transform"
                />
                <a
                  href={siteConfig.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all"
                >
                  <span className="font-semibold text-base">Get Help & Support</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
