# Documents & E-Signing

Location: `convex/documents/`, `src/features/documents/`

## Overview

Full document template and e-signature system. Create reusable templates with merge tags, send for signature with multi-recipient workflows, and track completion with a complete audit trail.

## Tables

| Table | Purpose |
|-------|---------|
| `documentTemplates` | Template definitions with HTML content and versioning |
| `documentTemplateVersions` | Version history of templates |
| `documentRequests` | Active/completed signature requests |
| `documentRequestRecipients` | Signers, approvers, CC'd parties (role-based, sequenced) |
| `documentAuditEvents` | Complete audit trail (views, signs, declines) |
| `documentAuthChallenges` | Email/SMS OTP challenges for signer verification |
| `documentDisclosurePolicies` | Configurable disclosure policies with versioning |
| `documentApprovalRules` | Conditional approval rules (auto-trigger) |
| `documentApprovalDecisions` | Approval decision history |
| `documentWebhookSubscriptions` | Outbound webhooks for request events |
| `documentWebhookDeliveries` | Webhook delivery tracking with retry status |

## Signing Flow

```
Template created
  -> Request sent to recipients (email with secure link)
    -> Signer authenticates (OTP via email/SMS)
      -> Signs document (signature capture)
        -> Audit event recorded
          -> Next recipient notified (if sequential)
            -> Request completed when all have signed
```

## Document Blocks

Templates are composed of blocks:

| Block Type | Purpose |
|------------|---------|
| `heading` | Section headers |
| `paragraph` | Body text |
| `bullet_list` | Bulleted lists |
| `image` | Embedded images |
| `video` | Embedded video |
| `divider` | Visual separator |
| `spacer` | Whitespace |
| `signature` | Signature capture field |
| `name_field` | Signer name field |
| `date_field` | Signing date field |

## Merge Tags

Templates support dynamic personalization:

| Tag | Value |
|-----|-------|
| `{{recipient_name}}` | Signer's name |
| `{{recipient_email}}` | Signer's email |
| `{{workspace_name}}` | Workspace name |
| `{{sender_name}}` | Sender's name |
| `{{date}}` | Current date |

## Backend Files

| File | Purpose |
|------|---------|
| `requests.ts` | Create/update/list requests, recipient management, token generation |
| `templates.ts` | Template CRUD |
| `signing.ts` | Signing workflow, signature capture |
| `auth.ts` | Auth challenges, OTP verification |
| `evidence.ts` | Audit event generation |
| `reminders.ts` | Scheduled reminder logic |
| `utils.ts` | Helpers (token hashing, email normalization) |

## Key Capabilities

- **Multi-recipient**: Sequential or parallel signing with role assignment (signer, approver, CC)
- **Authentication**: OTP via email or SMS for signer identity verification
- **Audit trail**: Every view, sign, and decline recorded with metadata snapshots
- **Expiration**: Configurable 1-90 day request expiry
- **Reminders**: Automatic reminders at 3 days and 1 day before expiry
- **Approval workflows**: Conditional rules that auto-trigger based on document conditions
- **Webhooks**: Outbound notifications for integration with external systems
- **Disclosure policies**: Configurable legal disclosure enforcement with versioning

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `DocumentBuilder` | Template creation/editing |
| `DocumentBlocksView` | Block-based template rendering |
| `PublicDocumentSigner` | Public signing page for recipients |
| `SendForSignatureDialog` | Send request dialog |
| `DocumentRequestDetailDialog` | Request status and audit trail |
