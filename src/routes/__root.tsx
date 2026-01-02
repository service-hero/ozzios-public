import { createRootRoute, Outlet, HeadContent, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import '../globals.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'OzziOS - Your First AI Employee',
      },
      {
        name: 'description',
        content: 'The first agentic AI employee platform. Replace entire marketing teams with 14 specialized AI agents. Unified CRM, workflows, communication, and marketing suite.',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/images/favicon.svg',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">{children}</div>
        <Scripts />
      </body>
    </html>
  )
}
