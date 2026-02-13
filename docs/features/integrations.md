# Integrations

Location: `convex/integrations/` (54+ files), `convex/oauth/`, `convex/http.ts`

## Integration Architecture

- Workspace-scoped integration accounts (no client-level integrations)
- Auto-activation: connecting an integration automatically hires the relevant agent
- Storage: `integrationAccounts` table + `oauthConnections` for OAuth providers
- Circuit breaker pattern prevents cascading failures

## Integration Categories

### Google Suite (OAuth)
| Integration | ID | Capabilities |
|-------------|-----|-------------|
| Google Calendar | `google-calendar` | Calendar sync, event management |
| Gmail | `google-gmail` | Email access, push notifications via Pub/Sub |
| Google Drive | `google-drive` | File access, create/edit |
| Google Ads | `google-ads` | Campaign management |
| Google Business Profile | `google-gbp` | GBP management |
| Google Search Console | `google-search-console` | SEO data |
| YouTube | `youtube` | Analytics, channel data |
| Google Keyword Planner | - | Keyword research |
| Google Docs | `google-docs` | Document creation/editing |

### Meta/Facebook
| Integration | ID | Capabilities |
|-------------|-----|-------------|
| Facebook Pages | `facebook` | Page publishing, management |
| Meta Ads | `meta_ads` | Ad account management |
| Facebook Lead Forms | - | Lead generation |

### Communication
| Integration | Provider | Capabilities |
|-------------|----------|-------------|
| SMS/Voice | Twilio | SMS, WhatsApp, voice calls, phone number purchasing ($1.15/mo) |
| Email | Resend | Transactional, campaigns, React Email templates, domain setup |
| Speech-to-Text | Deepgram | Real-time transcription via WebSocket |
| Text-to-Speech | ElevenLabs | Voice synthesis |

### Business Tools
| Integration | ID | Capabilities |
|-------------|-----|-------------|
| Shopify | `shopify` | E-commerce |
| HouseCall Pro | `housecall_pro` | Field service management |
| ServiceTitan | `servicetitan` | Field service platform |
| GoHighLevel | `gohighlevel` | Marketing automation |
| Wix | `wix` | Website platform |
| WordPress | `wordpress` | CMS (via proxy worker) |

### Advertising
LinkedIn Ads (`linkedin_ads`), TikTok Ads (`tiktok_ads`), Google Ads, Meta Ads

### AI & Media
OpenAI, Gemini (image gen + chat), fal.ai (video gen), Giphy (GIF search)

### Research & Scraping
Firecrawl (web scraping), Tavily (AI search), Exa (semantic search), Serper (Google places)

## Connection Patterns

### OAuth (Google, Meta, YouTube)
1. User clicks "Connect" -> `oauth.createAuthUrl` action
2. Redirect to provider with PKCE flow (5-minute state TTL)
3. Provider redirects to `/api/oauth/callback`
4. Tokens stored in `oauthConnections` table, auto-refreshed
5. Agent auto-activated

### API Key (Shopify, Twilio, Firecrawl)
1. User enters credentials in settings
2. Stored encrypted in `integrationAccounts`
3. Agent auto-activated

### MCP Server (35+ integrations)
MCP servers registered in `convex/agentbuilder/mcp/` and exposed via HTTP routes in `convex/http.ts`. All handlers are lazy-loaded to avoid module evaluation overhead at deploy time.

Tools cached per workspace+agent with configurable TTL.

### Webhook (Stripe, Resend, Gmail)
1. External service calls webhook endpoint
2. Signature verified
3. Idempotency check via `idempotencyReceipts` table (30-day TTL)
4. Handler processes event, updates database
5. Receipt marked completed

## Integration Status Query
`convex/integrations/integrations.ts::getIntegrationConnectionStatuses` returns connection status for all integrations. Used by UI to enable/disable integration-dependent features.
