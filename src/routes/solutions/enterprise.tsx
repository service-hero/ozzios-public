import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EnterpriseView } from '@/features/landing/views/solutions/EnterpriseView'

export const Route = createFileRoute('/solutions/enterprise')({
  component: EnterprisePage,
})

function EnterprisePage() {
  return (
    <LandingLayout>
      <EnterpriseView />
    </LandingLayout>
  )
}
