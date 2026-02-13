# Marketing

Location: `src/features/marketing/` (56 files, ~10K lines)

## Overview

Comprehensive marketing automation suite with 14 tabs covering social media scheduling, blog management, paid advertising (Meta/TikTok/LinkedIn), SEO audits, Google Business Profile, local rank tracking, WordPress integration, email/SMS campaigns, forms, and documents.

## Tabs

| Tab | Path | Description |
|-----|------|-------------|
| Social Media Posts | `/marketing/content` | Multi-platform content calendar |
| Blog Posts | `/marketing/blogs` | Blog post editor + WordPress publishing |
| Email Builder | `/marketing/email-builder` | Visual email template editor |
| Email Campaigns | `/marketing/email-campaigns` | Email campaign management |
| SMS Campaigns | `/marketing/sms-campaigns` | SMS campaign management |
| Forms | `/marketing/forms` | Form builder and submissions |
| Documents | `/marketing/documents` | Document management |
| Facebook/Instagram Ads | `/marketing/ads` | Meta Ads dashboard |
| Website Audit | `/marketing/seo` | SEO audit and site health |
| Google Business Profile | `/marketing/gbp` | GBP location management |
| WordPress | `/marketing/wordpress` | WordPress CMS integration |
| Local Rank Tracker | `/marketing/local-rank` | Local search rank tracking |

## Blog Management

### BlogsView (Editorial Command Center)

- **Command palette** (`Cmd+K`): All blog actions accessible via keyboard
- **Grid/list view toggle** with localStorage persistence
- **Horizontal filter shelf**: Status, folder, tag, search filters
- **Status workflow**: `draft` -> `ready_for_review` -> `published` -> `archived`
- **Folder organization** with custom icons
- **Tag system** for categorization
- **WordPress publishing**: Publish directly or save as WordPress draft
- **Keyboard shortcuts**: `N` for new post, `Esc` to deselect

### BlogPostEditor (Full-Page Editor)

Three modes: Edit, Preview, Split (side-by-side)

**Sidebar sections** (collapsible):
- **Summary**: Featured image, excerpt, word count, read time
- **Status**: Workflow status, timestamps, WordPress sync indicator
- **URL**: Slug editor with auto-generation
- **Organization**: Folder, tags
- **SEO**: Target keyword, meta description (160 char limit), alt text

Content format: Markdown (GFM) and HTML with auto-detection.

## Social Media Content Planner

### ContentPlanner

Multi-platform social media scheduling calendar.

**Supported platforms**: Facebook, Instagram, LinkedIn, TikTok, X, Threads

**Views**: Week view (7-day) and Month view

**Layout**:
- Main area: Calendar grid with post cards
- Right sidebar (280px): Upcoming posts, drafts, page activity feed

**Post types**: Image, video, article

**Status flow**: `draft` -> `scheduled` -> `published`

**Facebook integration**:
- Multi-page support with page selector
- Fetch page feed and scheduled posts
- Delete/pause/resume scheduled posts
- Engagement metrics (likes, comments, shares)

## Paid Advertising

### Meta Ads (Facebook/Instagram)

Two views: Accounts tab and Campaigns tab.

**Campaign columns**: Name, status, objective, spend, impressions, clicks, CTR, CPC, CPM, leads, CPL, budget

**Expandable rows**: Ad sets with targeting details (age, gender, locations, interests, behaviors) and individual ads with creative content.

**Context attachment**: Select campaigns with checkboxes and attach to AI chat for analysis.

**Date presets**: today, yesterday, last_7d through lifetime (16 options)

### TikTok Ads

Same structure as Meta Ads. Campaigns with ad groups and targeting. Date presets: TODAY through LIFETIME (9 options).

### LinkedIn Ads

Same structure. LinkedIn-specific targeting: job titles, company names, industries, company sizes, skills, seniorities, degrees, schools, member groups.

## Google Business Profile

### GBPView

70/30 split layout:
- **Left (70%)**: Activity feed with posts, reviews carousel, Q&A, performance insights
- **Right (30%)**: Sticky business card sidebar with profile info, hours, contact

**Features**:
- Multi-location support with location selector
- Create/manage GBP posts (What's New, Event, Offer)
- Review management with responses
- Performance metrics (views, searches, actions)
- Media gallery management

## Local Rank Tracker

### LocalRankDashboard

Track keyword rankings in Google Maps local pack.

**Metrics**: Average rank, top position, coverage %, top-3 %, rank change, SOLV change

**Stat cards**: Total scans, top/worst average rank position, biggest SOLV gains/losses

**Filters**: All scans, Top ARP, Worst ARP, SOLV Gains, SOLV Losses

**Timeframes**: Week, Month

**Backend**: Serper API for Google Places scanning, configurable grid radius and size.

## Website SEO Audit

### WorkspaceSEOView

Full website SEO analysis with scoring.

**Overall grade**: A-F with letter badge

**Category scores**: Title, Description, Open Graph, Twitter Cards, Technical SEO

**Tabs**:
1. **Overview**: Scores + issues summary
2. **Metadata**: All meta tags, OpenGraph, Twitter Cards
3. **Performance**: PageSpeed metrics + Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
4. **Content**: Headings, images (with alt audit), links, word count
5. **Site Tree**: Hierarchical page structure visualization

**PageSpeed metrics**: Performance, accessibility, best practices, SEO scores (0-100)

## WordPress Integration

- WordPress credentials configuration (site URL, username, application password)
- Connection testing
- Full CRUD for posts, pages, categories, tags
- Media library management
- Comments management with nested replies
- Publish blog drafts to WordPress
- Sync status tracking

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `MarketingLayout` | Main layout with tab navigation |
| `BlogsView` | Editorial command center |
| `BlogPostEditor` | Full-page blog editor |
| `ContentPlanner` | Social media calendar |
| `MetaAdsTable` | Meta Ads dashboard |
| `TikTokAdsTable` | TikTok Ads dashboard |
| `LinkedInAdsTable` | LinkedIn Ads dashboard |
| `GBPView` | Google Business Profile |
| `LocalRankDashboard` | Local rank tracker |
| `WorkspaceSEOView` | SEO audit dashboard |
| `PostDialog` | Social post editor modal |
| `BlogCommandPalette` | Cmd+K command interface |
