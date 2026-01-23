---
sidebar_position: 3
---

# Key Abstractions

AgentBuilder is built around five core abstractions. Understanding these concepts is essential for working with the framework.

## The Five Core Concepts

1. **Agent** - The simple API wrapper for running AI agents
2. **Workflow** - Declarative configuration bundles
3. **Tool** - Self-contained capabilities with schema + execution + approval
4. **Hooks** - Lifecycle extension points for custom behavior
5. **Context** - Unified execution context for tools and agents

---

## 1. Agent

The `Agent` class provides a VoltAgent-inspired API for running AI agents.

### Purpose

Instead of manually configuring an executor with many options, you create an `Agent` instance with a workflow and call `generateText()` or `streamText()`.

### API

**File:** `convex/agentbuilder/Agent.ts`

```typescript
import { Agent } from '@/convex/agentbuilder';

// Create an agent with a workflow
const agent = new Agent({
  ctx,                    // Convex ActionCtx
  workspaceId,           // Current workspace
  agentId,               // Agent ID from aiAgents table
  workflow: 'supervisor', // Workflow ID or full definition
  model: 'claude-opus-4', // Optional model override
  toolCategories: {      // Optional tool overrides
    delegation: true,
  },
});

// Generate a response
const result = await agent.generateText('Create a marketing plan', {
  channelId,             // Required: channel or DM scope
  messageId,             // Optional: trigger message
  userName: 'Alice',     // Optional: user context
});

console.log(result.text);      // "Here's a marketing plan..."
console.log(result.usage);     // Token stats
console.log(result.toolCalls); // Tools that were executed
```

### Factory Method

For automatic workflow resolution from agent flags:

```typescript
// Get agent from database
const agentDoc = await ctx.runQuery(internal.agents.get, { agentId });

// Create agent with resolved workflow
const agent = Agent.fromAgentFlags({
  ctx,
  workspaceId,
  agentId,
  agentFlags: {
    template: agentDoc.template,        // 'channel', 'executive', etc.
    isDelegator: agentDoc.isDelegator,  // Can delegate?
    isOnboardingAgent: agentDoc.isOnboardingAgent,
    isSupportAgent: agentDoc.isSupportAgent,
  },
});
```

### Configuration Hierarchy

Agent configuration is merged in this order (later overrides earlier):

1. **Workflow defaults** (model, toolCategories, hooks, prompts)
2. **Agent instance config** (passed to constructor)
3. **Per-call options** (passed to generateText)

```typescript
const agent = new Agent({
  workflow: 'supervisor',    // Has default model, tools, hooks
  model: 'claude-sonnet-4',  // Override workflow model
});

// This call overrides everything
const result = await agent.generateText('Hello', {
  model: 'claude-opus-4',     // Override instance model
  toolCategories: {           // Override instance tools
    delegation: false,
  },
});
```

---

## 2. Workflow

Workflows are declarative configuration bundles that define how an agent behaves.

### Purpose

Instead of manually configuring model, tools, prompts, and hooks every time, you define a workflow once and reuse it.

### Structure

**File:** `convex/agentbuilder/agentWorkflows.ts`

```typescript
export interface WorkflowDefinition {
  id: string;                          // 'supervisor', 'channel', etc.
  name: string;                        // Display name
  description: string;                 // What this workflow does
  
  model: {
    defaultModel: AIModelId;           // 'claude-opus-4', etc.
    allowedModels?: AIModelId[];       // Optional whitelist
    enableThinking?: boolean;          // Extended thinking
  };
  
  toolCategories: Required<ToolCategoryConfig>; // Which tools to enable
  
  prompts: PromptCategoryConfig;       // Which prompts to include
  
  hooks?: HooksFactory;                // Lifecycle hook factory
}
```

### Built-in Workflows

AgentBuilder includes **15 predefined workflows** (see `agentWorkflows.ts`):

#### Base & System Workflows
- **`base`** - Standard agent with all default capabilities
- **`delegator`** - Can assign tasks to other agents
- **`onboarding`** - Helps new users set up workspace
- **`support`** - Provides help and answers questions
- **`headless`** - Minimal logging for background tasks

#### Management Workflows
- **`supervisor`** - Team coordinator and workflow orchestrator (uses Opus + thinking)
- **`executive`** - High-level strategic planning (uses Opus + thinking)

