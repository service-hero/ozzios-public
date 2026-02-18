import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ContactView } from '@/features/landing/views/ContactView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => createPageHead({
    title: 'Contact Us',
    description: 'Get in touch with the OzziOS team. Questions about AI agents, pricing, or enterprise plans — we\'re here to help.',
    path: '/contact',
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <LandingLayout>
      <ContactView />
    </LandingLayout>
  )
}
