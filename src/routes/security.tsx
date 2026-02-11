import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { SecurityView } from '@/features/landing/views/SecurityView'

export const Route = createFileRoute('/security')({
  component: SecurityPage,
})

function SecurityPage() {
  return (
    <LandingLayout>
      <SecurityView />
    </LandingLayout>
  )
}
