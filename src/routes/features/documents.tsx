import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { DocumentsView } from '@/features/landing/views/features/DocumentsView'

export const Route = createFileRoute('/features/documents')({
  component: DocumentsPage,
})

function DocumentsPage() {
  return (
    <LandingLayout>
      <DocumentsView />
    </LandingLayout>
  )
}
