import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SoloAgenciesView } from '@/features/landing/views/solutions/SoloAgenciesView'

export const Route = createFileRoute('/solutions/solo-agencies')({
  component: SoloAgenciesPage,
})

function SoloAgenciesPage() {
  return (
    <LandingLayout>
      <SoloAgenciesView />
    </LandingLayout>
  )
}
