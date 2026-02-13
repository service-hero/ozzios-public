import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LeadGenerationView } from '@/features/landing/views/solutions/LeadGenerationView'

export const Route = createFileRoute('/solutions/lead-generation')({
  component: LeadGenerationPage,
})

function LeadGenerationPage() {
  return (
    <LandingLayout>
      <LeadGenerationView />
    </LandingLayout>
  )
}
