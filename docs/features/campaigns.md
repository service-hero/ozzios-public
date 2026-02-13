# Campaigns

Location: `convex/resend/campaign*.ts`, `convex/sms/campaign*.ts`, `src/features/campaigns/`

## Overview

Marketing campaign management for email (via Resend) and SMS (via Twilio). Create, schedule, send, and track campaigns with recipient segmentation, event tracking, and real-time analytics.

## Email Campaigns

### Tables

| Table | Purpose |
|-------|---------|
| `emailCampaigns` | Campaign records with status, template ref |
| `emailCampaignRecipients` | Recipient list with delivery status |
| `emailSegments` | Resend segments for recipient targeting |
| `sentEmails` | Delivery tracking with open/click events |
| `emailEvents` | Open, click, bounce, unsubscribe events |
| `inboundEmails` | Received replies |
| `failedInboundEmails` | Bounce tracking |

### Campaign Flow

```
draft -> scheduled -> sending -> sent | failed | paused
```

- Batch sending: 500 recipients per batch via Resend API
- Pause/resume/cancel mid-flight
- Template-based or custom HTML content

### Event Tracking

| Event | Source |
|-------|--------|
| `open` | Resend webhook |
| `click` | Resend webhook |
| `bounce` | Resend webhook |
| `reply` | Inbound email parsing |
| `unsubscribe` | Resend webhook |

## SMS Campaigns

### Tables

| Table | Purpose |
|-------|---------|
| `smsCampaigns` | Campaign records with status |
| `smsCampaignRecipients` | Recipient list with delivery status |

### Campaign Flow

Same as email: `draft -> scheduled -> sending -> sent | failed | paused`

Batch orchestration via `campaignOrchestrator.ts` with Twilio rate limiting.

## Backend Files

### Email

| File | Purpose |
|------|---------|
| `campaignQueries.ts` | List campaigns by status, paginate recipients |
| `campaignMutations.ts` | Create/edit/delete campaigns |
| `campaignActions.ts` | External Resend API calls |
| `campaignControl.ts` | Start/pause/cancel execution |
| `campaignCallbacks.ts` | Resend event webhooks |

### SMS

| File | Purpose |
|------|---------|
| `campaignOrchestrator.ts` | Batch sending orchestration |
| `campaignActions.ts` | Twilio API calls |
| `campaignCallbacks.ts` | Twilio delivery webhooks |

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `EmailCampaignsList` | Email campaign management |
| `SmsCampaignsList` | SMS campaign management |
| `CreateEmailCampaignDialog` | Email campaign creation |
| `CampaignStatsCards` | Campaign performance metrics |
