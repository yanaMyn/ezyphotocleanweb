"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { AppStoreButton } from "@/components/shared/AppStoreButton"
import { siteConfig } from "@/data/siteConfig"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
    { name: "Support", href: siteConfig.supportUrl },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <AppStoreButton size="default" />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="space-y-2 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <AppStoreButton size="default" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
