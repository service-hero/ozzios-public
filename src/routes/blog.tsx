import { createFileRoute, Outlet } from '@tanstack/react-router'
import { LandingLayout } from '@/features/landing/layouts/LandingLayout'

export const Route = createFileRoute('/blog')({
  component: BlogLayout,
})

function BlogLayout() {
  return (
    <LandingLayout>
      <Outlet />
    </LandingLayout>
  )
}
