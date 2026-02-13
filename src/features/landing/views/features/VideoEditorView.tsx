'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Video,
  Clock,
  AlertTriangle,
  Sparkles,
  Brain,
  Layers,
  Zap,
  Shield,
  Play,
  Pause,
  Music,
  Mic,
  Type,
  Sticker,
  Scissors,
  Wand2,
  Download,
  SlidersHorizontal,
  Film,
  Volume2,
  Loader2,
  Image,
  ChevronRight,
  Captions,
  Palette,
  MonitorPlay,
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

// ---------------------------------------------------------------------------
// Hero Animation Data
// ---------------------------------------------------------------------------

interface TimelineTrack {
  id: string;
  type: 'video' | 'music' | 'voiceover' | 'subtitle' | 'sticker';
  label: string;
  color: string;
  bgColor: string;
  icon: React.ElementType;
  clips: { id: string; start: number; width: number; label: string }[];
}

const demoTracks: TimelineTrack[] = [
  {
    id: 'video',
    type: 'video',
    label: 'Video',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500',
    icon: Video,
    clips: [
      { id: 'v1', start: 0, width: 35, label: 'Intro' },
      { id: 'v2', start: 38, width: 30, label: 'Demo' },
      { id: 'v3', start: 71, width: 29, label: 'Outro' },
    ],
  },
  {
    id: 'music',
    type: 'music',
    label: 'Music',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500',
    icon: Music,
    clips: [{ id: 'm1', start: 0, width: 100, label: 'Background Track' }],
  },
  {
    id: 'voiceover',
    type: 'voiceover',
    label: 'Voice',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500',
    icon: Mic,
    clips: [
      { id: 'vo1', start: 2, width: 32, label: 'Narration 1' },
      { id: 'vo2', start: 40, width: 25, label: 'Narration 2' },
    ],
  },
  {
    id: 'subtitle',
    type: 'subtitle',
    label: 'Captions',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500',
    icon: Captions,
    clips: [
      { id: 's1', start: 2, width: 15, label: 'Welcome to...' },
      { id: 's2', start: 19, width: 14, label: 'Our product...' },
      { id: 's3', start: 40, width: 12, label: 'See how...' },
      { id: 's4', start: 55, width: 10, label: 'Try it now' },
    ],
  },
];

const generationSteps = [
  { label: 'Generating video clips', icon: Film },
  { label: 'Adding background music', icon: Music },
  { label: 'Creating voiceover', icon: Mic },
  { label: 'Auto-captioning', icon: Captions },
];

const painPoints = [
  {
    icon: Clock,
    title: 'Video production takes days, not hours',
    description:
      'Your team spends 2-3 days on a single client video. Between filming, editing, adding music, captioning, and rendering -- it is a full pipeline before anything ships.',
  },
  {
    icon: AlertTriangle,
    title: 'Outsourcing is expensive and slow',
    description:
      'Freelance video editors charge $50-150/hour with 3-5 day turnaround. For agencies producing weekly content, that cost adds up fast and kills margins.',
  },
  {
    icon: Layers,
    title: 'Too many tools in the stack',
    description:
      'Premiere for editing, After Effects for motion, Descript for captions, separate tools for music and voiceover. Your team juggles 4-5 apps for a single video.',
  },
  {
    icon: Film,
    title: 'Repurposing for every platform is tedious',
    description:
      'Every video needs landscape for YouTube, portrait for TikTok/Reels, and square for Instagram. Re-exporting and reformatting is repetitive busywork.',
  },
];

const capabilities = [
  {
    icon: Brain,
    title: 'AI Video Generation',
    description:
      'Generate video clips from text prompts using Google Veo 3.1. Describe the scene you need and AI creates cinematic 8-second clips at up to 1080p.',
  },
  {
    icon: Layers,
    title: 'Multi-Track Timeline',
    description:
      'Professional timeline with 5 track types -- video, music, voiceover, subtitle, and sticker. Drag, resize, split, and duplicate clips with full undo/redo.',
  },
  {
    icon: Captions,
    title: 'Auto-Captions',
    description:
      'Generate word-level captions from any audio track using Deepgram. Choose from 5 caption presets including karaoke, typewriter, and glow effects.',
  },
  {
    icon: Mic,
    title: 'AI Voice & Music',
    description:
      'Generate voiceovers with ElevenLabs TTS in multiple voices. Create background music tracks from text prompts via fal.ai -- no licensing headaches.',
  },
  {
    icon: Wand2,
    title: 'Effects & Transitions',
    description:
      'Apply visual filters (grayscale, sepia, blur), Ken Burns motion effects, and 5 transition types with 13 presets between clips. All configurable per keyframe.',
  },
  {
    icon: MonitorPlay,
    title: 'Multi-Format Export',
    description:
      'Export in 16:9, 9:16, or 1:1 aspect ratios. Remotion Lambda renders your composition to a CDN-hosted video file ready for any platform.',
  },
];