#### Creative Workflows
- **`graphic_designer`** - Visual design specialist

#### Marketing Specialist Workflows
- **`seo_specialist`** - Search engine optimization
- **`content_writer`** - Blog posts and long-form content
- **`social_media`** - Social media strategy
- **`email_marketing`** - Email campaigns
- **`ppc_specialist`** - Paid advertising
- **`data_analyst`** - Analytics and reporting (uses thinking)

#### Example: Ozzi Workflow
```typescript
{
  id: 'supervisor',
  name: 'Ozzi',
  description: 'Team coordinator and workflow orchestrator',
  toolCategories: {
    ...DEFAULT_TOOL_CATEGORIES,
    delegation: true,  // Can delegate to sub-agents
  },
  additionalTools: ['question', 'delegation'],
  specializedPrompts: [
    SUPERVISOR_ONBOARDING_PROMPT,
    SUPERVISOR_ORCHESTRATOR_PROMPT
  ],
  modelConfig: {
    defaultModel: AI_MODELS.SONNET,
    enableThinking: true,  // Supervisors benefit from extended thinking
    maxTokens: 16000,
  },
}
```

#### Example: Graphic Designer Workflow
```typescript
{
  id: 'graphic_designer',
  name: 'Graphic Designer',
  description: 'Visual design specialist',
  toolCategories: {
    ...DEFAULT_TOOL_CATEGORIES,
    design: true,
    media: true,
    assets: true,
  },
  specializedPrompts: [GRAPHIC_DESIGNER_SYSTEM_PROMPT],
  hooksFactory: createDefaultOzziHooks,
}
```

### Workflow Resolution

The `resolveWorkflow()` function automatically picks the right workflow:

```typescript
import { resolveWorkflow } from '@/convex/agentbuilder';

// From template string
const workflow = resolveWorkflow({ template: 'supervisor' });

// From agent flags (priority order)
const workflow = resolveWorkflow({
  template: 'channel',        // Explicit template (highest priority)
  isDelegator: true,          // Would pick 'supervisor' if no template
  isOnboardingAgent: true,    // Would pick 'onboarding' if no template
  isSupportAgent: true,       // Would pick 'support' if no template
});

// Fallback to base workflow if no flags match
const workflow = resolveWorkflow({});
```

---

## 3. Tool

Tools are self-contained capabilities that agents can execute.

### Structure

**File:** `convex/agentbuilder/types.ts`

```typescript
export interface Tool<TInput = unknown, TOutput = unknown> {
  name: string;                // 'ozzi_create_task'
  meta: ToolMeta;              // Display info, category, description
  parameters: AnyZodType;      // Zod schema for input
  outputSchema?: AnyZodType;   // Optional output schema
  approval: ToolApprovalConfig; // Approval requirements
  execute: (args: TInput, ctx: ToolContext) => Promise<ToolResult<TOutput>>;
  toAnthropic(): AnthropicToolDefinition; // Convert to Claude format
}
```

### Creating Tools

Use the `createTool()` function:

**File:** `convex/agentbuilder/createTool.ts`

```typescript
import { createTool } from '@/convex/agentbuilder';
import { z } from 'zod';

const myTool = createTool({
  name: 'send_email',
  meta: {
    displayName: 'Send Email',
    category: 'communication',
    description: 'Send an email to a recipient',
    icon: 'envelope',
  },
  parameters: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
  }),
  approval: {
    mode: 'approval', // Require human approval
  },
  execute: async (args, ctx) => {
    // Access workspace, agent, DB context
    const { to, subject, body } = args;
    const { workspaceId, agentId, db } = ctx;
    
    // Execute the tool
    await sendEmail({ to, subject, body });
    
    return {
      success: true,
      message: `Email sent to ${to}`,
    };
  },
});
```

### Tool Approval Modes

Tools can have different approval requirements:

```typescript
// Auto - execute immediately
approval: { mode: 'auto' }

// Approval - always require human approval
approval: { mode: 'approval' }

// Blocked - cannot be executed
approval: { mode: 'blocked' }

// Condition - dynamic check
approval: {
  mode: 'condition',
  check: async (args, ctx) => {
    // Return true if approval is needed
    return args.amount > 1000;
  },
}
```

