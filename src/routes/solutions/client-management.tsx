import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ClientManagementView } from '@/features/landing/views/solutions/ClientManagementView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/client-management')({
  head: () => createPageHead({
    title: 'Customer Management',
    description: 'Manage all your customers in one platform. AI handles reporting, communication, and job coordination.',
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
