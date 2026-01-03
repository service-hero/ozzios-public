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
  shellComponent: RootShell,
  component: RootComponent,
})

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return <Outlet />
}
