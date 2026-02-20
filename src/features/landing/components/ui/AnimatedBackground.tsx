import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute w-full h-[200%] opacity-[0.025] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="premium-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#premium-grid)" />
      </svg>
      
      {/* Animated SVG Lines for premium enterprise feel */}
      <svg className="absolute inset-x-0 top-0 w-full h-[100vh] max-h-[1000px] opacity-30 dark:opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M-10,50 Q25,30 50,50 T110,50"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="0.1"
          animate={{
            d: [
              "M-10,50 Q25,30 50,50 T110,50",
              "M-10,50 Q25,70 50,50 T110,50",
              "M-10,50 Q25,30 50,50 T110,50"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M-10,60 Q35,40 60,60 T110,60"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="0.05"
          animate={{
            d: [
              "M-10,60 Q35,40 60,60 T110,60",
              "M-10,60 Q35,80 60,60 T110,60",
              "M-10,60 Q35,40 60,60 T110,60"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--oz-signature))" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-signature blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-foreground blur-[150px]"
      />
    </div>
  );
}
