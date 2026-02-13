# Video Kit

AI-powered video editing and generation platform. Multi-track timeline editor with Remotion composition, fal.ai media generation, Remotion Lambda rendering, and Deepgram transcription.

Location: `convex/videoKit/`, `src/features/video-kit/`, `convex/agentbuilder/mcp/mcpRemotionAi.ts`

**Summary in content-creation.md**: See [`docs/features/content-creation.md`](content-creation.md) for a brief overview alongside presentations and research.

---

## Architecture

### Data Flow

```
User ──> React UI ──> Convex Mutations ──> Convex DB (source of truth)
                                               │
                            ┌──────────────────┤
                            ▼                  ▼
                     Convex Queries      Durable Workflows
                            │                  │
                            ▼            ┌─────┼─────────┐
                     React UI            ▼     ▼         ▼
                     (real-time)      fal.ai  Lambda  Deepgram
                                         │     │         │
                                         ▼     ▼         ▼
                                      R2 Storage ──> CDN URLs
```

### State Hierarchy

1. **Convex DB** -- Source of truth for projects, tracks, keyframes, media, exports
2. **TanStack Query** (`convexQuery`) -- Real-time cache with automatic invalidation
3. **Zustand stores** -- Session-only UI state (player, history, clipboard)

---

## Schema Tables

### `videoProjects`

| Field | Type | Purpose |
|-------|------|---------|
| `workspaceId` | `Id<"workspaces">` | Tenant isolation |
| `title` | `string` | Project name |
| `description` | `string?` | Optional description |
| `aspectRatio` | `"16:9" \| "9:16" \| "1:1"` | Canvas dimensions |

Indexes: `by_workspaceId`, `by_workspaceId_updatedAt`

### `videoTracks`

| Field | Type | Purpose |
|-------|------|---------|
| `projectId` | `Id<"videoProjects">` | Parent project |
| `workspaceId` | `Id<"workspaces">` | Tenant isolation |
| `type` | `"video" \| "music" \| "voiceover" \| "subtitle" \| "sticker"` | Track category |
| `label` | `string` | Display name |
| `order` | `number` | Render/display order |
| `volume` | `number` | 0-1 audio level |
| `muted` | `boolean` | Mute toggle |
| `solo` | `boolean` | Solo toggle |
| `hidden` | `boolean` | Visibility toggle |
| `locked` | `boolean` | Edit lock |

Indexes: `by_projectId`, `by_workspaceId`, `by_projectId_order`

### `videoKeyFrames`

| Field | Type | Purpose |
|-------|------|---------|
| `trackId` | `Id<"videoTracks">` | Parent track |
| `workspaceId` | `Id<"workspaces">` | Tenant isolation |
| `timestamp` | `number` | Start time (ms) |
| `duration` | `number` | Length (ms) |
| `groupId` | `string?` | Grouping for linked clips |
| `data` | object | Type-specific content (see below) |
| `filter` | `string?` | Visual filter (grayscale, sepia, blur, brightness, contrast, invert) |
| `effect` | `string?` | Motion effect (zoom-in, zoom-out, pan-left, pan-right) |
| `playbackRate` | `number?` | Speed 0.1x-100x |
| `fadeInDuration` | `number?` | Audio fade in (seconds) |
| `fadeOutDuration` | `number?` | Audio fade out (seconds) |
| `outTransition` | object? | Transition to next keyframe |

**Keyframe data types**: prompt, image, video, voiceover, music, caption (with word-level timing), sticker (Giphy with position/rotation)

**Transition config**: `{ type, duration, direction? }` -- fade, dissolve, slide, zoom, wipe

Indexes: `by_trackId`, `by_workspaceId`, `by_groupId`

### `videoMediaItems`

