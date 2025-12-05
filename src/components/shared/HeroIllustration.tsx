"use client"

import { motion } from "framer-motion"
import {
  Image as ImageIcon,
  Trash2,
  Sparkles,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react"

export function HeroIllustration() {
  const floatingIcons = [
    { Icon: ImageIcon, color: "text-blue-500", delay: 0, x: -20, y: -30 },
    { Icon: Trash2, color: "text-violet-500", delay: 0.2, x: 30, y: -20 },
    { Icon: Sparkles, color: "text-pink-500", delay: 0.4, x: -30, y: 20 },
    { Icon: Shield, color: "text-green-500", delay: 0.6, x: 20, y: 30 },
    { Icon: Zap, color: "text-yellow-500", delay: 0.8, x: 0, y: -40 },
    { Icon: CheckCircle2, color: "text-emerald-500", delay: 1, x: 40, y: 10 },
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px] lg:h-[500px]">
      {/* Center Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          {/* Phone */}
          <div className="glass-card rounded-[2.5rem] w-[200px] h-[400px] lg:w-[240px] lg:h-[480px] border-4 border-slate-700 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-700 rounded-b-2xl z-10" />

            {/* Screen Content */}
            <div className="h-full bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 p-4 flex flex-col items-center justify-center">
              {/* Logo Area */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-4"
              >
                <Sparkles className="h-16 w-16 text-white" />
              </motion.div>

              {/* Stats */}
              <div className="space-y-2 w-full">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-white text-center">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-xs opacity-90">Photos Cleaned</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-white text-center">
                  <div className="text-2xl font-bold">2.5 GB</div>
                  <div className="text-xs opacity-90">Space Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 to-violet-500 blur-3xl opacity-40" />
        </div>
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [x, x + 10, x],
            y: [y, y - 10, y],
          }}
          transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            x: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.5,
            },
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.5,
            },
          }}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          }}
        >
          <div className={`glass-card rounded-2xl p-4 ${color} shadow-xl`}>
            <Icon className="h-8 w-8" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
