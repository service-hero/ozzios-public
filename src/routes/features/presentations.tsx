import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { PresentationsView } from '@/features/landing/views/features/PresentationsView'

export const Route = createFileRoute('/features/presentations')({
  component: PresentationsPage,
})

function PresentationsPage() {
  return (
    <LandingLayout>
      <PresentationsView />
    </LandingLayout>
  )
}
