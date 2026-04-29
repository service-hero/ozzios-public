import { j as jsxRuntimeExports, m as motion, r as reactExports, u as useInView } from "./vendor-framer-DZFBeC81.js";
import { D as DEMO_CTA_HREF, L as LandingLayout } from "./LandingLayout-Dblq4RXp.js";
import { c as cn } from "./utils-QXBWQHlM.js";
import { D as DeferredSection } from "./lazy-section-B65XiZaR.js";
import { F as FeatureHero, b as PainPointsBlock, C as CapabilitiesBlock, c as FeatureCTABlock, K as Kbd, S as SectionHeader, i as innerContainerVariants, d as innerItemVariants, e as SectionHeading } from "./_landing-primitives-Bieps6V3.js";
import { a7 as Video, c as Clock, Y as TriangleAlert, a3 as Layers, ap as Film, p as Brain, aq as Captions, an as Mic, ar as WandSparkles, as as MonitorPlay, at as Music, au as Sticker } from "./vendor-icons-D94uOSxG.js";
import "./vendor-react-MO5I_vdy.js";
import "./vendor-router-DD_41qJ4.js";
import "./vendor-radix-Bd9PM-r6.js";
import "node:async_hooks";
const painPoints = [
  {
    icon: Clock,
    title: "Video production takes days, not hours",
    description: "Your team spends 2-3 days on a single promotional video. Between filming, editing, music, captioning, and rendering — it is a full pipeline before anything ships."
  },
  {
    icon: TriangleAlert,
    title: "Outsourcing is expensive and slow",
    description: "Freelance video editors charge $50-150/hour with 3-5 day turnaround. For service companies producing weekly content, that cost adds up fast."
  },
  {
    icon: Layers,
    title: "Too many tools in the stack",
    description: "Premiere for editing, After Effects for motion, Descript for captions, separate tools for music. Your team juggles 4-5 apps for a single video."
  },
  {
    icon: Film,
    title: "Repurposing for every platform is tedious",
    description: "Every video needs landscape for YouTube, portrait for TikTok/Reels, and square for Instagram. Re-exporting and reformatting is repetitive busywork."
  }
];
const capabilities = [
  {
    icon: Brain,
    title: "AI video generation",
    benefit: "Google Veo 3.1 cinematic clips",
    description: "Generate video clips from text prompts. Describe the scene and AI creates cinematic 8-second clips up to 1080p."
  },
  {
    icon: Layers,
    title: "Multi-track timeline",
    benefit: "5 track types · undo/redo",
    description: "Video, music, voiceover, subtitle, and sticker tracks. Drag, resize, split, and duplicate clips professionally."
  },
  {
    icon: Captions,
    title: "Auto-captions",
    benefit: "5 caption presets",
    description: "Generate word-level captions from any audio track via Deepgram. Karaoke, typewriter, glow, and more."
  },
  {
    icon: Mic,
    title: "AI voice & music",
    benefit: "No licensing headaches",
    description: "Generate voiceovers with ElevenLabs TTS in multiple voices. Background music tracks from text prompts via fal.ai."
  },
  {
    icon: WandSparkles,
    title: "Effects & transitions",
    benefit: "Per-keyframe control",
    description: "Visual filters, Ken Burns motion, 5 transition types with 13 presets between clips."
  },
  {
    icon: MonitorPlay,
    title: "Multi-format export",
    benefit: "Render anywhere",
    description: "Export in 16:9, 9:16, or 1:1 aspect ratios. Remotion Lambda renders to CDN-hosted video files."
  }
];
const trackTypes = [
  { type: "Video", description: "Primary video and image clips", icon: Video, tone: "video" },
  { type: "Music", description: "Background music and audio tracks", icon: Music, tone: "music" },
  { type: "Voiceover", description: "AI-generated or recorded narration", icon: Mic, tone: "voice" },
  { type: "Subtitle", description: "Auto-captions with word-level timing", icon: Captions, tone: "caption" },
  { type: "Sticker", description: "Animated GIFs from Giphy library", icon: Sticker, tone: "sticker" }
];
const toneClasses = {
  video: "border-signature/30 bg-signature/10 text-signature",
  music: "border-mint/30 bg-mint/10 text-mint",
  voice: "border-foreground/15 bg-foreground/5 text-foreground/70",
  caption: "border-sun/30 bg-sun/10 text-sun",
  sticker: "border-border/60 bg-muted text-muted-foreground"
};
const timelineTracks = [
  { label: "Video", tone: "video", icon: Video, clips: [{ start: 0, width: 35, label: "Intro" }, { start: 38, width: 30, label: "Demo" }, { start: 71, width: 29, label: "Outro" }] },
  { label: "Music", tone: "music", icon: Music, clips: [{ start: 0, width: 100, label: "Background track" }] },
  { label: "Voice", tone: "voice", icon: Mic, clips: [{ start: 2, width: 32, label: "Narration 1" }, { start: 40, width: 25, label: "Narration 2" }] },
  { label: "Captions", tone: "caption", icon: Captions, clips: [{ start: 2, width: 15, label: "Welcome…" }, { start: 19, width: 14, label: "Our product…" }, { start: 40, width: 12, label: "See how…" }, { start: 55, width: 10, label: "Try it" }] }
];
function TimelinePreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -inset-x-4 -bottom-10 top-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_100%,rgba(196,88,63,0.18),transparent_70%)] blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border/70 bg-background shadow-[0_30px_80px_-30px_rgba(34,27,22,0.35)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28CA41]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55", children: "video editor · 00:18 / 00:30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-[5px] border border-mint/30 bg-mint/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-mint", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mint" }),
          "Live"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: timelineTracks.map((track, ti) => {
        const Icon = track.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-24 shrink-0 items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3 text-foreground/55" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] uppercase tracking-[0.18em] text-foreground/55", children: track.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-7 flex-1 overflow-hidden rounded-md bg-muted/40", children: [
            track.clips.map((clip, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -6 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.4 + ti * 0.1 + ci * 0.06 },
                className: cn(
                  "absolute inset-y-1 flex items-center justify-center overflow-hidden rounded-[5px] border px-2",
                  toneClasses[track.tone]
                ),
                style: { left: `${clip.start}%`, width: `${clip.width}%` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-mono text-[9.5px] font-semibold tracking-wide", children: clip.label })
              },
              ci
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-[60%] w-px bg-signature", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-signature" }) })
          ] })
        ] }, track.label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border/60 bg-muted/20 px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: "Remotion Lambda · 16:9 / 9:16 / 1:1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "⌘" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Kbd, { className: "h-[16px] min-w-[16px] text-[9px]", children: "↵" }),
          "render"
        ] })
      ] })
    ] })
  ] });
}
function TrackTypesSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-12 lg:mb-14",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "5 track types",
            headlineLines: ["Build the entire video", "on one timeline."],
            sub: "Video, music, voiceover, captions, and stickers — all on one composable timeline.",
            align: "center"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: innerContainerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "overflow-hidden rounded-xl border border-border/60 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: trackTypes.map((track) => {
          const Icon = track.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: "flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border",
                      toneClasses[track.tone]
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: track.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] leading-[1.5] text-muted-foreground", children: track.description })
                ] })
              ]
            },
            track.type
          );
        }) })
      }
    )
  ] }) });
}
function StepFlowSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { step: "01", title: "Generate video clips", description: "Type a prompt, get cinematic AI-generated 8-second clips at 1080p.", icon: Film },
    { step: "02", title: "Add background music", description: "Generate music tracks from prompts via fal.ai — no licensing headaches.", icon: Music },
    { step: "03", title: "Create voiceover", description: "ElevenLabs TTS with multiple voices. Or upload your own narration.", icon: Mic },
    { step: "04", title: "Auto-caption", description: "Word-level captions from any audio track via Deepgram. 5 styling presets.", icon: Captions }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative isolate overflow-hidden border-t border-border/50 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6 },
        className: "mb-12 lg:mb-14",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            eyebrow: "From prompt to render",
            headlineLines: ["A complete video,", "in four steps."]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: innerContainerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
        children: steps.map((s) => {
          const Icon = s.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: innerItemVariants,
              className: "rounded-xl border border-border/60 bg-background p-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-signature/25 bg-signature/10 font-mono text-[10px] font-semibold tabular-nums text-signature", children: s.step }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-foreground/40" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-[13.5px] font-semibold text-foreground", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11.5px] leading-[1.5] text-muted-foreground", children: s.description })
              ]
            },
            s.step
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { label: "Render in 16:9 / 9:16 / 1:1" }) })
  ] }) });
}
function VideoEditorView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureHero,
      {
        pillIcon: Video,
        pillLabel: "Video Editor",
        pillSubtitle: "AI clips · timeline · auto-captions",
        headlineLines: ["Pro video, no editor.", "No expensive software."],
        sub: "A multi-track timeline editor with AI video generation, voiceover, music, and auto-captions. Render in any aspect ratio for any platform.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        rightSlot: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelinePreview, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PainPointsBlock,
      {
        eyebrow: "The problem",
        headlineLines: ["Video production", "is broken."],
        sub: "It takes too long, costs too much, and requires a stack of disconnected tools to ship a single 30-second video.",
        points: painPoints
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CapabilitiesBlock,
      {
        eyebrow: "Capabilities",
        headlineLines: ["A complete video studio,", "in your browser."],
        sub: "Generate clips with AI, drop them on the timeline, add music and voiceover, auto-caption, and render. Done in minutes.",
        capabilities
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrackTypesSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepFlowSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureCTABlock,
      {
        eyebrow: "Get started",
        headlineLines: ["Stop outsourcing video.", "Make it in minutes."],
        sub: "A complete AI-powered video studio in your browser. From prompt to rendered file — no After Effects required.",
        primaryCta: { label: "Setup a demo", href: DEMO_CTA_HREF, shortcut: "D" },
        secondaryCta: { label: "Talk to sales", href: "/contact" },
        trust: [
          { value: "16:9 · 9:16 · 1:1", label: "Aspect ratios" },
          { value: "1080p", label: "Render quality" },
          { value: "Lambda", label: "Cloud rendering" }
        ]
      }
    ) })
  ] });
}
function VideoEditorPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoEditorView, {}) });
}
export {
  VideoEditorPage as component
};
