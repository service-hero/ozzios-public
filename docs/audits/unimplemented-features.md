# Unimplemented Features Audit (Validated)

**Date:** 2026-02-11  
**Scope:** Validation pass of the 2026-02-08 audit against current repository state

## Summary

| Status | Count |
|--------|-------|
| Confirmed unimplemented | 30 |
| Partially implemented / outdated claim | 7 |
| Intentional deprecation / non-goal | 2 |
| **Total reviewed (original audit items)** | **39** |

---

## Confirmed Unimplemented

### Frontend stubs / placeholders (6)

### Views / Command Center
- **File:** `src/features/views/components/ViewsPage.tsx:50`
- **Issue:** Hardcoded empty list with `// Local fallback until persisted views are connected`
- **Impact:** View list is always empty; no persisted data wiring

### Slack Import
- **File:** `src/features/settings/tabs/ImportTab.tsx:243`
- **Issue:** `// TODO: Implement Slack import action`
- **Impact:** Upload UI exists, but no backend import pipeline is called

### Workflow Trigger Hook
- **File:** `src/features/ai-agents/tabs/HookFormSheet.tsx:285`
- **Issue:** Type option is disabled with label `Workflow Trigger (Coming Soon)`
- **Impact:** Hook creation supports message/agent only

### Scheduled Huddles
- **File:** `src/features/huddles/components/HuddlesPage.tsx:525`
- **Issue:** Scheduled tab is explicitly a placeholder empty state
- **Impact:** No scheduling flow is wired

### Huddle Transcripts
- **File:** `src/features/huddles/components/HuddlesPage.tsx:173`
- **Issue:** Comment notes backend action not implemented; UI returns `"Transcript feature is not yet available"`
- **Impact:** Transcript button cannot load real transcript data

### Workflow File Search Node
- **File:** `src/features/workflows/components/builder/WorkflowBuilder.tsx:987`
- **Issue:** Selecting `file-search` node opens coming-soon modal instead of config panel
- **Impact:** Node is visible but unusable

### Backend stubs / placeholders (5)

### Email Contact Linking
- **File:** `convex/workspace/inbox.ts:1980`
- **Issue:** Throws `Email contact linking not yet implemented`
- **Impact:** Email conversations cannot be linked to contacts

### Email Lead Linking
- **File:** `convex/workspace/inbox.ts:2032`
- **Issue:** Throws `Email lead linking not yet implemented`
- **Impact:** Email conversations cannot be linked to lead tasks

### Email Engagement Scoring
- **File:** `convex/contacts/contactScoring.ts:160`
- **Issue:** Placeholder score (`emailEngagement = 50`)
- **Impact:** Contact scoring lacks real email engagement signal

### Selective Tool Cache Clearing
- **File:** `convex/agentbuilder/harness/toolExecutor/idempotencyCheck.ts:268`
- **Issue:** Selective clear logs `not implemented`; only full clear exists
- **Impact:** Fine-grained invalidation unavailable

### Priority Queue Accept Logic
- **File:** `convex/lib/priorityQueue.ts:173`
- **Issue:** Placeholder path always accepts operations
- **Impact:** No real queue backpressure gating

### Unimplemented integration triggers (12)

- **Files:** `convex/lib/triggerCategories.ts`, `convex/triggers/integrationTriggers.ts:157`
- **Issue:** These are still marked `implemented: false`, and enabling throws a coming-soon error

| Trigger | Event | Line |
|---------|-------|------|
| Google Business Profile - New Review | `google_review.created` | 109 |
| Google Ads - Budget Depleted | `ad.budget_depleted` | 133 |
| Google Ads - Performance Anomaly | `ad.performance_anomaly` | 142 |
| Facebook - Page Comment | `facebook_comment.created` | 247 |
| Meta Ads - Ad Approved | `ad.approved` | 265 |
| Meta Ads - Ad Rejected | `ad.rejected` | 274 |
| Website Monitor - Site Downtime | `site.downtime` | 324 |
| Website Monitor - Site Recovered | `site.recovered` | 333 |
| Google Analytics - Goal Completed | `analytics.goal_completed` | 351 |
| Google Analytics - Traffic Spike | `analytics.traffic_spike` | 360 |
| CRM - Note Added | `contact.note_added` | 482 |
| Brand Monitor - Brand Mention | `brand_mention.detected` | 546 |

### Missing template prompts (6)

- **File:** `convex/agentbuilder/prompts/templateRegistry.ts`
- **Issue:** Empty `prompts: []`

| Template | Line | Comment |
|----------|------|---------|
| Executive Agent | 137 | Add `EXECUTIVE_SYSTEM_PROMPT` |
| SEO Specialist | 164 | Add `SEO_SPECIALIST_SYSTEM_PROMPT` |
| Content Writer | 170 | Add `CONTENT_WRITER_SYSTEM_PROMPT` |
| Email Marketing Specialist | 182 | Add `EMAIL_MARKETING_SYSTEM_PROMPT` |
| PPC Specialist | 188 | Add `PPC_SPECIALIST_SYSTEM_PROMPT` |
| Data Analyst | 194 | Add `DATA_ANALYST_SYSTEM_PROMPT` |

### MCP OAuth placeholder (1)

### Custom MCP OAuth Auth Type
- **File:** `convex/integrations/mcpServers.ts:27`
- **Issue:** Uses placeholder auth literal `'oauth-coming-soon'`
- **Impact:** Custom MCP entries still support `none`, `api-key`, `bearer`; OAuth flow support is not implemented

---

## Partially Implemented / Outdated Claim

### LinkedIn Ads
- **Claim status:** Outdated
- **Evidence:** Settings card still flags coming soon (`src/features/settings/constants/integrations.ts:83`), but backend actions + credential storage exist (`convex/integrations/linkedinAds.ts:416`, `:582`, `:609`)

### TikTok Ads (UI status)
- **Claim status:** Partially true
- **Evidence:** Settings card still flags coming soon (`src/features/settings/constants/integrations.ts:101`), but ads actions + credential storage exist (`convex/integrations/tiktokAds.ts:626`, `:767`, `:1104`, `:1136`)

### Twitter/X
- **Claim status:** Outdated
- **Evidence:** No `comingSoon: true` on the Twitter integration card (`src/features/settings/constants/integrations.ts:86`)

### TikTok Ads backend
- **Claim status:** Outdated
- **Evidence:** File header still says placeholder (`convex/integrations/tiktokAds.ts:17`), but real action surface is implemented (`getAdAccounts`, `getCampaigns`, `getCampaignInsights`, `updateCampaignStatus`, etc.)

### OAuth provider: Meta Ads
- **Claim status:** Outdated
- **Evidence:** OAuth flow includes `case 'meta-ads'` (`convex/oauth/index.ts:228`) and integration manifest maps Meta Ads to OAuth (`convex/lib/integrationManifest.ts:227`)

### OAuth provider: WordPress
- **Claim status:** Outdated framing
- **Evidence:** WordPress is configured as API-key integration, not OAuth (`convex/lib/integrationManifest.ts:329`)

### OAuth provider: Twilio
- **Claim status:** Outdated framing
- **Evidence:** Twilio is configured as API-key integration, not OAuth (`convex/lib/integrationManifest.ts:666`)

---

## Intentional Deprecation / Non-Goal

### Leads feature directory
- **File:** `src/features/leads/` (missing)
- **Status:** Intentional deprecation in favor of tasks-based lead model

### Server-side PDF parsing
- **File:** `convex/workspace/knowledge.ts:638`
- **Status:** Intentionally unsupported; client-side PDF parsing is the active path
