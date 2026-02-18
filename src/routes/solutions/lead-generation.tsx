import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LeadGenerationView } from '@/features/landing/views/solutions/LeadGenerationView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/solutions/lead-generation')({
  head: () => createPageHead({
    title: 'Lead Generation',
    description: 'AI-powered lead generation that works 24/7. Capture, qualify, and nurture leads across every channel.',
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
