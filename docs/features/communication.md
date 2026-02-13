# Communication Features

## Email (Resend)

Location: `convex/resend/`, `convex/email/`

### Capabilities
- **Transactional email**: Single-recipient emails via Resend API
- **Email campaigns**: Broadcast to segments with batching (500/batch)
- **React Email templates**: Type-safe templates with variable substitution
- **Domain management**: SPF, DKIM, DMARC, MX record validation
- **Delivery tracking**: Open, click, bounce, complaint via webhooks

### Campaign Flow
`draft` -> `scheduled` -> `sending` -> `sent` | `failed`

### Files
`actions.ts` (send), `campaignMutations.ts`, `campaignActions.ts`, `campaignOrchestrator.ts`, `campaignCallbacks.ts`, `campaignQueries.ts`

## SMS (Twilio)

Location: `convex/sms/`

### Capabilities
- Send/receive SMS via Twilio
- SMS campaigns with batching
- Rate limiting: per-user (`twilioSendSms`) + per-workspace (`twilioSendSmsWorkspace`)
- 15s timeout for Twilio API calls

### Files
`mutations.ts`, `queries.ts`, `campaignOrchestrator.ts`, `campaignActions.ts`, `campaignCallbacks.ts`

## Voice & Call Center

Location: `convex/voice/`, `workers/voice-agent/`, `src/features/call-center/`

### Architecture
- **Twilio**: Phone calls, SIP trunking
- **Deepgram**: Real-time speech-to-text (WebSocket streaming)
- **ElevenLabs**: Text-to-speech voice synthesis
- **Voice Agent Worker**: Durable Objects for WebSocket session state

### Voice Call Flow
1. Twilio call hits `/voice/incoming` on voice-agent worker
2. Returns TwiML connecting to ConversationRelay WebSocket
3. Durable Object receives transcripts, calls Convex agent
4. Agent streams response -> TTS -> caller hears response

### Worker Routes
| Route | Purpose |
|-------|---------|
| `POST /voice/incoming` | Twilio incoming call webhook |
| `POST /voice/outbound` | Initiate outbound call |
| `GET /voice/ws/:callId` | WebSocket for ConversationRelay |
| `GET /voice/status` | Health check |

### AI Review
`convex/integrations/voiceAiReview.ts` -- post-call quality scoring

### Call Center Dashboard

Stats: total calls, completed (count + %), failed, average duration, total cost, live calls (animated pulse)

### Call History

- Advanced filtering by status, direction, date range
- Call classification system (9 types): `sales_inquiry`, `support_request`, `billing`, `complaint`, `appointment`, `follow_up_required`, `spam`, `general_inquiry`, `resolved`
- Star ratings (1-5) with AI review integration (score + recommendations)
- Call detail sheet with transcript, recording player, metadata

### Phone Number Management

- Synced Twilio phone numbers with agent assignment
- Per-number voice configuration: TTS provider (Google Neural, Amazon Polly, ElevenLabs), STT provider (Google, Deepgram)
- Greeting, after-hours message, system prompt, transfer destination

### Outbound Contexts

- Context templates for outbound calls with variable interpolation
- System and custom contexts with priority matching
- Auto-apply rules (callStatus, callDirection, maxAgeHours, maxDurationSeconds)
- Variable picker for dynamic prompt values

### Voice Testing Lab

In-browser voice agent testing using Twilio ConversationRelay infrastructure:
- Agent selector (voice-enabled agents only)
- Microphone selector with mute control
- Real-time transcription panel
- Tool execution visualization
- Cost and duration tracking (~$0.07/min)
- Audio visualizer showing agent state (connecting/speaking/listening/thinking)

### Direct Calling (Browser-to-Phone)

- Twilio Voice SDK integration via `useTwilioDevice` hook
- `DirectCallProvider` mounts once, stores controls in global `callStore`
- `ActiveCallBar` displays live call status with timer, mute, hang-up
- `PhoneDialerPopover` for dialing numbers

### Outbound Call Campaigns

- Campaign management page for outbound calling
- Batch call orchestration

## Communities

Location: `convex/communities/`

### Features
- **Visibility**: Public, private, hidden
- **Join requests**: Admin approval for private communities
- **Roles**: Owner, Admin, Moderator, Member
- **Timeouts**: Temporary mute/ban with auto-expiration (cron every 5 min)
- **Reputation**: Member scoring based on activity
- **Audit log**: Moderation action tracking

### Files
`communities.ts`, `members.ts`, `channels.ts`, `messages.ts`, `roles.ts`, `submissions.ts`, `timeouts.ts`, `reputation.ts`, `auditLog.ts`, `discovery.ts`, `invitations.ts`

## Client Portal

Location: `convex/portal/`

### Architecture
- Separate JWT-based auth (not workspace auth)
- Portal users stored in `portalUsers` table
- Access control via `requirePortalContext()`, `requirePortalAccess()`
- GDPR data retention cleanup (cron daily at 1am UTC)

### Chat Widget
- **Worker**: `workers/widget/` (edge-deployed)
- **Loader**: `GET /loader.js?key=xxx` -- JavaScript snippet customers embed
- **Embed**: `GET /embed?key=xxx` -- Widget iframe HTML
- **API**: `OzziOsWidget.open()`, `.close()`, `.toggle()`, `.identify()`

## Forms

Location: `convex/forms/`

### Capabilities
- Visual form builder with drag-and-drop
- Embed system via Cloudflare Worker (`workers/form-embed/`)
- Rate limiting (per-email spam prevention)
- Workflow triggers on submission
- Contact auto-creation from submissions

### Embed Flow
1. Customer embeds `<script src="/loader.js?key=xxx">`
2. Loader creates iframe -> form worker generates inline HTML/CSS/JS
3. Form submission -> `POST /submit` -> Convex `submitContactForm` mutation

## Calendars

Location: `convex/calendars/`

- Google Calendar OAuth integration (full read/write)
- Team calendar view (all connected members)
- Timezone-aware formatting
- Event management (create, update, delete)

## Video

Location: `convex/videoKit/`

- Projects with tracks (video, audio, image, text)
- Keyframe animations
- Caption generation workflow
- Export via `workers/video-render/` -> Remotion Lambda -> R2 storage
- Supported aspect ratios: 16:9, 9:16, 1:1

## Local SEO

Location: `convex/localRank/`

- Google local pack keyword tracking
- GBP position scanning via Serper API
- Competitor mapping
- Scheduled scans (daily, weekly, monthly) via cron at 6am UTC
- Historical trend analysis

## Search

Location: `convex/search/`

- Convex built-in full-text search (BM25 ranking)
- Unified `globalSearch` across messages, channels, users, files, contacts
- Typeahead/prefix matching, reactive results
- Workspace-scoped with optional channel/type filters