| Field | Type | Purpose |
|-------|------|---------|
| `projectId` | `Id<"videoProjects">` | Parent project |
| `workspaceId` | `Id<"workspaces">` | Tenant isolation |
| `type` | `"image" \| "video" \| "music" \| "voiceover"` | Media category |
| `source` | `"generated" \| "uploaded"` | Origin |
| `status` | `"pending" \| "running" \| "completed" \| "failed"` | Job state |
| `endpointId` | `string?` | fal.ai endpoint (for generated) |
| `requestId` | `string?` | fal.ai job ID |
| `input` | object? | Generation input params |
| `output` | object? | Generation result |
| `url` | `string?` | Final media URL |
| `r2Key` | `string?` | R2 storage key |
| `metadata` | object? | Duration, dimensions, waveform |

Indexes: `by_projectId`, `by_workspaceId`, `by_projectId_status`

### `videoExports`

| Field | Type | Purpose |
|-------|------|---------|
| `projectId` | `Id<"videoProjects">` | Parent project |
| `workspaceId` | `Id<"workspaces">` | Tenant isolation |
| `status` | `"pending" \| "rendering" \| "completed" \| "failed"` | Render state |
| `renderId` | `string?` | Remotion Lambda render ID |
| `bucketName` | `string?` | S3 bucket for Lambda output |
| `aspectRatio` | `string` | Render aspect ratio |
| `durationMs` | `number?` | Video duration |
| `width` | `number?` | Render width |
| `height` | `number?` | Render height |
| `fps` | `number?` | Frame rate |
| `url` | `string?` | Final CDN URL |
| `thumbnailUrl` | `string?` | Poster image |
| `fileSize` | `number?` | Bytes |
| `errorMessage` | `string?` | Failure reason |

Indexes: `by_projectId`, `by_workspaceId`, `by_workspaceId_createdAt`, `by_projectId_status`

---

## Backend Functions

### Projects (`convex/videoKit/projects.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `list` | query | List projects for workspace |
| `getById` | query | Get specific project |
| `create` | mutation | Create project with default video track |
| `update` | mutation | Update title/description/aspectRatio |
| `remove` | mutation | Delete project and all associated data |

### Tracks (`convex/videoKit/tracks.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `listByProject` | query | List tracks for a project |
| `getById` | query | Get specific track |
| `create` | mutation | Create track (any type) |
| `update` | mutation | Update track properties |
| `remove` | mutation | Delete track and its keyframes |
| `setVolume` | mutation | Set volume (0-1) |
| `toggleMute` | mutation | Toggle mute |
| `toggleSolo` | mutation | Toggle solo |
| `toggleHidden` | mutation | Toggle visibility (subtitles) |
| `reorder` | mutation | Reorder multiple tracks |

### Keyframes (`convex/videoKit/keyframes.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `listByTrack` | query | List keyframes on a track |
| `listByProject` | query | All keyframes across tracks |
| `getById` | query | Get specific keyframe |
| `create` | mutation | Create keyframe with data |
| `update` | mutation | Update properties, filters, effects |
| `remove` | mutation | Delete keyframe |
| `bulkUpdatePositions` | mutation | Drag-and-drop reordering |
| `updateFade` | mutation | Set fadeIn/fadeOut |
| `updateSpeed` | mutation | Adjust playback rate |
| `split` | mutation | Split keyframe at timestamp |
| `setTransition` | mutation | Add/configure transition |
| `removeTransition` | mutation | Remove transition |
| `duplicate` | mutation | Copy to same or different track |
| `bulkDuplicate` | mutation | Bulk copy for paste |
| `bulkRemove` | mutation | Bulk delete |

### Media (`convex/videoKit/media.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `listByProject` | query | List media items for project |
| `listByStatus` | query | Filter by generation status |
| `getById` | query | Get specific media item |
| `createGenerated` | mutation | Create fal.ai job record |
| `createUploaded` | mutation | Create uploaded media record |
| `updateStatus` | mutation | Update job status |
| `updateMetadata` | mutation | Update duration, dimensions, etc. |
| `updateUrl` | mutation | Set final URL after generation |
| `remove` | mutation | Delete media and associated keyframes |
| `bulkRemove` | mutation | Bulk delete |