### Tool Categories

Tools are organized into **16 categories** across the `tools/` directory:

**Core Productivity:**
- `tasks` - Task management (create, list, update status)
- `todos` - Todo lists (create, complete, search, summarize)
- `notes` - Note-taking (create, list notes)
- `scheduling` - Scheduling and recurring tasks (schedule followups, manage recurring tasks)

**Content & Knowledge:**
- `blog` - Blog post drafts (create, list, update drafts in folders)
- `reports` - Report generation (create reports, use templates, E2B sandbox)
- `knowledge` - Knowledge base search

**Creative:**
- `design` - Graphic design (design briefs, comments)
- `media` - Media generation (GIFs via Giphy)
- `assets` - Asset management (analyze, list assets)

**System & Data:**
- `memory` - Agent memory (save, search, workspace learnings)
- `workspace` - Workspace info (business profile, members)

**Special Purpose:**
- `delegation` - Multi-agent delegation (delegate tasks, list agents)
- `onboarding` - Workspace setup (create channels, add agents)
- `support` - Platform support (get help, search workspace)
- `question` - Ask user for clarification

**Plus 17 MCP integrations** for external services (Gmail, WordPress, Google Ads, etc.)

### Tool Registry

All tools are registered in the central registry:

```typescript
import { toolRegistry, registerTool } from '@/convex/agentbuilder';

// Register a tool
registerTool(myTool);

// Get tools for Anthropic API
const tools = toolRegistry.toAnthropicTools({
  tasks: true,
  scheduling: true,
  delegation: false,
});

// Get a specific tool
const tool = toolRegistry.get('ozzi_create_task');
```

---

## 4. Hooks

Lifecycle hooks let you extend agent behavior at key execution points.

### Hook Interface

**File:** `convex/agentbuilder/lifecycle/types.ts`

```typescript
export interface AgentLifecycleHooks {
  // Before agent starts
  onStart?: (args: OnStartArgs) => Promise<void>;
  
  // Prepare messages before sending to Claude
  onPrepareMessages?: (
    args: OnPrepareMessagesArgs
  ) => Promise<OnPrepareMessagesResult>;
  
  // Before tool execution
  onToolStart?: (args: OnToolStartArgs) => Promise<void>;
  
  // After tool execution
  onToolEnd?: (args: OnToolEndArgs) => Promise<OnToolEndResult>;
  
  // During streaming
  onStreamChunk?: (args: OnStreamChunkArgs) => Promise<void>;
  
  // After agent completes
  onEnd?: (args: OnEndArgs) => Promise<void>;
  
  // When delegating to another agent
  onHandoff?: (args: OnHandoffArgs) => Promise<OnHandoffResult>;
}
```

### Creating Hooks

Use factory functions to create composable hooks:

```typescript
import { createAgentHooks } from '@/convex/agentbuilder';

const myHooks = createAgentHooks({
  onStart: async (args) => {
    console.log(`Agent ${args.agent.name} starting`);
  },
  
  onToolEnd: async (args) => {
    // Process tool results
    if (args.toolName === 'create_task') {
      // Save task artifact
      await saveTaskArtifact(args.result);
    }
    
    return { modifiedResult: args.result };
  },
  
  onEnd: async (args) => {
    // Log usage
    console.log(`Completed in ${args.usage.totalTokens} tokens`);
  },
});
```

### Composing Hooks

Hooks can be composed and merged:

```typescript
import {
  createDefaultOzziHooks,
  composeOnStart,
  chainOnToolEnd,
  mergeHooks,
} from '@/convex/agentbuilder';

// Get default hooks
const baseHooks = createDefaultOzziHooks();

// Add custom onStart
const withLogging = composeOnStart(
  baseHooks.onStart,
  async (args) => {
    console.log('Custom logging');
  }
);

// Chain onToolEnd handlers
const withCustomToolEnd = chainOnToolEnd(
  baseHooks.onToolEnd,
  async (args) => {
    // Your custom logic
    return { modifiedResult: args.result };
  }
);

// Merge everything
const finalHooks = mergeHooks(baseHooks, {
  onStart: withLogging,
  onToolEnd: withCustomToolEnd,
});
```

