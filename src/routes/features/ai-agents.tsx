import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { AIAgentsView } from '@/features/landing/views/features/AIAgentsView'

export const Route = createFileRoute('/features/ai-agents')({
  head: () =>
    createPageHead({
      title: 'AI Agents',
      description:
        'Deploy 30+ specialized AI agents that work 24/7 with persistent memory, 127+ tools, and full transparency.',
      path: '/features/ai-agents',
    }),
  component: AIAgentsPage,
})

function AIAgentsPage() {
  return (
    <LandingLayout>
      <AIAgentsView />
    </LandingLayout>
  )
}
