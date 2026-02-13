# Contacts & CRM

Location: `convex/contacts/`, `src/features/contacts/`

## Overview

Full CRM system with contact lifecycle management, lead scoring, enrichment, segmentation, and a unified activity timeline. Supports custom fields, smart lists, tags, and GDPR-compliant consent tracking.

## Tables

| Table | Purpose |
|-------|---------|
| `contacts` | Core contact records with scoring, consent, activity tracking |
| `contactLists` | Named lists for grouping/segmentation (static and dynamic) |
| `contactListMembers` | List membership (junction table) |
| `contactTags` | Workspace-scoped tag definitions |
| `contactNotes` | Unstructured notes on contacts |
| `contactActivities` | Unified activity timeline (25+ activity types) |
| `contactCustomFieldValues` | Dynamic field values |
| `customFieldDefinitions` | Field schema (text, number, date, select, checkbox) |
| `customFieldFolders` | Field organization |

## Lifecycle Stages

```
subscriber -> lead -> opportunity -> customer -> evangelist
```

Each stage tracks when the contact entered it and progression history.

## Lead Sources

`organic`, `paid`, `referral`, `cold_outreach`, `event`, `partner`, `social`, `website`, `form`, `import`

## Contact Scoring

Three AI-computed scores:

| Score | Range | Purpose |
|-------|-------|---------|
| Lead Score | 0-100 | Purchase/conversion likelihood |
| Engagement Score | 0-100 | Interaction frequency and recency |
| Close Probability | 0-100 | Deal close likelihood |

## Activity Timeline

25+ activity types tracked per contact:

| Category | Types |
|----------|-------|
| **Email** | `email_sent`, `email_opened`, `email_clicked`, `email_bounced`, `email_replied` |
| **SMS** | `sms_sent`, `sms_received`, `sms_failed` |
| **Calls** | `call_outbound`, `call_inbound`, `call_missed`, `voicemail_left` |
| **Meetings** | `meeting_scheduled`, `meeting_completed`, `meeting_cancelled` |
| **CRM** | `stage_changed`, `owner_changed`, `tag_added`, `tag_removed` |
| **Documents** | `document_sent`, `document_signed`, `document_declined` |
| **Other** | `note_added`, `task_created`, `form_submitted`, `page_viewed`, `custom` |

Each activity includes: actor (user/system/automation/contact), metadata, and timestamps.

## Consent Tracking (GDPR)

Per-contact consent flags with grant dates:
- `emailConsent` -- Can send marketing emails
- `smsConsent` -- Can send SMS
- `phoneConsent` -- Can make calls
- `doNotCall` / `doNotEmail` / `doNotText` -- Compliance override flags

## Backend Files

| File | Purpose |
|------|---------|
| `contacts.ts` | List/get/create/update/delete, soft-delete, search |
| `lists.ts` | List CRUD, membership management |
| `tags.ts` | Tag definitions |
| `notes.ts` | Note management |
| `contactActivities.ts` | Activity timeline queries/mutations |
| `customFieldValues.ts` | Dynamic field value storage |
| `enrichApollo.ts` | Apollo.io enrichment (single + bulk) |
| `contactScoring.ts` | AI-based lead/engagement scoring |
| `contactEmails.ts` | Email history/threading per contact |
| `reviewRequests.ts` | Contact approval workflow |

## Key Capabilities

- **Search**: Full-text search by name, email, phone
- **Filtering**: By lifecycle stage, lead source, owner, tags, date ranges, contact method
- **Enrichment**: Apollo.io integration for B2B data (single + bulk)
- **Smart lists**: Static (manual) and dynamic (filter-based) segmentation
- **Custom fields**: Text, number, date, select, checkbox with folder organization
- **Soft-delete**: Archive and restore with `deletedAt` support
- **CSV import**: Bulk import with field mapping
- **Bulk actions**: Bulk tag, assign, delete, enrich

## Frontend Views

| View | Purpose |
|------|---------|
| `ContactsView` | Main contact table with toolbar |
| `SmartListsView` | List management |
| `BulkActionsView` | Bulk operations |
| `CustomFieldsView` | Field schema management |
| `TagsView` | Tag management |
| `ContactsRestoreView` | Archived contact recovery |
