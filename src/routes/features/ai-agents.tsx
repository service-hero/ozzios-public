import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { AIAgentsView } from '@/features/landing/views/features/AIAgentsView'

export const Route = createFileRoute('/features/ai-agents')({
  component: AIAgentsPage,
})

function AIAgentsPage() {
  return (
    <LandingLayout>
      <AIAgentsView />
    </LandingLayout>
  )
}
