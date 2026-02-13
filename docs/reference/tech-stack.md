# Tech Stack & Versions

All versions from `package.json`. Node engine: `>=18.0.0`.

## Core

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 19.2.1 | UI framework |
| `react-dom` | 19.2.1 | React DOM |
| `typescript` | 5.9.3 | Type safety |
| `vite` | 7.3.1 | Build tool |
| `convex` | 1.31.7 | Serverless backend |
| `convex-helpers` | 0.1.106 | Convex utilities |

## Routing & State

| Package | Version | Purpose |
|---------|---------|---------|
| `@tanstack/react-router` | 1.146.2 | File-based routing |
| `@tanstack/react-query` | 5.90.12 | Data fetching |
| `@tanstack/react-form` | 1.27.0 | Form management |
| `@tanstack/react-table` | 8.21.3 | Table/data grid |
| `zustand` | 5.0.9 | Global state |

## Styling

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 4.1.17 | Utility CSS |
| `@tailwindcss/vite` | 4.1.17 | Vite plugin |
| `framer-motion` | 12.25.0 | Animations |

## Auth & Billing

| Package | Version | Purpose |
|---------|---------|---------|
| `@clerk/clerk-react` | 5.59.3 | Authentication (frontend) |
| `@clerk/backend` | 2.29.2 | Authentication (backend) |
| `stripe` | 20.1.2 | Billing (backend) |
| `@stripe/stripe-js` | 8.7.0 | Billing (frontend) |

## AI / LLM

| Package | Version | Purpose |
|---------|---------|---------|
| `@anthropic-ai/sdk` | 0.73.0 | Anthropic (primary) |
| `openai` | 6.15.0 | OpenAI |
| `@google/genai` | 1.35.0 | Google Gemini |
| `groq-sdk` | 0.37.0 | Groq |
| `ai` | 6.x | Vercel AI SDK |
| `@ai-sdk/openai` | 3.x | AI SDK OpenAI adapter |
| `@ai-sdk/mcp` | 1.0.18 | MCP integration |
| `@modelcontextprotocol/sdk` | 1.25.2 | MCP SDK |

## Convex Components

| Package | Version | Purpose |
|---------|---------|---------|
| `@convex-dev/workflow` | 0.3.3 | Durable workflows |
| `@convex-dev/rag` | 0.7.0 | RAG knowledge base |
| `@convex-dev/stripe` | 0.1.1 | Stripe integration |
| `@convex-dev/resend` | 0.2.3 | Email delivery |
| `@convex-dev/agent` | 0.3.2 | Agent memory |
| `@convex-dev/r2` | 0.8.1 | R2 storage |
| `@convex-dev/action-cache` | 0.3.0 | Action caching |
| `@convex-dev/action-retrier` | 0.3.0 | Retry logic |
| `@convex-dev/rate-limiter` | 0.3.0 | Rate limiting |
| `@convex-dev/workpool` | 0.3.1 | Job queuing |
| `@convex-dev/crons` | 0.2.0 | Cron jobs |
| `@convex-dev/aggregate` | 0.2.0 | Aggregations |
| `@convex-dev/sharded-counter` | 0.2.0 | Sharded counters |

## UI Components

| Package | Version | Purpose |
|---------|---------|---------|
| `@radix-ui/*` | 1.x-2.x | 20+ primitives |
| `lucide-react` | 0.562.0 | Icons |
| `@hugeicons/react` | 1.1.1 | Icons (primary) |
| `cmdk` | 1.1.1 | Command palette |
| `sonner` | 2.0.7 | Toast notifications |

## Rich Content

| Package | Version | Purpose |
|---------|---------|---------|
| `@tiptap/react` | 3.15.3 | Rich text editor |
| `@tiptap/markdown` | 3.15.3 | Markdown support |
| `react-markdown` | 10.1.0 | Markdown rendering |
| `streamdown` | 2.1.0 | Streaming markdown |
| `@streamdown/mermaid` | 1.0.1 | Mermaid diagrams |

## Workflow & DAG

| Package | Version | Purpose |
|---------|---------|---------|
| `@xyflow/react` | 12.10.0 | Visual workflow builder |
| `@dagrejs/dagre` | 1.1.5 | Graph layout |
| `@dagrejs/graphlib` | 2.2.4 | Graph utilities |

## Communication

| Package | Version | Purpose |
|---------|---------|---------|
| `resend` | 6.7.0 | Email API |
| `@react-email/components` | 1.0.4 | Email templates |
| `@twilio/voice-sdk` | 2.18.0 | Voice SDK |
| `@deepgram/sdk` | 4.11.3 | Speech-to-text |

## Video

| Package | Version | Purpose |
|---------|---------|---------|
| `remotion` | 4.0.409 | Video generation |
| `@remotion/player` | 4.0.409 | Video player |

## Charts & Visualization

| Package | Version | Purpose |
|---------|---------|---------|
| `recharts` | 2.x | Charts |
| `@xyflow/react` | 12.10.0 | Flow diagrams |

## Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| `date-fns` | 4.1.0 | Date utilities |
| `zod` | 4.1.13 | Schema validation |
| `nanoid` | 5.1.6 | ID generation |
| `dompurify` | 3.2.5 | HTML sanitization |

## Testing

| Package | Version | Purpose |
|---------|---------|---------|
| `vitest` | 4.0.15 | Test runner |
| `@testing-library/react` | 16.3.0 | React testing |
| `jsdom` | 27.2.0 | DOM simulation |

## Deployment

| Package | Version | Purpose |
|---------|---------|---------|
| `wrangler` | 4.58.0 | Cloudflare Workers |
| `@sentry/vite-plugin` | 4.6.1 | Source maps |
| `@sentry/react` | 10.28.0 | Error tracking |
