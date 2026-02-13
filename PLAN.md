# Home Page Restructuring Plan

## Problem
The home page only showcases ~8 high-level categories (via BentoSection). 13+ specific features are invisible unless visitors explore the mega menu:

**Missing from home page:** Email Builder, Email Campaigns, SMS Campaigns, Social Media Management, Forms, Voice Agents, Task Management, Knowledge Base, Documents & E-Sign, Presentations, Blog & SEO, Coding/Reports, Dashboard

## Goal
Restructure the home page so visitors see the **full breadth** of OzziOS features without needing the mega menu. Take inspiration from the Presentations and Coding page hero animations (interactive product demos inside browser chrome).

---

## Changes

### 1. NEW: Features Showcase Section (`FeaturesShowcaseSection`)
**Position:** After BentoSection, before SavingsCalculator

**Design:** Interactive tabbed section organized by category with an animated feature preview.

**Categories & Features:**

| Category | Features |
|----------|----------|
| **Marketing & Campaigns** | Email Campaigns, SMS Campaigns, Social Media, Email Builder, Forms |
| **Content & Creative** | Blog & SEO, Presentations, Coding/Reports, Knowledge Base |
| **Productivity & Ops** | Task Management, CRM, Dashboard, Documents & E-Sign |
| **AI & Communication** | AI Agents, Voice Agents, Workflows, Channels |

**Layout:**
- Section header: "Everything your team needs. One platform."
- Horizontal category tabs across the top
- Below tabs: 2-column layout
  - **Left column:** Vertically stacked feature cards for the active category. Each card has icon + name + 1-line description. Clicking a card selects it and updates the preview. "Learn more ->" link goes to the feature page.
  - **Right column:** Animated mini-preview inside browser chrome (like the Presentations/Coding hero pattern). Shows an interactive demo of the currently selected feature. Auto-rotates through features.
- On mobile: stacked layout (preview on top, feature list below)

**Animated previews** (simplified versions of each feature's hero):
- **Email Builder**: Drag-and-drop email editor with blocks appearing
- **Email Campaigns**: Sending animation with delivery stats ticking up
- **SMS Campaigns**: Phone mockup with messages sending
- **Social Media**: Multi-platform post scheduler with platforms appearing
- **Forms**: Form builder with fields being added
- **Voice Agents**: Phone call waveform animation with transcript
- **Blog & SEO**: Article editor with SEO score gauge
- **Presentations**: Slide generation (reuse from PresentationsView pattern)
- **Coding/Reports**: Code editor + live preview (reuse from CodingView pattern)
- **Task Management**: Kanban board with cards moving between columns
- **CRM**: Contact cards with pipeline stages
- **Dashboard**: Widget grid with charts loading in
- **Documents**: Document with signature line animation
- **Knowledge Base**: Search + article cards appearing
- **Channels**: Chat interface with community messages

Each preview is a compact ~300px tall animation inside browser chrome, auto-cycling with the ability to click to select.

### 2. UPDATE: BentoSection
**Changes:**
- Keep the 8-card bento grid structure (it's visually strong)
- Add a **"Learn more"** link on each card that goes to the relevant feature page
- Update card descriptions to be more specific about what each feature does
- Change the bottom CTA from `#all-features` (broken anchor) to scroll to the new FeaturesShowcaseSection
- Add audience-specific feature callouts

### 3. UPDATE: HowItWorksSection
**Changes:**
- Make each step reference specific features by name
- Step 1: Mention email campaigns, social media scheduling
- Step 2: Mention AI agents handling SEO, content writing, voice calls
- Step 3: Mention automated reports, dashboards, presentations
- Step 4: Mention CRM pipeline, task management, knowledge base
- Add feature icons alongside each step's benefits

### 4. UPDATE: AudienceContext Content
**Changes:**
- Update `audienceContent.bento.cards` descriptions to name specific features
- Update `audienceContent.howItWorks.steps` to reference features by name
- Add new `audienceContent.showcase` section for the Features Showcase content

---

## New Files
- `src/features/landing/components/FeaturesShowcaseSection.tsx` - The new showcase section

## Modified Files
- `src/features/landing/views/LandingHomeView.tsx` - Add FeaturesShowcaseSection to page flow
- `src/features/landing/components/BentoSection.tsx` - Add feature page links, update bottom CTA
- `src/features/landing/components/HowItWorksSection.tsx` - Reference specific features in steps
- `src/features/landing/contexts/AudienceContext.tsx` - Update content to reference features, add showcase content

## Page Flow (After)
1. HeroSection (unchanged)
2. BentoSection (updated with links)
3. **FeaturesShowcaseSection (NEW)**
4. SavingsCalculatorSection (unchanged)
5. FeaturesSection/HowItWorks (updated)
6. AgentsSection (unchanged)
7. MemorySection (unchanged)
8. PricingSection (unchanged)
9. TestimonialsSection (unchanged)
10. FAQSection (unchanged)
11. CTASection (unchanged)
