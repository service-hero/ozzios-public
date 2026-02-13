# Channels & Messaging

Location: `convex/channels/`, `src/features/channels/`, `src/features/messages/`

## Overview

Internal communication hub with hierarchical channels, threaded conversations, AI agent participation, and real-time streaming. Supports public/private channels, DMs, portal channels (client-facing), and voice channels.

## Tables

| Table | Purpose |
|-------|---------|
| `channels` | Channel records (public/private, hierarchy, portal) |
| `channelSections` | Channel organization sections |
| `channelMembers` | Channel membership + roles |
| `channelAgents` | AI agents assigned to channels |
| `messages` | Message records with threading, attachments, versioning |
| `messageAttachments` | File attachments |
| `reactions` | Emoji reactions |
| `messageReads` | Read receipts per user |
| `threadSubscriptions` | Thread notification preferences |
| `messageVersions` | Edit history |
| `pinnedMessages` | Pinned messages |
| `savedMessages` | User-saved messages |
| `messageDrafts` | Unsent drafts |
| `scheduledMessages` | Queued messages for later delivery |
| `unreadStates` | Unread counters per user/channel |
| `mentions` | @mention tracking |
| `specialMentionFanouts` | @channel, @here mentions |

## Channel Types

| Type | Description |
|------|-------------|
| **Public** | Visible to all workspace members |
| **Private** | Invite-only, hidden from non-members |
| **Portal** | Client-facing channels for external communication |
| **Voice** | Audio/video huddle channels |
| **DM** | Direct messages between two users |

## Channel Hierarchy

Channels support parent-child relationships for organization:
```
Section (folder)
  -> Channel A (parent)
    -> Sub-channel A.1 (child)
    -> Sub-channel A.2 (child)
  -> Channel B
```

Sections can be hidden, collapsed, or folded.

## Message Features

- **Threading**: Reply to any message to create a thread with reply counting
- **Editing**: Edit history tracked in `messageVersions`
- **Reactions**: Emoji reactions with user tracking
- **Attachments**: File uploads stored in R2
- **@Mentions**: User mentions + special mentions (@channel, @here)
- **Pinning**: Pin important messages per channel
- **Saving**: Save messages to personal collection
- **Scheduling**: Queue messages for later delivery
- **Read receipts**: Per-user read tracking with unread counters
- **Drafts**: Auto-save unsent messages

## AI Agent Integration

- Agents assigned to channels via `channelAgents`
- Agent responses stream in real-time via `agentStreaming.ts`
- Tool calls displayed inline with timing visualization
- Agent context menus for configuration

## Backend Files

| File | Purpose |
|------|---------|
| `channels.ts` | Channel CRUD, list with pagination, hierarchy |
| `messages.ts` | Message creation/editing, threading, search |
| `directmessages.ts` | DM conversation management |
| `reactions.ts` | Emoji reaction add/remove |
| `mentions.ts` | @mention parsing and fanout |
| `threadSubscriptions.ts` | Thread notification controls |
| `messageReads.ts` | Read receipt tracking |
| `permissions.ts` | Channel access control |
| `agentResponses.ts` | AI agent message handling |
| `agentStreaming.ts` | Real-time streaming tool execution |
| `scheduledMessageProcessor.ts` | Scheduled message sending |
| `messageQueue.ts` | Message ordering |

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `ChannelHeader` | Channel title, actions, auto-hide |
| `ChatMessages` | Message list with virtualization |
| `MessageInput` | Rich text input with attachments |
| `ThreadPreview` | Thread sidebar |
| `ChannelSummaryModal` | AI-generated channel summary |
| `SectionFlyout` | Section navigation |