const trackTypes = [
  { type: 'Video', color: 'bg-sky-500', description: 'Primary video and image clips', icon: Video },
  { type: 'Music', color: 'bg-teal-500', description: 'Background music and audio tracks', icon: Music },
  { type: 'Voiceover', color: 'bg-indigo-500', description: 'AI-generated or recorded narration', icon: Mic },
  { type: 'Subtitle', color: 'bg-amber-500', description: 'Auto-captions with word-level timing', icon: Captions },
  { type: 'Sticker', color: 'bg-pink-500', description: 'Animated GIFs from Giphy library', icon: Sticker },
];

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

function HeroSection() {
  const [phase, setPhase] = useState<'generating' | 'editing' | 'playing'>('generating');
  const [genStep, setGenStep] = useState(0);
  const [tracksRevealed, setTracksRevealed] = useState(0);
  const [playheadPos, setPlayheadPos] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const cancelRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const runCycle = useCallback(async (controller: { cancelled: boolean }) => {
    // Reset
    setPhase('generating');
    setGenStep(0);
    setTracksRevealed(0);
    setPlayheadPos(0);
    setIsPlaying(false);
    setShowExport(false);

    await new Promise((r) => setTimeout(r, 800));

    // Phase 1: Generate tracks one at a time
    for (let i = 0; i < generationSteps.length; i++) {
      if (controller.cancelled) return;
      setGenStep(i);
      await new Promise((r) => setTimeout(r, 1200));
      setTracksRevealed(i + 1);
    }

    if (controller.cancelled) return;
    setPhase('editing');
    await new Promise((r) => setTimeout(r, 600));

    // Phase 2: Play through timeline
    if (controller.cancelled) return;
    setPhase('playing');
    setIsPlaying(true);

    for (let p = 0; p <= 100; p += 1) {
      if (controller.cancelled) return;
      setPlayheadPos(p);
      await new Promise((r) => setTimeout(r, 50));
    }

    // Phase 3: Export pulse
    if (controller.cancelled) return;
    setIsPlaying(false);
    setShowExport(true);
    await new Promise((r) => setTimeout(r, 2000));

    if (controller.cancelled) return;
    await new Promise((r) => setTimeout(r, 800));
  }, []);

  useEffect(() => {
    const controller = { cancelled: false };
    cancelRef.current = controller;

    let running = true;
    const loop = async () => {
      while (running && !controller.cancelled) {
        await runCycle(controller);
      }
    };

    const timer = setTimeout(() => loop(), 1200);
    return () => {
      running = false;
      controller.cancelled = true;
      clearTimeout(timer);
    };
  }, [runCycle]);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Headline */}
          <motion.div variants={itemVariants} className="text-center mb-8 max-w-[900px] mx-auto">
            <div className="tag-neo rounded-full bg-signature/10 border-signature mb-6">
              <Video className="w-4 h-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                AI Video Editor
              </span>
            </div>
            <h1 className="text-display font-display text-foreground mb-6">
              Professional videos from{' '}
              <span className="text-signature">a text prompt</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              AI-powered video creation with multi-track editing, auto-captions, generated
              voiceovers, and one-click export for every platform. No video experience needed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-signature" />
                Minutes, not days
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-signature" />
                AI-generated media
              </span>
              <span className="flex items-center gap-2">
                <Film className="w-4 h-4 text-signature" />
                3 aspect ratios
              </span>
            </div>
          </motion.div>

          {/* Interactive Timeline Demo */}
          <motion.div variants={itemVariants} className="mt-12 w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-background overflow-hidden shadow-2xl shadow-black/10">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border">
                    <Video className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[11px] text-muted-foreground font-mono">
                      app.ozzios.com/video-kit
                    </span>
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-border bg-background">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[11px] sm:text-xs font-semibold text-foreground truncate max-w-[140px] sm:max-w-none">
                    Product Launch Video
                  </span>
                  <AnimatePresence mode="wait">
                    {phase === 'generating' ? (
                      <motion.span
                        key="gen"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-signature/10 text-signature text-[9px] sm:text-[10px] font-medium"
                      >
                        <Loader2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin" />
                        Generating...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="ready"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[9px] sm:text-[10px] font-medium"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span className="hidden sm:inline">Ready</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Aspect ratio badge */}
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border">
                    <MonitorPlay className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">16:9</span>
                  </div>
                  {/* Export button */}
                  <motion.div
                    animate={showExport ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 0.5, repeat: showExport ? 2 : 0 }}
                    className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors duration-300 ${
                      showExport
                        ? 'bg-signature text-white'
                        : 'bg-muted/50 border border-border text-muted-foreground'
                    }`}
                  >
                    <Download className="w-3 h-3" />
                    <span className="hidden sm:inline">Export</span>
                  </motion.div>
                </div>
              </div>

              {/* Main content: Preview + Timeline */}
              <div className="flex flex-col bg-muted/30">
                {/* Video preview area */}
                <div className="relative flex items-center justify-center px-6 py-6 sm:py-8 border-b border-border bg-black/5">
                  <div className="relative w-full max-w-md aspect-video rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden shadow-lg">
                    {/* Fake video preview content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {phase === 'generating' ? (
                          <motion.div
                            key="gen-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-2"
                          >
                            <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-signature animate-spin" />
                            <AnimatePresence mode="wait">
                              <motion.span
                                key={genStep}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="text-[10px] sm:text-xs text-gray-400"
                              >
                                {generationSteps[genStep]?.label ?? 'Preparing...'}
                              </motion.span>
                            </AnimatePresence>
                            <div className="w-32 sm:w-48 h-1 rounded-full bg-gray-700 overflow-hidden mt-1">
                              <motion.div
                                className="h-full bg-signature rounded-full"
                                animate={{ width: `${((genStep + 1) / generationSteps.length) * 100}%` }}
                                transition={{ duration: 0.8 }}
                              />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="preview"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            {/* Simulated video frames */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-indigo-900/30 to-violet-900/40" />
                            <div className="absolute inset-4 border border-white/10 rounded-md" />
                            <div className="relative flex flex-col items-center gap-2 text-center px-4">
                              <motion.div
                                animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-white/90 text-sm sm:text-base font-semibold"
                              >
                                Product Launch 2025
                              </motion.div>
                              <span className="text-[10px] sm:text-xs text-white/50">
                                Acme Agency
                              </span>
                            </div>
                            {/* Caption overlay */}
                            {isPlaying && playheadPos > 5 && playheadPos < 95 && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                              >
                                <div className="px-3 py-1.5 rounded bg-black/70 backdrop-blur-sm">
                                  <span className="text-[10px] sm:text-xs text-white font-medium">
                                    {playheadPos < 35
                                      ? 'Welcome to the future of marketing'
                                      : playheadPos < 70
                                        ? 'See how AI transforms your workflow'
                                        : 'Try OzziOS free for 7 days'}
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {/* Play/pause indicator */}
                    {phase !== 'generating' && (
                      <div className="absolute top-2 right-2">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm">
                          {isPlaying ? (
                            <Pause className="w-2.5 h-2.5 text-white/70" />
                          ) : (
                            <Play className="w-2.5 h-2.5 text-white/70" />
                          )}
                          <span className="text-[8px] text-white/50 font-mono">
                            0:{String(Math.floor((playheadPos / 100) * 30)).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline area */}
                <div className="bg-background">
                  {/* Playback controls */}
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-border">
                    <div className="flex items-center gap-1">
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 text-foreground" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-foreground" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      0:{String(Math.floor((playheadPos / 100) * 30)).padStart(2, '0')} / 0:30
                    </span>
                    <div className="flex-1" />
                    <div className="flex items-center gap-1">
                      <Volume2 className="w-3 h-3 text-muted-foreground" />
                      <div className="w-12 h-1 rounded-full bg-muted">
                        <div className="w-3/4 h-full rounded-full bg-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted/50 border border-border">
                      <SlidersHorizontal className="w-2.5 h-2.5 text-muted-foreground" />
                      <span className="text-[9px] text-muted-foreground">1.0x</span>
                    </div>
                  </div>

                  {/* Tracks */}
                  <div className="relative px-0">
                    {/* Time ruler */}
                    <div className="flex items-end h-5 px-[72px] sm:px-[88px] border-b border-border bg-muted/30">
                      {[0, 5, 10, 15, 20, 25, 30].map((sec) => (
                        <div
                          key={sec}
                          className="absolute text-[8px] text-muted-foreground font-mono"
                          style={{ left: `calc(72px + ${(sec / 30) * 100}% * (1 - 72 / 1000))` }}
                        >
                          0:{String(sec).padStart(2, '0')}
                        </div>
                      ))}
                    </div>

                    {/* Track rows */}
                    <AnimatePresence>
                      {demoTracks.slice(0, tracksRevealed).map((track, tIdx) => {
                        const Icon = track.icon;
                        return (
                          <motion.div
                            key={track.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="flex items-stretch border-b border-border last:border-b-0"
                          >
                            {/* Track label */}
                            <div className="w-[72px] sm:w-[88px] shrink-0 flex items-center gap-1.5 px-2 sm:px-3 py-2 border-r border-border bg-muted/30">
                              <Icon className={`w-3 h-3 ${track.color}`} />
                              <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground truncate">
                                {track.label}
                              </span>
                            </div>
                            {/* Clips */}
                            <div className="flex-1 relative h-8 sm:h-9">
                              {track.clips.map((clip, cIdx) => (
                                <motion.div
                                  key={clip.id}
                                  initial={{ opacity: 0, scaleX: 0 }}
                                  animate={{ opacity: 1, scaleX: 1 }}
                                  transition={{ duration: 0.4, delay: 0.1 + cIdx * 0.08 }}
                                  style={{
                                    left: `${clip.start}%`,
                                    width: `${clip.width}%`,
                                    originX: 0,
                                  }}
                                  className={`absolute top-1 bottom-1 ${track.bgColor}/20 border border-${track.bgColor.replace('bg-', '')}/30 rounded-[3px] flex items-center px-1.5 overflow-hidden`}
                                >
                                  <div
                                    className={`absolute left-0 top-0 bottom-0 w-0.5 ${track.bgColor} rounded-l-[3px]`}
                                  />
                                  <span className="text-[8px] sm:text-[9px] text-muted-foreground truncate ml-1">
                                    {clip.label}
                                  </span>
                                </motion.div>
                              ))}

                              {/* Playhead on this track */}
                              {phase !== 'generating' && (
                                <motion.div
                                  className="absolute top-0 bottom-0 w-px bg-signature z-10"
                                  style={{ left: `${playheadPos}%` }}
                                  transition={{ duration: 0.05 }}
                                />
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    {/* Skeleton tracks not yet generated */}
                    {phase === 'generating' &&
                      Array.from({ length: demoTracks.length - tracksRevealed }).map((_, i) => (
                        <div
                          key={`skel-${i}`}
                          className="flex items-stretch border-b border-border last:border-b-0"
                        >
                          <div className="w-[72px] sm:w-[88px] shrink-0 px-2 sm:px-3 py-2 border-r border-border bg-muted/30">
                            <div className="w-12 h-3 rounded bg-muted animate-pulse" />
                          </div>
                          <div className="flex-1 h-8 sm:h-9 flex items-center px-2">
                            <div className="w-3/4 h-4 rounded bg-muted/50 animate-pulse" />
                          </div>
                        </div>
                      ))}

                    {/* Global playhead line */}
                    {phase !== 'generating' && tracksRevealed > 0 && (
                      <motion.div
                        className="absolute top-0 bottom-0 w-px bg-signature z-20 pointer-events-none"
                        style={{
                          left: `calc(72px + ${playheadPos}% * (1 - 72 / 1000))`,
                        }}
                      >
                        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-signature" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Pain Points Section
// ---------------------------------------------------------------------------

function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">The Problem</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Video production is your biggest bottleneck
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Agencies need video content weekly but the production pipeline takes days
            and eats into margins.
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
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{point.title}</h3>
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

// ---------------------------------------------------------------------------
// Track Types Section
// ---------------------------------------------------------------------------

function TrackTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-neo text-signature mb-6 inline-block">Timeline</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-6">
              Five track types, one timeline
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Build videos with a professional multi-track timeline. Each track type has
                dedicated controls -- volume and mute for audio, visibility toggles for
                subtitles, drag-and-drop sticker positioning on the canvas.
              </p>
              <p>
                Drag clips to reposition, resize edges to adjust duration, split keyframes
                at any timestamp, and duplicate across tracks. Full undo/redo history (50 levels)
                and clipboard shortcuts make editing fast.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b-2 border-border">
                <span className="text-sm font-semibold text-foreground">
                  5 Track Types
                </span>
              </div>
              {trackTypes.map((track, i) => {
                const Icon = track.icon;
                return (
                  <div
                    key={track.type}
                    className={`flex items-center gap-4 px-6 py-3.5 ${i < trackTypes.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${track.color}/10 flex items-center justify-center shrink-0`}>
                      <Icon className={`w-4 h-4 ${track.color === 'bg-sky-500' ? 'text-sky-500' : track.color === 'bg-teal-500' ? 'text-teal-500' : track.color === 'bg-indigo-500' ? 'text-indigo-500' : track.color === 'bg-amber-500' ? 'text-amber-500' : 'text-pink-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-foreground block">
                        {track.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{track.description}</span>
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full ${track.color}`} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Capabilities Section
// ---------------------------------------------------------------------------

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Everything you need to ship video content
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From AI generation to professional editing and multi-platform export.
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
                className="bg-card border-2 border-border rounded-lg p-8 hover:border-signature/30 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-signature/10 flex items-center justify-center mb-5 group-hover:bg-signature/20 transition-colors">
                  <Icon className="w-6 h-6 text-signature" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{cap.title}</h3>
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

// ---------------------------------------------------------------------------
// Workflow Section
// ---------------------------------------------------------------------------

function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      step: '01',
      title: 'Describe your video',
      description:
        'Enter a prompt or upload existing media. Choose your aspect ratio -- landscape for YouTube, portrait for TikTok, or square for Instagram.',
    },
    {
      step: '02',
      title: 'AI generates the media',
      description:
        'Video clips, background music, voiceover narration, and images are generated from your prompt using Veo, ElevenLabs, and fal.ai.',
    },
    {
      step: '03',
      title: 'Edit on the timeline',
      description:
        'Arrange clips across tracks, add transitions between scenes, apply visual effects, and generate auto-captions from any audio.',
    },
    {
      step: '04',
      title: 'Export and publish',
      description:
        'One-click render via Remotion Lambda. Your video is delivered as a CDN-hosted file ready to share with clients or publish directly.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Workflow</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            From prompt to published in four steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-lg bg-signature/10 flex items-center justify-center shrink-0">
                <span className="font-display text-signature text-lg">{item.step}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Features Checklist Section
// ---------------------------------------------------------------------------

function FeaturesListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'AI video generation with Google Veo 3.1 (8-second cinematic clips)',
    'Text-to-speech voiceovers with ElevenLabs in multiple voices',
    'Auto-captioning with Deepgram word-level timing and 5 style presets',
    '5 transition types with 13 presets (fade, dissolve, slide, zoom, wipe)',
    'Visual filters: grayscale, sepia, blur, brightness, contrast, invert',
    'Ken Burns motion effects: zoom-in, zoom-out, pan-left, pan-right',
    'Giphy integration for animated sticker overlays with drag positioning',
    'Export in 16:9, 9:16, and 1:1 for YouTube, TikTok, and Instagram',
    'Full undo/redo history with keyboard shortcuts (Cmd+Z, Cmd+C/V/X)',
    'AI agents can compose and render videos via MCP protocol',
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-neo text-signature mb-6 inline-block">Features</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight mb-4">
            Professional video editing, built in
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-signature shrink-0 mt-0.5" />
              <span className="text-foreground text-sm leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA Section
// ---------------------------------------------------------------------------

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6">
            Ship video content
            <br />
            <span className="text-signature">without the production cost</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Stop outsourcing video work or spending days in editing software.
            Create professional videos from a text prompt in minutes.
          </p>
          <a
            href="https://app.ozzios.com/sign-up"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-signature text-white font-medium text-base rounded-lg hover:bg-signature/90 transition-colors duration-200"
          >
            Start free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              SOC 2 Compliant
            </span>
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

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------

export function VideoEditorView() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <TrackTypesSection />
      <CapabilitiesSection />
      <WorkflowSection />
      <FeaturesListSection />
      <CTASection />
    </div>
  );
}
