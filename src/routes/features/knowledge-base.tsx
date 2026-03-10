import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { KnowledgeBaseView } from '@/features/landing/views/features/KnowledgeBaseView'

export const Route = createFileRoute('/features/knowledge-base')({
  head: () =>
    createPageHead({
      title: 'Knowledge Base',
      description:
        'Create a self-service knowledge base. Help customers find answers and reduce support tickets with AI search.',
      path: '/features/knowledge-base',
    }),
  component: KnowledgeBasePage,
})

function KnowledgeBasePage() {
  return (
    <LandingLayout>
      <KnowledgeBaseView />
    </LandingLayout>
  )
}
