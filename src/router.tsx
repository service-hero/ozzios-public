import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Export a function that returns a new router instance
export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
  })

  return router
}

// Register the router for TypeScript type inference
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
