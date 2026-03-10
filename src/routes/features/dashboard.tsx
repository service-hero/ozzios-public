import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { DashboardView } from '@/features/landing/views/features/DashboardView'

export const Route = createFileRoute('/features/dashboard')({
  head: () =>
    createPageHead({
      title: 'Dashboard',
      description:
        'Real-time business dashboard. Track agent activity, job metrics, and system health in a customizable layout.',
      path: '/features/dashboard',
    }),
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <LandingLayout>
      <DashboardView />
    </LandingLayout>
  )
}
