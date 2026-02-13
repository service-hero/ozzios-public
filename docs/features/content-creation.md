# Content Creation

Covers presentations, agent creations (reports), research, and video editing.

## Presentations

Location: `convex/workspace/presentations.ts`, `src/features/presentations/`

### Overview

AI-powered slideshow generation from research or standalone prompts. Supports 8 slide types, chart embedding, theme customization, and PPTX export.

### Slide Types

| Type | Purpose |
|------|---------|
| `title` | Title slide with subtitle |
| `content` | Body content with bullets |
| `section` | Section divider |
| `image` | Full or split image layout |
| `comparison` | Side-by-side comparison |
| `quote` | Quote with attribution |
| `chart` | Data visualization (bar, line, pie, area, donut) |
| `blank` | Freeform layout |

### Theme

Customizable per presentation: `primaryColor`, `secondaryColor`, `accentColor`, `backgroundColor`, `textColor`, `fontFamily`, `logoUrl`

### Key Capabilities

- Create from research documents or standalone
- 5 chart types with embedded data
- PPTX export via Remotion
- Status tracking: `draft` -> `ready` -> `archived`
- Created by user or AI agent

### Frontend

- `PresentationViewer` -- Slideshow viewer with transitions
- `PresentationSlide` -- Individual slide rendering
- Remotion integration for video rendering

---

## Agent Creations (Reports)

Location: `src/features/reports/`

### Overview

AI-generated creative content studio. Agents produce websites, dashboards, interactive slideshows, and other rich media artifacts rendered in a sandboxed viewer.

### Key Capabilities

- Generate websites, dashboards, slideshows
- Sandboxed preview via `SandboxReportViewer`
- Backend table: `coding` (tracks generation status and storage)
- Integration with coding/creative generation tools

### Frontend

- `ReportsPage` -- "Agent Creations" gallery
- `SandboxReportViewer` -- Sandboxed content viewer

---

## Research

Location: `convex/workspace/research.ts`, `src/features/research/`

### Overview

Knowledge base for workspace research and insights. Rich-text documents created by agents or users, with links to leads, contacts, and channel messages.

### Table: `research`

| Field | Purpose |
|-------|---------|
| `title` | Document title |
| `content` | Rich markdown/HTML body |
| `coverImageUrl` | Cover image |
| `icon` | Document icon |
| `tags` | Array of tags |
| `category` | Free-form category |
| `sourceMessageId` | Linked channel message |
| `leadId` | Linked lead |
| `contactId` | Linked contact |

### Key Capabilities

- Rich text editing with slash commands
- Tag and categorize for organization
- Link to leads/contacts for context
- Generate presentations from research
- Cover images and icons

### Frontend

- `ResearchView` -- Research document list
- `ResearchPageView` -- Document detail view
- `ResearchEditor` -- Rich text editor

---

## Video Kit

Location: `convex/videoKit/`, `src/features/video-kit/`

### Overview

AI-powered video editing and generation using fal.ai, with Remotion for composition and export. Multi-track timeline editor with transitions, captions, stickers, and effects.

### Track Types (5)

| Track | Color | Purpose |
|-------|-------|---------|
| `video` | Sky | Primary video clips |
| `music` | Teal | Background music |
| `voiceover` | Indigo | Voice narration |
| `sticker` | Pink | Animated GIFs/stickers (Giphy integration) |
| `subtitle` | Amber | Captions/subtitles |

Each track supports: volume (0-1), mute, solo, hidden states for mixing control.

### Transitions (5 types, 13 presets)

| Type | Variants |
|------|----------|
| **Fade** | Fade (500ms), Quick Fade (250ms) |
| **Dissolve** | Crossfade (500ms) |
| **Slide** | Left, Right, Up, Down (500ms each) |
| **Zoom** | In, Out (500ms each) |
| **Wipe** | Left, Right, Up, Down (500ms each) |

### Caption Presets (5)

| Preset | Description |
|--------|-------------|
| `basic` | White text, dark background (32px) |
| `karaoke` | Word-by-word highlight (36px) |
| `typewriter` | Green text, typewriter effect (28px) |
| `fade` | Fade-in animation, center position (32px) |
| `glow` | White text with glow effect (36px) |

Word-level timestamps from fal.ai Whisper API for precise synchronization.

### Sticker System

- Giphy integration for animated sticker search
- Position controls: x/y (percentage), width (5-100%), rotation (0-360 degrees)
- Drag-and-drop placement on video canvas

### Video Effects

- **Filters**: grayscale, sepia, blur, brightness, contrast, invert
- **Motion effects** (Ken Burns): zoom-in, zoom-out, pan-left, pan-right
- **Speed control**: 0.1x to 100x playback
- **Fade control**: Audio fade in/out

### Timeline Features

- Dynamic tick intervals based on zoom level
- Markers with color customization
- Filmstrip view for video tracks
- Undo/redo via `historyStore`
- Copy/paste via `clipboardStore`

### Export

- Aspect ratios: 16:9 (1920x1080), 9:16 (1080x1920), 1:1 (1080x1080)
- Export via `workers/video-render/` -> Remotion Lambda -> R2 storage
- fal.ai integration for AI video generation
