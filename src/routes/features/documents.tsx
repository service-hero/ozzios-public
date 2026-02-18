import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { DocumentsView } from '@/features/landing/views/features/DocumentsView'

export const Route = createFileRoute('/features/documents')({
  head: () =>
    createPageHead({
      title: 'Documents',
      description:
        'AI-powered document creation with e-signatures. Proposals, contracts, and reports generated and signed in one place.',
      path: '/features/documents',
    }),
  component: DocumentsPage,
})

function DocumentsPage() {
  return (
    <LandingLayout>
      <DocumentsView />
    </LandingLayout>
  )
}