### Captions (`convex/videoKit/captions.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `listCaptionsByTrack` | query | Get captions from subtitle track |
| `createCaption` | mutation | Create caption keyframe |
| `updateCaptionText` | mutation | Edit caption text |
| `updateCaptionStyle` | mutation | Modify styling |
| `updateCaptionWords` | mutation | Update word-level timings |
| `deleteCaption` | mutation | Remove caption |
| `createCaptionsFromTranscription` | mutation | Bulk create from transcription |
| `transcribeAudio` | action | Call Whisper API (fal.ai) |
| `transcribeAudioWithDeepgram` | action | Call Deepgram Nova-2 |
| `generateCaptionsFromAudio` | action | Full workflow: transcribe + create |

### Exports (`convex/videoKit/exports.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `listByProject` | query | List exports for a project |
| `listByWorkspace` | query | List all workspace exports |
| `getById` | query | Get export record |
| `getLatestByProject` | query | Latest render for project |
| `create` | mutation | Initialize export (pending) |
| `setRendering` | mutation | Update to rendering state |
| `setCompleted` | mutation | Mark complete with URL |
| `setFailed` | mutation | Mark failed with error |
| `remove` | mutation | Delete export record |

### fal.ai Proxy (`convex/videoKit/fal.ts`)

| Function | Type | Purpose |
|----------|------|---------|
| `submitJob` | action | POST to fal.ai queue |
| `getJobStatus` | action | GET job status by requestId |
| `getJobResult` | action | GET completed job result |
| `cancelJob` | action | Cancel queued job |
| `runSync` | action | Synchronous endpoint execution |

---

## Durable Workflows (`convex/videoKit/workflows/`)

### Media Generation (`mediaGeneration.ts`)

Manages fal.ai job lifecycle with checkpointing and retry.

| Config | Value |
|--------|-------|
| Workpool | `videoKitGenerationPool` |
| Parallelism | 5 concurrent |
| Retries | 4 with 1s-8s backoff |

**Steps**: Create media record → Submit to fal.ai queue → Poll status with backoff → Fetch result → Update media with URL/metadata

### Video Export (`videoExport.ts`)

Renders composition via Remotion Lambda, uploads to R2.

| Config | Value |
|--------|-------|
| Workpool | Video export pool |
| Parallelism | 3 concurrent (expensive Lambda) |
| Retries | None (manual retry) |

**Steps**: Create export record → Submit to Remotion Lambda → Poll progress (30s-5min intervals) → Download from S3 → Upload to R2 → Update export with CDN URL

### Caption Generation (`captionGeneration.ts`)

Transcribes audio and creates timed captions.

| Config | Value |
|--------|-------|
| Workpool | Caption generation pool |
| Parallelism | 5 concurrent |
| Retries | 3 with 2s-8s backoff |

**Steps**: Transcribe with Deepgram Nova-2 (checkpoint) → Find/create subtitle track → Create caption keyframes

**Chunking**: 4-8 words per caption, max 4 seconds, intelligent sentence detection

---

## MCP Server (`convex/agentbuilder/mcp/mcpRemotionAi.ts`)

Endpoint: `/mcp/remotion-ai` (Streamable HTTP)

Exposes 15+ tools for AI agents to compose and render videos programmatically:

### Composition Tools

| Tool | Purpose |
|------|---------|
| `create_composition` | Create project with aspect ratio |
| `add_scene` | Add clip to timeline with duration and mediaUrl |
| `add_text_overlay` | Add text with styling |
| `add_media` | Add image/video/audio to specific track |
| `update_element` | Modify text, media, style, filters, effects |
| `delete_element` | Remove keyframe from timeline |
| `update_timing` | Change startTime and duration |
| `get_project_state` | Return full project structure |
| `list_templates` | List pre-built video templates |

### Render Tools

| Tool | Purpose |
|------|---------|
| `render_video` | Submit project for Remotion Lambda rendering |
| `get_render_status` | Poll render progress |

