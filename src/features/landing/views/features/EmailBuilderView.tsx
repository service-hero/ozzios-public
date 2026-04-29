import { motion, useInView } from 'framer-motion';
import {
  Clock,
  Code2,
  Image,
  Layers,
  Mail,
  Paintbrush,
  Smartphone,
  Variable,
  Zap,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  FeatureCTABlock,
  FeatureHero,
  Kbd,
  PainPointsBlock,
  SectionHeader,
  innerContainerVariants,
  innerItemVariants,
  type Capability,
  type PainPoint,
} from '../../components/_landing-primitives';
import { DEMO_CTA_HREF } from '../../components/book-demo';

const painPoints: PainPoint[] = [
  {
    icon: Code2,
    title: 'HTML email is a nightmare',
    description:
      'You spend hours wrestling with inline styles, broken tables, and rendering bugs across 90+ email clients. Every email is a mini engineering project.',
  },
  {
    icon: Clock,
    title: 'Templates take days, not minutes',
    description:
      'Designing, coding, and testing a single email template eats 4-8 hours. Multiply that across every campaign, every customer, every week.',
  },
  {
    icon: Smartphone,
    title: 'Mobile rendering is a gamble',
    description:
      "You preview on desktop, hit send, then discover it looks broken on half your audience's phones. Gmail, Outlook, Apple Mail — all render differently.",
  },
  {
    icon: Variable,
    title: 'Personalization is manual copy-paste',
    description:
      'Swapping in customer names, company details, and custom fields means duplicate templates and human error. One wrong merge tag, one embarrassing send.',
  },
];

const capabilities: Capability[] = [
  {
    icon: Paintbrush,
    title: 'Drag-and-drop visual editor',
    benefit: 'Compose like Lego',
    description:
      '16 block types — text, images, buttons, columns, social links, FAQs, sliders. Zero code required.',
  },
  {
    icon: Smartphone,
    title: 'Live device preview',
    benefit: 'Pixel-accurate frames',
    description:
      'See exactly how your email renders on desktop, tablet, and mobile in real time. Not approximations.',
  },
  {
    icon: Variable,
    title: 'Dynamic merge tags',
    benefit: 'No placeholder mistakes',
    description:
      'Insert {{contact.name}}, {{lead.service}}, or any custom field. Preview with real contact data before sending.',
  },
  {
    icon: Image,
    title: 'Built-in image editor',
    benefit: 'No more Photoshop',
    description:
      'Upload, crop (1:1, 4:3, 16:9, 9:16), and zoom — all inline. Images upload to CDN automatically.',
  },
  {
    icon: Layers,
    title: 'Starter templates included',
    benefit: 'Ship in under 5 minutes',
    description:
      'Welcome emails, newsletters, notifications — start from proven layouts and customize.',
  },
  {
    icon: Zap,
    title: 'Server-side rendering',
    benefit: 'Bulletproof HTML on send',
    description:
      'Templates render via React Email at send time. Consistent rendering across every client, every time.',
  },
];

const blockTypes = [
  'Text', 'Heading', 'Button', 'Image', 'Video', 'Divider', 'Spacer', 'Row',
  'Column', 'Container', 'Section', 'Social', 'Footer', 'Code', 'FAQ', 'Slider',
];

// ────────────────────────────────────────────────────────────────────────────
// Three-panel showcase
// ────────────────────────────────────────────────────────────────────────────

function PanelShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              eyebrow="How it works"
              headlineLines={['Three panels.', 'Total control.']}
              sub="The email builder uses a Notion-style three-panel layout. Pick blocks from the left, arrange them in the center canvas, and fine-tune properties on the right."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-xl border border-border/70 bg-background"
          >
            <div className="divide-y divide-border/60">
              {[
                { id: '01', title: 'Pick your blocks', body: 'Choose from text, headings, buttons, images, videos, social links, columns, sections, FAQs, sliders, and more.' },
                { id: '02', title: 'Design visually', body: 'Drag blocks into position, nest them inside rows and columns, and preview across devices — without writing a line of code.' },
                { id: '03', title: 'Send with confidence', body: 'React Email renders bulletproof HTML on send. Your template looks identical in Gmail, Outlook, Apple Mail, and every other client.' },
              ].map((step) => (
                <div key={step.id} className="flex items-start gap-4 px-5 py-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[11px] font-semibold tabular-nums text-signature">
                    {step.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Block types showcase
// ────────────────────────────────────────────────────────────────────────────

function BlockTypesSection() {
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
            eyebrow="16 block types"
            headlineLines={['A block', 'for every need.']}
            sub="From simple text to interactive sliders and FAQ accordions. Compose them however you want."
            align="center"
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2"
        >
          {blockTypes.map((block) => (
            <motion.div key={block} variants={innerItemVariants}>
              <Kbd className="h-8 px-3 text-[12px] font-medium normal-case tracking-normal">
                {block}
              </Kbd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main export
// ────────────────────────────────────────────────────────────────────────────

export function EmailBuilderView() {
  return (
    <>
      <FeatureHero
        pillIcon={Mail}
        pillLabel="Email Builder"
        pillSubtitle="16 blocks · live device preview"
        headlineLines={['Stop coding emails.', 'Start designing them.']}
        sub="A visual drag-and-drop email builder with 16 block types, live device preview, and dynamic personalization. Build emails that render perfectly everywhere — in minutes, not hours."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        stats={[
          { value: '16', label: 'Block types' },
          { value: '3', label: 'Starter templates' },
          { value: '90+', label: 'Email clients' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={["Email design shouldn't", 'require a developer.']}
          sub="Yet most teams still hand-code emails or fight clunky editors that produce broken layouts."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <PanelShowcaseSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Everything you need', 'to build great emails.']}
          sub="Professional-grade tools without the professional-grade complexity."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <BlockTypesSection />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Your next email,', 'built in minutes.']}
          sub="Stop fighting HTML tables. Start building beautiful, responsive emails with a visual editor that just works."
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
