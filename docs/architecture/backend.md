# Backend Patterns

All backend code lives in `convex/`. Every function starts with an auth check and scopes queries by `workspaceId`.

## Function Patterns

### Query
```typescript
export const list = query({
  args: { workspaceId: v.id('workspaces'), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const user = await getAuthUser(ctx);
    await requireWorkspaceAccess(ctx, args.workspaceId);
    return ctx.db.query('contacts')
      .withIndex('by_workspaceId', q => q.eq('workspaceId', args.workspaceId))
      .order('desc')
      .paginate(args.paginationOpts);
  },
});
```

### Mutation
```typescript
export const create = mutation({
  args: { workspaceId: v.id('workspaces'), name: v.string() },
  handler: async (ctx, args) => {
    const user = await getAuthUser(ctx);
    await requireWorkspaceAccess(ctx, args.workspaceId);
    return ctx.db.insert('contacts', {
      workspaceId: args.workspaceId,
      name: args.name,
      createdAt: Date.now(),
      createdBy: user._id,
    });
  },
});
```

### Action (External APIs)
```typescript
export const fetchExternalData = action({
  args: { workspaceId: v.id('workspaces') },
  handler: async (ctx, args) => {
    const result = await fetch('https://api.example.com/data');
    await ctx.runMutation(internal.module.saveData, { data: await result.json() });
  },
});
```

### Internal Functions
Callable only from backend (via `ctx.runQuery()`, `ctx.scheduler`, workpools). No auth check -- caller is trusted.

```typescript
export const internalUpdate = internalMutation({
  args: { id: v.id('contacts'), data: v.any() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, args.data);
  },
});
```

## `convex/lib/` Helper Inventory

### Core
| Module | Purpose |
|--------|---------|
| `access.ts` | Auth guards: `getAuthUser`, `requireWorkspaceAccess`, `requireAdminAccess` |
| `zodFunctions.ts` | Zod 4 integration: `zodQuery`, `zodMutation`, `zodAction`, `zid('table')` |
| `pagination.ts` | `safePaginate()` handles InvalidCursor on workspace switch |
| `r2Helpers.ts` | R2 URL resolution via `assets.ozzios.com` public domain |
| `zodSchemas.ts` | Shared schemas: `WorkspaceId`, `PaginationOpts`, `EmailSchema` |
| `crudFactory.ts` | Generic CRUD generator with soft delete, field transforms |
| `idUtils.ts` | Random ID generation for slugs, unique keys |
| `dateHelpers.ts` | Timezone-aware date utilities |
| `hashUtils.ts` | `stableObjectHash()` for idempotency |
| `phoneHelpers.ts` | Phone number normalization |

### Execution
| Module | Purpose |
|--------|---------|
| `workpools.ts` | `agentPool` (15 parallel), `workflowPool` (10), `backgroundPool` (5) |
| `rateLimiter.ts` | Token bucket/fixed window: `sendMessage` (30/min), `createAgent` (10/hr) |
| `eventBus.ts` | Unified event dispatcher for agent + workflow triggers |
| `notificationService.ts` | `createNotification()`, `fanOutNotification()` for @channel |
| `circuitBreaker.ts` | Prevents cascading failures to external services |
| `abortableFetch.ts` | `fetchWithTimeout()` with AbortController |

### Scheduling
| Module | Purpose |
|--------|---------|
| `scheduling/timeParser.ts` | Natural language: "tomorrow at 9am", "next Monday" |
| `scheduling/workingHours.ts` | `isWithinWorkingHours()`, timezone-aware |
| `scheduling/index.ts` | `parseScheduleTime()`, `calculateNextRunTime()`, cron support |

### Sandboxing
| Module | Purpose |
|--------|---------|
| `denoSandbox.ts` | Secure code execution via Deno Subhosting (V8 isolate) |
| `jsSandbox.ts` | Re-exports denoSandbox for backward compatibility |

### Security & Compliance
| Module | Purpose |
|--------|---------|
| `httpAuth.ts` | JWT/API key validation for HTTP endpoints |
| `auditLog.ts` | Security-sensitive operation logging |
| `idempotencyReceipts.ts` | Webhook/API deduplication (30-day TTL) |
| `messagingHardening.ts` | XSS prevention, input sanitization |
| `occ.ts` | Optimistic Concurrency Control |

### Other
| Module | Purpose |
|--------|---------|
| `conditionEvaluator.ts` | Filter rule evaluation (eq, neq, contains, gt, lt, in) |
| `integrationManifest.ts` | 54+ integration metadata definitions |
| `aiPowerLevel.ts` | Maps business requirements to model selection |
| `shardedCredits.ts` | High-throughput credit counter |
| `paginatedDelete.ts` | Batch deletion to avoid timeouts |

## Database Triggers

`convex/functions.ts` wraps mutations with automatic event dispatch:

```typescript
triggers.register('leads', async (ctx, change) => {
  if (change.operation === 'insert') {
    await ctx.scheduler.runAfter(0, internal.lib.eventBus.dispatchEvent, {
      type: 'lead.created', workspaceId: change.newDoc.workspaceId, ...
    });
  }
});

// Export wrapped mutations that run triggers
export const mutation = customMutation(rawMutation, customCtx(triggers.wrapDB));
```

Registered triggers: `leads`, `contacts`, `messages`, `formSubmissions`, `tasks`, `clients`

## Convex Components

The app uses several Convex ecosystem components configured in `convex.config.ts`:

| Component | Purpose |
|-----------|---------|
| `@convex-dev/workflow` | Durable workflow execution |
| `@convex-dev/rag` | RAG knowledge base |
| `@convex-dev/stripe` | Stripe billing |
| `@convex-dev/resend` | Email delivery |
| `@convex-dev/agent` | Agent memory |
| `@convex-dev/action-cache` | Action result caching |
| `@convex-dev/action-retrier` | Retry with backoff |
| `@convex-dev/rate-limiter` | Rate limiting |
| `@convex-dev/workpool` | Job queuing with parallelism control |
| `@convex-dev/crons` | Cron job scheduling |
| `@convex-dev/aggregate` | Aggregation queries |
| `@convex-dev/sharded-counter` | High-throughput counters |

## HTTP Endpoints

`convex/http.ts` uses Hono with Convex:

- **Webhooks**: Stripe, Resend, Gmail Pub/Sub, Twilio, Meta
- **OAuth callbacks**: `/api/oauth/callback`
- **MCP servers**: 25+ lazy-loaded MCP HTTP handlers
- **Streaming**: Agent streaming, voice streaming
- **CORS**: Configured for `app.ozzios.app`, `localhost:5173`
- **Idempotency**: Receipt checking for all webhook handlers
