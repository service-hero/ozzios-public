import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SocialMediaView } from '@/features/landing/views/features/SocialMediaView'

export const Route = createFileRoute('/features/social-media')({
  component: SocialMediaPage,
})

function SocialMediaPage() {
  return (
    <LandingLayout>
      <SocialMediaView />
    </LandingLayout>
  )
}
