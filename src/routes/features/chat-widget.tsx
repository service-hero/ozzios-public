import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChatWidgetView } from '@/features/landing/views/features/ChatWidgetView'

export const Route = createFileRoute('/features/chat-widget')({
  head: () =>
    createPageHead({
      title: 'Chat Widget',
      description:
        'AI-powered website chat that captures leads, answers questions, and books meetings 24/7. Set up in 5 minutes.',
      path: '/features/chat-widget',
    }),
  component: ChatWidgetPage,
})

function ChatWidgetPage() {
  return (
    <LandingLayout>
      <ChatWidgetView />
    </LandingLayout>
  )
}
