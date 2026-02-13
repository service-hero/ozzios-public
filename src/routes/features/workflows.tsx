import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { WorkflowsView } from '@/features/landing/views/features/WorkflowsView'

export const Route = createFileRoute('/features/workflows')({
  component: WorkflowsPage,
})

function WorkflowsPage() {
  return (
    <LandingLayout>
      <WorkflowsView />
    </LandingLayout>
  )
}
