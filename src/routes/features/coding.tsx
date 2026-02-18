import { createFileRoute } from '@tanstack/react-router'
import { createPageHead } from '@/lib/seo'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { CodingView } from '@/features/landing/views/features/CodingView'

export const Route = createFileRoute('/features/coding')({
  head: () =>
    createPageHead({
      title: 'Code Sandbox',
      description:
        'Built-in code editor for developers. Write, test, and deploy scripts and integrations without leaving OzziOS.',
      path: '/features/coding',
    }),
  component: CodingPage,
})

function CodingPage() {
  return (
    <LandingLayout>
      <CodingView />
    </LandingLayout>
  )
}
