# Workspace & Platform Features

Covers workspace management and cross-cutting platform features.

## Workspace

Location: `convex/workspace/`, `src/features/workspace/`

### Overview

Multi-tenant workspace management with member roles, navigation, and settings. Every data query in the system is scoped by `workspaceId`.

### Key Capabilities

- Workspace CRUD and switching
- Member management with role-based access (owner, admin, member)
- Navigation components (tab rail, sidebar sections, section flyouts)
- Workspace-level settings and configuration
- State managed via Zustand (`WorkspaceStore`)

---

## Dashboard

Location: `src/features/workspace/components/dashboard/`

### Overview

Notion-style customizable workspace dashboard with drag-and-drop widgets, real-time data, and template system. Uses `@dnd-kit/core` and `@dnd-kit/sortable` for drag interactions.

### Widget Types (18)

| Category | Widgets |
|----------|---------|
| **Core Metrics** | `metric` (workspace KPIs), `ad_metric` (ad platform metrics), `status_breakdown` (pie/bar), `health_breakdown` (healthy/warning/critical) |
| **Lists & Tables** | `sub_account_list` / `client_list` (recent sub accounts), `tasks_overview` (task summary), `activity_feed` (activity timeline) |
| **Charts** | `ad_chart` (time series ad performance), `agent_completions` (tool call success/failure) |
| **Agent Monitoring** | `agent_metric` (active count, credits), `agent_list` (agents with status), `mcp_health` (MCP server connections), `scheduled_tasks` (pending agent tasks) |
| **Workspace** | `business_profile` (completeness + AI power level), `custom_tabs` (iframe embeds -- Looker, Notion, etc.) |

### Layout System

- 4-column responsive grid with auto-rows (min 140px)
- Widgets support `colSpan` (1-4) and `rowSpan` (1-3)
- Drag from library to add, reorder existing widgets
- Portal-rendered drag overlay with visual placeholder

### Dashboard Hero

Fixed hero section at top (non-draggable):
- Agent activity metrics and system health indicators
- Task completion stats with mini sparkline charts

### Templates & Persistence

- Save/load named dashboard templates
- Auto-save layout on change (1s debounce)
- Backend: `convex/workspace/dashboardTemplates.ts` (`getCurrent`, `upsertCurrent`, `save`, `list`, `deleteTemplate`)

### State Hooks

- `useDashboardState` -- Widget CRUD, drag state, dialog management
- `useDashboardFilters` -- Date preset, sub account, activity type, task status/priority filters

---

## Knowledge Base

Location: `src/features/workspace/components/knowledge/`

### Overview

AI knowledge source management with RAG-powered search. Agents use this for contextual responses (L4 memory layer).

### Content Types

| Type | Description |
|------|-------------|
| **Text** | Manual entries (FAQs, product info, policies). Immediate indexing. |
| **URL** | Auto-fetched and markdown-converted web pages. Background indexing. |
| **PDF** | Browser-parsed via `pdf.js` with page-by-page progress. Max 500K chars. |

### Status States

`pending` -> `indexing` -> `indexed` (with chunk count) | `error` (retry available)

### Company Profile

Auto-generated AI summary from all indexed knowledge sources. Used by agents before calls/chats. Regenerate button for manual refresh.

### Search Preview

Test queries against indexed content with relevance scoring (0-100%).

### Key Components

| Component | Purpose |
|-----------|---------|
| `KnowledgeBasePage` | Full-page knowledge management |
| `KnowledgeBaseManager` | Reusable manager (used in wizards) |
| `KnowledgePreviewPanel` | Right sidebar content preview |
| `ContentGroupRow` | Expandable accordion per content type |
| `ContentItemRow` | Individual item with status badges |

---

## Onboarding

Location: `src/features/workspace/components/onboarding/`

### Overview

Multi-step onboarding system with guided tour, quick start guide, and feature discovery checklist.

### Onboarding Flow

```
1. Workspace created
2. QuickStartGuide modal (12 steps -- AI employees, supervisor, tools, channels, etc.)
3. OzziOnboardingChat (Ozzi creates personalized AI agents in real-time)
4. OnboardingTour (11 UI highlights via react-joyride)
5. OnboardingChecklist (9 tasks: business context, profile, channels, email, calendar, voice)
```

### Components

