import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { EmailBuilderView } from '@/features/landing/views/features/EmailBuilderView'

export const Route = createFileRoute('/features/email-builder')({
  head: () =>
    createPageHead({
      title: 'Email Builder',
      description:
        'Drag-and-drop email builder with 16 block types, live device preview, and dynamic personalization.',
      path: '/features/email-builder',
    }),
  component: EmailBuilderPage,
})

function EmailBuilderPage() {
  return (
    <LandingLayout>
      <EmailBuilderView />
    </LandingLayout>
  )
}
