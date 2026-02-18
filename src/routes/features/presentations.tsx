import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { PresentationsView } from '@/features/landing/views/features/PresentationsView'

export const Route = createFileRoute('/features/presentations')({
  head: () =>
    createPageHead({
      title: 'Presentations',
      description:
        'AI-generated presentations and pitch decks. Professional slides from your content in minutes.',
      path: '/features/presentations',
    }),
  component: PresentationsPage,
})

function PresentationsPage() {
  return (
    <LandingLayout>
      <PresentationsView />
    </LandingLayout>
  )
}
