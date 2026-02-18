import { createRootRoute, Outlet, HeadContent, Scripts, Link } from '@tanstack/react-router'
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
        content: 'The first agentic AI employee platform. Replace entire marketing teams with an unlimited AI workforce. 30+ specialized agents, custom agent builder, unified CRM, workflows, communication, and marketing suite.',
      },
      {
        property: 'og:site_name',
        content: 'OzziOS',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://ozzios.com/images/og-default.png',
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
  notFoundComponent: NotFound,
})

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="tag-neo mb-6 text-signature">404</p>
      <h1 className="font-display text-display mb-4">Page not found</h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn-neo inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
      >
        Back to Home
      </Link>
    </div>
  )
}
