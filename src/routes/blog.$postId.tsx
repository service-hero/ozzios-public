import { createFileRoute } from '@tanstack/react-router'
import { BlogPostView } from '@/features/landing/views/BlogPostView'

export const Route = createFileRoute('/blog/$postId')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { postId } = Route.useParams()

  return <BlogPostView postId={postId} />
}
