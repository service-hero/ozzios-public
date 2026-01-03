import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimation, Transition } from 'framer-motion';
import { useEventListener } from 'usehooks-ts';
import { cn } from '@/lib/utils';

export type SiriOrbState = 'idle' | 'listening' | 'speaking' | 'thinking' | 'happy' | 'sleeping' | 'sad';
export type SiriOrbPattern = 'none' | 'noise' | 'circuit' | 'grid' | 'dots' | 'waves' | 'sparkles' | 'pixels' | 'leaves' | 'stars';

interface SiriOrbProps {
  size?: string | number;
  className?: string;
  orbState?: SiriOrbState;
  color?: string;
  disableFloating?: boolean;
  pattern?: SiriOrbPattern;
  patternOpacity?: number;
}

const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
  mass: 0.8,
};

// ... (keep existing transitions if needed, but we can just use them inline or define them here)

// --- Pattern Components ---

const CircuitPattern = ({ opacity = 0.1, color = "currentColor" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10 0v5 M10 15v5 M0 10h5 M15 10h5 M10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill={color} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
  </svg>
);

const GridPattern = ({ opacity = 0.1, color = "currentColor" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke={color} strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

const DotsPattern = ({ opacity = 0.1, color = "currentColor" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="dots-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill={color} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots-pattern)" />
  </svg>
);

const WavesPattern = ({ opacity = 0.1, color = "currentColor" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="waves-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
         <path d="M0 10 Q5 5, 10 10 T20 10" fill="none" stroke={color} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#waves-pattern)" />
  </svg>
);

const SparklesPattern = ({ opacity = 0.2, color = "white" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
     <defs>
      <pattern id="sparkles-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 5 L22 18 L35 20 L22 22 L20 35 L18 22 L5 20 L18 18 Z" fill={color} transform="scale(0.3) translate(30,30)" />
        <path d="M10 5 L11 8 L14 9 L11 10 L10 13 L9 10 L6 9 L9 8 Z" fill={color} transform="translate(0, 20)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sparkles-pattern)" />
  </svg>
);

const PixelsPattern = ({ opacity = 0.15, color = "white" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="pixels-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" fill={color} />
        <rect x="8" y="8" width="4" height="4" fill={color} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pixels-pattern)" />
  </svg>
);

const LeavesPattern = ({ opacity = 0.15, color = "white" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
    <defs>
      <pattern id="leaves-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M12 24 C12 24 0 18 0 12 C0 6 6 0 12 0 C18 0 24 6 24 12 C24 18 12 24 12 24 Z M12 2 L12 22"
          fill="none" stroke={color} strokeWidth="1" transform="scale(0.5) translate(12,12)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#leaves-pattern)" />
  </svg>
);

const StarsPattern = ({ opacity = 0.2, color = "white" }: { opacity?: number; color?: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
     <defs>
      <pattern id="stars-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1" fill={color} />
        <circle cx="5" cy="25" r="0.5" fill={color} />
        <circle cx="25" cy="5" r="0.5" fill={color} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#stars-pattern)" />
  </svg>
);

const NoisePattern = ({ opacity = 0.15 }: { opacity?: number }) => (
  <div
    className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      opacity
    }}
  />
);

const SiriOrb: React.FC<SiriOrbProps> = ({
  size = 192,
  className,
  orbState = 'idle',
  color = 'currentColor',
  disableFloating = false,
  pattern = 'none',
  patternOpacity = 0.15,
}) => {
  const sizeValue = typeof size === 'string' ? parseInt(size.replace('px', ''), 10) || 192 : size;

  // Scale up eyes for smaller sizes (like avatars) to maintain visibility
  const contentScale = sizeValue < 48 ? 1.5 : 1;

  const leftEyeControls = useAnimation();
  const rightEyeControls = useAnimation();
  const containerControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef(orbState);
  const blinkingEnabledRef = useRef(true);
  const isMountedRef = useRef(false);
  const isTrackingMouseRef = useRef(false);

  // Track mount state to prevent calling controls.start() before mount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Update state ref
  useEffect(() => {
    stateRef.current = orbState;
  }, [orbState]);

  // Helper to check if eye animations can run (eyes must be rendered in DOM)
  const canAnimateEyes = useCallback(() => {
    return isMountedRef.current && stateRef.current !== 'sad';
  }, []);

  // --- Global Key Interaction (Easter Egg) ---
  const playListeningNod = useCallback(() => {
    if (!canAnimateEyes()) return;

    leftEyeControls.start({ scaleY: 1.2, scaleX: 1.1, transition: { duration: 0.1 } });
    rightEyeControls.start({ scaleY: 1.2, scaleX: 1.1, transition: { duration: 0.1 } });

    setTimeout(() => {
      if (canAnimateEyes() && stateRef.current === 'idle' && !isTrackingMouseRef.current) {
        leftEyeControls.start({ scaleY: 1, scaleX: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } });
        rightEyeControls.start({ scaleY: 1, scaleX: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } });
      }
    }, 200);
  }, [leftEyeControls, rightEyeControls, canAnimateEyes]);

  const handleGlobalKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented || !isMountedRef.current) return;
    const target = event.target as HTMLElement | null;
    if (
      target?.tagName === 'INPUT' ||
      target?.tagName === 'TEXTAREA' ||
      target?.isContentEditable
    ) return;

    if (event.key === ' ' || event.key === 'Enter') {
      playListeningNod();
    }
  };

  useEventListener('keydown', handleGlobalKeyDown);

  useEffect(() => {
    const handleListenEvent = () => playListeningNod();
    window.addEventListener('siri-orb-listen', handleListenEvent);
    return () => window.removeEventListener('siri-orb-listen', handleListenEvent);
  }, [playListeningNod]);

  // --- Mouse Tracking Logic ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Skip eye animations when in 'sad' state (eyes are X shapes, not animated rects)
      if (!containerRef.current || !isMountedRef.current || stateRef.current === 'sad') return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // "Within 100 pixels"
      if (distance < 100) {
        isTrackingMouseRef.current = true;

        // Calculate eye movement (max +/- 10px relative to SVG scale)
        // SVG viewbox is 100x100.
        // Map distance/direction to eye offset.

        const maxMove = 12;
        const moveX = Math.min(Math.max(dx / 5, -maxMove), maxMove);
        const moveY = Math.min(Math.max(dy / 5, -maxMove), maxMove);

        leftEyeControls.start({ x: moveX, y: moveY, transition: { duration: 0.1 } });
        rightEyeControls.start({ x: moveX, y: moveY, transition: { duration: 0.1 } });
      } else {
        if (isTrackingMouseRef.current) {
           // Just stopped tracking -> Restore state defaults
           isTrackingMouseRef.current = false;

           const currentState = stateRef.current;
           const resetTransition = { duration: 0.5 };

           if (currentState === 'thinking') {
             leftEyeControls.start({ x: -4, y: -4, transition: resetTransition });
             rightEyeControls.start({ x: -4, y: -4, transition: resetTransition });
           } else if (currentState === 'happy') {
             leftEyeControls.start({ x: 0, y: -2, transition: resetTransition });
             rightEyeControls.start({ x: 0, y: -2, transition: resetTransition });
           } else {
             leftEyeControls.start({ x: 0, y: 0, transition: resetTransition });
             rightEyeControls.start({ x: 0, y: 0, transition: resetTransition });
           }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [leftEyeControls, rightEyeControls]);

  // --- Blinking Logic ---
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;

    const blink = async () => {
      // Skip blinking when 'sad' (eyes are X shapes, not animated rects) or 'sleeping'
      if (!isMountedRef.current || !blinkingEnabledRef.current || stateRef.current === 'sleeping' || stateRef.current === 'sad') {
        // Still schedule next check even if we skip this blink
        if (isMountedRef.current) {
          timeoutId = setTimeout(blink, Math.random() * 3000 + 2000);
        }
        return;
      }

      const nextBlink = Math.random() * 3000 + 2000;

      try {
        await Promise.all([
          leftEyeControls.start({ scaleY: 0.1, transition: { duration: 0.05 } }),
          rightEyeControls.start({ scaleY: 0.1, transition: { duration: 0.05 } })
        ]);

        // Check mount status between animations
        if (!isMountedRef.current) return;

        await Promise.all([
          leftEyeControls.start({ scaleY: 1, transition: { duration: 0.1 } }),
          rightEyeControls.start({ scaleY: 1, transition: { duration: 0.1 } })
        ]);
      } catch {
        // Animation controls might not be ready (HMR, unmount) - skip this blink
        if (isMountedRef.current) {
          timeoutId = setTimeout(blink, nextBlink);
        }
        return;
      }

      if (isMountedRef.current) {
        timeoutId = setTimeout(blink, nextBlink);
      }
    };

    // Use requestAnimationFrame to ensure animation controls are bound to DOM before starting blink loop
    rafId = requestAnimationFrame(() => {
      if (isMountedRef.current) {
        timeoutId = setTimeout(blink, 2000);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [leftEyeControls, rightEyeControls]);

  // --- Main State Animation Loop ---
  useEffect(() => {
    if (!isMountedRef.current) return;

    let isActive = true;

    const animate = async () => {
      if (!isActive || !isMountedRef.current) return;

      const state = stateRef.current;
      const springConfig = { type: 'spring', stiffness: 300, damping: 20, mass: 0.8 } as const;

      if (state === 'idle') {
        // Gentle floating
        if (!disableFloating) {
          await containerControls.start({
            y: [0, -3, 0],
            rotate: [0, 1, -1, 0],
            transition: {
              duration: 4,
              ease: "easeInOut",
              repeat: 0
            }
          });
        } else {
          await containerControls.start({
             y: 0,
             rotate: 0,
             transition: { duration: 0.5 }
          });
          await new Promise(r => setTimeout(r, 4000));
        }

        // Occasional "look around" - only if not tracking mouse
        if (isMountedRef.current && !isTrackingMouseRef.current && Math.random() > 0.6) {
           const lookX = (Math.random() - 0.5) * 6;
           const lookY = (Math.random() - 0.5) * 4;

           await Promise.all([
             leftEyeControls.start({ x: lookX, y: lookY, transition: springConfig }),
             rightEyeControls.start({ x: lookX, y: lookY, transition: springConfig })
           ]);

           await new Promise(r => setTimeout(r, 800));

           if (isMountedRef.current && !isTrackingMouseRef.current) {
             leftEyeControls.start({ x: 0, y: 0, transition: springConfig });
             rightEyeControls.start({ x: 0, y: 0, transition: springConfig });
           }
        }

      } else if (state === 'speaking') {
        await containerControls.start({
          y: disableFloating ? 0 : [0, -4, 0],
          scaleY: [1, 1.05, 0.95, 1],
          transition: { duration: 0.4, ease: "easeInOut" }
        });

      } else if (state === 'listening') {
         containerControls.start({
           scale: 1.05,
           y: disableFloating ? 0 : 2,
           rotate: 0,
           transition: springConfig
         });

         if (!isTrackingMouseRef.current) {
           leftEyeControls.start({ x: 0, y: 0, scale: 1.1, transition: springConfig });
           rightEyeControls.start({ x: 0, y: 0, scale: 1.1, transition: springConfig });
         } else {
            // Just ensure scale is up while tracking
           leftEyeControls.start({ scale: 1.1, transition: springConfig });
           rightEyeControls.start({ scale: 1.1, transition: springConfig });
         }

         await new Promise(r => setTimeout(r, 1000));

      } else if (state === 'thinking') {
        if (!isTrackingMouseRef.current) {
            leftEyeControls.start({ x: -4, y: -4, transition: springConfig });
            rightEyeControls.start({ x: -4, y: -4, transition: springConfig });
        }

        await containerControls.start({
           rotate: [0, -2, 2, 0],
           y: disableFloating ? 0 : 0,
           transition: { duration: 1.5, ease: "easeInOut", repeat: 0 }
        });

      } else if (state === 'happy') {
        containerControls.start({
          y: disableFloating ? 0 : -5,
          transition: { type: "spring", stiffness: 300, damping: 10 }
        });

        if (!isTrackingMouseRef.current) {
            leftEyeControls.start({ scaleY: 0.4, y: -2, transition: springConfig });
            rightEyeControls.start({ scaleY: 0.4, y: -2, transition: springConfig });
        } else {
            // Keep the squint but follow mouse? Or allow tracking to override Y?
            // Tracking overrides x/y in mouse handler. Here we just set scaleY.
            leftEyeControls.start({ scaleY: 0.4, transition: springConfig });
            rightEyeControls.start({ scaleY: 0.4, transition: springConfig });
        }

        await new Promise(r => setTimeout(r, 1500));

        if (isMountedRef.current) {
          containerControls.start({ y: 0, transition: springConfig });
          if (!isTrackingMouseRef.current) {
             leftEyeControls.start({ scaleY: 1, y: 0, transition: springConfig });
             rightEyeControls.start({ scaleY: 1, y: 0, transition: springConfig });
          } else {
             leftEyeControls.start({ scaleY: 1, transition: springConfig });
             rightEyeControls.start({ scaleY: 1, transition: springConfig });
          }
        }
      } else if (state === 'sad') {
        // Sad state: container droop only - eyes are X shapes (not animated rects)
        // so we MUST NOT call leftEyeControls/rightEyeControls.start() here
        containerControls.start({
          y: disableFloating ? 0 : 2,
          rotate: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        });

        // Hold the sad expression
        await new Promise(r => setTimeout(r, 2000));
      }

      if (isActive && isMountedRef.current) {
        setTimeout(animate, 100);
      }
    };

    // Use requestAnimationFrame to ensure animation controls are bound to DOM
    const rafId = requestAnimationFrame(() => {
      if (isMountedRef.current) {
        animate();
      }
    });

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
    };
  }, [orbState, containerControls, leftEyeControls, rightEyeControls, disableFloating]);

  // WHY: Check if className contains a background class (bg-*) to avoid conflicts
  // When a variant is passed (like bg-gradient-*), we skip the default bg-black/white
  const hasCustomBackground = className?.includes('bg-');

  // Determine which pattern to render
  const renderPattern = () => {
    switch(pattern) {
      case 'circuit': return <CircuitPattern opacity={patternOpacity} color="white" />;
      case 'grid': return <GridPattern opacity={patternOpacity} color="white" />;
      case 'dots': return <DotsPattern opacity={patternOpacity} color="white" />;
      case 'waves': return <WavesPattern opacity={patternOpacity} color="white" />;
      case 'sparkles': return <SparklesPattern opacity={patternOpacity} color="white" />;
      case 'pixels': return <PixelsPattern opacity={patternOpacity} color="white" />;
      case 'leaves': return <LeavesPattern opacity={patternOpacity} color="white" />;
      case 'stars': return <StarsPattern opacity={patternOpacity} color="white" />;
      case 'noise': return <NoisePattern opacity={patternOpacity} />;
      default: return null;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'relative flex items-center justify-center rounded-full transition-colors overflow-hidden',
        // Only apply default background if no custom background is provided
        !hasCustomBackground && 'bg-black text-white dark:bg-white dark:text-black',
        className
      )}
      style={{ width: sizeValue, height: sizeValue }}
      animate={containerControls}
    >
      {/* Pattern Overlay */}
      {renderPattern()}

      {/* 3D Lens Effect Overlay - Simulates sphere lighting */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full z-20"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%)',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
        }}
      />

      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible relative z-10">
        <g style={{ transform: `scale(${contentScale})`, transformOrigin: 'center' }}>
        {orbState === 'sad' ? (
          <>
            {/* Dead Eyes - X shapes for "out of credits" error state */}
            {/* Left X Eye */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <line
                x1="22" y1="38" x2="40" y2="58"
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="40" y1="38" x2="22" y2="58"
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Right X Eye */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <line
                x1="60" y1="38" x2="78" y2="58"
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="78" y1="38" x2="60" y2="58"
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
              />
            </motion.g>
          </>
        ) : (
          <>
            {/* Normal Eyes - Rounded rectangles */}
            {/* Left Eye */}
            <motion.rect
              x="25"
              y="38"
              width="18"
              height="24"
              rx="9"
              fill={color}
              animate={leftEyeControls}
              initial={{ scaleY: 1 }}
              style={{ originX: 0.5, originY: 0.5 }}
            />

            {/* Right Eye */}
            <motion.rect
              x="57"
              y="38"
              width="18"
              height="24"
              rx="9"
              fill={color}
              animate={rightEyeControls}
              initial={{ scaleY: 1 }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          </>
        )}
        </g>
      </svg>


      {/* Optional "Cheeks" or Glow for Happy state could go here */}
      {orbState === 'happy' && (
        <motion.div
           className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl z-[-1]"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1.2 }}
           exit={{ opacity: 0 }}
        />
      )}

      {/* Sad state: Blue tears under each eye */}
      {orbState === 'sad' && (
        <>
          {/* Left tear */}
          <motion.svg
            viewBox="0 0 20 30"
            className="absolute"
            style={{
              width: sizeValue * 0.15,
              height: sizeValue * 0.22,
              left: '28%',
              top: '58%',
            }}
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              y: [0, 2, 4, 8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.6, 1],
            }}
          >
            {/* Tear drop shape */}
            <path
              d="M10 0 Q15 10, 10 20 Q5 10, 10 0"
              fill="url(#tearGradientLeft)"
            />
            <defs>
              <linearGradient id="tearGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Right tear - slightly offset timing */}
          <motion.svg
            viewBox="0 0 20 30"
            className="absolute"
            style={{
              width: sizeValue * 0.15,
              height: sizeValue * 0.22,
              right: '28%',
              top: '58%',
            }}
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              y: [0, 2, 4, 8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.6, 1],
              delay: 0.5, // Offset from left tear
            }}
          >
            {/* Tear drop shape */}
            <path
              d="M10 0 Q15 10, 10 20 Q5 10, 10 0"
              fill="url(#tearGradientRight)"
            />
            <defs>
              <linearGradient id="tearGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Red error glow behind - pulsing to emphasize the error state */}
          <motion.div
            className="absolute inset-0 bg-red-500/20 rounded-full blur-xl z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </motion.div>
  );
};

export default SiriOrb;