| Component | Purpose |
|-----------|---------|
| `QuickStartGuide` | 12-step walkthrough modal |
| `InlineQuickStartGuide` | Same as above but inline (takes over dashboard) |
| `OnboardingTour` | Interactive UI tour via `react-joyride` |
| `OnboardingChecklist` | 9-step feature discovery (setup + features) |
| `OzziOnboardingChat` | Real-time agent creation chat with Ozzi |
| `InvitedUserOnboarding` | Profile setup for invited users |

---

## Users & Directory

Location: `src/features/users/`, `src/features/directory/`

### Overview

Workspace member directory with profiles, status indicators, and search.

### User Status

`online`, `away`, `busy`, `offline`

### Directory Tabs

| Tab | Description |
|-----|-------------|
| **People** | Member list/grid with search, view mode toggle |
| **Channels** | All workspace channels with privacy indicators |
| **Apps** | Installed integrations display |

### Frontend

- `PeopleView` -- Member grid/list with filtering
- `UserProfileSheet` -- Detailed user profile
- `DirectoryPage` -- Full workspace directory with 3-tab navigation

---

## Employees (AI Agent Configuration)

Location: `src/features/employees/`

### Overview

AI agent configuration interface. Each "employee" is an AI agent with configurable model, personality, tools, voice, and schedule.

### Configuration Tabs

| Tab | Purpose |
|-----|---------|
| **General** | Name, avatar, description |
| **Model** | LLM provider and model selection |
| **Personality** | Behavior, tone, response style |
| **CRM Tools** | Contact/lead management tools |
| **Integration Tools** | Third-party integration tools |
| **Skills** | Enabled agent capabilities |
| **Voice** | TTS voice selection (voice lab) |
| **Schedule** | Working hours and availability |
| **Advanced** | Thinking mode, response patterns |

---

## Huddles

Location: `convex/workspace/huddles.ts`, `src/features/huddles/`

### Overview

Real-time voice and video calls within channels. Start impromptu calls with team members or AI agents.

### Tables

| Table | Purpose |
|-------|---------|
| `huddles` | Huddle sessions (voice or webcam) |
| `huddleInvites` | Participant invitations |
| `voiceChannelParticipants` | Active participant state |

### Huddle Types

- `voice` -- Audio-only call
- `webcam` -- Video call

### Status Flow

```
active -> ended
```

### Key Capabilities

- Start voice or video huddles in any channel
- Real-time participant tracking
- Session recording support
- Invite system for participants
- Floating overlay UI (full/minimized modes)
- Talk-to-agent button for instant AI calls

---

## Files & Storage

Location: `src/features/files/`

### Overview

Workspace file manager with grid/list views, type filtering, and R2 backend storage.

### Supported File Types

| Category | Formats |
|----------|---------|
| **Images** | JPEG, PNG, GIF, WebP |
| **Documents** | PDF, Word, Plain text, CSV |
| **Video** | MP4, WebM, QuickTime |
| **Audio** | MP3, WAV, OGG, WebM |

Max upload size: 25MB

### Key Capabilities

- Grid and list view modes
- Filter by file type category
- Google Drive integration (merged with local files)
- File selection and attachment to chat messages
- Share to users/channels via share dialog
- Download and preview
- Pagination for large file sets
- R2 (Cloudflare) backend storage

---

## Settings

Location: `src/features/settings/`

### Overview

Full-page settings with lazy-loaded tab system and sidebar navigation.

### Core Tabs

| Tab | Purpose |
|-----|---------|
| **WorkspaceTab** | Workspace name, icon, settings |
| **PeopleTab** | Team member management |
| **BillingTab** | Subscription plans, payment methods, seat management, AI usage tracking |
| **BusinessProfileTab** | Business info, contact, address, social links, hours |
| **BusinessUnitsTab** | Multi-location management |
| **AppearanceTab** | Theme and UI customization |
| **ProfileTab** | User profile management |
| **AccountTab** | Personal settings (name, pronouns, bio, status) |
| **ApiKeysTab** | API key generation, copy, revoke |
| **SnapshotsTab** | Workspace snapshot backup/restore (private, org, public visibility) |
| **PluginsTab** | Plugin management (WordPress Connector download + setup) |
| **LabsTab** | Experimental features (AI Code Gen Beta, Voice Commands Alpha) |
| **PrivacySecurityTab** | Privacy and security settings |
| **SecurityTab** | Two-factor auth, security policies |
| **ToolsTab** | Developer tools and utilities |
| **ImportTab** | Data import from other platforms |
| **IntegrationsTab** | Master list of 45+ integrations (see `docs/features/integrations.md`) |
| **TwilioTab** | Twilio SMS/voice configuration |

