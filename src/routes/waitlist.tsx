import { createFileRoute } from '@tanstack/react-router'
import { WaitlistView } from '@/features/landing/views/WaitlistView'

export const Route = createFileRoute('/waitlist')({
  component: WaitlistPage,
})

function WaitlistPage() {
  return <WaitlistView />
}
