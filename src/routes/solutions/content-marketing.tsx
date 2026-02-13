import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ContentMarketingView } from '@/features/landing/views/solutions/ContentMarketingView'

export const Route = createFileRoute('/solutions/content-marketing')({
  component: ContentMarketingPage,
})

function ContentMarketingPage() {
  return (
    <LandingLayout>
      <ContentMarketingView />
    </LandingLayout>
  )
}
