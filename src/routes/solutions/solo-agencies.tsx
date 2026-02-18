import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SoloAgenciesView } from '@/features/landing/views/solutions/SoloAgenciesView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/solo-agencies')({
  head: () => createPageHead({
    title: 'For Solo Agencies',
    description: 'Run your entire agency with AI employees. A full marketing team without the headcount or overhead.',
    path: '/solutions/solo-agencies',
  }),
  component: SoloAgenciesPage,
})

function SoloAgenciesPage() {
  return (
    <LandingLayout>
      <SoloAgenciesView />
    </LandingLayout>
  )
}
