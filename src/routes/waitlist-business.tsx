import { createFileRoute } from '@tanstack/react-router'
import { WaitlistBusinessView } from '@/features/landing/views/WaitlistBusinessView'

export const Route = createFileRoute('/waitlist-business')({
  component: WaitlistBusinessPage,
})

function WaitlistBusinessPage() {
  return <WaitlistBusinessView />
}
