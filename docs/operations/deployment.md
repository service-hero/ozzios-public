# Deployment

## Build Configuration

### Vite (`vite.config.ts`)
- **Target**: ES2019
- **Source maps**: Hidden (uploaded to Sentry, not served to browsers)
- **Chunk size warning**: 1000KB

### Manual Chunks (Code Splitting)
| Chunk | Libraries |
|-------|-----------|
| `hugeicons-stroke-rounded` | Core stroke rounded icons |
| `hugeicons-core` | Other Hugeicons |
| `xyflow` | React Flow (workflow builder) |
| `dagre` | Graph layout |
| `tiptap` | Rich text editor |
| `prosemirror` | ProseMirror core |
| `dnd-kit` | Drag-and-drop |
| `realtimekit` | Cloudflare Realtime |
| `date-fns` | Date utilities |
| `vendor` | Everything else (React, TanStack, Convex, Clerk) |

Note: recharts and framer-motion stay in `vendor` to avoid chunk loading order issues with React 19.

### Pre-bundling
React, date-fns, recharts, zustand are pre-bundled for faster dev server cold start. `@xyflow/react` excluded (lazy-loaded).

## Deploy Commands

| Command | Target |
|---------|--------|
| `bun run build` | Production build (TypeScript + Vite + security tests) |
| `bun run convex:deploy` | Deploy Convex functions to production |
| `bun run deploy:pages` | Build + deploy to Cloudflare Pages |
| `bun run deploy:worker` | Deploy main Cloudflare Worker |
| `bun run deploy:widget` | Build widget + deploy to Cloudflare |
| `bun run deploy:form` | Deploy form embed worker |
| `bun run server:deploy` | Deploy analytics server (Hono + D1) |
| `bun run deploy:all` | Deploy everything |

## Cloudflare Workers

### Main App Worker (`wrangler.toml`)
- Serves React SPA from `dist/`
- Deployed to `app.ozzios.com`

### Widget Worker (`workers/widget/`)
- Embeddable chat widget
- Production: `ozzios-widget`
- Routes: `/loader.js?key=xxx`, `/embed?key=xxx`, `/widget.js`

### Form Embed Worker (`workers/form-embed/`)
- Embeddable lead capture forms
- Production: `ozzios-forms`
- No build step -- generates inline HTML/CSS/JS
- Routes: `/loader.js?key=xxx`, `/embed?key=xxx`, `POST /submit`

### Voice Agent Worker (`workers/voice-agent/`)
- AI voice conversations via Twilio ConversationRelay
- Uses Durable Objects for WebSocket session state
- Compatibility: nodejs_compat

### Video Render Worker (`workers/video-render/`)
- Video rendering via Remotion Lambda
- R2 binding: `companyos-client-assets`

### WordPress Proxy Worker (`workers/wordpress-proxy/`)
- Proxies WordPress API requests to avoid CORS issues

## Storage

### Cloudflare R2
- **Public domain**: `assets.ozzios.com`
- **Bucket**: `companyos-client-assets`
- External tools access files via public URL (no auth needed)
- Internal: `resolveR2Url(key)` converts key to public URL

## Frontend Hosting

Cloudflare Pages at `app.ozzios.com`. Built artifacts in `dist/`.

## Backend

Convex serverless -- deployed via `bun run convex:deploy`. Functions auto-scale.
