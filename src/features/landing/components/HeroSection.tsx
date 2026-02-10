import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Hash, ChevronDown, Search, Settings, Users, Star, MessageSquare, FileText, StickyNote, Sparkles, CheckCircle2, Send, Menu, Building2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import {
  type ChatMessage,
  channelMessages,
  marketingMessages,
  sidebarChannels,
  sidebarTeam,
  enterpriseLogos,
  getAgentVariant,
  getAgentOrbState,
} from './hero/chatData';
import { useAudience, audienceContent } from '../contexts/AudienceContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },
};

export function HeroSection() {
  const { audience, setAudience, isBusinessOwner, isAgency } = useAudience();
  const content = audienceContent[audience].hero;

  const [activeChannel, setActiveChannel] = useState('marketing-strategy');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState<Record<number, string>>({});
  const [streamingComplete, setStreamingComplete] = useState<Record<number, boolean>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ cancelled: boolean }>({ cancelled: false });
  const streamingRefs = useRef<Record<number, { cancelled: boolean }>>({});

  const currentMessages = channelMessages[activeChannel] || marketingMessages;

  // Get channels that have messages for rotation
  const activeChannels = sidebarChannels.filter(c => c.hasMessages).map(c => c.name);

  // Get the next channel in rotation
  const getNextChannel = (currentChannel: string): string => {
    const currentIndex = activeChannels.indexOf(currentChannel);
    const nextIndex = (currentIndex + 1) % activeChannels.length;
    return activeChannels[nextIndex];
  };

  // Handle channel change (for user clicks)
  const handleChannelChange = (channelName: string) => {
    if (!channelMessages[channelName]) return; // Only switch to channels with messages
    if (channelName === activeChannel) return;

    switchToChannel(channelName);
  };

  // Switch to a specific channel (internal function for both manual and auto rotation)
  const switchToChannel = (channelName: string) => {
    // Cancel current animation and streaming
    animationRef.current.cancelled = true;
    Object.values(streamingRefs.current).forEach(ref => {
      ref.cancelled = true;
    });

    // Reset and switch channel
    setVisibleMessages([]);
    setIsTyping(false);
    setStreamingText({});
    setStreamingComplete({});
    setActiveChannel(channelName);
    streamingRefs.current = {};

    // Reset the scroll position
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  };

  // Stream text character by character for agent messages (matching Vercel AI SDK behavior)
  const streamMessageText = async (messageId: number, fullText: string, controller: { cancelled: boolean }) => {
    const chars = fullText.split('');
    let currentText = '';

    for (let i = 0; i < chars.length; i++) {
      if (controller.cancelled) return;

      currentText += chars[i];
      setStreamingText(prev => ({ ...prev, [messageId]: currentText }));

      // More natural streaming delays matching AI SDK behavior:
      // - Very fast for spaces (almost instant)
      // - Slight pause for punctuation
      // - Variable speed for regular characters (simulates network streaming)
      const char = chars[i];
      let delay: number;
      
      if (char === ' ' || char === '\n') {
        delay = 10; // Spaces appear almost instantly
      } else if (['.', '!', '?'].includes(char)) {
        delay = 150; // Longer pause after sentence endings
      } else if (char === ',') {
        delay = 80; // Short pause after commas
      } else if (char === ':') {
        delay = 100; // Medium pause after colons
      } else {
        // Variable delay for regular characters (20-40ms) to simulate real streaming
        delay = 20 + Math.random() * 20;
      }

      await new Promise(resolve => setTimeout(resolve, delay));
    }

    if (!controller.cancelled) {
      setStreamingComplete(prev => ({ ...prev, [messageId]: true }));
    }
  };

  // Auto-scroll to bottom when new messages appear or text streams
  useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages, isTyping, streamingText]);

  // Animate messages for current channel
  useEffect(() => {
    const controller = { cancelled: false };
    animationRef.current = controller;

    const showMessages = async () => {
      const messages = channelMessages[activeChannel] || marketingMessages;

      for (let i = 0; i < messages.length; i++) {
        if (controller.cancelled) return;

        const message = messages[i];
        const prevMessage = i > 0 ? messages[i - 1] : null;

        // Determine delay based on previous message type
        let delay: number;
        if (i === 0) {
          delay = 800; // Initial delay for first message
        } else if (prevMessage?.isAgent) {
          // Previous message was an agent - we already waited for streaming in previous iteration
          delay = 400; // Short delay after agent finishes
        } else {
          // Previous message was a user - normal delay
          delay = 600;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
        if (controller.cancelled) return;

        // Show typing indicator if needed
        if (message.typing) {
          setIsTyping(true);
          await new Promise((resolve) => setTimeout(resolve, 800));
          setIsTyping(false);
        }

        if (controller.cancelled) return;

        // Show the message
        setVisibleMessages((prev) => [...prev, message.id]);

        // Handle agent messages - stream the text and wait for completion
        if (message.isAgent && message.content.length > 0) {
          const textParts = message.content
            .filter(part => part.type === 'text' && part.text)
            .map(part => part.text as string)
            .join('');

          if (textParts) {
            const streamController = { cancelled: false };
            streamingRefs.current[message.id] = streamController;

            // Start streaming after a short delay
            await new Promise((resolve) => setTimeout(resolve, 200));
            if (controller.cancelled || streamController.cancelled) return;

            // Stream the text and wait for it to complete before showing next message
            await streamMessageText(message.id, textParts, streamController);

            // Small pause after streaming completes
            await new Promise((resolve) => setTimeout(resolve, 200));
          } else {
            // No text to stream, mark as complete
            setStreamingComplete(prev => ({ ...prev, [message.id]: true }));
            await new Promise((resolve) => setTimeout(resolve, 400));
          }
        } else {
          // User messages show immediately and are marked complete
          setStreamingComplete(prev => ({ ...prev, [message.id]: true }));
        }
      }

      // All messages shown - wait and then auto-rotate to next channel
      if (!controller.cancelled) {
        // Wait 4 seconds before rotating to next channel
        await new Promise((resolve) => setTimeout(resolve, 4000));

        if (!controller.cancelled) {
          const nextChannel = getNextChannel(activeChannel);
          switchToChannel(nextChannel);
        }
      }
    };

    const timer = setTimeout(showMessages, 600);
    return () => {
      controller.cancelled = true;
      Object.values(streamingRefs.current).forEach(ref => {
        ref.cancelled = true;
      });
      clearTimeout(timer);
    };
  }, [activeChannel]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white"
    >

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Audience Toggle */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-gray-100 border border-gray-200">
              <button
                onClick={() => setAudience('business')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 ${
                  isBusinessOwner
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Business Owner</span>
              </button>
              <button
                onClick={() => setAudience('agency')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 ${
                  isAgency
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Agency</span>
              </button>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-signature" />
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main headline - Editorial serif typography */}
          <motion.div variants={itemVariants} className="text-center max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.h1
                key={audience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-[clamp(2.5rem,8vw,5.5rem)] font-display leading-[0.95] tracking-[-0.02em] text-black"
              >
                {content.headline[0]}
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-signature">
                    {content.headline[1]}
                  </span>
                  {/* Underline accent */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-signature/30"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 7 Q50 0, 100 4 T200 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* Subheadline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${audience}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-8 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl text-center font-light"
            >
              {content.subheadline}
            </motion.p>
          </AnimatePresence>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-[15px] font-medium gap-3 bg-signature text-white hover:bg-signature/90 rounded-full group"
            >
              <a href="https://app.ozzios.com/sign-up">
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <button
              className="h-14 px-8 text-[15px] font-medium gap-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full inline-flex items-center transition-colors group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Play className="h-3 w-3 fill-current ml-0.5" />
              </div>
              Watch demo
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${audience}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
              >
                {content.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Product visualization - Animated Chat Interface */}
          <motion.div
            variants={itemVariants}
            className="mt-20 w-full max-w-5xl"
          >
            <div className="relative">
              {/* Browser chrome */}
              <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-2xl shadow-black/10">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-gray-200">
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <span className="text-[11px] text-gray-400 font-mono">app.ozzios.com</span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Slack-like Chat Interface */}
                <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] bg-gray-50 flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="hidden md:flex w-56 flex-col border-r border-gray-200 bg-white">
                    {/* Workspace header */}
                    <div className="p-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-signature flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white">AC</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] font-semibold text-black truncate">Acme Agency</div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-[10px] text-gray-400">Online</span>
                          </div>
                        </div>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                    </div>

                    {/* Channels */}
                    <div className="flex-1 overflow-hidden py-3">
                      <div className="px-3 mb-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                          <ChevronDown className="w-3 h-3" />
                          Channels
                        </div>
                      </div>
                      <div className="space-y-0.5 px-2">
                        {sidebarChannels.map((channel) => (
                          <div
                            key={channel.name}
                            onClick={() => channel.hasMessages && handleChannelChange(channel.name)}
                            className={`flex items-center gap-2 px-2 py-1 rounded text-[11px] transition-all duration-200 ${
                              channel.name === activeChannel
                                ? 'bg-signature/10 text-black'
                                : channel.hasMessages
                                ? 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer'
                                : 'text-gray-300'
                            }`}
                          >
                            {channel.starred && <Star className="w-3 h-3 text-signature fill-signature" />}
                            <Hash className="w-3 h-3" />
                            <span className="truncate">{channel.name}</span>
                            {channel.hasMessages && channel.name !== activeChannel && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-signature/60" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Team members */}
                      <div className="px-3 mt-4 mb-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                          <ChevronDown className="w-3 h-3" />
                          Team
                        </div>
                      </div>
                      <div className="space-y-0.5 px-2">
                        {sidebarTeam.map((member) => (
                          <div
                            key={member.name}
                            className="flex items-center gap-2 px-2 py-1 rounded text-[11px] text-gray-500 hover:bg-gray-100"
                          >
                            <div className="relative">
                              {member.isAgent ? (
                                <SiriOrbAvatar
                                  size={20}
                                  variant={getAgentVariant(member.name)}
                                  orbState="idle"
                                  disableFloating={true}
                                  className="rounded-md"
                                />
                              ) : (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-5 h-5 rounded-md object-cover"
                                />
                              )}
                              <div
                                className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-white ${
                                  member.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                                }`}
                              />
                            </div>
                            <span className="truncate">{member.name}</span>
                            {member.isAgent && (
                              <span className="ml-auto text-[9px] px-1 py-0.5 rounded bg-signature/10 text-signature">AI</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main chat area */}
                  <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
                    {/* Channel header */}
                    <div className="relative flex items-center justify-between px-3 sm:px-4 py-2 border-b border-gray-200 bg-white">
                      <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex md:hidden items-center gap-2 hover:bg-gray-100 rounded-lg px-1.5 py-1 -ml-1.5 transition-colors"
                      >
                        <Menu className="w-4 h-4 text-gray-500" />
                        <Hash className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-[12px] font-semibold text-black truncate max-w-[120px]">{activeChannel}</span>
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className="hidden md:flex items-center gap-2">
                        <Star className="w-4 h-4 text-signature fill-signature" />
                        <Hash className="w-4 h-4 text-gray-400" />
                        <span className="text-[13px] font-semibold text-black">{activeChannel}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center -space-x-2">
                          {sidebarTeam.slice(0, 3).map((member, i) => (
                            <div
                              key={member.name}
                              className="rounded-full overflow-visible"
                              style={{ zIndex: 3 - i }}
                            >
                              {member.isAgent ? (
                                <SiriOrbAvatar
                                  size={24}
                                  variant={getAgentVariant(member.name)}
                                  orbState="idle"
                                  disableFloating={true}
                                  className="rounded-full"
                                />
                              ) : (
                                <img src={member.image} alt="" className="w-6 h-6 rounded-full object-cover" />
                              )}
                            </div>
                          ))}
                          <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                            <span className="text-[9px] text-gray-500">+4</span>
                          </div>
                        </div>
                        <Search className="w-4 h-4 text-gray-400 hidden sm:block" />
                        <Settings className="w-4 h-4 text-gray-400 hidden sm:block" />
                      </div>

                      {/* Mobile channel dropdown */}
                      <AnimatePresence>
                        {mobileMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-xl md:hidden"
                          >
                            <div className="p-2 space-y-0.5">
                              <div className="px-2 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                Channels
                              </div>
                              {sidebarChannels.map((channel) => (
                                <button
                                  key={channel.name}
                                  onClick={() => {
                                    if (channel.hasMessages) {
                                      handleChannelChange(channel.name);
                                      setMobileMenuOpen(false);
                                    }
                                  }}
                                  disabled={!channel.hasMessages}
                                  className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[12px] transition-all ${
                                    channel.name === activeChannel
                                      ? 'bg-signature/10 text-black'
                                      : channel.hasMessages
                                      ? 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                      : 'text-gray-300 cursor-not-allowed'
                                  }`}
                                >
                                  {channel.starred && <Star className="w-3.5 h-3.5 text-signature fill-signature" />}
                                  <Hash className="w-3.5 h-3.5" />
                                  <span>{channel.name}</span>
                                  {channel.hasMessages && channel.name !== activeChannel && (
                                    <span className="ml-auto w-2 h-2 rounded-full bg-signature/60" />
                                  )}
                                  {channel.name === activeChannel && (
                                    <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-signature/10 text-signature">Active</span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Chat tabs */}
                    <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 bg-white">
                      {[
                        { icon: MessageSquare, label: 'Messages', active: true },
                        { icon: CheckCircle2, label: 'Tasks', active: false },
                        { icon: FileText, label: 'Files', active: false },
                        { icon: StickyNote, label: 'Notes', active: false },
                        { icon: Sparkles, label: 'Agent Creations', active: false },
                      ].map((tab) => (
                        <div
                          key={tab.label}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] ${
                            tab.active
                              ? 'bg-gray-100 text-black'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          <tab.icon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{tab.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Messages */}
                    <div ref={messagesContainerRef} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3 sm:p-4 space-y-4 scrollbar-hidden bg-white">
                      <AnimatePresence mode="popLayout">
                        {currentMessages
                          .filter((msg) => visibleMessages.includes(msg.id))
                          .map((message) => (
                            <motion.div
                              key={message.id}
                              variants={messageVariants}
                              initial="hidden"
                              animate="visible"
                              className="flex gap-2 sm:gap-3 min-w-0"
                            >
                              {/* Avatar */}
                              <div className="shrink-0">
                                {message.isAgent ? (
                                  <SiriOrbAvatar
                                    size={28}
                                    variant={getAgentVariant(message.user)}
                                    orbState={getAgentOrbState(
                                      message,
                                      !streamingComplete[message.id] && Boolean(streamingText[message.id]),
                                      streamingComplete[message.id]
                                    )}
                                    disableFloating={true}
                                    className="rounded-lg sm:scale-125 origin-top-left"
                                  />
                                ) : (
                                  <img
                                    src={message.avatar!}
                                    alt={message.user}
                                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg object-cover"
                                  />
                                )}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0 overflow-hidden">
                                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                  <span className="text-[11px] sm:text-[12px] font-semibold text-black truncate max-w-[100px] sm:max-w-none">
                                    {message.user}
                                  </span>
                                  {message.isAgent && (
                                    <span className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium shrink-0">
                                      AI
                                    </span>
                                  )}
                                  <span className="text-[9px] sm:text-[10px] text-gray-400 shrink-0">{message.time}</span>
                                </div>

                                <div className="text-[11px] sm:text-[12px] text-gray-600 leading-relaxed break-words overflow-hidden">
                                  {(() => {
                                    // For agent messages, we need to distribute streamed text across text parts
                                    if (message.isAgent) {
                                      const isStreaming = !streamingComplete[message.id];
                                      const streamedText = streamingText[message.id] || '';
                                      
                                      // Collect all text parts and their positions
                                      const textParts: Array<{ index: number; text: string; startPos: number; endPos: number }> = [];
                                      let currentPos = 0;
                                      
                                      message.content.forEach((part, idx) => {
                                        if (part.type === 'text' && part.text) {
                                          textParts.push({
                                            index: idx,
                                            text: part.text,
                                            startPos: currentPos,
                                            endPos: currentPos + part.text.length,
                                          });
                                          currentPos += part.text.length;
                                        }
                                      });
                                      
                                      let streamedPos = 0;
                                      
                                      return message.content.map((part, i) => {
                                        // Handle streaming text for agent messages
                                        if (part.type === 'text' && part.text) {
                                          const textPart = textParts.find(tp => tp.index === i);
                                          if (!textPart) {
                                            return <span key={i}>{part.text}</span>;
                                          }
                                          
                                          const partStart = textPart.startPos;
                                          const partEnd = textPart.endPos;
                                          
                                          // Calculate how much of this part to show
                                          let displayText = '';
                                          if (isStreaming && streamedText) {
                                            const streamedLength = streamedText.length;
                                            if (streamedLength > partStart) {
                                              const partStreamedLength = Math.min(streamedLength - partStart, part.text.length);
                                              displayText = part.text.substring(0, Math.max(0, partStreamedLength));
                                            }
                                          } else {
                                            displayText = part.text;
                                          }
                                          
                                          const showCursor = isStreaming && streamedText && streamedText.length > partStart && streamedText.length < partEnd;
                                          
                                          return (
                                            <span key={i} className="inline">
                                              {displayText}
                                              {showCursor && (
                                                <span
                                                  className="inline-block ml-0.5 align-middle text-gray-600"
                                                  style={{
                                                    animation: 'blink 1s ease-in-out infinite',
                                                  }}
                                                >
                                                  ▮
                                                </span>
                                              )}
                                            </span>
                                          );
                                        }

                                        if (part.type === 'mention') {
                                      return (
                                        <span
                                          key={i}
                                          className="inline-flex items-center px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium"
                                        >
                                          {part.text}
                                        </span>
                                      );
                                    }
                                    if (part.type === 'list' && 'items' in part) {
                                      // Only show list if streaming is complete or it's a user message
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <ul key={i} className="my-2 space-y-1 ml-1">
                                          {(part.items as string[]).map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                              <span className="text-signature mt-1">•</span>
                                              <span className="text-gray-700">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      );
                                    }
                                    if (part.type === 'metrics' && 'items' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      const items = part.items as Array<{label: string; value: string; change: string}>;
                                      return (
                                        <div key={i} className={`my-2 grid gap-1.5 sm:gap-2 grid-cols-2 ${items.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-4 lg:grid-cols-5'}`}>
                                          {items.map((item, j) => (
                                            <div
                                              key={j}
                                              className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-center"
                                            >
                                              <div className="text-[10px] text-gray-400 mb-1">{item.label}</div>
                                              <div className="text-[13px] text-black font-semibold">{item.value}</div>
                                              {item.change && (
                                                <div
                                                  className={`text-[9px] mt-0.5 ${
                                                    item.change.startsWith('+')
                                                      ? 'text-green-500'
                                                      : item.change.startsWith('-')
                                                      ? 'text-green-500'
                                                      : 'text-gray-400'
                                                  }`}
                                                >
                                                  {item.change}
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'images' && 'items' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <div key={i} className="my-2 flex flex-wrap gap-2">
                                          {(part.items as Array<{image?: string; placeholder?: string; color?: string; wide?: boolean}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className={`relative ${item.wide ? 'w-full sm:w-48 h-20 sm:h-24' : 'w-16 sm:w-20 h-16 sm:h-20'} rounded-lg overflow-hidden group`}
                                            >
                                              {item.image ? (
                                                <img src={item.image} alt="Generated" className="absolute inset-0 w-full h-full object-cover" />
                                              ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                              )}
                                              <div className="absolute inset-0 bg-black/20" />
                                              {item.placeholder && (
                                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white">{item.placeholder}</span>
                                              )}
                                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'videos' && 'items' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <div key={i} className="my-2 flex flex-wrap gap-2">
                                          {(part.items as Array<{image?: string; placeholder?: string; color?: string; duration: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden group cursor-pointer"
                                            >
                                              {item.image ? (
                                                <img src={item.image} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                                              ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                              )}
                                              <div className="absolute inset-0 bg-black/40" />
                                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center mb-1 shadow-lg">
                                                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1" />
                                                </div>
                                                <span className="text-[9px] font-medium text-white">{item.duration}</span>
                                              </div>
                                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'actions' && 'items' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <div key={i} className="my-2 space-y-1.5">
                                          {(part.items as Array<{icon: string; action: string; status: string; detail: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-gray-50 border border-gray-200"
                                            >
                                              <span className="text-[12px]">{item.icon}</span>
                                              <span className="text-gray-700 font-medium text-[11px]">{item.action}</span>
                                              <span className="hidden sm:inline text-gray-400 text-[10px]">•</span>
                                              <span className="hidden sm:inline text-gray-400 text-[10px] truncate max-w-[150px]">{item.detail}</span>
                                              <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded shrink-0 ${
                                                item.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                                              }`}>
                                                {item.status === 'success' ? '✓ Done' : 'Info'}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'keywords' && 'items' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <div key={i} className="my-2 space-y-1.5">
                                          {(part.items as Array<{keyword: string; volume: string; difficulty: string; intent: string}>).map((item, j) => (
                                            <div
                                              key={j}
                                              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2 rounded-lg bg-gray-50 border border-gray-200"
                                            >
                                              <span className="flex-1 text-gray-700 text-[11px] font-medium truncate">{item.keyword}</span>
                                              <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-[10px] text-gray-400">{item.volume}/mo</span>
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                                                  parseInt(item.difficulty) < 25 ? 'bg-green-100 text-green-600' :
                                                  parseInt(item.difficulty) < 40 ? 'bg-yellow-100 text-yellow-600' :
                                                  'bg-red-100 text-red-600'
                                                }`}>
                                                  KD: {item.difficulty}
                                                </span>
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-signature/10 text-signature">
                                                  {item.intent}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'code' && 'content' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      return (
                                        <div key={i} className="my-2 p-2 sm:p-3 rounded-lg bg-gray-900 border border-gray-200 font-mono text-[9px] sm:text-[10px] text-green-400 whitespace-pre-wrap break-all overflow-hidden">
                                          {part.content}
                                        </div>
                                      );
                                    }
                                    if (part.type === 'preview' && 'url' in part) {
                                      const shouldShow = !message.isAgent || streamingComplete[message.id];
                                      if (!shouldShow) return null;

                                      const previewData = part as { type: string; url: string; title: string; description: string };
                                      return (
                                        <div key={i} className="my-3">
                                          <a
                                            href={previewData.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block group rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 bg-white transition-all duration-300"
                                          >
                                            {/* Mini Dashboard UI */}
                                            <div className="relative p-3 bg-gradient-to-br from-gray-50 to-gray-100">
                                              {/* Dashboard Header */}
                                              <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                  <div className="w-5 h-5 rounded bg-signature flex items-center justify-center">
                                                    <span className="text-[7px] font-bold text-white">A</span>
                                                  </div>
                                                  <span className="text-[9px] font-semibold text-black">Acme Agency Report</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-green-100 border border-green-200">
                                                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                                  <span className="text-[7px] font-medium text-green-600">LIVE</span>
                                                </div>
                                              </div>

                                              {/* Mini Metrics Row */}
                                              <div className="grid grid-cols-4 gap-1.5 mb-3">
                                                {[
                                                  { label: 'Revenue', value: '$124K', color: 'text-green-600' },
                                                  { label: 'ROAS', value: '4.8x', color: 'text-blue-600' },
                                                  { label: 'Visitors', value: '47K', color: 'text-violet-600' },
                                                  { label: 'Conv.', value: '3.2%', color: 'text-signature' },
                                                ].map((metric) => (
                                                  <div key={metric.label} className="p-1.5 rounded bg-white border border-gray-200">
                                                    <div className="text-[6px] text-gray-400 uppercase">{metric.label}</div>
                                                    <div className={`text-[10px] font-semibold ${metric.color}`}>{metric.value}</div>
                                                  </div>
                                                ))}
                                              </div>

                                              {/* Mini Chart */}
                                              <div className="p-2 rounded bg-white border border-gray-200 mb-2">
                                                <div className="flex items-center justify-between mb-1.5">
                                                  <span className="text-[7px] text-gray-500">Revenue by Channel</span>
                                                  <span className="text-[6px] text-gray-400">Last 30 days</span>
                                                </div>
                                                <div className="flex items-end gap-1 h-8">
                                                  {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((height, idx) => (
                                                    <div
                                                      key={idx}
                                                      className="flex-1 rounded-sm bg-gradient-to-t from-signature to-signature/60"
                                                      style={{ height: `${height}%` }}
                                                    />
                                                  ))}
                                                </div>
                                              </div>

                                              {/* Mini Table */}
                                              <div className="rounded bg-white border border-gray-200 overflow-hidden">
                                                <div className="grid grid-cols-3 gap-2 px-2 py-1 bg-gray-50 border-b border-gray-200">
                                                  <span className="text-[6px] text-gray-400 uppercase">Channel</span>
                                                  <span className="text-[6px] text-gray-400 uppercase text-right">Revenue</span>
                                                  <span className="text-[6px] text-gray-400 uppercase text-right">ROI</span>
                                                </div>
                                                {[
                                                  { channel: 'Facebook Ads', revenue: '$48.2K', roi: '+312%' },
                                                  { channel: 'Google Ads', revenue: '$31.4K', roi: '+245%' },
                                                  { channel: 'Email', revenue: '$28.1K', roi: '+890%' },
                                                ].map((row) => (
                                                  <div key={row.channel} className="grid grid-cols-3 gap-2 px-2 py-1 border-b border-gray-100 last:border-0">
                                                    <span className="text-[7px] text-gray-600">{row.channel}</span>
                                                    <span className="text-[7px] text-gray-800 text-right font-medium">{row.revenue}</span>
                                                    <span className="text-[7px] text-green-600 text-right">{row.roi}</span>
                                                  </div>
                                                ))}
                                              </div>

                                              {/* e2b badge */}
                                              <div className="absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/80 backdrop-blur-sm border border-gray-200">
                                                <span className="text-[7px] text-gray-400">Powered by</span>
                                                <span className="text-[7px] text-gray-600 font-medium">e2b.dev</span>
                                              </div>
                                            </div>

                                            {/* Card Footer */}
                                            <div className="p-2.5 border-t border-gray-200 bg-white">
                                              <div className="flex items-center justify-between gap-2">
                                                <div className="min-w-0">
                                                  <div className="flex items-center gap-1.5">
                                                    <h4 className="text-[11px] font-semibold text-black truncate group-hover:text-signature transition-colors">
                                                      {previewData.title}
                                                    </h4>
                                                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-signature group-hover:translate-x-0.5 transition-all" />
                                                  </div>
                                                  <p className="text-[9px] text-gray-400 mt-0.5 truncate">
                                                    {previewData.url}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      );
                                    }
                                        return null;
                                      });
                                    }
                                    
                                    // For non-agent messages, render normally
                                    return message.content.map((part, i) => {
                                      if (part.type === 'mention') {
                                        return (
                                          <span
                                            key={i}
                                            className="inline-flex items-center px-1.5 py-0.5 rounded bg-signature/10 text-signature font-medium"
                                          >
                                            {part.text}
                                          </span>
                                        );
                                      }
                                      if (part.type === 'text' && part.text) {
                                        return <span key={i}>{part.text}</span>;
                                      }
                                      // Handle other content types for non-agent messages (simplified)
                                      return null;
                                    });
                                  })()}
                                </div>

                                {/* Reactions - only show when streaming is complete */}
                                {message.reactions && (!message.isAgent || streamingComplete[message.id]) && (
                                  <div className="flex gap-1.5 mt-2">
                                    {message.reactions.map((reaction, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200"
                                      >
                                        <span className="text-[11px]">{reaction.emoji}</span>
                                        <span className="text-[10px] text-gray-500">{reaction.count}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                      </AnimatePresence>

                      {/* Typing indicator */}
                      <AnimatePresence>
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-[11px] text-gray-400"
                          >
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span>AI Agent is typing...</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Scroll anchor */}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Interactive suggestion chips */}
                    <div className="px-3 pt-3 pb-2 border-t border-gray-200 bg-white">
                      <div className="flex items-center gap-1.5 mb-2 overflow-x-auto scrollbar-hidden">
                        <span className="text-[10px] text-gray-400 shrink-0">Try:</span>
                        {(activeChannel === 'seo-campaigns' ? [
                          { label: 'Run site audit', icon: '🔍', prompt: '@SEO Specialist run a technical audit on our website' },
                          { label: 'Find keywords', icon: '🎯', prompt: '@SEO Specialist find low competition keywords for our niche' },
                          { label: 'Check rankings', icon: '📊', prompt: '@SEO Specialist show me our current keyword rankings' },
                          { label: 'Fix errors', icon: '🔧', prompt: '@SEO Specialist fix the critical SEO issues you found' },
                        ] : activeChannel === 'reports' ? [
                          { label: 'Monthly report', icon: '📊', prompt: '@Data Analyst generate a full monthly performance report' },
                          { label: 'ROI analysis', icon: '💰', prompt: '@Data Analyst create an ROI breakdown report by channel' },
                          { label: 'Competitor report', icon: '🎯', prompt: '@Data Analyst generate a competitor analysis report' },
                          { label: 'Client dashboard', icon: '📈', prompt: '@Data Analyst build an interactive client dashboard' },
                        ] : [
                          { label: 'Check ad performance', icon: '📈', prompt: '@Data Analyst pull our Facebook Ads metrics for this week' },
                          { label: 'Generate video ads', icon: '🎬', prompt: '@Graphic Designer create 3 new video ads for retargeting' },
                          { label: 'Update WordPress', icon: '🌐', prompt: '@Content Writer update the landing page headline and copy' },
                          { label: 'Analyze ROI', icon: '💰', prompt: '@Data Analyst show me the ROI breakdown by campaign' },
                        ]).map((chip) => (
                          <button
                            key={chip.label}
                            onClick={() => handleChannelChange(activeChannel)}
                            className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 shrink-0"
                          >
                            <span className="text-[11px]">{chip.icon}</span>
                            <span className="text-[10px] text-gray-500 group-hover:text-gray-700 whitespace-nowrap">{chip.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Message input */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-[11px] text-gray-400">Message #{activeChannel}</span>
                        <div className="ml-auto flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center">
                            <span className="text-[10px] text-gray-400">@</span>
                          </div>
                          <Send className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise logos */}
          <motion.div
            variants={itemVariants}
            className="mt-24 w-full"
          >
            <p className="text-center text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em] mb-8">
              Trusted by leading {isBusinessOwner ? 'businesses' : 'agencies'} worldwide
            </p>

            {/* Logo marquee */}
            <div className="relative overflow-hidden">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

              <motion.div
                className="flex items-center gap-16"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...enterpriseLogos, ...enterpriseLogos].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className={`${logo.width} shrink-0 flex items-center justify-center`}
                  >
                    <span className="text-sm font-semibold text-gray-300 tracking-wide whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
