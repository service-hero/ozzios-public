import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LandingHomeView } from '@/features/landing/views/LandingHomeView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () => createPageHead({
    title: 'Your First AI Employee',
    description: 'The first agentic AI employee platform. 30+ specialized agents, unified CRM, workflows, and full marketing suite — starting free.',
    path: '/',
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <LandingLayout>
      <LandingHomeView />
    </LandingLayout>
  )
}
