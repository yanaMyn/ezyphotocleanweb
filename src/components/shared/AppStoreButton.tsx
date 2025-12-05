"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/siteConfig"
import { Apple } from "lucide-react"

interface AppStoreButtonProps {
  size?: "default" | "lg" | "sm"
  variant?: "default" | "outline"
  className?: string
}

export function AppStoreButton({
  size = "lg",
  variant = "default",
  className
}: AppStoreButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      asChild
      className={className}
    >
      <a
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="gap-2"
      >
        <Apple className="h-5 w-5" />
        Download on App Store
      </a>
    </Button>
  )
}
