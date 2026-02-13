import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CodingView } from '@/features/landing/views/features/CodingView'

export const Route = createFileRoute('/features/coding')({
  component: CodingPage,
})

function CodingPage() {
  return (
    <LandingLayout>
      <CodingView />
    </LandingLayout>
  )
}
