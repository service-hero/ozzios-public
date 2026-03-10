import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { AboutView } from '@/features/landing/views/AboutView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/about')({
  head: () => createPageHead({
    title: 'About Us',
    description: 'Meet the team behind OzziOS. Built by home service operators to replace back-office overhead with AI agents that work 24/7.',
    path: '/about',
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <LandingLayout>
      <AboutView />
    </LandingLayout>
  )
}
