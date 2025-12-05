"use client"

import { motion } from "framer-motion"
import { ReviewCard } from "@/components/features/ReviewCard"
import { reviews } from "@/data/reviews"
import { useEffect, useRef } from "react"

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0
          } else {
            scrollContainer.scrollLeft += 1
          }
        }
      }, 30)
    }

    const stopAutoScroll = () => {
      clearInterval(scrollInterval)
    }

    scrollContainer.addEventListener("mouseenter", stopAutoScroll)
    scrollContainer.addEventListener("mouseleave", startAutoScroll)

    startAutoScroll()

    return () => {
      stopAutoScroll()
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll)
      scrollContainer.removeEventListener("mouseleave", startAutoScroll)
    }
  }, [])

  return (
    <section id="reviews" className="py-20 lg:py-32 overflow-hidden">
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
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our users are saying about Ezy Photo Clean
          </p>
        </motion.div>

        {/* Auto-scrolling Reviews */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Duplicate reviews for infinite scroll effect */}
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
