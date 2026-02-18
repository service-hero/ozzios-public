import { createFileRoute } from '@tanstack/react-router'
import { BlogView } from '@/features/landing/views/BlogView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
  head: () =>
    createPageHead({
      title: 'Blog',
      description:
        'Insights on AI marketing, agency scaling, and product updates from the OzziOS team.',
      path: '/blog',
    }),
})

function BlogIndexPage() {
  return <BlogView />
}
