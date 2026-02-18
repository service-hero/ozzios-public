import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { WorkflowsView } from '@/features/landing/views/features/WorkflowsView'

export const Route = createFileRoute('/features/workflows')({
  head: () =>
    createPageHead({
      title: 'Workflows',
      description:
        'Visual workflow builder with AI automation. Connect triggers, actions, and agents to automate any process.',
      path: '/features/workflows',
    }),
  component: WorkflowsPage,
})

function WorkflowsPage() {
  return (
    <LandingLayout>
      <WorkflowsView />
    </LandingLayout>
  )
}
