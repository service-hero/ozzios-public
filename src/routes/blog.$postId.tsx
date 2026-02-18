import { createFileRoute } from '@tanstack/react-router'
import { BlogPostView } from '@/features/landing/views/BlogPostView'
import { getPostMeta } from '@/data/blog-posts'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/blog/$postId')({
  loader: ({ params }) => {
    return { postMeta: getPostMeta(params.postId) }
  },
  head: ({ loaderData }) => {
    if (!loaderData?.postMeta) {
      return createPageHead({
        title: 'Post Not Found',
        description: 'The blog post you are looking for does not exist.',
        path: '/blog',
        noindex: true,
      })
    }
    const { postMeta } = loaderData
    return createPageHead({
      title: postMeta.title,
      description: postMeta.excerpt,
      path: `/blog/${postMeta.id}`,
      ogImage: postMeta.image.startsWith('http') ? postMeta.image : `https://ozzios.com${postMeta.image}`,
      ogType: 'article',
      article: {
        publishedTime: postMeta.date,
        author: postMeta.authorName,
      },
    })
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { postId } = Route.useParams()
  return <BlogPostView postId={postId} />
}
