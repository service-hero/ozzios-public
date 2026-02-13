import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EmailBuilderView } from '@/features/landing/views/features/EmailBuilderView'

export const Route = createFileRoute('/features/email-builder')({
  component: EmailBuilderPage,
})

function EmailBuilderPage() {
  return (
    <LandingLayout>
      <EmailBuilderView />
    </LandingLayout>
  )
}
