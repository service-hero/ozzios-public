import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ContentMarketingView } from '@/features/landing/views/solutions/ContentMarketingView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/content-marketing')({
  head: () => createPageHead({
    title: 'Content Marketing',
    description: 'Scale content production for your service business with AI. Blog posts, before/after showcases, seasonal tips, and local SEO content on autopilot.',
    path: '/solutions/content-marketing',
  }),
  component: ContentMarketingPage,
})

function ContentMarketingPage() {
  return (
    <LandingLayout>
      <ContentMarketingView />
    </LandingLayout>
  )
}
