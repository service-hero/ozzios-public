import { createFileRoute } from '@tanstack/react-router'
import { DocsLayout } from '@/features/docs/layouts/DocsLayout'
import { DocsPage } from '@/features/docs/components/DocsPage'

export const Route = createFileRoute('/docs/$')({
  component: DocsRoute,
})

const docsContent: Record<string, { title: string; description: string; breadcrumbs: { title: string; href?: string }[] }> = {
  'installation': {
    title: 'Setting Up',
    description: 'Get started with Ozzios in just a few minutes.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Getting Started' }, { title: 'Setting Up' }],
  },
  'architecture': {
    title: 'How It Works',
    description: 'Understand the core architecture and concepts behind Ozzios.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Getting Started' }, { title: 'How It Works' }],
  },
  'concepts/agents': {
    title: 'AI Assistants',
    description: 'Learn about AI assistants and how they can automate your workflows.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Learn' }, { title: 'AI Assistants' }],
  },
  'concepts/workspaces': {
    title: 'Workspaces',
    description: 'Organize your projects and teams with workspaces.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Learn' }, { title: 'Workspaces' }],
  },
  'concepts/workflows': {
    title: 'Automations',
    description: 'Create powerful automations to streamline your business processes.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Learn' }, { title: 'Automations' }],
  },
  'guides/first-agent': {
    title: 'Add an AI Assistant',
    description: 'Step-by-step guide to creating your first AI assistant.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'How-To Guides' }, { title: 'Add an AI Assistant' }],
  },
  'guides/workflows': {
    title: 'Create an Automation',
    description: 'Learn how to build and deploy automations.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'How-To Guides' }, { title: 'Create an Automation' }],
  },
  'api/agent-testing': {
    title: 'Agent Testing API',
    description: 'API reference for testing and debugging your AI assistants.',
    breadcrumbs: [{ title: 'Docs', href: '/' }, { title: 'Developer API' }, { title: 'Agent Testing API' }],
  },
}

function DocsRoute() {
  const { _splat } = Route.useParams()
  const content = docsContent[_splat ?? '']

  if (!content) {
    return (
      <DocsLayout>
        <DocsPage
          title="Page Not Found"
          description="The page you're looking for doesn't exist."
          breadcrumbs={[{ title: 'Docs', href: '/' }, { title: 'Not Found' }]}
        >
          <p>Check the URL or navigate using the sidebar.</p>
        </DocsPage>
      </DocsLayout>
    )
  }

  return (
    <DocsLayout>
      <DocsPage
        title={content.title}
        description={content.description}
        breadcrumbs={content.breadcrumbs}
      >
        <p>Content for this page coming soon.</p>
      </DocsPage>
    </DocsLayout>
  )
}
