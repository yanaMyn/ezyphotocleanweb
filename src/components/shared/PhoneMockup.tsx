"use client"

import { motion } from "framer-motion"
import {
  Image as ImageIcon,
  Scan,
  BarChart3,
  Trash2,
  CheckCircle2,
  Sparkles
} from "lucide-react"

interface PhoneMockupProps {
  variant: "home" | "scan" | "analytics" | "clean" | "success"
  index: number
}

const mockupContent = {
  home: {
    icon: Sparkles,
    title: "Welcome Screen",
    description: "Start cleaning",
    gradient: "from-blue-500 to-violet-500",
  },
  scan: {
    icon: Scan,
    title: "Scanning Photos",
    description: "AI Detection",
    gradient: "from-violet-500 to-purple-500",
  },
  analytics: {
    icon: BarChart3,
    title: "Storage Insights",
    description: "Space Analysis",
    gradient: "from-purple-500 to-pink-500",
  },
  clean: {
    icon: Trash2,
    title: "Clean Gallery",
    description: "Remove Duplicates",
    gradient: "from-pink-500 to-rose-500",
  },
  success: {
    icon: CheckCircle2,
    title: "All Clean!",
    description: "Space Saved",
    gradient: "from-green-500 to-emerald-500",
  },
}

export function PhoneMockup({ variant, index }: PhoneMockupProps) {
  const content = mockupContent[variant]
  const Icon = content.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0"
    >
      <div className="relative">
        {/* Phone Frame */}
        <div className="glass-card rounded-[3rem] p-4 shadow-2xl w-[280px] h-[570px] border-8 border-slate-800 dark:border-slate-700">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 dark:bg-slate-700 rounded-b-3xl" />

          {/* Screen Content */}
          <div className={`relative z-10 h-full rounded-[2.5rem] bg-gradient-to-br ${content.gradient} p-6 flex flex-col items-center justify-center overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-xl" />
            </div>

            {/* Content */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-6">
                <Icon className="h-20 w-20 text-white" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              {content.title}
            </h3>
            <p className="text-white/90 text-center">
              {content.description}
            </p>

            {/* Mock UI Elements */}
            <div className="mt-8 space-y-3 w-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl h-12 animate-pulse" />
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-12 animate-pulse delay-75" />
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-12 animate-pulse delay-150" />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${content.gradient} blur-2xl opacity-30 rounded-[3rem]`} />
      </div>
    </motion.div>
  )
}