---

## Notifications

Location: `src/features/notifications/`

### Overview

System notification center with desktop notifications, preferences, and tab badges.

### Key Capabilities

- `NotificationsModal` -- In-app notification center
- Desktop notifications via `useDesktopNotifications` hook
- Notification preferences per user via `useNotificationPreferences`
- Browser tab title badge via `useTabNotification`
- Real-time delivery via Convex subscriptions
- Extensive notification type system

---

## Search

Location: `convex/search/`, `src/features/search/`

### Overview

Global workspace search using Convex built-in full-text search (BM25 ranking).

### Search Scope

Unified `globalSearch` across: messages, channels, users, files, contacts

### Key Capabilities

- Advanced filters: user, channel, date range, file type, message type
- Filter chips with active filter badges and removal
- Keyboard navigation via Command component
- Recent channels/conversations shown when no query
- Message jump-to navigation (`channelId:messageId` encoding)
- Typeahead/prefix matching with reactive results

### Frontend

- `SearchModal` -- Global search interface with filter system

---

## Inbox

Location: `src/features/inbox/` (40+ files)

### Overview

Unified inbox for managing incoming communications across all channels. Intercom-style two-column layout with navigation filters and item list.

### Inbox Item Types

| Type | Description |
|------|-------------|
| `email` | Inbound emails (categorized: internal, client, prospect, lead, cold) |
| `live_chat` | Chat widget conversations (includes handoff requests) |
| `sms` | SMS conversations |
| `messenger` | Messenger conversations |
| `mention` | @mentions in channels |
| `form_submission` | Form submissions |
| `voice_call` | Voice call logs |
| `activity` | General activity items |

### Filtering System

- **Quick filters**: Your inbox, Mentions, All, Unassigned
- **Type filters**: Emails, chats, SMS, calls, forms, mentions
- **Status filters**: Inbox (active), Done (completed), Snoozed
- **Email category filters**: Internal, client, prospect, lead, cold
- **Sort options**: Newest, oldest, unread first

### Details Panel

Resizable right sidebar (desktop) or sheet drawer (mobile):
- Contact info, lead info, custom attributes
- Conversation notes
- Recent activity history
- Voice metadata (duration, recording, transcription)
- Link/unlink contact functionality

### Detail Views by Type

| Component | Purpose |
|-----------|---------|
| `inbox.sms-detail.tsx` | SMS conversation thread |
| `inbox.live-chat-detail.tsx` | Live chat conversation |
| `inbox.messenger-detail.tsx` | Messenger conversation |
| `inbox.form-submission-detail.tsx` | Form submission data |
| `inbox.voice-call-detail.tsx` | Call log with transcript |

### Navigation

- Left sidebar with quick filters and channel sections
- Real-time badge counts per section
- Compose actions (Email, SMS dialogs)
- Virtualized list with infinite scroll (20 items/page)

---

## Action History

Location: `src/features/action-history/`

### Overview

Semantic audit trail of AI agent actions. Shows user-friendly descriptions of what agents did (e.g., "Published blog post" instead of technical function names).

### Action Types

`create`, `update`, `delete`, `send`, `generate`, `reply`, `publish`, `schedule`

### Key Capabilities

- Semantic outcome labels (not raw technical spans)
- Filter by action type, status, integration
- Action detail panel with trace/debugging info
- Recent actions widget for sidebar

### Frontend

- `ActionHistoryPage` -- Full action log
- `ActionCard` / `ActionList` -- Action display
- `ActionDetailPanel` -- Detailed action view
- `RecentActionsWidget` -- Sidebar widget

---

## Reviews

Location: `src/features/reviews/`

### Overview

Token-based review collection from customers/clients with embeddable public pages.

### Key Capabilities

- Star rating input (1-5)
- Text feedback capture with optional reviewer name
- Token-based access with expiration
- Public/private reviews (consent checkbox for public sharing)
- Workspace branding (custom logo, primary color)
- Embeddable standalone page at `/reviews/:token`
- Status tracking: `isCompleted`, `isExpired`, `opened`
- Contact integration (pre-fill name, auto-link reviews)
- Error states: expired, already completed, not found
- Backend table: `reviewRequests`

---

## Home

Location: `src/features/home/`

### Overview

Dashboard and onboarding landing page with AI conversation creation.

