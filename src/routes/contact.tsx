import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { ContactView } from '@/features/landing/views/ContactView'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <LandingLayout>
      <ContactView />
    </LandingLayout>
  )
}
