import { createFileRoute } from '@tanstack/react-router'
import { DocsLayout } from '@/features/docs/layouts/DocsLayout'
import { DocsHomeView } from '@/features/docs/views/DocsHomeView'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <DocsLayout>
      <DocsHomeView />
    </DocsLayout>
  )
}
