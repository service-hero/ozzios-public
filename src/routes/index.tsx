import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'
import { LandingHomeView } from '@/features/landing/views/LandingHomeView'
import { createPageHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () => createPageHead({
    title: 'Your First AI Employee',
    description: 'The first agentic AI employee platform. 30+ specialized agents, unified CRM, workflows, and full marketing suite — starting free.',
    path: '/',
  }),
  component: HomePage,
})

function HomePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://ozzios-widget.garrett-b4a.workers.dev/loader.js?key=wgt_984c617ef77d7cde1d6c96436945fbaf654aa91748c7b628'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <LandingLayout>
      <LandingHomeView />
    </LandingLayout>
  )
}