### AI Generation Tools

| Tool | Purpose |
|------|---------|
| `generate_video` | Veo 3.1 video generation (8s, 720p/1080p) |
| `text_to_speech` | ElevenLabs TTS with voice selection |
| `list_voices` | Available ElevenLabs voices |
| `generate_captions` | Deepgram transcription to auto-captions |

---

## External Services

| Service | Purpose | Integration |
|---------|---------|-------------|
| **fal.ai** | Image/video/music/voiceover generation | Queue API with polling via `convex/videoKit/fal.ts` |
| **Remotion Lambda** | Video composition rendering | AWS Lambda via durable workflow |
| **Deepgram** | Audio transcription | Nova-2 model, word-level timing |
| **Google Veo 3.1** | AI video generation | 8s clips, cinematic quality |
| **ElevenLabs** | Text-to-speech | Multiple voices, stability/boost controls |
| **Giphy** | Animated stickers | Search + embed via Giphy API |
| **Cloudflare R2** | Media storage | Permanent CDN URLs for all assets |

---

## Track System

### Track Types

| Track | Color | Purpose | Audio Controls |
|-------|-------|---------|----------------|
| `video` | Sky | Primary video/image clips | -- |
| `music` | Teal | Background music | Volume, mute, solo, fade |
| `voiceover` | Indigo | Voice narration | Volume, mute, solo, fade |
| `sticker` | Pink | Animated GIFs (Giphy) | -- |
| `subtitle` | Amber | Captions/subtitles | -- |

Render order: video → music → voiceover → sticker → subtitle (defined in `TRACK_TYPE_ORDER`)

### Aspect Ratios

| Ratio | Dimensions | Use Case |
|-------|------------|----------|
| 16:9 | 1920x1080 | Landscape (YouTube, web) |
| 9:16 | 1080x1920 | Portrait (TikTok, Reels) |
| 1:1 | 1080x1080 | Square (Instagram) |

---

## Video Effects

### Filters

| Filter | Effect |
|--------|--------|
| `grayscale` | Black and white |
| `sepia` | Warm vintage tone |
| `blur` | Gaussian blur |
| `brightness` | Increase brightness |
| `contrast` | Increase contrast |
| `invert` | Invert colors |

### Motion Effects (Ken Burns)

| Effect | Animation |
|--------|-----------|
| `zoom-in` | Slow zoom into frame |
| `zoom-out` | Slow zoom out of frame |
| `pan-left` | Slow pan left |
| `pan-right` | Slow pan right |

### Transitions

| Type | Variants |
|------|----------|
| **Fade** | Fade (500ms), Quick Fade (250ms) |
| **Dissolve** | Crossfade (500ms) |
| **Slide** | Left, Right, Up, Down (500ms each) |
| **Zoom** | In, Out (500ms each) |
| **Wipe** | Left, Right, Up, Down (500ms each) |

Stored on outgoing keyframe's `outTransition` property. TransitionRenderer dispatches to specific components with easeInOutCubic easing.

### Caption Presets

| Preset | Style |
|--------|-------|
| `basic` | White text, dark background (32px) |
| `karaoke` | Word-by-word highlight (36px) |
| `typewriter` | Green text, typewriter effect (28px) |
| `fade` | Fade-in animation, center position (32px) |
| `glow` | White text with glow effect (36px) |

---

## Frontend

### Routes

```
/w/:workspaceId/video-kit          -- Project list/dashboard
/w/:workspaceId/video-kit/:projectId  -- Editor
```

### Editor Layout

```
┌──────────────────────────────────────────────────┐
│ Header (title, export, settings)                 │
├────────────┬─────────────────┬───────────────────┤
│ LeftPanel  │  VideoPreview   │  RightPanel       │
│ (media     │  (Remotion      │  (properties,     │
│  gallery,  │   Player)       │   effects,        │
│  AI gen)   │                 │   captions)       │
├────────────┴─────────────────┴───────────────────┤
│ BottomBar (timeline tracks, zoom, playhead)      │
└──────────────────────────────────────────────────┘
```

