---
sidebar_position: 1
slug: /
---

# Welcome to AgentBuilder

**AgentBuilder** is OzziOs's composable AI agent framework, inspired by VoltAgent's declarative patterns. It provides a powerful, type-safe way to build multi-agent systems with tool execution, streaming, approval workflows, and memory.

## At a Glance

- **244 files** organized into a composable framework
- **15 pre-built workflows** (supervisor, graphic_designer, content_writer, etc.)
- **81+ native tools** across 16 categories
- **17 MCP integrations** (Gmail, WordPress, Google Ads, etc.)
- **2 AI models**: Claude Sonnet (fast), Opus (powerful)
- **Production-ready**: Approval workflows, streaming, memory, error handling

## What is AgentBuilder?

AgentBuilder is a framework that sits on top of Convex and provides:

- **Simple Agent API**: VoltAgent-inspired `Agent` class for running AI agents
- **Declarative Workflows**: Configure agents with workflow definitions instead of manual setup
- **Tool System**: Create, register, and execute tools with built-in approval workflows
- **Lifecycle Hooks**: Extend agent behavior at key execution points
- **Streaming**: Real-time SSE streaming for UI updates
- **Multi-Agent Delegation**: Supervisor agents can delegate to specialist sub-agents
- **Memory System**: Semantic search and workspace learnings
- **MCP Integration**: 17 MCP tool integrations (Gmail, WordPress, Meta Ads, Google Ads, etc.)

## Quick Links

- **[Architecture Overview](./architecture/overview)** - Understand the system design
- **[Request Lifecycle](./architecture/request-lifecycle)** - See how requests flow through the system
- **[Key Abstractions](./architecture/key-abstractions)** - Learn the core concepts
- **[Design Decisions](./architecture/design-decisions)** - Why we built it this way

## Getting Started

```typescript
import { Agent } from '@/convex/agentbuilder';

// Create an agent with a workflow
const agent = new Agent({
  ctx,
  workspaceId,
  agentId,
  workflow: 'supervisor', // or 'graphic_designer', 'channel', etc.
});

// Generate a response
const result = await agent.generateText('Create a marketing plan', {
  channelId,
});

console.log(result.text);
console.log(result.usage); // Token usage stats
```

## File Structure

The AgentBuilder module lives in `convex/agentbuilder/` with 244 files organized into:

- **Core**: `Agent.ts`, `types.ts`, `index.ts`
- **Harness**: Execution engine (`AgentExecutor`, `DurableAgentExecutor`)
- **Tools**: 81+ native tools across 16 categories
- **MCP**: 17 MCP server integrations
- **Workflows**: 15 declarative agent configurations
- **Lifecycle**: Hooks and event handlers
- **Prompts**: System prompt templates
- **Memory**: Semantic search and persistence

## Why AgentBuilder?

We built AgentBuilder to solve key challenges in multi-agent systems:

1. **Composability**: Mix and match tools, hooks, and configurations
2. **Type Safety**: Full TypeScript support with Zod schemas
3. **Consistency**: Unified patterns across all agents
4. **Extensibility**: Easy to add new tools, workflows, and behaviors
5. **Production Ready**: Built-in approval workflows, error handling, streaming

---

**Next Step**: Start with the [Architecture Overview](./architecture/overview) to understand how everything fits together.
