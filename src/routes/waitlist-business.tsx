import { createFileRoute } from '@tanstack/react-router'
import { WaitlistBusinessView } from '@/features/landing/views/WaitlistBusinessView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/waitlist-business')({
  component: WaitlistBusinessPage,
  head: () =>
    createPageHead({
      title: 'Business Waitlist',
      description:
        'Apply for early business access to OzziOS enterprise features.',
      path: '/waitlist-business',
      noindex: true,
    }),
})

function WaitlistBusinessPage() {
  return <WaitlistBusinessView />
}
