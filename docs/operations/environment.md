# Environment Variables

Copy `.env.example` to `.env.local`. Variables prefixed with `VITE_` are exposed to the frontend.

## Required

### Core
| Variable | Purpose |
|----------|---------|
| `CONVEX_DEPLOYMENT` | Convex deployment name |
| `VITE_CONVEX_URL` | Convex API URL |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk public key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLERK_JWT_ISSUER_DOMAIN` | Clerk JWT issuer |
| `VITE_APP_URL` | Application URL |

### AI (at least one required)
| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Anthropic (primary LLM) |
| `OPENAI_API_KEY` | OpenAI |
| `GEMINI_API_KEY` | Google Gemini |

### Storage
| Variable | Purpose |
|----------|---------|
| `R2_ACCOUNT_ID` | Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | R2 access key |
| `R2_SECRET_ACCESS_KEY` | R2 secret key |
| `R2_BUCKET_NAME` | R2 bucket name |
| `R2_PUBLIC_URL` | R2 public URL (`assets.ozzios.com`) |

## Billing
| Variable | Purpose |
|----------|---------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe public key |
| `STRIPE_SECRET_KEY` | Stripe secret (set in Convex dashboard) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook verification |

## Email
| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key |
| `RESEND_WEBHOOK_SECRET` | Resend webhook secret |
| `RESEND_DEFAULT_FROM` | Default sender email |

## Optional

### Voice/Transcription
| Variable | Purpose |
|----------|---------|
| `DEEPGRAM_API_KEY` | Speech-to-text |
| `ELEVENLABS_API_KEY` | Text-to-speech (backend) |
| `VITE_ELEVENLABS_API_KEY` | ElevenLabs (frontend) |
| `CLOUDFLARE_REALTIME_APP_ID` | Realtime huddles |
| `CLOUDFLARE_REALTIME_APP_SECRET` | Realtime secret |

### Google APIs
| Variable | Purpose |
|----------|---------|
| `GOOGLE_CLIENT_ID` | OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | OAuth secret |
| `GOOGLE_REDIRECT_URI` | OAuth redirect |
| `GOOGLE_PLACES_API_KEY` | Places API |
| `GOOGLE_SEARCH_CONSOLE_CLIENT_ID` | Search Console OAuth |

### Communications
| Variable | Purpose |
|----------|---------|
| `TWILIO_ACCOUNT_SID` | Twilio account |
| `TWILIO_AUTH_TOKEN` | Twilio auth |
| `META_APP_ID` | Facebook/Meta app ID |
| `META_APP_SECRET` | Meta secret |

### Web Scraping
| Variable | Purpose |
|----------|---------|
| `FIRECRAWL_API_KEY` | Firecrawl |
| `TAVILY_API_KEY` | Tavily search |
| `EXA_API_KEY` | Exa search |

### Code Execution
| Variable | Purpose |
|----------|---------|
| `E2B_API_KEY` | E2B sandbox |
| `DENO_TRANSFORM_EXECUTOR_URL` | Deno Subhosting (required in production) |

### Monitoring
| Variable | Purpose |
|----------|---------|
| `SENTRY_AUTH_TOKEN` | Sentry (source map upload) |
| `VITE_SENTRY_DSN` | Sentry DSN |

### Development
| Variable | Purpose |
|----------|---------|
| `MCP_INTERNAL_SECRET` | Internal API secret |
| `DEVELOPER_EMAILS` | Developer admin access (comma-separated) |
