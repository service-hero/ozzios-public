# Monitoring

## Sentry (Error Tracking)

Location: `src/bootstrap/sentry.ts`

### Configuration
- **DSN**: Configured via `VITE_SENTRY_DSN`
- **Environment**: `development` | `production` (from `import.meta.env.MODE`)
- **Release**: `VITE_APP_VERSION` env var

### Performance Monitoring
- Development: 100% of transactions
- Production: 20% of transactions
- INP (Interaction to Next Paint) tracking enabled

### Session Replay
- Production: 10% of sessions, 100% of error sessions
- **Privacy**: All text masked, all media blocked (`maskAllText`, `blockAllMedia`)
- Network capture for Convex API debugging

### Source Maps
- Uploaded during build via `@sentry/vite-plugin`
- `SENTRY_AUTH_TOKEN` required
- Maps deleted after upload (not served to browsers)

### Filtered Errors
Ignored: ResizeObserver loops, browser extensions, transient network errors, AbortError

### Allowed URLs
Only `ozzios.app`, `convex.cloud`, `convex.site` -- ignores third-party script errors.

## Audit Logging

Location: `convex/lib/auditLog.ts`

Security-sensitive operations logged to `auditLogs` table:
- Categories: `auth`, `members`, `settings`, `integrations`, `apiKeys`, `agents`, `billing`, `security`
- Includes: actor, action, entity, metadata, timestamp

## Agent Metrics

Location: `convex/analytics/`

- `agentUsage` table tracks per-agent token consumption, tool calls, response times
- Dashboard queries in `dashboard.ts` aggregate workspace-wide metrics
- `metricSnapshots` table for historical trend data

## Rate Limiting

Location: `convex/lib/rateLimiter.ts`

| Limiter | Rate | Scope |
|---------|------|-------|
| `sendMessage` | 30/min | Per user |
| `sendMessageWorkspace` | 1200/min | Per workspace |
| `createAgent` | 10/hour | Per user |
| `agentScheduledAction` | 10/hour | Per agent |
| `sendTransactionalEmail` | - | Per workspace |
| `createWorkspace` | - | Per user |

## Circuit Breakers

Location: `convex/lib/circuitBreaker.ts`

Prevents cascading failures to external services. State tracked in `circuitBreakers` table. Opens after consecutive failures, half-opens after cooldown.

## Observability (Agent System)

### Tracing (`convex/agentbuilder/tracing/`)
OpenTelemetry-compatible spans: `agent.start`, `tool.execute`, `memory.load`, `llm.stream`

### Metrics (`convex/agentbuilder/metrics/`)
Per-execution metrics: token counts, tool execution times, memory layer performance, error rates.
