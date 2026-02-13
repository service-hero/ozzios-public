import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { TeamsView } from '@/features/landing/views/solutions/TeamsView'

export const Route = createFileRoute('/solutions/teams')({
  component: TeamsPage,
})

function TeamsPage() {
  return (
    <LandingLayout>
      <TeamsView />
    </LandingLayout>
  )
}
