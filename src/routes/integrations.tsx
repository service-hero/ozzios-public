import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { IntegrationsView } from '@/features/landing/views/IntegrationsView'

export const Route = createFileRoute('/integrations')({
  component: IntegrationsPage,
})

function IntegrationsPage() {
  return (
    <LandingLayout>
      <IntegrationsView />
    </LandingLayout>
  )
}
