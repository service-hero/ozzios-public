import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { BlogSeoView } from '@/features/landing/views/features/BlogSeoView'

export const Route = createFileRoute('/features/blog-seo')({
  component: BlogSeoPage,
})

function BlogSeoPage() {
  return (
    <LandingLayout>
      <BlogSeoView />
    </LandingLayout>
  )
}
