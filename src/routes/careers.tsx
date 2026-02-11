import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CareersView } from '@/features/landing/views/CareersView'

export const Route = createFileRoute('/careers')({
  component: CareersPage,
})

function CareersPage() {
  return (
    <LandingLayout>
      <CareersView />
    </LandingLayout>
  )
}
