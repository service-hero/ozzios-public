import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CRMView } from '@/features/landing/views/features/CRMView'

export const Route = createFileRoute('/features/crm')({
  head: () =>
    createPageHead({
      title: 'CRM',
      description:
        'AI-powered CRM with lead scoring, 25+ activity types, smart segmentation, and GDPR compliance built in.',
      path: '/features/crm',
    }),
  component: CRMPage,
})

function CRMPage() {
  return (
    <LandingLayout>
      <CRMView />
    </LandingLayout>
  )
}
