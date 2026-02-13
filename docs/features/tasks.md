# Tasks & Project Management

Location: `convex/workspace/tasks.ts`, `src/features/tasks/`

## Overview

Task management system with kanban boards, dependencies, recurring tasks, priority escalation, and collaborative comments. Tasks can be created by users or AI agents and support templates for repeatable workflows.

## Tables

| Table | Purpose |
|-------|---------|
| `tasks` | Task records with priority, status, due dates, dependencies |
| `taskStatuses` | Customizable workflow statuses per workspace |
| `taskDependencies` | Task dependency graph with reverse lookups |
| `taskTemplates` | Reusable task templates by category |
| `taskEscalationRules` | Auto-priority escalation rules |
| `taskComments` | Collaborative task discussion |
| `taskTags` | Workspace-scoped tag definitions |

## Task Lifecycle

Default statuses (customizable per workspace):

```
todo -> in_progress -> done -> archived
```

## Priority Levels

`low`, `medium`, `high`, `urgent`

### Escalation Rules

Auto-escalate priority based on days-to-due:

| Rule | Trigger |
|------|---------|
| 3 days before due | Escalate to `high` |
| Past due | Escalate to `urgent` |

Rules configured per workspace in `taskEscalationRules` table.

## Dependencies

Tasks support dependency tracking:
- A task can **block** other tasks (they can't start until this completes)
- A task can be **blocked by** other tasks (it can't start until they complete)
- O(1) reverse lookups via `by_dependsOnTaskId` index

## Templates

Reusable task templates organized by category:
- `campaign` -- Marketing campaign tasks
- `onboarding` -- Client onboarding checklists
- `reporting` -- Recurring report generation

## Backend Files

| File | Purpose |
|------|---------|
| `tasks.ts` | List/get/create/update, pagination, sorting |
| `taskComments.ts` | Comment CRUD with @mention support |
| `taskStatuses.ts` | Status workflow management |
| `taskTags.ts` | Tag definitions |
| `taskTemplates.ts` | Template CRUD by category |
| `taskReminders.ts` | Due date reminder scheduling |

## Key Capabilities

- **Kanban + list views**: Drag-and-drop kanban (dnd-kit) and list views
- **Sorting**: By due date, priority, status, creation date
- **Filtering**: By status, priority, assignee, tags
- **Recurring tasks**: Daily, weekly, monthly scheduling
- **Due date reminders**: Agent notifications on approaching deadlines
- **Comments**: Threaded discussion with @mentions
- **Source tracking**: Tasks created from messages, leads, or contacts retain source reference
- **Agent integration**: AI agents create, update, and complete tasks via tools

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `TasksPage` | Main task center |
| `TaskBoard` | Kanban board (lazy-loaded) |
| `TaskList` | List view (lazy-loaded) |
| `TaskCreateForm` | Task creation |
| `TaskDetailPanel` | Task detail sidebar |
