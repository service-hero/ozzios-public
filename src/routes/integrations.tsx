import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { IntegrationsView } from '@/features/landing/views/IntegrationsView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/integrations')({
  head: () => createPageHead({
    title: 'Integrations',
    description: 'Connect OzziOS to 77+ tools including Google, GoHighLevel, Stripe, Twilio, and more. Unify your marketing stack.',
    path: '/integrations',
  }),
  component: IntegrationsPage,
})

function IntegrationsPage() {
  return (
    <LandingLayout>
      <IntegrationsView />
    </LandingLayout>
  )
}
