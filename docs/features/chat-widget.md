# Chat Widget

Location: `convex/widget/`, `src/features/chat-widget/`

## Overview

Embeddable customer-facing chat widget for websites. AI-powered with human handoff, lead capture, CRM integration, and GDPR compliance. Replaces tools like Intercom/Drift with a fully integrated solution within OzziOs.

Deployed via Cloudflare Worker (`ozzios-widget.garrett-b4a.workers.dev/loader.js`) — workspace admins paste a `<script>` tag on their site.

## Tables

| Table | Purpose |
|-------|---------|
| `chatWidgets` | Widget configuration (appearance, behavior, agent, keys) |
| `chatWidgetVisitors` | Anonymous website visitors (token, session, IP hash) |
| `chatWidgetConversations` | Chat sessions (status, handoff, rating) |
| `chatWidgetMessages` | Messages (visitor, agent, user) with streaming support |

## Widget Lifecycle

1. Admin creates widget in `/w/{workspaceId}/chat-widget` (5-step wizard)
2. Configures appearance, behavior, AI agent, and capabilities
3. Gets embed `<script>` tag from wizard
4. Visitor loads page → Cloudflare Worker serves `loader.js` → fetches config from `/widget/config` → injects widget UI
5. First interaction creates visitor session with cryptographic `vst_` token (stored in localStorage)
6. Messages trigger AI responses; handoff available to human agents

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `WidgetSetupWizard` | 5-step creation wizard (Basics → Appearance → Behavior → AI Agent → Playground) |
| `WidgetPreview` | Live visual preview that updates as admin configures |
| `WidgetTestMode` | Interactive testing with real AI responses |
| `WidgetPlayground` | Production-like sandbox using actual embed script |

After creation, the wizard switches to a tabbed settings interface with auto-save.

## Identification Modes

| Mode | Description |
|------|-------------|
| `anonymous_first` | Chat without email, prompt after N messages |
| `email_required` | Must provide email before chatting |
| `email_optional` | Email prompt shown but skippable |

## Embedded Agent Config

Widgets use an **embedded agent config** (not a reference to workspace agents) to prevent exposing dangerous tools. Only curated, allow-listed tools are available:

| Tool | Purpose |
|------|---------|
| Knowledge base search | Search workspace KB articles |
| Calendar booking | Check availability + book meetings (Google Calendar) |
| Handoff request | Transfer to human with urgency/category |
| Lead capture | Conversationally collect contact info |

Calendar settings enforce working hours, buffer times, allowed durations, and timezone. Tools are built via factory pattern in `convex/widget/tools/factory.ts`.

## Human Handoff

**Triggers**: Visitor requests human, message count threshold, AI detects limitation, visitor frustration

**Flow**: Conversation status → `waiting` → notification to workspace → user claims (`assigned`) → AI responses stop

Backend: `convex/widget/handoff.ts` — `listPending`, `getStats` (queue size, wait times)

## Lead Capture Pipeline

```
Visitor provides email → identifyVisitor → Contact created → Lead created → CRM
```

- Lead source tracked as `chat_widget`
- Linked: visitor → contact → lead (stored in `tasks` table with `itemType: 'lead'`)
- Backend: `convex/widget/leads.ts`

## HTTP Endpoints

All widget endpoints are **public** (no Clerk auth) but protected by IP-based rate limiting, cryptographic token validation, and CORS headers. Defined in `convex/http.ts`.

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/widget/config` | GET | Fetch widget config for embed loader |
| `/widget/session/create` | POST | Create visitor session (IP hashed) |
| `/widget/session/resume` | POST | Resume existing session |
| `/widget/conversation/start` | POST | Start conversation + first message (atomic) |
| `/widget/message/send` | POST | Send message in conversation |
| `/widget/messages` | GET | Fetch messages (supports `afterTimestamp` polling) |
| `/widget/visitor/identify` | POST | Update contact info, triggers lead creation |
| `/widget/consent/accept` | POST | Record GDPR consent |
| `/widget/consent/check` | GET | Check consent status |
| `/widget/data/export` | GET | GDPR Right to Access |
| `/widget/data/delete` | POST | GDPR Right to Erasure |
| `/widget/test-response` | POST | Test AI response (requires workspace auth) |

## Spam / Abuse Protection

- `maxConversationsPerVisitor` — limit conversations per visitor
- `maxMessagesPerConversation` — message cap (default 50)
- `blockConversationsAfterBooking` — prevent chat after meeting booked
- IP-based rate limiting on session creation
- Token-based rate limiting on messages

## GDPR Compliance

- Configurable privacy consent requirement (`privacyConsentRequired`)
- Consent text + privacy policy URL
- `visitorDataRetentionDays` — auto-delete old visitor data
- Data export and deletion endpoints (Right to Access / Right to Erasure)
- IP addresses stored as SHA-256 hashes (privacy-preserving)

## Backend Modules

| File | Purpose |
|------|---------|
| `convex/widget/config.ts` | Widget CRUD, key generation/rotation, embed code |
| `convex/widget/auth.ts` | Visitor sessions, token validation, IP-based variants |
| `convex/widget/conversations.ts` | Chat session management (visitor + workspace facing) |
| `convex/widget/messages.ts` | Message handling, streaming, read receipts |
| `convex/widget/agentResponses.ts` | AI response generation via `PersistentTextStreaming` |
| `convex/widget/handoff.ts` | AI → human transfer logic |
| `convex/widget/leads.ts` | Lead capture + CRM integration |
| `convex/widget/tools/factory.ts` | Widget tool factory (allow-listed tools) |
| `convex/widget/notifications.ts` | Inbox notifications |
| `convex/widget/compliance.ts` | GDPR data export/deletion |
| `convex/widget/types.ts` | TypeScript definitions |

## Security

- **Cryptographic widget keys**: `widgetKey` (public) + `secretKey` (hashed, server-only)
- **Key rotation**: `regenerateKeys` mutation
- **Tool allow-list**: Only safe, curated tools exposed to widget agent
- **Token validation**: All visitor actions validated against workspace
- **Multi-tenancy**: All queries scoped by `workspaceId`
- **IP hashing**: SHA-256 + salt prevents cross-workspace tracking
