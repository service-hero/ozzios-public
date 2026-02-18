import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EnterpriseView } from '@/features/landing/views/solutions/EnterpriseView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/enterprise')({
  head: () => createPageHead({
    title: 'Enterprise',
    description: 'Enterprise-grade AI employee platform. Custom agents, SSO, dedicated support, and unlimited workflows.',
    path: '/solutions/enterprise',
  }),
  component: EnterprisePage,
})

function EnterprisePage() {
  return (
    <LandingLayout>
      <EnterpriseView />
    </LandingLayout>
  )
}
