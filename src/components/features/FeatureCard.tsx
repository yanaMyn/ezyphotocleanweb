"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Feature } from "@/types"
import {
  ShieldCheck,
  Brain,
  BarChart3,
  Sparkles,
  Wand2,
  LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "brain": Brain,
  "chart-bar": BarChart3,
  "sparkles": Sparkles,
  "magic-wand": Wand2,
}

interface FeatureCardProps {
  feature: Feature
  index: number
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Sparkles

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card h-full border-0 transition-all hover:scale-105 hover:shadow-xl">
        <CardHeader>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl">{feature.title}</CardTitle>
          <CardDescription className="text-base">
            {feature.description}
          </CardDescription>
        </CardHeader>
        {feature.details && feature.details.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
