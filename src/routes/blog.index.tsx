import { createFileRoute } from '@tanstack/react-router'
import { BlogView } from '@/features/landing/views/BlogView'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
})

function BlogIndexPage() {
  return <BlogView />
}
