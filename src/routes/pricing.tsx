import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { PricingView } from '@/features/landing/views/PricingView'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

function PricingPage() {
  return (
    <LandingLayout>
      <PricingView />
    </LandingLayout>
  )
}
