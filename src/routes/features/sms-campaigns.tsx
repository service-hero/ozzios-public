import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SmsCampaignsView } from '@/features/landing/views/features/SmsCampaignsView'

export const Route = createFileRoute('/features/sms-campaigns')({
  component: SmsCampaignsPage,
})

function SmsCampaignsPage() {
  return (
    <LandingLayout>
      <SmsCampaignsView />
    </LandingLayout>
  )
}
