import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SmsCampaignsView } from '@/features/landing/views/features/SmsCampaignsView'

export const Route = createFileRoute('/features/sms-campaigns')({
  head: () =>
    createPageHead({
      title: 'SMS Campaigns',
      description:
        'AI-powered text message campaigns with personalization, scheduling, and compliance built in.',
      path: '/features/sms-campaigns',
    }),
  component: SmsCampaignsPage,
})

function SmsCampaignsPage() {
  return (
    <LandingLayout>
      <SmsCampaignsView />
    </LandingLayout>
  )
}
