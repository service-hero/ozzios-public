import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CareersView } from '@/features/landing/views/CareersView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/careers')({
  head: () => createPageHead({
    title: 'Careers',
    description: 'Join OzziOS and help build the future of AI-powered marketing. Remote-first with competitive pay and equity.',
    path: '/careers',
  }),
  component: CareersPage,
})

function CareersPage() {
  return (
    <LandingLayout>
      <CareersView />
    </LandingLayout>
  )
}
