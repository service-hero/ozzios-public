import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { VoiceAgentsView } from '@/features/landing/views/features/VoiceAgentsView'

export const Route = createFileRoute('/features/voice-agents')({
  head: () =>
    createPageHead({
      title: 'Voice Agents',
      description:
        'AI voice agents for inbound and outbound calls. Appointment booking, lead qualification, and support on autopilot.',
      path: '/features/voice-agents',
    }),
  component: VoiceAgentsPage,
})

function VoiceAgentsPage() {
  return (
    <LandingLayout>
      <VoiceAgentsView />
    </LandingLayout>
  )
}
