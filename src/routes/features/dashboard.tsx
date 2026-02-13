import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { DashboardView } from '@/features/landing/views/features/DashboardView'

export const Route = createFileRoute('/features/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <LandingLayout>
      <DashboardView />
    </LandingLayout>
  )
}
