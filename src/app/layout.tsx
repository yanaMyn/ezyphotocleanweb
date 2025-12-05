import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/data/siteConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteConfig.name} - Photo Cleaner App | Delete Duplicate Photos & Free Up Space`,
  description: `${siteConfig.name} is the best photo cleaner app for iPhone & iPad. Remove duplicate photos, blurry images, and similar pictures. AI-powered photo organizer that helps you clean and organize your photo library. Free up storage space instantly with smart photo management.`,
  keywords: [
    // Primary keywords
    'photo cleaner',
    'photo cleaner app',
    'delete duplicate photos',
    'duplicate photo finder',
    'duplicate photo remover',

    // Feature keywords
    'photo organizer',
    'photo management app',
    'organize photos',
    'clean photo library',
    'free up storage space',
    'storage cleaner',
    'photo storage manager',

    // AI & Detection
    'AI photo app',
    'AI photo cleaner',
    'blurry photo detection',
    'similar photo finder',
    'duplicate image finder',
    'smart photo organizer',

    // Platform
    'iPhone photo cleaner',
    'iPad photo app',
    'iOS photo organizer',
    'photo cleaner for iPhone',

    // Use cases
    'remove duplicate photos',
    'delete blurry photos',
    'clean up photos',
    'photo library cleanup',
    'optimize photo storage',
    'photo gallery cleaner',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: 'Photography',
  openGraph: {
    title: `${siteConfig.name} - Best Photo Cleaner & Duplicate Finder for iPhone`,
    description:
      'AI-powered photo cleaner app. Remove duplicates, blurry photos, and free up storage. Organize your photo library effortlessly. 100% private & secure.',
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/screenshots/launch.PNG',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Photo Cleaner App`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Photo Cleaner & Duplicate Finder`,
    description:
      'AI-powered photo cleaner. Remove duplicates & blurry photos. Free up storage instantly. 100% private.',
    images: ['/images/screenshots/launch.PNG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    // Add your verification codes here when you have them
    google:
      'google-site-verification=pkz5Y-Uhq_9afXv7SBdE7K4tjAzNfFsaBobc2B-sraQ',
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='min-h-screen pt-16'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
