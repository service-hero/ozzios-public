import { createFileRoute } from '@tanstack/react-router'
import { WaitlistView } from '@/features/landing/views/WaitlistView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/waitlist')({
  component: WaitlistPage,
  head: () =>
    createPageHead({
      title: 'Join the Waitlist',
      description:
        'Get early access to OzziOS — the AI employee platform replacing marketing agencies.',
      path: '/waitlist',
    }),
})

function WaitlistPage() {
  return <WaitlistView />
}
