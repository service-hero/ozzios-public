import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EmailCampaignsView } from '@/features/landing/views/features/EmailCampaignsView'

export const Route = createFileRoute('/features/email-campaigns')({
  head: () =>
    createPageHead({
      title: 'Email Campaigns',
      description:
        'AI-managed email marketing. Automated sequences, personalization, analytics, and deliverability optimization.',
      path: '/features/email-campaigns',
    }),
  component: EmailCampaignsPage,
})

function EmailCampaignsPage() {
  return (
    <LandingLayout>
      <EmailCampaignsView />
    </LandingLayout>
  )
}
