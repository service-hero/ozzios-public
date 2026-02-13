import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChannelsView } from '@/features/landing/views/features/ChannelsView'

export const Route = createFileRoute('/features/channels')({
  component: ChannelsPage,
})

function ChannelsPage() {
  return (
    <LandingLayout>
      <ChannelsView />
    </LandingLayout>
  )
}
