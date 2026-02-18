import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SecurityView } from '@/features/landing/views/SecurityView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/security')({
  head: () => createPageHead({
    title: 'Security',
    description: 'Enterprise-grade encryption, GDPR compliance, workspace isolation, and 99.9% uptime SLA for your agency data.',
    path: '/security',
  }),
  component: SecurityPage,
})

function SecurityPage() {
  return (
    <LandingLayout>
      <SecurityView />
    </LandingLayout>
  )
}
