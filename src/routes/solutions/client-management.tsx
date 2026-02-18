import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ClientManagementView } from '@/features/landing/views/solutions/ClientManagementView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/client-management')({
  head: () => createPageHead({
    title: 'Client Management',
    description: 'Manage all agency clients in one platform. AI handles reporting, communication, and campaign execution.',
    path: '/solutions/client-management',
  }),
  component: ClientManagementPage,
})

function ClientManagementPage() {
  return (
    <LandingLayout>
      <ClientManagementView />
    </LandingLayout>
  )
}
