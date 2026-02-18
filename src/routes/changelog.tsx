import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChangelogView } from '@/features/landing/views/ChangelogView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/changelog')({
  head: () => createPageHead({
    title: 'Changelog',
    description: 'See what\'s new in OzziOS. Product updates, new AI agents, integrations, and platform improvements.',
    path: '/changelog',
  }),
  component: ChangelogPage,
})

function ChangelogPage() {
  return (
    <LandingLayout>
      <ChangelogView />
    </LandingLayout>
  )
}
