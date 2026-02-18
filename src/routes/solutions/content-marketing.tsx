import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ContentMarketingView } from '@/features/landing/views/solutions/ContentMarketingView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/content-marketing')({
  head: () => createPageHead({
    title: 'Content Marketing',
    description: 'Scale content production with AI. Produce 10x more content without 10x the headcount.',
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
