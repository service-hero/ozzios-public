import { motion, useInView } from 'framer-motion';
import {
  AlertTriangle,
  Bot,
  CalendarClock,
  Clock,
  GitBranch,
  LayoutGrid,
  ListTodo,
  Repeat,
  Tag,
  Users,
} from 'lucide-react';
import { useRef } from 'react';
import { DeferredSection } from '@/components/ui/lazy-section';
import {
  CapabilitiesBlock,
  ChecklistBlock,
  FeatureCTABlock,
  FeatureHero,
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
    icon: AlertTriangle,
    title: 'Tasks fall through the cracks',
    description:
      'Spreadsheets, sticky notes, and scattered tools mean deadlines get missed and customers notice. You need a single source of truth.',
  },
  {
    icon: Clock,
    title: 'Manual follow-ups eat your day',
    description:
      'You spend hours chasing status updates, reminding teammates about deadlines, and escalating overdue work. It should happen automatically.',
  },
  {
    icon: Users,
    title: 'No visibility across the team',
    description:
      'Who is working on what? What is blocking whom? Without real-time visibility, coordination is guesswork.',
  },
  {
    icon: Repeat,
    title: 'Repetitive work stays manual',
    description:
      'Customer onboarding, seasonal maintenance reminders, monthly reports — the same task lists get recreated from scratch every time.',
  },
];

const capabilities: Capability[] = [
  {
    icon: LayoutGrid,
    title: 'Kanban + List views',
    benefit: 'Pick the view that fits',
    description: 'Drag-and-drop kanban boards for visual workflows. Switch to list view for bulk operations.',
  },
  {
    icon: GitBranch,
    title: 'Task dependencies',
    benefit: 'Auto-update on resolution',
    description: 'Define what blocks what. Tasks auto-update when dependencies resolve. No starting work that is not ready.',
  },
  {
    icon: CalendarClock,
    title: 'Auto-escalation',
    benefit: 'No manual triage',
    description: 'Priority automatically increases as deadlines approach. 3 days out becomes high. Past due becomes urgent.',
  },
  {
    icon: Repeat,
    title: 'Recurring tasks',
    benefit: 'Create once, run forever',
    description: 'Set tasks to repeat daily, weekly, or monthly. Customer follow-ups, equipment inspections, service reminders.',
  },
  {
    icon: Bot,
    title: 'AI agent integration',
    benefit: 'Tasks created autonomously',
    description: 'AI agents create, update, and complete tasks. A campaign manager agent can spawn a full task list from a brief.',
  },
  {
    icon: Tag,
    title: 'Templates & tags',
    benefit: 'Find anything in seconds',
    description: 'Reusable task templates for new jobs, onboarding, and inspections. Tag and filter for instant retrieval.',
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Workflow steps section
// ────────────────────────────────────────────────────────────────────────────

function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { step: '01', title: 'Create from anywhere', description: 'Tasks are created by your team, from channel conversations, from leads and contacts, or by AI agents.' },
    { step: '02', title: 'Organize automatically', description: 'Custom statuses, priorities, tags, and assignees keep your board clean. Drag between columns or auto-assign.' },
    { step: '03', title: 'Escalate intelligently', description: 'Configurable escalation rules bump priority as deadlines approach. Focus on what matters most.' },
    { step: '04', title: 'Complete and repeat', description: 'Mark tasks done, trigger dependent tasks, and let recurring schedules regenerate the next cycle.' },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-14"
        >
          <SectionHeader
            eyebrow="From creation to completion"
            headlineLines={['Tasks that drive', 'themselves forward.']}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={innerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:grid-cols-2 lg:gap-5"
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={innerItemVariants}
              className="rounded-xl border border-border/60 bg-background p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[11px] font-semibold tabular-nums text-signature">
                  {item.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.55] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
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

export function TaskManagementView() {
  return (
    <>
      <FeatureHero
        pillIcon={ListTodo}
        pillLabel="Task Management"
        pillSubtitle="Kanban + auto-escalation + dependencies"
        headlineLines={['Stop losing work', 'to broken processes.']}
        sub="Kanban boards, auto-escalation, dependencies, and AI-powered task creation. Every task tracked, every deadline enforced, every handoff automatic."
        primaryCta={{ label: 'Setup a demo', href: DEMO_CTA_HREF, shortcut: 'D' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        stats={[
          { value: '37%', label: 'Fewer missed deadlines' },
          { value: '5 hrs / wk', label: 'Saved on follow-ups' },
          { value: '100%', label: 'Task visibility' },
        ]}
      />

      <DeferredSection>
        <PainPointsBlock
          eyebrow="The problem"
          headlineLines={['Your task management', 'is costing you customers.']}
          sub="Service businesses lose an average of 12% of revenue to missed appointments and poor coordination. Here is why."
          points={painPoints}
        />
      </DeferredSection>

      <DeferredSection>
        <WorkflowSection />
      </DeferredSection>

      <DeferredSection>
        <CapabilitiesBlock
          eyebrow="Capabilities"
          headlineLines={['Tasks that work', 'for you.']}
          sub="Not just a to-do list. A complete operations system that surfaces priorities, enforces deadlines, and integrates with every team member — human or AI."
          capabilities={capabilities}
        />
      </DeferredSection>

      <DeferredSection>
        <ChecklistBlock
          eyebrow="Built in"
          headlineLines={['Everything', 'a team needs.']}
          features={[
            'Custom statuses, priorities, and labels',
            'Drag-and-drop kanban with bulk actions',
            'Subtasks and dependencies with auto-update',
            'Recurring tasks with daily/weekly/monthly cycles',
            'AI agent assignment and autonomous completion',
            'Source tracking from contacts, leads, channels',
            'Reusable templates for repeat workflows',
            'Real-time collaboration and @mentions',
          ]}
        />
      </DeferredSection>

      <DeferredSection>
        <FeatureCTABlock
          eyebrow="Get started"
          headlineLines={['Every task tracked.', 'Every deadline met.']}
          sub="Stop losing work to broken processes. Get a task system that drives itself forward — with humans and AI working in lockstep."
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
