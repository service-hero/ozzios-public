# Database & Schema

Single source of truth: `convex/schema.ts` (9,597 lines)

**Totals**: 209 tables, 897 indexes, 15 search indexes

## Tables by Domain

### Authentication & Users (7 tables)
`users`, `userPreferences`, `impersonationSessions`, `idempotencyKeys`, `idempotencyReceipts`, `oauthConnections`, `oauthStates`

### Workspace & Multi-Tenancy (12 tables)
`workspaces`, `workspaceMembers`, `workspaceInvitations`, `workspaceMemberInvites`, `workspaceLearnings`, `workspaceSkills`, `workspaceKnowledge`, `workspaceCredits`, `workspaceSnapshots`, `snapshotApplications`, `businessUnits`, `businessUnitMembers`

### Channels & Messaging (18 tables)
`channels`, `channelSections`, `channelMembers`, `channelAgents`, `messages`, `messageAttachments`, `messageDrafts`, `messageVersions`, `messageReads`, `reactions`, `pinnedMessages`, `savedMessages`, `scheduledMessages`, `pendingAgentMessages`, `messageRequestKeys`, `threadSubscriptions`, `specialMentionFanouts`, `channelContextUsage`

### AI Chat (2 tables)
`aiChatConversations`, `aiChatMessages`

### AI Agents (15 tables)
`aiAgents`, `agentMemories`, `agentEvents`, `agentPlans`, `agentScheduleConfig`, `agentRecurringTasks`, `agentScheduledActions`, `agentScheduleExecutions`, `agentHeartbeatExecutions`, `agentTemplateReviews`, `agentTemplateReviewVotes`, `homeViewAgents`, `teamInstances`, `promptModules`, `agentPromptModuleAttachments`

### Workflows & Automation (16 tables)
`workflows`, `executions`, `workflowSchedules`, `workflowWebhooks`, `workflowDeadLetterQueue`, `workflowTriggerIdempotency`, `workflowWaits`, `workflowExternalCalls`, `approvals`, `checkpoints`, `checkpointWrites`, `ralphLoopExecutions`, `agentTriggers`, `triggerExecutions`, `staleTriggerFirings`, `triggerBatches`

### Clients & Contacts (11 tables)
`clients`, `contacts`, `contactActivities`, `contactLists`, `contactListMembers`, `contactTags`, `contactNotes`, `contactCustomFieldValues`, `contactPhotoCache`, `customFieldDefinitions`, `customFieldFolders`

### Tasks & Projects (14 tables)
`tasks`, `taskStatuses`, `taskDependencies`, `taskTemplates`, `taskEscalationRules`, `taskComments`, `taskTags`, `leads` (deprecated), `leadStages`, `designBriefs`, `designBriefComments`, `designStatuses`, `designFilterViews`, `boardViews`

### Email (10 tables)
`emailTemplates`, `emailDomains`, `emailContacts`, `emailSegments`, `emailCampaigns`, `emailCampaignRecipients`, `sentEmails`, `emailEvents`, `inboundEmails`, `failedInboundEmails`

### SMS & Voice (11 tables)
`smsConversations`, `smsMessages`, `smsCampaigns`, `smsCampaignRecipients`, `twilioPhoneNumbers`, `twilioPhoneNumberPurchases`, `voiceAgentConfigs`, `voiceCallLogs`, `voiceFollowupQueue`, `outboundCallContexts`, `voiceChannelParticipants`

### Video (5 tables)
`videoProjects`, `videoTracks`, `videoKeyFrames`, `videoMediaItems`, `videoExports`

### Forms (2 tables)
`formDefinitions`, `formSubmissions`

### Integrations (22 tables)
`integrationAccounts`, `integrationHeartbeatExecutions`, `gbpLocations`, `gbpLocationMappings`, `googleCalendarEvents`, `metaAdsApiCache`, `metaAdAccounts`, `metaAdAccountMappings`, `facebookPages`, `facebookPageMappings`, `facebookLeadForms`, `facebookFieldMappings`, `facebookLeadFormMappings`, `mcpServers`, `customMcpServers`, `exaSearchCredentials`, `geminiCredentials`, `elevenLabsCredentials`, `userLLMKeys`, `circuitBreakers`, `apiKeys`, `mcpPricing`

### Portal & Communities (20 tables)
`chatWidgets`, `chatWidgetVisitors`, `chatWidgetConversations`, `chatWidgetMessages`, `portalUsers`, `communities`, `communityMembers`, `communityChannels`, `communityChannelMembers`, `communityChannelSections`, `communityJoinSubmissions`, `communityMessages`, `communityMessageVotes`, `communityMessageReactions`, `communityMemberReports`, `communityMentions`, `communityAuditLogs`, `communityInvitations`, `communityRoles`, `communityMemberRoles`

### Notifications & Activity (7 tables)
`notifications`, `notificationPreferences`, `activities`, `mentions`, `unreadStates`, `reminders`, `alerts`

### Events & Analytics (5 tables)
`events`, `eventTypes`, `analyticsEvents`, `auditLogs`, `agentUsage`

### Content & Assets (8 tables)
`files`, `contentItems`, `customEmojis`, `apps`, `blogFolders`, `blogPostDrafts`, `streamChunks`, `streamCheckpoints`

### Billing & Credits (4 tables)
`creditTransactions`, `creditPacks`, `metricSnapshots`, `sandboxUsage`

### Local SEO (5 tables)
`localRankScans`, `localRankKeywords`, `localRankUsage`, `seoAnalyses`, `siteMaps`

### Tool Approvals (2 tables)
`toolApprovalRequests`, `slashCommandHooks`

### Research & Coding (5 tables)
`research`, `coding`, `codingTemplates`, `codingScheduleTemplates`, `codingScheduleRuns`

### Misc (6 tables)
`waitlistSubmissions`, `dashboardTemplates`, `huddles`, `huddleInvites`, `workspaceCustomTabs`, `feedback`

## Schema Patterns

### Workspace Scoping
Nearly every table has `workspaceId: v.id('workspaces')` with a `by_workspaceId` index.

### Soft Deletes
Tables with `deletedAt: v.optional(v.number())` use soft deletes. Queries filter `deletedAt === undefined`.

### Timestamps
Standard pattern: `createdAt: v.number()`, `updatedAt: v.optional(v.number())`.

### Index Strategy
- **Primary**: `by_workspaceId` on nearly every table
- **Compound**: `by_workspaceId_status`, `by_workspaceId_channelId`, `by_workspaceId_userId`
- **Search**: 15 search indexes for full-text search (users, channels, agents, messages, etc.)
- **Rule**: Always query via `.withIndex()` -- never scan entire tables

### Notable Large Tables
- `workspaces` -- 476 lines (massive business context object)
- `messages` -- 513 lines (channels, DMs, tool calls, artifacts, streaming)
- `aiAgents` -- 267 lines (workflow config, tools, prompts)
