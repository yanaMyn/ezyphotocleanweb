import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/data/blog/blogPosts'
import { Calendar, Clock, ArrowLeft, Tag, Quote } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import '../blog.css'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: '/favicon.svg',
      },
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Decorative background pattern */}
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Back Button */}
        <div className="container relative z-10 mx-auto px-4 pt-8 lg:px-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <header className="container relative z-10 mx-auto px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-4xl">
            {/* Category Badge */}
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block rounded-full bg-gradient-to-r from-primary to-primary/80 px-5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-primary/25">
                {post.category}
              </span>
              <div className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <time className="text-sm text-muted-foreground" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="mb-6 font-['Crimson_Pro'] text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground lg:text-2xl">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border/50 py-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{post.readingTime}</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div>
                <span className="font-medium">By {post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-10 h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/10"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="container relative z-10 mx-auto px-4 pb-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-3xl bg-white/80 dark:bg-slate-900/80 p-8 lg:p-16 shadow-xl ring-1 ring-black/5 backdrop-blur-sm">
              {/* Decorative quote mark */}
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/25 rotate-12">
                <Quote className="h-8 w-8 text-white" />
              </div>

              <div className="blog-content">
                <BlogContent content={post.content} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="container relative z-10 mx-auto px-4 pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 text-center shadow-2xl shadow-primary/25">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <div className="relative">
                <h2 className="mb-4 font-['Crimson_Pro'] text-4xl font-bold text-white lg:text-5xl">
                  Ready to Clean Your Photo Library?
                </h2>
                <p className="mb-8 text-lg text-white/90 lg:text-xl">
                  Download {siteConfig.name} and start freeing up storage space today!
                </p>
                <a
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Download Free from App Store
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="container relative z-10 mx-auto px-4 pb-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 font-['Crimson_Pro'] text-3xl font-bold lg:text-4xl">
              Continue Reading
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {getAllBlogPosts()
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-lg ring-1 ring-black/5 transition-all hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <div className="p-6">
                        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                          {relatedPost.category}
                        </span>
                        <h3 className="mb-3 font-['Crimson_Pro'] text-xl font-bold leading-snug transition-colors group-hover:text-primary line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

// Blog Content Component with better markdown parsing
function BlogContent({ content }: { content: string }) {
  const html = formatMarkdown(content)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

// Improved markdown to HTML converter
function formatMarkdown(markdown: string): string {
  let html = markdown.trim()

  // Headers (must be at start of line)
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

  // Checkmarks and crossmarks
  html = html.replace(/✅/g, '<span class="checkmark">✅</span>')
  html = html.replace(/❌/g, '<span class="crossmark">❌</span>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

  // Blockquotes (multiline support)
  const lines = html.split('\n')
  let inBlockquote = false
  let blockquoteContent: string[] = []
  const processedLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('> ') || line.startsWith('&gt; ')) {
      if (!inBlockquote) {
        inBlockquote = true
        blockquoteContent = []
      }
      blockquoteContent.push(line.replace(/^(&gt;|>) /, ''))
    } else {
      if (inBlockquote) {
        processedLines.push(`<blockquote>${blockquoteContent.join(' ')}</blockquote>`)
        blockquoteContent = []
        inBlockquote = false
      }
      processedLines.push(line)
    }
  }
  if (inBlockquote) {
    processedLines.push(`<blockquote>${blockquoteContent.join(' ')}</blockquote>`)
  }
  html = processedLines.join('\n')

  // Tables
  const tableLines: string[] = []
  let inTable = false
  const finalLines: string[] = []

  html.split('\n').forEach((line) => {
    if (line.includes('|')) {
      if (!inTable) inTable = true
      tableLines.push(line)
    } else {
      if (inTable) {
        finalLines.push(processTable(tableLines))
        tableLines.length = 0
        inTable = false
      }
      finalLines.push(line)
    }
  })
  if (inTable) {
    finalLines.push(processTable(tableLines))
  }
  html = finalLines.join('\n')

  // Lists
  html = processLists(html)

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />')

  // Paragraphs - split by double newline
  const blocks = html.split('\n\n')
  html = blocks
    .map((block) => {
      block = block.trim()
      // Don't wrap if already wrapped in HTML tag
      if (block.match(/^<(h[1-6]|ul|ol|blockquote|table|hr|div)/)) {
        return block
      }
      // Wrap in paragraph
      return block ? `<p>${block.replace(/\n/g, ' ')}</p>` : ''
    })
    .filter((block) => block)
    .join('\n\n')

  return html
}

function processTable(lines: string[]): string {
  if (lines.length < 2) return lines.join('\n')

  const rows = lines
    .filter((line) => !line.match(/^\|[\s\-:]+\|$/)) // Skip separator lines
    .map((line) => {
      const cells = line
        .split('|')
        .map((cell) => cell.trim())
        .filter((cell) => cell)
      return cells
    })

  if (rows.length === 0) return ''

  const headerCells = rows[0].map((cell) => `<th>${cell}</th>`).join('')
  const bodyRows = rows
    .slice(1)
    .map((row) => {
      const cells = row.map((cell) => `<td>${cell}</td>`).join('')
      return `<tr>${cells}</tr>`
    })
    .join('')

  return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`
}

function processLists(html: string): string {
  const lines = html.split('\n')
  const result: string[] = []
  let inUl = false
  let inOl = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const isUlItem = line.match(/^[\-\*] (.+)$/)
    const isOlItem = line.match(/^\d+\. (.+)$/)

    if (isUlItem) {
      if (!inUl) {
        result.push('<ul>')
        inUl = true
      }
      result.push(`<li>${isUlItem[1]}</li>`)
    } else if (isOlItem) {
      if (!inOl) {
        result.push('<ol>')
        inOl = true
      }
      result.push(`<li>${isOlItem[1]}</li>`)
    } else {
      if (inUl) {
        result.push('</ul>')
        inUl = false
      }
      if (inOl) {
        result.push('</ol>')
        inOl = false
      }
      result.push(line)
    }
  }

  if (inUl) result.push('</ul>')
  if (inOl) result.push('</ol>')

  return result.join('\n')
}
