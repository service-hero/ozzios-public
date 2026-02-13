import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ClientManagementView } from '@/features/landing/views/solutions/ClientManagementView'

export const Route = createFileRoute('/solutions/client-management')({
  component: ClientManagementPage,
})

function ClientManagementPage() {
  return (
    <LandingLayout>
      <ClientManagementView />
    </LandingLayout>
  )
}
