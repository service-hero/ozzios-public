# Frontend Architecture

React 19 + TanStack Router + Tailwind CSS v4 + shadcn/ui. 97+ workspace-scoped routes across 38+ feature domains.

## Routing

File-based routing via TanStack Router. URL pattern: `/w/{workspaceId}/{section}/{subsection}`

### Route Tree
```
__root.tsx                     -- Global error boundary, theme, toaster
  _public.tsx                  -- Unauthenticated (sign-in, sign-up, communities)
  _app.tsx                     -- Auth guard -> workspace redirect
    w.$workspaceId.tsx         -- Workspace shell (remounts on switch)
      channels/                -- Messaging
      chat                     -- AI chat
      activity                 -- Inbox/notifications
      ai-agents/               -- Agent config, knowledge, context
      automations/             -- Workflow builder
      marketing/               -- Content, email, ads, forms
      call-center/             -- Phone system
      people/                  -- Contacts/CRM
      tasks                    -- Kanban board
      calendars                -- Calendar sync
      portal                   -- Client portal
      settings                 -- Workspace config
      ... (97+ total routes)
  portal.tsx                   -- Client portal (separate namespace)
```

Every route lazy-loads via `lazyRouteComponent`. Search params validated with Zod.

## Layout System

**Hierarchy**: Root -> Auth Guard -> Workspace Shell -> Top-Level Layout -> Route

| Layout | Purpose |
|--------|---------|
| `AppAuthGuard.tsx` | Checks auth, redirects to sign-in/sign-up |
| `WorkspaceShell.tsx` | `key={workspaceId}` remount, context providers |
| `WorkspaceTopLevel.tsx` | TabRail (52px) + TopNav (48px) + Content |
| `WorkspaceModals.tsx` | Global modals (settings, shortcuts, new DM) |

### WorkspaceShell Providers
`WorkspaceProvider` -> `WorkspaceStoreSync` -> `PresenceStoreSync` -> `NotificationProvider` -> `ToolApprovalProvider`

Workspace switch forces full remount (clears pagination cursors, prevents InvalidCursor errors).

## Navigation

### TabRail (Left Sidebar -- 52px)
Glassmorphic vertical rail with 10+ category icons and hover submenus:

Home, Inbox, Call Center, Contacts, Tasks, Calendars, AI Agents, Automations, Marketing, Assets, Video Studio, Client Portal, Settings

Features: workspace switcher (top avatar), unread badges, AI context progress ring, setup indicator.

### TopNav (Header -- 48px)
Back/forward navigation, global search (`Cmd+K`), phone dialer, notifications, user profile.

## State Management

### Zustand Stores (`src/shared/stores/`)
| Store | Purpose |
|-------|---------|
| `workspaceStore` | Active workspace, role, permissions, timezone |
| `presenceStore` | User online/away/busy status (batch queries) |
| `channelNavigationStore` | Active tab, pending task/research/file IDs |
| `callStore` | Twilio Device outbound call state |
| `useMessagePrefillStore` | Quick action prefill (discovery cards -> message input) |
| `useSchedulePromptStore` | Schedule prompt dialog state |
| `useAgentStreamingStore` | Agent streaming status |

### React Contexts (32 context files)
`AppContext` (workspace settings), `WorkspaceUIContext` (view state, sidebar, search), `WorkspaceProvider` (URL sync), `NotificationContext` (unread counts), `ToolApprovalProvider`, `ChannelContext`, `ChatContextProvider`, `PortalAuthContext`, `HuddleContext`, `MentionResolverContext`, `VoiceInputContext`, `NetworkConnectionProvider`

### TanStack Query + Convex
```typescript
const { data } = useQuery({
  ...convexQuery(api.channels.list, { workspaceId }),
  enabled: Boolean(workspaceId),
});
```

## Feature Domains (`src/features/`)

38+ domains: `workspace`, `channels`, `messages`, `ai-agents`, `workflows`, `automations`, `clients`, `contacts`, `tasks`, `leads`, `forms`, `form-builder`, `chat`, `chat-widget`, `email-builder`, `video-kit`, `portal`, `communities`, `calendars`, `call-center`, `campaigns`, `reports`, `notifications`, `search`, `home`, `settings`, `directory`, `employees`, `files`, `huddles`, `research`, `reviews`, `tool-approval`, `inbox`, `marketing`, `action-history`, `errors`, `users`, `views`

## UI Components (`src/shared/components/ui/`)

80+ shadcn/ui components including: `dialog`, `popover`, `tooltip`, `button`, `input`, `select`, `combobox`, `tabs`, `accordion`, `command` (Cmd+K), `sonner` (toasts), `table`, `avatar`, `badge`, `calendar`, `date-picker-ranges`, `time-picker`

Custom beyond standard shadcn: `tags-input`, `autocomplete-menu`, `inline-editable-text`, `filter-bar`, `icon-picker`, `team-selector`, `AssigneePicker`, `PriorityPicker`, `dropzone`, `sortable`, `live-waveform`, `code-block`, `prompt-input`, `gantt`, `contribution-graph`

## Styling

### Tailwind CSS v4
```css
@import 'tailwindcss';
@plugin 'tailwindcss-animate';
@custom-variant dark (&:is(.dark *));
```

Theme tokens in `src/app/styles/styles/tokens.css`: surfaces, semantic colors, brand colors (`signature`, `electric`, `mint`, `sun`), radius tokens, motion tokens (`duration-fast`, `ease-snappy`, `ease-spring`).

### Glassmorphism System (`glass.css`)
`.glass`, `.glass-strong`, `.glass-subtle`, `.glass-frosted`, `.glass-interactive`, `.glass-signature`, `.glass-electric`, `.glass-gradient-border`

### Neo/Contemporary Classes
`.btn-neo`, `.card-neo`, `.card-neo-signature`, `.tag-neo`, `.underline-signature`

## Performance

- **React.memo**: TabRail, TopNav, ChannelHeader, ChatMessages, ToolCallDisplay (prevents Radix Tooltip re-render storms)
- **Lazy loading**: `React.lazy()` for heavy features (Huddles, Twilio Device, Sidebar panels)
- **Route code-splitting**: Every route lazy-loads via TanStack Router
- **Manual Vite chunks**: hugeicons, xyflow, dagre, tiptap, prosemirror, dnd-kit, realtimekit, date-fns
- **Virtual scrolling**: Inbox items, data grids (`@tanstack/react-virtual`)
- **Workspace remount**: `key={workspaceId}` resets all state on workspace switch
