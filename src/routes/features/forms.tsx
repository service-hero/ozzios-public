import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { FormsView } from '@/features/landing/views/features/FormsView'

export const Route = createFileRoute('/features/forms')({
  component: FormsPage,
})

function FormsPage() {
  return (
    <LandingLayout>
      <FormsView />
    </LandingLayout>
  )
}