### Key Components

| Component | Purpose |
|-----------|---------|
| `VideoKitEditor` | Main layout assembler, provides store contexts |
| `VideoPreview` | Remotion Player wrapper, transforms data to composition |
| `Header` | Top bar with title, export button, settings |
| `LeftPanel` | Media gallery, AI generation interface, uploads, Giphy picker |
| `RightPanel` | Properties panel for selected keyframe (effects, speed, captions) |
| `BottomBar` | Timeline controls and playback |
| `Timeline` | Track container with zoom and playhead |
| `Track` | Individual track with draggable/resizable keyframe blocks |
| `VideoFilmstrip` | Thumbnail strip preview for video clips |
| `ProjectDialog` | Create/edit project dialog |
| `ExportDialog` | Export settings (aspect ratio, fps, dimensions) |
| `ExportsPopover` | Export history popover |
| `CaptionEditor` | Caption editor with style presets |
| `TransitionPicker` | Transition selection UI |
| `EffectsControl` | Filter and motion effect controls |
| `SpeedControl` | Playback speed adjustment |
| `FadeControl` | Audio fade in/out |
| `CameraControl` | Ken Burns motion controls |
| `GiphyPicker` | Giphy sticker search and selection |
| `VoiceSelector` | TTS voice selection |
| `AddTrackDialog` | Add new track dialog |
| `TrackHeader` | Track controls (mute, solo, volume, lock) |

### Remotion Components (`src/features/video-kit/remotion/`)

| Component | Purpose |
|-----------|---------|
| `Composition` | Main video composition -- renders all tracks as stacked Sequences |
| `StickerOverlay` | Interactive sticker with drag/resize handles |
| `TransitionRenderer` | Dispatches to specific transition component |
| `FadeTransition` | Fade effect (0-1 progress) |
| `DissolveTransition` | Crossfade/dissolve effect |
| `SlideTransition` | Directional slide effect |
| `ZoomTransition` | Zoom in/out effect |
| `WipeTransition` | Directional wipe effect |

### Hooks

| Hook | Purpose |
|------|---------|
| `useVideoProjectStore` | Zustand store for editor UI state (player, dialogs, zoom, selection) |
| `useVideoMutations` | Convex mutation wrappers for all CRUD operations |
| `useVideoProjects` | Convex query hooks (projects, tracks, keyframes, media, exports) |
| `useHistoryActions` | Execute undo/redo by replaying mutations from history store |
| `useAudioWaveform` | Extract waveform data via Remotion for audio visualization |
| `useDraggable` | Timeline drag with pixel-to-timestamp conversion and bounds |
| `useResizable` | Keyframe duration resize with min/max constraints |
| `useClipboardShortcuts` | Cmd+C/V/X/D keyboard shortcuts for keyframes |

### Stores

| Store | Purpose |
|-------|---------|
| `historyStore` | Undo/redo stacks (max 50). Supports: keyframe CRUD, track CRUD, caption edits, split |
| `clipboardStore` | Copied keyframe data (not IDs) for cross-track paste. Cut flag for delete-after-paste |

---

## Key Design Patterns

- **Track-based composition**: Multi-track timeline model (like Premiere/DaVinci Resolve)
- **Keyframe = clip**: Every timeline item is a keyframe with metadata, enabling effects and transitions
- **Undo/redo via command pattern**: History store records before/after snapshots, replays mutations
- **Clipboard as data**: Copies keyframe data (not IDs) enabling cross-track paste
- **Async job tracking**: Generated media tracked via status + endpointId/requestId polling
- **Durable workflows**: Long-running jobs (render, generate, transcribe) survive server restarts with checkpointing
- **Lazy duration**: Composition duration computed from keyframes, not stored
- **Session markers**: Temporary navigation bookmarks (not persisted to DB)
- **Workspace-scoped**: All queries use `.withIndex()` with `workspaceId` -- no cross-tenant data leaks
