import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { TaskManagementView } from '@/features/landing/views/features/TaskManagementView'

export const Route = createFileRoute('/features/tasks')({
  head: () =>
    createPageHead({
      title: 'Task Management',
      description:
        'AI-coordinated task management. Automatic assignment, priority tracking, and workflow integration.',
      path: '/features/tasks',
    }),
  component: TaskManagementPage,
})

function TaskManagementPage() {
  return (
    <LandingLayout>
      <TaskManagementView />
    </LandingLayout>
  )
}
