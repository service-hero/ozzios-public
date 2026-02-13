import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { KnowledgeBaseView } from '@/features/landing/views/features/KnowledgeBaseView'

export const Route = createFileRoute('/features/knowledge-base')({
  component: KnowledgeBasePage,
})

function KnowledgeBasePage() {
  return (
    <LandingLayout>
      <KnowledgeBaseView />
    </LandingLayout>
  )
}
