import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { VoiceAgentsView } from '@/features/landing/views/features/VoiceAgentsView'

export const Route = createFileRoute('/features/voice-agents')({
  component: VoiceAgentsPage,
})

function VoiceAgentsPage() {
  return (
    <LandingLayout>
      <VoiceAgentsView />
    </LandingLayout>
  )
}