### Built-in Hook Sets

**Default Ozzi Hooks:**
```typescript
import { createDefaultOzziHooks } from '@/convex/agentbuilder';

const hooks = createDefaultOzziHooks({
  enableMemory: true,
  enableLogging: true,
});
```

**Quiet Hooks (minimal logging):**
```typescript
import { createQuietOzziHooks } from '@/convex/agentbuilder';

const hooks = createQuietOzziHooks();
```

**Memory-Enabled Hooks:**
```typescript
import { createMemoryEnabledHooks } from '@/convex/agentbuilder';

const hooks = createMemoryEnabledHooks();
```

---

## 5. Context

Contexts provide unified access to workspace, agent, and conversation data.

### ToolContext

Available to all tool execution functions:

**File:** `convex/agentbuilder/types.ts`

```typescript
export interface ToolContext {
  // Core IDs
  workspaceId: Id<'workspaces'>;
  agentId: Id<'aiAgents'>;
  channelId?: Id<'channels'>;
  dmConversationId?: Id<'dmConversations'>;
  triggerMessageId?: Id<'messages'>;
  
  // Agent metadata
  agent: {
    name: string;
    theme?: string;
    isOnboardingAgent?: boolean;
    isSupportAgent?: boolean;
    isDelegator?: boolean;
  };
  
  // Convex context
  db: MutationCtx['db'];
  scheduler?: ActionCtx['scheduler'];
  runQuery?: ActionCtx['runQuery'];
  runMutation?: ActionCtx['runMutation'];
  
  // Cancellation
  abortSignal?: AbortSignal;
}
```

**Usage in tools:**
```typescript
execute: async (args, ctx) => {
  // Access workspace
  const workspace = await ctx.db.get(ctx.workspaceId);
  
  // Run a mutation
  await ctx.runMutation(internal.tasks.create, {
    workspaceId: ctx.workspaceId,
    title: args.title,
  });
  
  // Schedule async work
  await ctx.scheduler.runAfter(0, internal.notifications.send, {
    workspaceId: ctx.workspaceId,
  });
  
  return { success: true };
}
```

### AgentContext

Higher-level context for agent execution:

```typescript
export interface AgentContext {
  // Core identity
  agent: Doc<'aiAgents'>;
  workspaceId: Id<'workspaces'>;
  
  // Conversation scope
  channelId?: Id<'channels'>;
  dmConversationId?: Id<'dmConversations'>;
  
  // Trigger info
  triggerMessageId?: Id<'messages'>;
  triggerContent?: string;
  triggerUserName?: string;
  
  // Configuration
  selectedModel: string;
  hasCredits: boolean;
  
  // Feature flags
  featureFlags?: {
    extendedThinking?: boolean;
    promptCaching?: boolean;
  };
}
```

### Scope

Defines where the agent is running:

```typescript
// Channel scope
const scope = {
  type: 'channel' as const,
  channelId: channel._id,
};

// DM scope
const scope = {
  type: 'dm' as const,
  dmConversationId: conversation._id,
};
```

---

## Putting It All Together

Here's how these concepts work together:

```typescript
// 1. Define a tool
const myTool = createTool({
  name: 'my_tool',
  meta: { category: 'tasks', displayName: 'My Tool', description: '...' },
  parameters: z.object({ input: z.string() }),
  approval: { mode: 'auto' },
  execute: async (args, ctx) => ({ success: true }),
});

// 2. Register the tool
registerTool(myTool);

// 3. Create custom hooks
const myHooks = createAgentHooks({
  onEnd: async (args) => {
    console.log('Done!');
  },
});

// 4. Create a custom workflow
const myWorkflow = {
  id: 'custom',
  name: 'Custom Agent',
  description: 'My custom workflow',
  model: { defaultModel: 'claude-sonnet-4' },
  toolCategories: { tasks: true },
  prompts: { base: true },
  hooks: () => myHooks,
};

// 5. Create an agent with the workflow
const agent = new Agent({
  ctx,
  workspaceId,
  agentId,
  workflow: myWorkflow,
});

// 6. Run the agent
const result = await agent.generateText('Hello', { channelId });
```

---

**Next**: [Design Decisions](./design-decisions) to understand why AgentBuilder was built this way.
