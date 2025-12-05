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

const accentColors = [
  { bg: 'bg-primary/10', icon: 'text-primary', border: 'border-primary/20' },
  { bg: 'bg-secondary/10', icon: 'text-secondary', border: 'border-secondary/20' },
  { bg: 'bg-accent/10', icon: 'text-accent', border: 'border-accent/20' },
]

interface FeatureCardProps {
  feature: Feature
  index: number
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Sparkles
  const colors = accentColors[index % accentColors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="h-full group"
    >
      <Card className={`photo-frame h-full border-2 ${colors.border} transition-all duration-300 hover:border-opacity-60 hover:-translate-y-1 elegant-shadow hover:shadow-lg`}>
        <CardHeader className="space-y-4">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} border ${colors.border} transition-transform group-hover:scale-110 duration-300`}>
            <Icon className={`h-7 w-7 ${colors.icon}`} strokeWidth={2} />
          </div>
          <div>
            <CardTitle className="text-2xl lg:text-3xl mb-3">
              {feature.title}
            </CardTitle>
            <CardDescription className="text-base text-foreground/60 leading-relaxed">
              {feature.description}
            </CardDescription>
          </div>
        </CardHeader>
        {feature.details && feature.details.length > 0 && (
          <CardContent>
            <ul className="space-y-2.5">
              {feature.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} flex-shrink-0`} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
