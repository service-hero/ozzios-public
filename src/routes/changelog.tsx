import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ChangelogView } from '@/features/landing/views/ChangelogView'

export const Route = createFileRoute('/changelog')({
  component: ChangelogPage,
})

function ChangelogPage() {
  return (
    <LandingLayout>
      <ChangelogView />
    </LandingLayout>
  )
}
