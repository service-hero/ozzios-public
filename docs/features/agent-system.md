# Agent System

The AI agent system is the core of OzziOs. Located in `convex/agentbuilder/` (47+ subdirectories, 200+ TypeScript files).

## Architecture Overview

```
User message in channel
  -> Agent harness invoked (AgentExecutor)
    -> Memory layers assembled (7-layer system)
    -> System prompt composed (PromptComposer)
    -> LLM provider streams response (Anthropic/Gemini/Groq/MiniMax/Ollama)
    -> Tool calls executed (127+ native tools + 35+ MCP servers)
    -> StreamingStateManager tracks state
    -> Message updated reactively in frontend
```

## Agent Execution

### AgentExecutor (`harness/AgentExecutor.ts`)
Main execution engine. Extends `BaseAgentExecutor` with channel-specific behavior.

### Execution Flow
1. **Memory assembly**: 7 layers loaded in parallel
2. **Prompt composition**: System prompt + memory + conversation context
3. **Agent loop**: `runAgentLoop()` streams response, executes tools, loops until done
4. **State management**: `StreamingStateManager` tracks text, tool calls, thinking
5. **Message update**: Real-time updates via Convex mutations

### Loop Control (`loopStrategies.ts`)
Composable strategies prevent runaway loops:

| Strategy | Purpose |
|----------|---------|
| `maxIterations(n)` | Stop after n iterations (default: 20 for channels) |
| `maxTokens(n)` | Stop when token limit reached |
| `maxDuration(ms)` | Stop when time limit reached |
| `maxUniqueAgents(n)` | Limit agent mention chains |
| `rateLimit(count, window)` | Throttle responses |

Strategies compose with `allOf([...])` and `anyOf([...])`.

## Streaming System

### StreamingStateManager (`harness/streaming/StreamingStateManager.ts`)
Single source of truth for mutable execution state:

- `appendText(delta)` -- accumulate streaming text
- `startToolCall(toolCall)` -- detects parallel calls (same step if any tool is `running`)
- `completeToolCall(result)` -- computes `durationMs` from tracked start times
- `getToolCalls()` -- returns current tool call state for message updates

### createStreamingCallbacks (`harness/streaming/createStreamingCallbacks.ts`)
Factory that creates unified callbacks for any LLM provider:

- `onTextDelta` -- appends text, writes to stream handler
- `onToolCall` -- starts tool, executes, completes, updates message
- `onThinking` -- tracks extended thinking blocks
- `onComplete` -- finalizes message

## LLM Providers

5 providers with unified adapter interface:

| Provider | Models | Use Case |
|----------|--------|----------|
| **Anthropic** | Claude 4.5 Haiku, 4.5 Sonnet (default), 4.6 Opus | Primary provider |
| **Google Gemini** | Gemini 3 Flash, Gemini 3 Pro | Speed, reasoning |
| **Groq** | Kimi K2 Instruct | Ultra-fast inference |
| **MiniMax** | M2.1, M2.1 Lightning | Multi-language coding |
| **Ollama** | Kimi K2.5 | Multimodal agentic |

Default model: Claude 4.5 Sonnet. Voice default: Claude 4.5 Haiku (low latency).

Each provider implements `ChatAdapter`: `buildRequest()`, `stream()`, `createToolResult()`.

## Tool System

### 127+ Native Tools (`tools/`)
Each tool uses `createTool()` with Zod schema + execute function:

```typescript
export const createTaskTool = createTool({
  name: 'create_task',
  description: 'Create a new task',
  parameters: z.object({ text: z.string(), priority: z.enum(['low', 'medium', 'high']) }),
  approval: { mode: 'auto' },
  execute: async (args, ctx) => {
    const taskId = await ctx.runMutation(internal.tasks.create, { ... });
    return { success: true, data: { taskId } };
  },
});
```

### Tool Categories

| Category | Examples |
|----------|---------|
| **tasks** | createTask, updateTask, listTasks, bulkCreateTasks, bulkAssignTasks |
| **scheduling** | scheduleFollowup, createRecurringTask, configureHeartbeat |
| **memory** | saveMemory, searchMemories, saveWorkspaceLearning, askWorkspace |
| **delegation** | delegateTask, workUntilDone, continueDelegation, listDelegatableAgents |
| **workspace** | listMembers, getBusinessProfile, updateBusinessProfile |
| **plans** | createPlan, updatePlan, listPlans, completePlan |
| **research** | createResearch, listResearch |
| **assets** | listAssets, searchAssets, analyzeAsset, getBrandAssets |
| **blog** | createBlogDraft, updateBlogDraft, analyzeBlogFeaturedImage |
| **coding** | createCoding, editCoding, checkSandboxStatus |
| **workflows** | createWorkflow, executeWorkflow, listExecutions |
| **integrations** | checkIntegrationStatus, generateIntegrationSetup |
| **knowledge** | searchKnowledge |
| **history** | listRecentActions, searchActions, getClientActions |
| **voice** | sendFollowupSms, transferCall, endCall, scheduleCallback |
| **ui** | generateUI |
| **media** | searchGifs, getMemeGif |
| **onboarding** | createTeamChannel, listAgentTemplates, updateWorkspaceInfo |
| **support** | searchWorkspace, addContact, listChannels, getFeatureHelp |
| **taskTemplates** | saveTaskAsTemplate, createTaskFromTemplate |
| **reactions** | reactToMessage |
| **question** | askUser |

