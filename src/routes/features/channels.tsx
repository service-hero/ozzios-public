import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChannelsView } from '@/features/landing/views/features/ChannelsView'

export const Route = createFileRoute('/features/channels')({
  head: () =>
    createPageHead({
      title: 'Channels',
      description:
        'Unified team messaging and collaboration. Real-time channels for your agency, organized by client or project.',
      path: '/features/channels',
    }),
  component: ChannelsPage,
})

function ChannelsPage() {
  return (
    <LandingLayout>
      <ChannelsView />
    </LandingLayout>
  )
}
