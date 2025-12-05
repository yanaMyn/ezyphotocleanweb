# Deployment Guide - Ezy Photo Clean Landing Page

This guide covers deploying your Next.js landing page to various platforms and preparing for future CMS integration.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Deploying to Vercel (Recommended)](#deploying-to-vercel-recommended)
3. [Deploying to Other Platforms](#deploying-to-other-platforms)
4. [Environment Variables](#environment-variables)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Future CMS Integration](#future-cms-integration)
7. [Performance Optimization](#performance-optimization)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, make sure you:

1. Have a GitHub/GitLab account
2. Your code is pushed to a Git repository
3. All dependencies are listed in `package.json`
4. The project builds successfully locally (`npm run build`)

---

## Deploying to Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers the best integration.

### Step 1: Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Ezy Photo Clean landing page"

# Create a repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/ezyphotocleanweb.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Verify Deployment

1. Once deployed, Vercel will provide a URL: `https://your-project.vercel.app`
2. Visit the URL to verify the site is working
3. Test dark/light mode toggle
4. Test navigation and all sections
5. Verify App Store button links correctly

### Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain name (e.g., `ezyphotoclean.com`)
5. Follow the DNS configuration instructions
6. Wait for DNS propagation (5-60 minutes)

**DNS Configuration Example:**

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

---

## Deploying to Other Platforms

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Framework**: Next.js
6. Click "Deploy site"

### AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect to GitHub
5. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       build:
         commands:
           - npm ci
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
6. Deploy

### Cloudflare Pages

1. Push code to GitHub
2. Go to Cloudflare Pages dashboard
3. Click "Create a project"
4. Connect to GitHub repository
5. Build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output directory**: `.vercel/output/static`
6. Deploy

---

## Environment Variables

If you need to add environment variables (for future API integrations, analytics, etc.):

### Local Development

Create a `.env.local` file:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Future CMS
# CMS_API_URL=https://your-cms.com/api
# CMS_API_TOKEN=your-token

# Contact Form (if added later)
# EMAIL_SERVICE_API_KEY=your-key
```

### Production (Vercel)

1. Go to project settings in Vercel
2. Navigate to "Environment Variables"
3. Add variables:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_GA_ID`)
   - **Value**: Variable value
   - **Environments**: Production, Preview, Development
4. Redeploy for changes to take effect

---

## Custom Domain Setup

### Using Vercel

1. Add domain in Vercel dashboard (Settings → Domains)
2. Configure DNS records:

**For root domain (ezyphotoclean.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. Enable automatic HTTPS (enabled by default)
4. Wait for DNS propagation

### SSL Certificate

- Vercel automatically provisions SSL certificates
- HTTPS is enabled by default
- Certificates auto-renew

---

## Future CMS Integration

When you're ready to add a CMS dashboard, follow this migration path:

### Recommended CMS Options

1. **Sanity.io** (Recommended)
   - Excellent developer experience
   - Real-time collaboration
   - Free tier available
   - Great TypeScript support

2. **Strapi**
   - Self-hosted option
   - Full control over data
   - Good for complex requirements

3. **Contentful**
   - Enterprise-ready
   - Excellent API
   - Paid plans

### Migration Steps

#### Step 1: Set Up CMS

For Sanity:

```bash
# In a separate directory
npm create sanity@latest -- --template clean --create-project "Ezy Photo Clean CMS" --dataset production
cd ezy-photo-clean-cms
npm install
npm run dev
```

#### Step 2: Define Schemas

Create schemas for your content types:

```typescript
// schemas/feature.ts
export default {
  name: 'feature',
  type: 'document',
  title: 'Feature',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    // ... more fields
  ],
}
```

#### Step 3: Update Landing Page

Replace static data imports:

```typescript
// Before (static)
import { features } from '@/data/features'

// After (CMS)
import { client } from '@/lib/sanity'

async function getFeatures() {
  return await client.fetch('*[_type == "feature"]')
}
```

#### Step 4: Deploy CMS

Deploy your Sanity studio:

```bash
npm run deploy
```

Access at: `https://your-project.sanity.studio`

### Architecture with CMS

```
Current Architecture:
┌──────────────────┐
│  Next.js App     │
│  (Static Data)   │
└──────────────────┘

Future Architecture with CMS:
┌──────────────────┐         ┌──────────────────┐
│  Next.js App     │ ←─────→ │   Sanity CMS     │
│  (Dynamic Data)  │   API   │   (Dashboard)    │
└──────────────────┘         └──────────────────┘
```

### Data Migration

Create a script to migrate existing data:

```typescript
// scripts/migrate-to-cms.ts
import { features } from '../src/data/features'
import { client } from '../src/lib/sanity'

async function migrate() {
  for (const feature of features) {
    await client.create({
      _type: 'feature',
      ...feature,
    })
  }
}

migrate()
```

---

## Performance Optimization

### Image Optimization

Add images to `/public/images/screenshots/`:

```typescript
import Image from 'next/image'

<Image
  src="/images/screenshots/app-home.png"
  width={300}
  height={650}
  alt="App screenshot"
  priority={index === 0} // Prioritize first image
  placeholder="blur"
  blurDataURL="data:image/jpeg..." // Add blur placeholder
/>
```

### Analytics Integration

Add Google Analytics:

```typescript
// src/lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// src/app/layout.tsx
import Script from 'next/script'

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
/>
```

### Sitemap & robots.txt

Create `src/app/robots.ts`:

```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ezyphotoclean.com/sitemap.xml',
  }
}
```

Create `src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://ezyphotoclean.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

---

## Troubleshooting

### Build Fails

**Issue**: TypeScript errors during build

**Solution**:
```bash
# Check for type errors locally
npm run build

# Fix errors shown in output
# Common issues:
# - Missing type definitions
# - Incorrect imports
# - Unused variables (with strict mode)
```

### Images Not Loading

**Issue**: Images show 404 errors

**Solution**:
- Ensure images are in `/public` directory
- Use correct path (starting with `/`)
- Check file names are correct
- Optimize images before adding

### Slow Performance

**Issue**: Site loads slowly

**Solutions**:
1. Enable image optimization
2. Use `next/font` for fonts
3. Lazy load heavy components
4. Check Lighthouse score
5. Minimize bundle size

### Dark Mode Not Working

**Issue**: Theme toggle doesn't work

**Solution**:
- Check `ThemeProvider` is in layout
- Verify `next-themes` is installed
- Clear browser cache
- Check for JavaScript errors

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Monitoring

- Set up Vercel Analytics
- Monitor Core Web Vitals
- Track conversion rates
- Monitor App Store clicks

---

## Support

For issues or questions:

- **Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: Next.js Discord

---

## Checklist Before Going Live

- [ ] All content reviewed and finalized
- [ ] App screenshots added
- [ ] Links tested (App Store, Support, Privacy, Terms)
- [ ] Mobile responsiveness verified
- [ ] Dark/light mode tested
- [ ] SEO meta tags verified
- [ ] Analytics set up
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Performance score > 90 (Lighthouse)
- [ ] Accessibility score > 90
- [ ] Cross-browser testing completed

---

**Congratulations!** Your Ezy Photo Clean landing page is now live! 🎉
