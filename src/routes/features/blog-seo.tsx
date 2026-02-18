import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { BlogSeoView } from '@/features/landing/views/features/BlogSeoView'

export const Route = createFileRoute('/features/blog-seo')({
  head: () =>
    createPageHead({
      title: 'Blog & SEO',
      description:
        'AI-powered SEO and blog management. Keyword research, content optimization, technical audits, and automated publishing.',
      path: '/features/blog-seo',
    }),
  component: BlogSeoPage,
})

function BlogSeoPage() {
  return (
    <LandingLayout>
      <BlogSeoView />
    </LandingLayout>
  )
}
