# Customization Guide

Quick guide to customize your Ezy Photo Clean landing page.

---

## Table of Contents

1. [Update Site Content](#update-site-content)
2. [Add App Screenshots](#add-app-screenshots)
3. [Customize Colors & Theme](#customize-colors--theme)
4. [Add/Remove Features](#addremove-features)
5. [Modify Reviews](#modify-reviews)
6. [Update Pricing](#update-pricing)
7. [Change Links](#change-links)

---

## Update Site Content

### Basic Information

Edit `/src/data/siteConfig.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your App Name',
  tagline: 'Your tagline here',
  description: 'Your description',
  appStoreUrl: 'https://apps.apple.com/...',
  supportUrl: 'https://your-support-url.com',
  privacyPolicyUrl: 'https://your-privacy-url.com',
  termsUrl: 'https://your-terms-url.com',
}
```

---

## Add App Screenshots

### Step 1: Prepare Images

- Export screenshots from your iPhone/iPad
- Recommended size: 1170 x 2532 px (iPhone 14 Pro)
- Format: PNG or JPG
- Optimize images (use tools like TinyPNG)

### Step 2: Add to Project

Place images in `/public/images/screenshots/`:

```
public/
└── images/
    └── screenshots/
        ├── screenshot-1.png
        ├── screenshot-2.png
        ├── screenshot-3.png
        └── ...
```

### Step 3: Update ScreenshotsSection

Edit `/src/components/sections/ScreenshotsSection.tsx`:

```typescript
import Image from 'next/image'

const screenshots = [
  { src: '/images/screenshots/screenshot-1.png', alt: 'Home Screen' },
  { src: '/images/screenshots/screenshot-2.png', alt: 'Scan Results' },
  { src: '/images/screenshots/screenshot-3.png', alt: 'Analytics' },
]

// Replace the placeholder div with:
<div className="flex gap-6 overflow-x-auto pb-4">
  {screenshots.map((screenshot, index) => (
    <div key={index} className="flex-shrink-0">
      <div className="glass-card rounded-3xl p-4">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={300}
          height={650}
          className="rounded-2xl"
        />
      </div>
    </div>
  ))}
</div>
```

---

## Customize Colors & Theme

### Primary Colors

Edit `/src/app/globals.css`:

```css
:root {
  /* Change primary color (blue) */
  --primary: 221.2 83.2% 53.3%; /* HSL format */

  /* Change accent color */
  --accent: 270 50% 50%; /* Purple accent */
}
```

### Gradient Colors

Edit gradients in components:

```typescript
// Change from blue-violet to your colors
className="bg-gradient-to-r from-blue-600 to-violet-600"
// to:
className="bg-gradient-to-r from-pink-600 to-orange-600"
```

### Custom Theme

Create a custom color palette in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      // ... add more shades
      900: '#0c4a6e',
    },
  },
}
```

---

## Add/Remove Features

### Add a New Feature

Edit `/src/data/features.ts`:

```typescript
export const features: Feature[] = [
  // ... existing features
  {
    id: 'new-feature',
    title: 'New Amazing Feature',
    description: 'Description of your new feature',
    icon: 'sparkles', // lucide icon name
    details: [
      'Benefit 1',
      'Benefit 2',
      'Benefit 3',
    ]
  }
]
```

### Remove a Feature

Simply remove or comment out the feature object from the array.

### Available Icons

Check [Lucide React](https://lucide.dev/icons/) for available icons.

To add a new icon to FeatureCard:

```typescript
// In src/components/features/FeatureCard.tsx
import { YourNewIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  // ... existing icons
  "your-icon-name": YourNewIcon,
}
```

---

## Modify Reviews

### Update Existing Reviews

Edit `/src/data/reviews.ts`:

```typescript
export const reviews: Review[] = [
  {
    id: '1',
    name: 'User Name',
    avatar: 'UN', // Initials
    rating: 5,
    text: 'Your review text here...',
    date: '2024-12-04' // YYYY-MM-DD format
  },
  // ... more reviews
]
```

### Best Practices

- Keep reviews authentic and genuine
- Use real user feedback when possible
- Vary review lengths (short and long)
- Include specific benefits
- Date reviews realistically

### Add Profile Pictures

To use actual images instead of initials:

1. Add images to `/public/images/reviews/`:
```
public/images/reviews/
├── user-1.jpg
├── user-2.jpg
└── ...
```

2. Update ReviewCard component to use images:
```typescript
// Replace avatar div with:
<Image
  src={`/images/reviews/${review.id}.jpg`}
  alt={review.name}
  width={40}
  height={40}
  className="rounded-full"
/>
```

---

## Update Pricing

Edit `/src/data/pricing.ts`:

```typescript
export const pricingTiers: PricingTier[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19.99, // Regular price
    period: 'month',
    highlighted: true, // Make this plan stand out
    introOffer: {
      price: 9.99, // Introductory price
      duration: '3 months' // How long intro offer lasts
    },
    features: [
      'Feature 1',
      'Feature 2',
      // ... add more features
    ]
  },
  // ... more plans
]
```

### Add a New Plan

```typescript
{
  id: 'lifetime',
  name: 'Lifetime Access',
  price: 99.99,
  period: 'one-time',
  highlighted: false,
  features: [
    'All features forever',
    'Priority support',
    'Free updates',
  ]
}
```

---

## Change Links

### Navigation Links

Edit `/src/components/layout/Header.tsx`:

```typescript
const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Custom Link", href: "/custom-page" }, // Add new link
]
```

### Footer Links

Edit `/src/components/layout/Footer.tsx`:

```typescript
const links = {
  legal: [
    { name: "Privacy Policy", href: siteConfig.privacyPolicyUrl },
    { name: "Terms of Use", href: siteConfig.termsUrl },
    { name: "Cookies", href: "/cookies" }, // Add new link
  ],
  // ... more sections
}
```

### App Store Button

Update the URL in `/src/data/siteConfig.ts`:

```typescript
appStoreUrl: 'https://apps.apple.com/id/app/your-app/id1234567890'
```

---

## Advanced Customization

### Change Fonts

Edit `/src/app/layout.tsx`:

```typescript
import { Inter, Outfit } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"] })

// Use in layout:
<body className={outfit.className}>
```

### Add Custom Sections

1. Create new section component in `/src/components/sections/`
2. Import and add to `/src/app/page.tsx`:

```typescript
import { YourNewSection } from "@/components/sections/YourNewSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <YourNewSection /> {/* Add here */}
      <FeaturesSection />
      // ... rest
    </>
  )
}
```

### Modify Animations

Edit animation properties in components:

```typescript
// Change duration
transition={{ duration: 1.0 }} // Slower

// Change delay
transition={{ delay: 0.5 }} // Later

// Disable animation
// Remove framer-motion imports and <motion.*> components
```

---

## Testing Changes

After making changes:

```bash
# Run dev server
npm run dev

# Build to check for errors
npm run build

# Test build locally
npm run start
```

---

## Quick Customization Checklist

- [ ] Update site name and tagline
- [ ] Add your app screenshots
- [ ] Update App Store URL
- [ ] Customize features list
- [ ] Add real user reviews
- [ ] Update pricing information
- [ ] Add support and legal links
- [ ] Customize colors/theme
- [ ] Test all links
- [ ] Test responsive design
- [ ] Test dark/light mode

---

## Need Help?

If you need additional customization:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
3. Check [Framer Motion Docs](https://www.framer.com/motion/) for animations
4. See [shadcn/ui Docs](https://ui.shadcn.com/) for component customization

---

**Happy Customizing!** 🎨
