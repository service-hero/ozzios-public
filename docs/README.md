# OzziOs Documentation

OzziOs is a marketing agency automation platform that replaces human employees with AI-powered agents. Built with React 19, TypeScript, Vite, Convex (serverless backend), and TanStack Router.

**Scale**: 209 database tables, 38+ frontend feature domains, 50+ agent templates, 127+ native tools, 35+ MCP integrations.

## Quick Start

```bash
bun install
bun run dev              # Vite dev server (localhost:5173)
bun run convex:dev       # Convex backend (separate terminal)
```

Copy `.env.example` to `.env.local` and configure required keys. See [Environment Reference](operations/environment.md).

## Documentation Map

### Architecture
- [System Overview](architecture/overview.md) -- Layers, design philosophy, multi-tenancy
- [Database & Schema](architecture/database.md) -- 209 tables grouped by domain, index patterns
- [Backend Patterns](architecture/backend.md) -- Convex conventions, auth, helpers, event system
- [Frontend Architecture](architecture/frontend.md) -- Routing, state management, styling, performance

### Features
- [Agent System](features/agent-system.md) -- AI harness, streaming, tools, memory, templates, delegation
- [Workflows & Automation](features/workflows.md) -- DAG engine, node types, triggers, scheduling
- [Integrations](features/integrations.md) -- 25+ external services, OAuth, MCP servers
- [Communication](features/communication.md) -- Email, SMS, voice, communities, portal, forms

### Operations
- [Deployment](operations/deployment.md) -- Build, deploy, Cloudflare Workers
- [Environment Variables](operations/environment.md) -- All required/optional env vars
- [Scheduled Jobs](operations/scheduled-jobs.md) -- 20+ cron jobs, cleanup, maintenance
- [Monitoring](operations/monitoring.md) -- Sentry, error tracking, analytics

### Reference
- [Tech Stack & Versions](reference/tech-stack.md) -- Every dependency with version
- [Billing & Plans](reference/billing.md) -- Stripe, plan tiers, credits, pricing

## Core Principles

1. **Backend-first**: ALL business logic lives in Convex. Frontend handles ONLY rendering UI + calling backend functions.
2. **Workspace-scoped**: Every query scoped by `workspaceId` -- no cross-tenant data leaks.
3. **Index-only queries**: Always `.withIndex()`, never table scans.
4. **Real-time by default**: Convex auto-tracks dependencies and pushes updates via WebSocket.
5. **Event-driven**: Database triggers dispatch events to agent triggers and workflows.

## Key Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Vite dev server |
| `bun run convex:dev` | Convex backend dev |
| `bun run build` | Production build |
| `bun run convex:deploy` | Deploy Convex functions |
| `bun run deploy:pages` | Deploy frontend to Cloudflare Pages |
| `bun run deploy:worker` | Deploy Cloudflare Worker |
| `bun run deploy:widget` | Deploy widget worker |
| `bun run deploy:form` | Deploy form embed worker |
| `bun run deploy:all` | Deploy everything |
| `bun run lint` | ESLint |
| `bun run test` | Vitest |
| `bun run test:security` | Security-focused tests |
