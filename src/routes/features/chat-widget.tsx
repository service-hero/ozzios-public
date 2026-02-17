import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChatWidgetView } from '@/features/landing/views/features/ChatWidgetView'

export const Route = createFileRoute('/features/chat-widget')({
  component: ChatWidgetPage,
})

function ChatWidgetPage() {
  return (
    <LandingLayout>
      <ChatWidgetView />
    </LandingLayout>
  )
}
