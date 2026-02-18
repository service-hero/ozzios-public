import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SocialMediaView } from '@/features/landing/views/features/SocialMediaView'

export const Route = createFileRoute('/features/social-media')({
  head: () =>
    createPageHead({
      title: 'Social Media',
      description:
        'AI agents that create, schedule, and optimize social content across all platforms. Strategy to posting, automated.',
      path: '/features/social-media',
    }),
  component: SocialMediaPage,
})

function SocialMediaPage() {
  return (
    <LandingLayout>
      <SocialMediaView />
    </LandingLayout>
  )
}
