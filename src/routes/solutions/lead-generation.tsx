import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LeadGenerationView } from '@/features/landing/views/solutions/LeadGenerationView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/lead-generation')({
  head: () => createPageHead({
    title: 'Lead Generation',
    description: 'AI-powered lead generation for home service companies. Capture homeowner leads, qualify with AI scoring, and nurture with automated follow-ups 24/7.',
    path: '/solutions/lead-generation',
  }),
  component: LeadGenerationPage,
})

function LeadGenerationPage() {
  return (
    <LandingLayout>
      <LeadGenerationView />
    </LandingLayout>
  )
}
