import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { TaskManagementView } from '@/features/landing/views/features/TaskManagementView'

export const Route = createFileRoute('/features/tasks')({
  component: TaskManagementPage,
})

function TaskManagementPage() {
  return (
    <LandingLayout>
      <TaskManagementView />
    </LandingLayout>
  )
}
