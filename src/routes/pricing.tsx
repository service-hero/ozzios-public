import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { PricingView } from '@/features/landing/views/PricingView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/pricing')({
  head: () => createPageHead({
    title: 'Setup a demo',
    description: 'OzziOS is sold via guided demo. Book a 30-minute working session — we configure agents, workflows, and integrations against a real workflow from your business and quote it on the spot.',
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
