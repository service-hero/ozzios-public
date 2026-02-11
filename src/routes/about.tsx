import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { AboutView } from '@/features/landing/views/AboutView'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <LandingLayout>
      <AboutView />
    </LandingLayout>
  )
}
