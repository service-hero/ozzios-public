import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { FormsView } from '@/features/landing/views/features/FormsView'

export const Route = createFileRoute('/features/forms')({
  head: () =>
    createPageHead({
      title: 'Forms',
      description:
        'No-code form builder with automatic CRM sync, spam protection, and submission analytics. Embed with one line.',
      path: '/features/forms',
    }),
  component: FormsPage,
})

function FormsPage() {
  return (
    <LandingLayout>
      <FormsView />
    </LandingLayout>
  )
}
