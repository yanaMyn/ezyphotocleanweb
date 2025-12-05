"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const screenshots = [
    { src: "/images/screenshots/launch.PNG", alt: "Launch Screen - Welcome to Ezy Photo Clean" },
    { src: "/images/screenshots/analyze.PNG", alt: "Analyze Photos - AI-powered scanning" },
    { src: "/images/screenshots/blurry.PNG", alt: "Blurry Photo Detection" },
    { src: "/images/screenshots/large videos.PNG", alt: "Large Videos Finder" },
    { src: "/images/screenshots/insight.PNG", alt: "Storage Insights & Analytics" },
    { src: "/images/screenshots/insight 2.PNG", alt: "Detailed Storage Breakdown" },
    { src: "/images/screenshots/result .PNG", alt: "Scan Results" },
    { src: "/images/screenshots/delete.PNG", alt: "Clean & Delete Photos" },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let isPaused = false

    const startAutoScroll = () => {
      const scroll = () => {
        if (scrollContainer && !isPaused) {
          scrollContainer.scrollLeft += 1

          // Calculate when to reset (at 1/3 point since we have 3 copies)
          const maxScroll = scrollContainer.scrollWidth / 3

          // Reset to beginning for seamless loop
          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 1
          }
        }

        animationFrameId = requestAnimationFrame(scroll)
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    const handleTouchStart = () => {
      isPaused = true
    }

    const handleTouchEnd = () => {
      isPaused = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("touchstart", handleTouchStart)
    scrollContainer.addEventListener("touchend", handleTouchEnd)

    startAutoScroll()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
        scrollContainer.removeEventListener("touchstart", handleTouchStart)
        scrollContainer.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
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
            Experience the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Beautiful Interface
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern design meets powerful functionality. Hover to pause.
          </p>
        </motion.div>

        {/* Screenshots Carousel with Infinite Scroll */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Duplicate screenshots twice for seamless infinite scroll */}
            {[...screenshots, ...screenshots, ...screenshots].map((screenshot, index) => (
              <motion.div
                key={`${screenshot.src}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % screenshots.length) * 0.05 }}
                className="flex-shrink-0"
              >
                <div className="relative group">
                  {/* Phone Frame */}
                  <div className="glass-card rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 dark:border-slate-700 hover:scale-105 transition-transform duration-300">
                    <div className="relative overflow-hidden rounded-[2.5rem]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 dark:bg-slate-700 rounded-b-3xl z-10" />

                      {/* Screenshot */}
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={300}
                        height={650}
                        className="object-cover w-[280px] h-[580px]"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-[3rem]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-secondary/30 via-secondary/30 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-secondary/30 via-secondary/30 to-transparent z-10" />
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Smart Scanning", value: "AI-Powered" },
            { label: "Multiple Modes", value: "8 Detection Types" },
            { label: "Easy Selection", value: "One-Tap Clean" },
            { label: "Safe Storage", value: "100% Private" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-4 text-center"
            >
              <div className="text-lg font-bold text-primary mb-1">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
