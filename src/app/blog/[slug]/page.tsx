import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/data/blog/blogPosts'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

interface BlogPostPageProps {
  params: {
    slug: string
  }
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
  const post = getBlogPost(params.slug)

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

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

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 dark:from-background dark:via-background dark:to-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8 lg:px-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <header className="container mx-auto px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
              <div>
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-3xl elegant-shadow">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="container mx-auto px-4 pb-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-3xl p-8 lg:p-12 elegant-shadow">
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-6
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:my-2
                  prose-blockquote:border-l-4 prose-blockquote:border-primary
                  prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-table:border-collapse prose-table:w-full
                  prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-3 prose-th:text-left
                  prose-td:border prose-td:border-border prose-td:p-3
                "
                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card rounded-3xl p-12 text-center elegant-shadow bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5">
              <h2 className="mb-4 text-3xl font-bold">
                Ready to Clean Your{' '}
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  Photo Library?
                </span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Download {siteConfig.name} and start freeing up storage space today!
              </p>
              <a
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-accent px-8 py-4 font-semibold text-white transition-all hover:scale-105 elegant-shadow"
              >
                Download Free from App Store
              </a>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="container mx-auto px-4 pb-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold">More Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {getAllBlogPosts()
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] elegant-shadow">
                      <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 font-bold transition-colors group-hover:text-primary line-clamp-2">
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

// Simple markdown to HTML converter
function formatMarkdown(markdown: string): string {
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gim, '<blockquote>$1</blockquote>')
  html = html.replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>')

  // Lists - unordered
  html = html.replace(/^\- (.+)$/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')

  // Lists - ordered
  html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>')

  // Tables
  const tableRegex = /\|(.+)\|/g
  if (html.match(tableRegex)) {
    html = html.replace(/\|(.+)\|/gim, (match) => {
      const cells = match
        .split('|')
        .filter((cell) => cell.trim())
        .map((cell) => `<td>${cell.trim()}</td>`)
        .join('')
      return `<tr>${cells}</tr>`
    })
    html = html.replace(/(<tr>.*<\/tr>)/s, '<table>$1</table>')
  }

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>')
  html = html.replace(/^(.+)$/gim, '<p>$1</p>')

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-6]>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<ul>)/g, '$1')
  html = html.replace(/(<\/ul>)<\/p>/g, '$1')
  html = html.replace(/<p>(<table>)/g, '$1')
  html = html.replace(/(<\/table>)<\/p>/g, '$1')
  html = html.replace(/<p>(<blockquote>)/g, '$1')
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')

  return html
}
