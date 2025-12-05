# Ezy Photo Clean - Landing Page

A modern, responsive landing page for Ezy Photo Clean app built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Modern Design**: Glassmorphic UI with smooth animations
- **Fully Responsive**: Optimized for all devices
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Dark/Light Mode**: Seamless theme switching
- **Performance**: Built with Next.js 15 App Router
- **TypeScript**: Full type safety
- **Accessibility**: WCAG compliant components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ezyphotocleanweb
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ezyphotocleanweb/
├── public/
│   └── images/          # Static images
│       ├── screenshots/ # App screenshots (add your images here)
│       ├── features/
│       └── ...
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/         # shadcn/ui components
│   │   ├── sections/   # Page sections
│   │   ├── features/   # Feature components
│   │   ├── shared/     # Shared components
│   │   └── layout/     # Layout components
│   ├── data/           # Static data
│   │   ├── features.ts
│   │   ├── reviews.ts
│   │   ├── pricing.ts
│   │   └── siteConfig.ts
│   ├── lib/            # Utilities
│   ├── types/          # TypeScript types
│   └── hooks/          # Custom hooks
└── ...
```

## Customization

### Add Your App Screenshots

1. Add your screenshot images to `/public/images/screenshots/`
2. Update the `ScreenshotsSection` component in `/src/components/sections/ScreenshotsSection.tsx`

### Update Content

Edit the data files in `/src/data/`:

- `siteConfig.ts` - Site metadata and URLs
- `features.ts` - Feature list
- `reviews.ts` - User reviews
- `pricing.ts` - Pricing tiers

### Customize Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to customize the color scheme.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic configuration for Next.js)

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## Environment Variables

Create a `.env.local` file for environment-specific variables (if needed):

```bash
# Add your environment variables here
```

## SEO

The site includes:
- Meta tags
- Open Graph tags
- Twitter Card tags
- Semantic HTML
- Sitemap support (can be added)
- robots.txt support (can be added)

## Performance

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization
- Font optimization
- Lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

## Support

For support, visit [https://yanamyn.github.io/ezyphotocleansupport/](https://yanamyn.github.io/ezyphotocleansupport/)
