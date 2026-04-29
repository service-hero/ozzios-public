import { motion, useInView } from 'framer-motion';
import {
  BarChart3,
  ClipboardList,
  Code2,
  Globe,
  MousePointerClick,
  RefreshCw,
  Shield,
  UserPlus,
  Zap,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  PainPointsBlock,
  SectionHeader,
  SectionHeading,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';
import { DEMO_CTA_HREF } from '../../components/book-demo';

const painPoints: PainPoint[] = [
  {
    icon: Code2,
    title: 'Forms require a developer',
    description:
      'Every new lead form, contact form, or survey needs someone to code it, style it, embed it, and connect it to your CRM. A 5-minute task becomes a 5-day ticket.',
  },
  {
    icon: RefreshCw,
    title: 'Submissions go nowhere',
    description:
      'Form data lands in an inbox or spreadsheet. No automatic contact creation, no workflow trigger, no follow-up. Leads go cold while you copy-paste into your CRM.',
  },
  {
    icon: Shield,
    title: 'Spam floods your inbox',
    description:
      'Without proper rate limiting and validation, bots fill your forms with junk. You waste time sorting real submissions from garbage, or worse — miss real leads.',
  },
  {
    icon: Globe,
    title: 'Embedding is fragile',
    description:
      "iframes that break on mobile. Scripts that conflict with your site. Styling that doesn't match your brand. Every embed is a gamble that something will look wrong.",
  },
];

const capabilities: Capability[] = [
  {
    icon: MousePointerClick,
    title: 'Visual drag-and-drop builder',
    benefit: 'Add fields in seconds',
    description:
      'Build forms visually. Text inputs, dropdowns, checkboxes, file uploads — no code required.',
  },
  {
    icon: Globe,
    title: 'One-line embed system',
    benefit: 'No iframes, no conflicts',
    description:
      'Embed any form with a single script tag. Cloudflare Worker generates inline HTML, CSS, and JS — works on any site.',
  },
  {
    icon: UserPlus,
    title: 'Automatic contact creation',
    benefit: 'Zero manual data entry',
    description:
      'Every submission creates or updates a contact in your CRM. Name, email, phone, custom fields — mapped and saved.',
  },
  {
    icon: Zap,
    title: 'Workflow triggers',
    benefit: 'Hands-free follow-up',
    description:
      'Form submissions trigger automated workflows. Confirmation emails, task assignment, notifications, nurture sequences.',
  },
  {
    icon: Shield,
    title: 'Built-in spam protection',
    benefit: 'Only real leads',
    description:
      'Per-email rate limiting stops bot floods. Validation rules catch garbage submissions before they reach you.',
  },
  {
    icon: BarChart3,
    title: 'Submission analytics',
    benefit: 'See what converts',
    description:
      'Track form views, submissions, and conversion rates. See which fields cause drop-off, where leads come from.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Embed showcase
// ────────────────────────────────────────────────────────────────────────────

function EmbedShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Embed system"
            headlineLines={['One script tag.', 'Any website.']}
            sub="Edge-deployed on Cloudflare Workers for instant loading worldwide. No iframes, no style conflicts."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Code block */}
          <div className="overflow-hidden rounded-xl border border-foreground/15 bg-foreground">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28CA41]" />
              </div>
              <span className="ml-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">
                embed.html
              </span>
            </div>
            <div className="p-5 font-mono text-[12px] leading-[1.7] text-white/80">
              <span className="text-white/35">{'<!-- Add to your website -->'}</span>
              <br />
              <span className="text-[#82aaff]">{'<script'}</span>{' '}
              <span className="text-[#c792ea]">src</span>
              <span className="text-white/55">=</span>
              <span className="text-[#c3e88d]">"https://forms.ozzios.com/loader.js?key=YOUR_KEY"</span>
              <span className="text-[#82aaff]">{'>'}</span>
              <span className="text-[#82aaff]">{'</script>'}</span>
            </div>
          </div>

          {/* Three benefits */}
          <div className="mt-5 overflow-hidden rounded-xl border border-border/60 bg-background">
            <div className="border-b border-border/60 bg-muted/30 px-5 py-3">
              <SectionHeading label="Why this works" />
            </div>
            <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { label: 'No iframe', detail: 'Renders inline with your styling' },
                { label: 'Edge CDN', detail: 'Global speed, instant load' },
                { label: 'Auto-styled', detail: 'Inherits your site CSS' },
              ].map((item) => (
                <div key={item.label} className="px-5 py-4 text-center">
                  <div className="font-display text-[14px] font-semibold text-foreground">
                    {item.label}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function FormsView() {
  return (
    <>
      <FeatureHero
        pillIcon={ClipboardList}
        pillLabel="Forms"
        pillSubtitle="Drag-and-drop · one-line embed"
        headlineLines={['Capture leads.', 'Not just form data.']}
        sub="Build forms visually, embed them anywhere with one line of code, and automatically create contacts, trigger workflows, and block spam. Forms that work for you."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        stats={[
          { value: '1-line', label: 'Embed code' },
          { value: 'Edge', label: 'Global CDN' },
          { value: 'Auto', label: 'CRM sync' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={["Forms shouldn't", 'be this hard.']}
          sub="Building a form is the easy part. Getting submissions into your CRM, triggering follow-ups, and filtering spam — that's where everything breaks."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Forms that close', 'the loop.']}
          sub="Not just data collection. A complete lead capture pipeline from submission to CRM to automated follow-up."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <EmbedShowcaseSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Every form submission,', 'a new opportunity.']}
          sub="Stop losing leads between form submission and follow-up. Build forms that feed directly into your pipeline."
          primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
          secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
          trust={[
            { value: '256-bit', label: 'Encryption' },
            { value: 'GDPR ready', label: 'Compliance' },
            { value: '99.9%', label: 'Uptime SLA' },
          ]}
        />
      </DeferredSection>
    </>
  );
}
