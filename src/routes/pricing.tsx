import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { PricingView } from '@/features/landing/views/PricingView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/pricing')({
  head: () => createPageHead({
    title: 'Pricing',
    description: 'Plans from Starter to Business. 30+ AI agents, unlimited workflows, CRM, and full marketing suite.',
    path: '/pricing',
  }),
  component: PricingPage,
})

function PricingPage() {
  return (
    <LandingLayout>
      <PricingView />
    </LandingLayout>
  )
}