### Key Capabilities

- ChatHistorySidebar with conversation management
- HomeAgentSettingsModal for configuring executive/meta agents
- Executive agent selection for conversations
- Workspace credits counter
- Integration banner and starter prompt grid
- AI chat conversation creation flow from home

---

## Form Builder & Forms

Location: `src/features/form-builder/`, `src/features/forms/`

### Overview

Drag-and-drop form creation and embeddable form rendering.

### Field Types (13)

| Type | Description |
|------|-------------|
| `name` | Full name input for contacts/leads |
| `text` | Single-line text input |
| `email` | Email validation input |
| `phone` | Phone number input |
| `number` | Numeric input |
| `textarea` | Multi-line text |
| `select` | Single selection dropdown |
| `multiselect` | Multiple selection dropdown |
| `checkbox` | Single checkbox for agreements |
| `radio` | Radio buttons |
| `date` | Date picker |
| `file` | File upload |
| `hidden` | Hidden tracking field |

### Styling System

- Color presets: Indigo, Blue, Green, Orange, Red, Purple, Pink, Teal
- Font families: System Default, Inter, Roboto, Open Sans, Lato, Poppins
- Border radius: None, Small, Medium, Large, Full
- Dark theme and transparent background support
- Label/description color customization
- Layout modes: stacked, inline

### Privacy & Security

- Consent checkbox with custom text and privacy policy URL
- Rate limiting (max submissions per time window)
- Domain whitelisting (`allowedDomains`)

### Submission Settings

- Contact/lead auto-creation with stage and assignee configuration
- Email notifications to specified users
- Confirmation emails to submitters
- Custom success message or redirect URL

### Embed System

Two embed methods via Cloudflare Worker (`workers/form-embed/`):

1. **Script embed** (recommended): Auto-resizing, better UX
2. **iFrame embed**: Sandboxed for security, manual height

---

## Portal & Chat Widget

Location: `convex/portal/`, `src/features/portal/`, `src/features/chat-widget/`

### Overview

Client-facing portal with separate authentication and an embeddable chat widget.

### Portal Tabs (9)

| Tab | Purpose |
|-----|---------|
| **Dashboard** | Progress overview, active services, memo pad, team members, recent files, task activity |
| **Tasks** | Kanban board (To Do, In Progress, In Review, Done) -- read-only for clients |
| **Files** | Grid/list file manager with drag-and-drop upload and image preview |
| **Services** | Service cards with name, description, status, details |
| **Billing** | Stripe subscription (plan, status, payment method, invoices, upcoming invoice, balance) |
| **Onboarding** | Checklist-style onboarding with progress bar and step tracking |
| **Agent** | AI agent interaction view |
| **Business Profile** | Profile completeness tracking |
| **Settings** | Portal configuration |

### Portal Activity Sidebar

11 activity types tracked: login, file_upload, task_complete, approval, message, invite, file_view, invoice_paid, invoice_sent, invoice_failed, channel_created

### Portal Authentication

- Separate JWT-based auth (magic link or password)
- Role-based access: owner, manager, observer
- GDPR data retention cleanup (daily cron)

### Chat Widget

- Embeddable JavaScript snippet for websites
- AI agent or human support routing
- 30+ configuration fields: `identificationMode`, `emailPromptAfterMessages`, `privacyConsentRequired`, `autoResponseEnabled`, quick actions, calendar settings
- Session management with visitor tokens and conversation resume
- Rate limiting: `maxConversationsPerVisitor`, `maxMessagesPerConversation`
- Privacy consent flows with version tracking
- API: `OzziOsWidget.open()`, `.close()`, `.toggle()`, `.identify()`
- Edge-deployed via `workers/widget/`

### Portal Tables

| Table | Purpose |
|-------|---------|
| `portalUsers` | Portal client users (separate from workspace members) |
| `chatWidgets` | Widget configuration with branding |

---

## Views

Location: `src/features/views/`

### Overview

Custom view/perspective system for flexible data display with block-based filtering.

### Key Capabilities

- View creation with type selection (personal, shared, system)
- Block-based filter functions: today, unscheduled, overdue, by type, by status, by assigned person
- View metrics and trends
- Starred views and last accessed tracking
- Search across views
- Dynamic view count computation

---

## Marketing

See dedicated doc: `docs/features/marketing.md`

---

## Errors

Location: `src/features/errors/`

`NotFoundPage` -- Branded 404 error page with navigation back to home.
