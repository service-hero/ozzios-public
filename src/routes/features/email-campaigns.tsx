import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EmailCampaignsView } from '@/features/landing/views/features/EmailCampaignsView'

export const Route = createFileRoute('/features/email-campaigns')({
  component: EmailCampaignsPage,
})

function EmailCampaignsPage() {
  return (
    <LandingLayout>
      <EmailCampaignsView />
    </LandingLayout>
  )
}
