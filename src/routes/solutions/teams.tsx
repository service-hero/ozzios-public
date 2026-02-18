import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { TeamsView } from '@/features/landing/views/solutions/TeamsView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/teams')({
  head: () => createPageHead({
    title: 'For Teams',
    description: 'Multiply your team\'s output with AI employees that handle execution while humans focus on strategy.',
    path: '/solutions/teams',
  }),
  component: TeamsPage,
})

function TeamsPage() {
  return (
    <LandingLayout>
      <TeamsView />
    </LandingLayout>
  )
}
