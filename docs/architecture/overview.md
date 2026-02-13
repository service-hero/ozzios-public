# System Architecture

## Layer Diagram

```
Frontend (React 19 + Vite)
  - UI Primitives (shadcn/ui, Radix)
  - Smart Components (Convex hooks)
  - TanStack Router (file-based routing)
        |
        | Real-time subscriptions (WebSocket)
        v
Convex Backend (Serverless)
  - 209 database tables
  - Queries, Mutations, Actions
  - Durable workflows
  - Agent execution engine (127+ tools)
        |
        | External integrations
        v
Cloudflare Edge Workers
  - Widget worker (embeddable chat)
  - Form embed worker
  - Voice agent worker (Durable Objects)
  - Video render worker (Remotion Lambda)
  - WordPress proxy worker
        |
        v
External Services
  - Clerk (auth)          - Stripe (billing)
  - Anthropic (primary LLM) - Google Gemini, Groq, MiniMax, Ollama
  - Twilio (SMS/voice)    - Resend (email)
  - Cloudflare R2 (storage) - Deepgram (STT), ElevenLabs (TTS)
  - Google APIs            - Meta APIs
  - Firecrawl, Tavily, Exa - E2B (code sandbox)
```

## Layer Responsibilities

### 1. Convex Backend (`convex/`)
ALL business logic. Validations, permissions, data transformations, calculations, agent orchestration.

- `schema.ts` -- single source of truth for 209 tables and indexes
- `lib/` -- shared helpers: auth guards (`access.ts`), scheduling, sandboxing, rate limiting
- Domain folders: `agents/`, `channels/`, `clients/`, `workflows/`, `workspace/`, etc.
- `agentbuilder/` -- 47+ subdirectories for the AI agent execution engine

### 2. UI Primitives (`src/shared/components/ui/`)
Pure presentational shadcn/ui components. NO Convex hooks, no logic, no state, no mutations.

### 3. Smart Components (`src/features/<domain>/components/`)
Wrap UI primitives with Convex queries/mutations. Self-contained -- handle their own data internally.

### 4. Routes (`src/routes/`)
TanStack Router file-based routing. Layout and composition only. No business logic.

### 5. Features (`src/features/`)
38+ domain-specific modules, each with components, hooks, contexts, and types.

## Multi-Tenancy

**Workspaces** are the top-level tenant unit.

- Member roles: `Owner`, `Admin`, `Member`, `Guest`
- Parent/child workspace relationships (agency sub-accounts)
- All queries scoped by `workspaceId` via indexed lookups
- Business units for department-level access control
- Owner/Admin in parent workspace can access child resources via `canAccessChildWorkspace()`
- Developer email bypass (`DEVELOPER_EMAILS` env var) for debugging

### Access Control (`convex/lib/access.ts`)

| Function | Purpose |
|----------|---------|
| `getAuthUser(ctx)` | Authenticate via Clerk JWT |
| `requireWorkspaceAccess(ctx, workspaceId)` | Validate workspace membership |
| `requireAdminAccess(ctx, workspaceId)` | Validate Admin/Owner role |
| `assertWorkspaceMember(ctx, workspaceId, userId)` | Assert membership |
| `ensureClientAccess(ctx, clientId)` | Validate client resource access |
| `checkParentWorkspaceAccess()` | Inherited access from parent workspace |
| `canAccessChildWorkspace()` | Parent admin viewing child resources |

## Real-Time Architecture

Convex provides automatic real-time subscriptions:

1. Frontend calls `useQuery(api.module.queryFn, args)`
2. Convex tracks which documents/indexes the query reads
3. When mutations change those documents, Convex re-runs the query
4. Updated data pushed to frontend via WebSocket
5. No manual cache invalidation needed

## Event-Driven Architecture

Database triggers (`convex/functions.ts`) automatically dispatch events:

```
DB Mutation (e.g., lead insert)
  -> triggers.register('leads', callback)
    -> ctx.scheduler.runAfter(0, dispatchEvent, { type: 'lead.created', ... })
      -> eventBus evaluates agentTriggers + workflowTriggers
        -> Durable workflow execution
```

Event types: `lead.created`, `lead.stage_changed`, `contact.created`, `message.created`, `form.submitted`, `task.created`, `task.completed`, `client.created`, `email.received`, `payment.received`, etc.

## File Organization

```
src/
  app/             -- Config, providers, layouts, global styles
  features/        -- 38+ domain modules
  shared/          -- Shared components, hooks, types, utils
  routes/          -- TanStack Router routes (97+ workspace-scoped)
  lib/             -- Third-party adapters, env
  bootstrap/       -- App init, perf, sentry

convex/
  schema.ts        -- 209 table definitions and indexes
  lib/             -- 35+ shared helpers
  agentbuilder/    -- Agent execution engine (47+ subdirs)
  agents/          -- Agent CRUD, templates, teams
  channels/        -- Messaging, DMs, threads
  workflows/       -- DAG workflow engine
  workspace/       -- Multi-tenant workspace logic
  integrations/    -- 54+ integration files
  ...              -- 30+ more domain directories
```

Import alias: `@/*` maps to `./src/*`
