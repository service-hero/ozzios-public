# Scheduled Jobs

All cron jobs defined in `convex/crons.ts`. Times in UTC.

## Integration Sync

| Job | Schedule | Purpose |
|-----|----------|---------|
| `gmail-sync-all-accounts` | Every 30 min | Fallback sync for Gmail push notifications |
| `gmail-watch-renewal` | Daily 3:00am | Renew Gmail push watches before 7-day expiry |

## Agent & Triggers

| Job | Schedule | Purpose |
|-----|----------|---------|
| `process-ozzi-heartbeats` | Every 5 min | Proactive supervisor wake (preflight DB checks only, LLM invoked only if needed) |
| `flush-integration-trigger-batches` | Every 1 min | Flush integration trigger batches whose window expired |
| `sync-event-registry` | Daily 5:00am | Sync TypeScript event registry to `eventTypes` table |

## Learning & Knowledge

| Job | Schedule | Purpose |
|-----|----------|---------|
| `learning-curator` | Every 6 hours | Extract organizational learnings from conversations |
| `prune-expired-learnings` | Daily 6:00am | Remove expired workspace learnings |

## Data Cleanup

| Job | Schedule | Batch | Purpose |
|-----|----------|-------|---------|
| `cleanup-deleted-workspaces` | Daily 2:00am | - | Hard delete workspaces past 30-day grace period |
| `widget-retention-cleanup` | Daily 1:00am | - | GDPR data retention cleanup |
| `cleanup-expired-stream-checkpoints` | Every 15 min | 100 | Remove abandoned stream checkpoints (30-min TTL) |
| `cleanup-old-checkpoints` | Daily 3:30am | 200 | Delete LangGraph checkpoints >7 days |
| `cleanup-old-stream-chunks` | Daily 3:45am | 500 | Delete stream chunks >1 day |
| `cleanup-old-agent-traces` | Daily 4:15am | 100 | Delete agent traces >30 days |

## Idempotency Cleanup

| Job | Schedule | Batch | Purpose |
|-----|----------|-------|---------|
| `cleanup-expired-trigger-idempotency` | Every 30 min | 500 | 1-hour TTL dedup records |
| `cleanup-expired-external-calls` | Daily 4:30am | 1000 | Workflow external call idempotency |
| `cleanup-expired-idempotency-receipts` | Daily 5:00am | 1000 | 30-day webhook/API dedup records |
| `cleanup-expired-stale-trigger-firings` | Daily 4:30am | - | Stale entity trigger dedup |

## Workflow Safety

| Job | Schedule | Purpose |
|-----|----------|---------|
| `workflow-execution-watchdog` | Every 5 min | Auto-cancel executions stuck >30 min |

## Community

| Job | Schedule | Purpose |
|-----|----------|---------|
| `process-expired-community-timeouts` | Every 5 min | Clear expired member timeouts |

## SEO

| Job | Schedule | Purpose |
|-----|----------|---------|
| `local-rank-scheduled-scans` | Daily 6:00am | Execute scheduled keyword rank scans (max 10/run) |

## Cleanup Pattern

All cleanup jobs use batch processing with configurable limits:
- Single query per function (Convex restriction)
- Return `{ deleted, hasMore }` to signal remaining work
- Next cron run processes the rest
- Low-traffic hours (1-6am UTC) for heavy cleanup
