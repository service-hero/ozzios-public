# Email Builder

Location: `src/features/email-builder/`, `convex/emailTemplates.ts`, `convex/resend/renderEmail.tsx`

## Overview

Visual drag-and-drop email template editor with 16 block types, device preview, merge tag variables, image cropping, and server-side rendering via React Email. Templates are stored as JSON and rendered to HTML at send-time.

## Architecture

Three-panel Notion-style layout:
- **Left sidebar (320px)**: Block palette with 16 block types
- **Center canvas (600px)**: Drag-and-drop email preview with selection
- **Right sidebar (320px)**: Properties panel for selected block

## Block Types (16)

| Block | Purpose |
|-------|---------|
| `text` | Paragraph text with variable support |
| `heading` | Heading text |
| `button` | CTA button with href |
| `image` | Image with upload + crop support |
| `video` | Video thumbnail with play overlay |
| `divider` | Horizontal rule separator |
| `spacer` | Vertical spacing block |
| `row` | Two-column layout |
| `column` | Column within row |
| `container` | Generic wrapper with border/padding |
| `section` | Section container |
| `social` | Social media icon links |
| `footer` | Footer text block |
| `code` | Code block with syntax |
| `faq` | Collapsible question/answer accordion |
| `slider` | Image carousel/slider |

### Block Hierarchy

Blocks compose hierarchically -- container types (`row`, `column`, `container`, `section`) can nest children:

```
blocks[]
  ├─ row
  │   ├─ column → [text, button]
  │   └─ column → [image]
  ├─ section → [heading, text]
  └─ container → [nested blocks]
```

## Merge Tag Variables

Templates support `{{keypath}}` syntax for dynamic personalization:

| Group | Variables |
|-------|-----------|
| **Client** | `{{client.name}}`, `{{client.industry}}`, `{{client.primaryContactName}}`, `{{client.primaryContactEmail}}`, `{{client.phone}}`, `{{client.billingEmail}}`, `{{client.clientLocation}}` |
| **Lead** | `{{lead.name}}`, `{{lead.email}}`, `{{lead.phone}}`, `{{lead.service}}`, `{{lead.source}}` |
| **User** | `{{user.name}}`, `{{user.email}}`, `{{user.phone}}` |
| **Workspace** | `{{workspace.name}}` |
| **Custom Fields** | `{{client.customFields.<key>}}` -- dynamic from `customFieldDefinitions` |

Resolution uses regex `/\{\{[^}]+\}\}/g` to find tags and traverse the variables object by keypath.

## Device Preview

Three preview modes with accurate device frames:

| Device | Dimensions | Frame |
|--------|-----------|-------|
| **Desktop** | 900px | No frame, shadow |
| **Tablet** | 768x1024px | iPad-style bezel (6px border, rounded-[1.5rem]) |
| **Mobile** | 375x812px | iPhone-style bezel (6px border, rounded-[2.5rem]) |

Preview supports selecting a specific client or lead record to populate variables with real data.

## Image Upload & Cropping

1. User selects image file
2. `ImageCropperDialog` opens with `react-easy-crop`
3. Aspect ratio options: 1:1 (Square), 4:3 (Standard), 9:16 (Portrait), 16:9 (Landscape)
4. Zoom slider: 1x to 3x
5. Canvas extraction produces cropped `File` object
6. Upload to R2 via `useR2Upload()` hook
7. Signed URL (7-day expiry) stored in block props

## Starter Templates

Three pre-built templates:
- **Welcome Email**: Logo + hero + CTA + divider + footer
- **Monthly Newsletter**: Header + hero image + 2-column features + CTA
- **Simple Notification**: Bordered container + icon + heading + text + CTA

## Backend

### Email Templates (`convex/emailTemplates.ts`)

| Function | Purpose |
|----------|---------|
| `list` | Fetch all templates for workspace |
| `get` | Fetch single template |
| `create` | Create new template |
| `update` | Update existing template |
| `deleteTemplate` | Delete template |

Templates stored as JSON-stringified `EmailBlock[]` in `content` field.

### Server-Side Rendering (`convex/resend/renderEmail.tsx`)

Renders `EmailBlock[]` to HTML using `@react-email/render`:
- Maps blocks to React Email components (`Text`, `Heading`, `Button`, `Img`, `Hr`, `Row`, `Column`, `Section`)
- Resolves variables via `resolveEmailContent()`
- Slider renders as static grid (email clients don't support JS)
- FAQ uses `<details>/<summary>` (Gmail shows expanded)
- Video renders thumbnail with CSS play overlay

### Email Sending (`convex/resend/actions.ts`)

| Action | Purpose |
|--------|---------|
| `sendTransactional` | Single-recipient email (rate limit: 10/min) |
| `sendBroadcast` | Campaign to Resend segment (rate limit: 5/hour) |

Both support variable interpolation and template or inline content.

## Frontend Components

| Component | Purpose |
|-----------|---------|
| `EmailBuilder` | Main 3-panel editor (1549 lines) |
| `EmailRenderer` | Block rendering in edit/preview modes (590 lines) |
| `EmailTemplatesList` | Template gallery with create/delete |
| `ImageCropperDialog` | Image crop before upload |
