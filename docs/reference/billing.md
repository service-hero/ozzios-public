# Billing & Plans

Location: `convex/stripe/`

## Plan Tiers

| Plan | Monthly | Credits | Seats | Workspaces | Trial |
|------|---------|---------|-------|------------|-------|
| **Free** | $0 | 50 | 1 | 1 | - |
| **Starter** | $490 | 500 | 5 | 1 | 7-day |
| **Professional** | $990 | 2,000 | 15 | 5 | 7-day |
| **Business** | $1,995 | 10,000 | 50 | 15 | 7-day |
| **Enterprise** | Custom | Unlimited | 999 | 999 | Custom |

## Credit System

- Credits consumed by agent interactions (LLM calls, tool executions)
- Overage pricing: $0.03-$0.05 per credit (varies by tier)
- Credit packs available for purchase
- Tracked via `workspaceCredits` + `creditTransactions` tables
- High-throughput counter via `@convex-dev/sharded-counter`

## Phone Numbers

- $1.15/month per Twilio phone number
- Separate Stripe subscription per number
- Purchase flow via `phoneNumberCheckout.ts`

## Stripe Integration

### Files
| File | Purpose |
|------|---------|
| `plans.ts` | Plan tier configuration, `PRICE_TO_PLAN` mapping |
| `checkout.ts` | Create Stripe checkout sessions |
| `billing.ts` | Sync subscription to workspace |
| `webhooks.ts` | Process Stripe webhook events |
| `phoneNumberCheckout.ts` | Phone number subscription |

### Checkout Flow
1. User clicks upgrade -> `createCheckoutSession` action
2. Stripe Checkout -> user pays
3. Webhook: `checkout.session.completed`
4. `updatePlanFromStripe` mutation updates workspace
5. Auto-activate relevant agents

### Webhook Events
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Add credits or activate subscription |
| `customer.subscription.created` | Sync plan tier and seats |
| `customer.subscription.updated` | Update plan on upgrade/downgrade |
| `customer.subscription.deleted` | Downgrade to free tier |
| `invoice.paid` | Mark phone purchases complete |
| `payment_intent.succeeded` | Dispatch payment event |
| `payment_intent.failed` | Log failure |

### Price Mapping
`PRICE_TO_PLAN` maps Stripe price IDs to internal plan tiers. Defined in `plans.ts`. Updated when Stripe products change.

## Feature Gating

Features gated by plan tier:
- **Free**: Basic channels, 1 agent, limited tools
- **Starter**: 5 agents, email campaigns, forms
- **Professional**: Workflows, sub-accounts, voice, communities
- **Business**: Advanced analytics, custom integrations, priority support
- **Enterprise**: SSO, audit logs, dedicated support, unlimited everything
