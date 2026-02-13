import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CRMView } from '@/features/landing/views/features/CRMView'

export const Route = createFileRoute('/features/crm')({
  component: CRMPage,
})

function CRMPage() {
  return (
    <LandingLayout>
      <CRMView />
    </LandingLayout>
  )
}
