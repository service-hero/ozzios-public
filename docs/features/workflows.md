# Workflows & Automation

Location: `convex/workflows/`. Uses `@convex-dev/workflow` for durable execution.

## Workflow Engine

### Durable Execution
Workflows persist state in the database. They survive server restarts and support pause/resume.

```typescript
const workflow = new WorkflowManager(components.workflow, {
  workpoolOptions: {
    maxParallelism: 10,
    retryActionsByDefault: true,
    defaultRetryBehavior: { maxAttempts: 3, initialBackoffMs: 1000, base: 2 },
  },
});
```

### Node Types
| Type | Icon | Purpose |
|------|------|---------|
| **Action** | `Zap` | Execute a Convex action (agent response, API call). Full access to 127+ AI tools. |
| **Wait** | `Clock` | Delay by duration or until a specific timestamp |
| **Approval** | `Shield` | Pause for human approval. Push notification, approve or deny from anywhere. |
| **Condition** | `SplitSquareVertical` | Branch logic based on evaluated conditions |
| **Loop** | `Repeat` | Repeat until condition met |
| **Parallel** | `GitBranch` | Execute multiple branches concurrently |
| **Webhook** | `Webhook` | Trigger workflows from any external service (Stripe, forms, API calls) |
| **Delivery** | `Mail` | Send email, SMS, or push notifications. Personalized with CRM contact data. |
| **Sub-workflow** | `GitPullRequest` | Nested workflow execution |
| **HTTP** | `Globe` | External HTTP request |
| **Transform** | `Shuffle` | Data transformation (Deno sandbox) |

All node icons use [Lucide React](https://lucide.dev/) and render in the `text-signature` (Electric Coral) color scheme with a `bg-signature/10` container.

### Execution Flow
1. Trigger fires (event, schedule, webhook, manual)
2. Workflow execution created in `executions` table
3. Nodes execute sequentially following DAG edges
4. Each node checkpointed on completion
5. Failed nodes retry with exponential backoff
6. Dead letter queue captures persistent failures

## Triggers

### Event-Based Triggers
Configured per-workspace in `agentTriggers` table. Event bus evaluates conditions and dispatches.

| Event | Source |
|-------|--------|
| `lead.created`, `lead.stage_changed` | Lead pipeline |
| `contact.created`, `contact.updated` | CRM |
| `message.created` | Channel messaging |
| `form.submitted` | Form submissions |
| `task.created`, `task.completed` | Task management |
| `client.created` | Client management |
| `email.received` | Inbound email |
| `payment.received` | Stripe |
| `sms.received`, `whatsapp.received` | Twilio |
| `hcp.job.created` | HouseCall Pro |

### Time-Based Triggers (Stale Entity)
Evaluated by `staleEntityEvaluator.ts`:
- `client.inactive` -- client has no recent activity
- `lead.stale` -- lead hasn't progressed
- `task.overdue` -- task past due date

Cleanup cron removes expired stale trigger firings daily at 4:30am UTC.

### Scheduled Triggers
Timezone-aware scheduling via `workflowScheduler.ts`. Cron expressions and natural language support.

### Webhook Triggers
External services can fire workflows via `workflowWebhooks` table. Idempotency enforced via `workflowTriggerIdempotency`.

## Safety & Reliability

### Watchdog
Cron every 5 minutes auto-cancels executions stuck in running/pending state for >30 minutes.

### Dead Letter Queue
Failed executions (after max retries) stored in `workflowDeadLetterQueue` for manual review.

### Idempotency
- `workflowTriggerIdempotency` -- 1-hour TTL dedup for webhook events (cleaned every 30 min)
- `workflowExternalCalls` -- TTL-based dedup for external API calls (cleaned daily)

### Guardrails
`workflows/guardrails.ts` -- safety checks before workflow execution (rate limits, permission validation).

## Frontend

Visual workflow builder at `/automations/workflows/$workflowId` using React Flow (`@xyflow/react`) with Dagre layout (`@dagrejs/dagre`).

Supports drag-and-drop node creation, edge connection, condition editing, and live execution monitoring.