### 35+ MCP Servers (`mcp/`)
External integrations via Model Context Protocol:

**Search**: Exa, Tavily, Firecrawl
**Google**: Gmail, Calendar, Docs, Drive, Ads, GBP, Search Console, Keyword Planner, YouTube Analytics
**Meta**: Facebook Pages, Meta Ads
**E-commerce**: Shopify, Wix, WordPress
**Service**: HouseCallPro, ServiceTitan, GoHighLevel, Zillow
**Communication**: Twilio
**AI**: ElevenLabs, GPT Image 1.5, NanoBanana, RemotionAI, Veo3

MCP tools are lazy-loaded and cached per workspace+agent.

## 7-Layer Memory System

| Layer | ID | Content | Stability |
|-------|-----|---------|-----------|
| **L1** | schema | Workspace business profile | Stable (cached) |
| **L2** | rules | Pinned knowledge & rules | Stable (cached) |
| **L3a** | learnings | Workspace learnings (auto-extracted every 6h) | Semi-dynamic |
| **L3b** | agentMemories | Agent-specific memories | Semi-dynamic |
| **L4** | knowledge | RAG knowledge base (vector search) | Dynamic |
| **L5** | errorPatterns | Error recovery patterns | Semi-dynamic |
| **L6** | runtime | Conversation context | Dynamic |

L1/L2 are stable and get prompt cache markers (5-min TTL). L4/L6 are dynamic, excluded from cache.

### Memory Presets
- **minimal**: L1 + L6 only (5K token budget)
- **standard**: All layers, 3 RAG results (10K budget, default)
- **maximum**: All layers, 5 RAG results (15K budget)

## Agent Templates (50+)

### Categories
| Category | Count | Examples |
|----------|-------|---------|
| **Channel** | 20+ | Ozzi (supervisor), SEO Specialist, Content Writer, Social Media Manager, Data Analyst |
| **Executive** | 10+ | CEO, GM, COO |
| **Industry** | 10+ | Real Estate, Home Services, Healthcare |
| **Voice** | 5+ | Sales, Support, Appointment |
| **Widget** | 3+ | Support, Sales |
| **Ralph Loop** | 15+ | Blog, campaign, research slash commands |

### Ozzi (Supervisor)
Platform supervisor agent. Delegates to specialist agents, never does specialist work directly. Up to 5 parallel sub-agent delegations via durable workflow.

## Delegation System

### Flow
1. Supervisor receives complex task
2. Breaks into sub-tasks with `delegateTask` tool
3. Sub-agents execute in parallel (max 5 concurrent, durable workflow)
4. Results collected and synthesized by supervisor
5. Supervisor presents cohesive response

### Direct Return (BAIL)
When `directReturn: true`, sub-agent output bypasses supervisor synthesis. Saves 30-80% tokens when sub-agent produces final output.

### Continuation
Multi-turn delegation via `continueDelegation` -- follow-up questions to a sub-agent with context from previous response.

## Tool Approval System

Location: `src/features/tool-approval/`

### Overview

Global approval system for agent tool calls and workflow approval nodes. Persistent toasts appear across all pages until the user responds.

### Approval Types

| Type | Theme | Description |
|------|-------|-------------|
| **Tool approval** | Amber | Agent requests permission to execute a tool |
| **Workflow approval** | Emerald | Workflow pauses at an approval node for human decision |

### Tool Approval Toast

- Compact toast (360px width) with tool name, agent name, channel context
- Expandable parameter preview (first 2 key-value pairs collapsed, full on click)
- Smart type-aware formatting (strings truncated, arrays as `[N items]`, objects as `{N fields}`)
- Approve/Deny buttons with loading state
- **Keyboard shortcuts**: `Enter` = approve, `Esc` = reject (when focused)

### Workflow Approval Toast

- Similar design with workflow name and approval message
- Approve/Reject buttons
- Message truncation (120 chars)

### Context System

- `ToolApprovalContext` wraps the app for global access
- Real-time subscription to pending approvals across all channels/workflows
- Sound notification on new approval (respects user preferences)
- Stacked toasts for multiple pending approvals
- Mount grace period (2s) prevents notification sounds on page load
- Deduplication via shown toast ID tracking

## Observability

### Tracing (`tracing/Tracer.ts`)
OpenTelemetry-compatible span tracking: agent.start, tool.execute, memory.load, etc.

### Metrics (`metrics/MetricsCollector.ts`)
Token usage, tool execution counts, memory layer performance, error rates.
