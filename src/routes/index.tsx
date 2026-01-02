import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LandingHomeView } from '@/features/landing/views/LandingHomeView'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <LandingLayout>
      <LandingHomeView />
    </LandingLayout>
  )
}
