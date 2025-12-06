import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/data/blog/blogPosts'
import { Calendar, Clock, Tag } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name} | Photo Cleaning Tips & iPhone Storage Guides`,
  description:
    'Learn how to clean your photo library, delete duplicate photos, and free up iPhone storage with our expert guides and tutorials.',
  keywords: [
    'photo cleaning tips',
    'iPhone storage guide',
    'delete duplicate photos',
    'photo organization',
    'iOS tips',
    'storage management',
  ],
  openGraph: {
    title: `Blog - ${siteConfig.name}`,
    description: 'Expert guides on photo cleaning and iPhone storage optimization',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 dark:from-background dark:via-background dark:to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 opacity-10" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Photo Cleaning{' '}
              <span className="bg-gradient-to-br from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Expert tips on photo organization, iPhone storage optimization, and keeping your
              digital memories clean and organized.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article className="glass-card h-full overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] elegant-shadow">
                  {/* Post Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="mx-auto max-w-md text-center">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card mx-auto max-w-4xl rounded-3xl p-12 text-center elegant-shadow">
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
              Download Free
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
