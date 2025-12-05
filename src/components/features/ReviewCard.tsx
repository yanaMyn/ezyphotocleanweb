"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Review } from "@/types"
import { Star } from "lucide-react"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="glass-card h-full border-0 flex-shrink-0 w-[350px] lg:w-[400px]">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          {review.text}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-semibold text-white">
            {review.avatar}
          </div>
          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(review.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
