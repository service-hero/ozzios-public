'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Phone,
  Mic,
  Bot,
  BarChart3,
  Clock,
  Zap,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Star,
  Activity,
  Settings,
  CheckCircle2,
  HeadphonesIcon,
  FlaskConical,
  Users,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const painPoints = [
  {
    icon: DollarSign,
    title: 'Call centers cost a fortune',
    description:
      'A single receptionist costs $35K-$50K/year. Scaling to 24/7 coverage means 3x that. And you still get inconsistent quality and missed calls during breaks.',
  },
  {
    icon: Clock,
    title: 'Missed calls = missed revenue',
    description:
      '80% of callers will not leave a voicemail. Every missed call is a lost lead. After hours, weekends, and holidays -- your phone rings and nobody answers.',
  },
  {
    icon: Users,
    title: 'Training never ends',
    description:
      'New hire? 3 months of training. They leave? Start over. Call scripts get outdated, quality varies between reps, and institutional knowledge walks out the door.',
  },
  {
    icon: AlertTriangle,
    title: 'No visibility into call quality',
    description:
      'Are calls being handled well? Are leads being qualified correctly? Without recording, transcribing, and reviewing every call, you are guessing.',
  },
];

const capabilities = [
  {
    icon: PhoneIncoming,
    title: 'Inbound call handling',
    description:
      'AI agents answer calls instantly, 24/7/365. Custom greetings, after-hours messages, and intelligent routing based on caller intent and history.',
  },
  {
    icon: PhoneOutgoing,
    title: 'Outbound call campaigns',
    description:
      'Launch outbound calling campaigns with batch orchestration. AI agents make the calls, qualify leads, and book appointments -- all while you sleep.',
  },
  {
    icon: Mic,
    title: 'Real-time voice AI',
    description:
      'Deepgram speech-to-text and ElevenLabs voice synthesis deliver natural, human-like conversations. Sub-second latency means no awkward pauses.',
  },
  {
    icon: Star,
    title: 'AI call quality scoring',
    description:
      'Every call is automatically transcribed, scored, and classified. AI reviews rate quality, flag issues, and provide coaching recommendations.',
  },
  {
    icon: FlaskConical,
    title: 'Voice testing lab',
    description:
      'Test your voice agents in-browser before going live. Real-time transcription, tool execution visualization, and cost tracking at ~$0.07/min.',
  },
  {
    icon: Settings,
    title: 'Per-number configuration',
    description:
      'Configure each phone number independently: TTS provider, STT provider, greeting, system prompt, transfer destinations, and agent assignment.',
  },
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Phone className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                Voice Agents
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              AI agents that{' '}
              <span className="text-signature">answer the phone</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your phones ring 24/7. Now something intelligent picks up. AI-powered voice
              agents that handle inbound calls, make outbound calls, qualify leads, and
              book appointments -- at $0.07/minute instead of $25/hour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.ozzios.com/sign-up"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
              >
                Deploy a voice agent
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            {[
              { value: '24/7', label: 'Availability' },
              { value: '$0.07', label: 'Per minute' },
              { value: '<1s', label: 'Response latency' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Phone calls are expensive and unpredictable
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The phone is still the #1 channel for high-intent leads. But staffing it is a nightmare.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
              AI receptionists that never miss a call
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                OzziOS Voice Agents combine Twilio's telephony infrastructure with
                Deepgram's real-time speech recognition and ElevenLabs' natural voice
                synthesis to create AI agents that sound human and act intelligently.
              </p>
              <p>
                Every call is answered instantly, transcribed in real-time, and scored
                for quality. Agents access your CRM, execute tools, book appointments, and
                transfer calls to humans when needed -- all within a single conversation.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                'Twilio SIP trunking for enterprise-grade telephony',
                'Deepgram streaming STT with sub-second latency',
                'ElevenLabs natural voice synthesis',
                'Full CRM integration and tool execution during calls',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-mint mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-neo rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-mint animate-pulse" />
                    <span className="font-display text-foreground text-sm">Live Call</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">02:34</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <PhoneCall className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">Caller</span>
                    </div>
                    <p className="text-sm text-foreground">"Hi, I'm looking to schedule a consultation for next week."</p>
                  </div>
                  <div className="bg-signature/5 rounded-lg p-3 border border-signature/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-3 h-3 text-signature" />
                      <span className="text-[10px] font-semibold text-signature uppercase">AI Agent</span>
                    </div>
                    <p className="text-sm text-foreground">"I'd be happy to help you schedule that. I can see you're in our system -- let me pull up the available times for next week."</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-electric/5 border border-electric/10 rounded-lg">
                    <Zap className="w-3 h-3 text-electric" />
                    <span className="text-[10px] text-electric font-medium">Tool: check_calendar_availability</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-display text-base text-foreground">Sales Inquiry</div>
                    <div className="text-[10px] text-muted-foreground">Classification</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className={`w-3 h-3 ${i <= 4 ? 'text-signature fill-signature' : 'text-border'}`} />
                      ))}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">AI Quality Score</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            A complete voice AI platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Not just an answering machine. A fully intelligent voice agent with CRM access, tool execution, and quality assurance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="card-neo rounded-xl p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    {
      category: 'Voice quality',
      ozzios: 'ElevenLabs natural synthesis with multiple voice options and sub-second latency',
      others: 'Robotic TTS that callers hang up on immediately',
    },
    {
      category: 'Intelligence',
      ozzios: 'Full CRM access, tool execution, appointment booking, and lead qualification during the call',
      others: 'Script-based IVR menus with no real understanding',
    },
    {
      category: 'Quality assurance',
      ozzios: 'Every call transcribed, scored by AI, and classified with coaching recommendations',
      others: 'Manual call review of random samples',
    },
    {
      category: 'Cost',
      ozzios: '~$0.07/min for 24/7 coverage with consistent quality',
      others: '$25-40/hr per rep plus benefits, training, and turnover',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Why OzziOS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Replace your call center, not your standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            AI voice agents that deliver better quality at a fraction of the cost.
          </p>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card border-2 border-border rounded-lg p-6"
            >
              <h3 className="font-display text-sm text-foreground mb-4 uppercase tracking-wider">
                {item.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-mint mb-1 uppercase tracking-wider">OzziOS</div>
                    <p className="text-sm text-foreground/80">{item.ozzios}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-border mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Others</div>
                    <p className="text-sm text-muted-foreground">{item.others}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Never miss a call.
            <br />
            <span className="text-foreground">Never miss a lead.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Deploy AI voice agents that answer every call, qualify every lead, and cost
            a fraction of a human team. Get started in minutes.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Deploy a voice agent
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-6">
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
            >
              Or talk to our team
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>SOC 2 Compliant</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>GDPR Ready</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VoiceAgentsView() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <CapabilitiesSection />
      <DifferentiatorSection />
      <CTASection />
    </>
  );
}
