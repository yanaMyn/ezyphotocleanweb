import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    legal: [
      { name: "Privacy Policy", href: siteConfig.privacyPolicyUrl },
      { name: "Terms of Use", href: siteConfig.termsUrl },
    ],
    support: [
      { name: "Support", href: siteConfig.supportUrl },
      { name: "App Store", href: siteConfig.appStoreUrl },
    ],
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
