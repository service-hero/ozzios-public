import React from 'react';
import { SiriOrbAvatar } from '@/shared/components/ui/SiriOrbAvatar';
import SiriOrb, { SiriOrbState } from '@/shared/components/ui/smoothui/ui/SiriOrb';
import { cn } from '@/lib/utils';

// ----------------------------------------------------------------------
// DiceBear Glass Theme Agent Variations
// Inspired by https://api.dicebear.com/9.x/glass/
// Features: Frosted glass aesthetic, layered transparency, vibrant colors
// ----------------------------------------------------------------------

// Shared glass styling for all agents
const glassBaseStyles = "backdrop-blur-md shadow-xl border border-white/20 ring-1 ring-white/10";

// ----------------------------------------------------------------------
// Variation 1: The "SEO Specialist" (Analytical, Trustworthy)
// Cool cyan glass with frosted depth
// ----------------------------------------------------------------------
export const SeoAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        {/* Layered glow for glass depth effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="white"
          disableFloating={true}
          pattern="grid"
          patternOpacity={0.2}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-indigo-500/60"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">SEO Agent</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 2: The "Social Media Manager" (Vibrant, Energetic)
// Purple-pink glass with instagram-inspired warmth
// ----------------------------------------------------------------------
export const SocialAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-fuchsia-500/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="white"
          disableFloating={true}
          pattern="dots"
          patternOpacity={0.15}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-tr from-violet-500/80 via-fuchsia-500/70 to-rose-400/60"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Social Agent</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 3: The "Creative Strategist" (Warm, Innovative)
// Amber-gold glass with sunny creativity
// ----------------------------------------------------------------------
export const CreativeAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-orange-300/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="#78350f" // Dark amber eyes for contrast
          disableFloating={true}
          pattern="waves"
          patternOpacity={0.15}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-yellow-300/80 via-amber-400/70 to-orange-400/60"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Creative Agent</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 4: The "Tech Lead" (Modern, Sleek)
// Emerald glass with dark sophistication
// ----------------------------------------------------------------------
export const TechAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-teal-400/15 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="#10b981"
          disableFloating={true}
          pattern="circuit"
          patternOpacity={0.25}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-emerald-950/70",
            "border-emerald-500/20"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Tech Agent</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 5: The "Supervisor" (Authoritative, Commanding)
// Red glass with commanding presence
// ----------------------------------------------------------------------
export const SupervisorAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-rose-400/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="white"
          disableFloating={true}
          pattern="noise"
          patternOpacity={0.3}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-red-500/80 via-rose-600/70 to-red-800/60"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Supervisor</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 6: The "Ozzi" (Onboarding Wizard)
// Warm orange glass with magical, welcoming energy
// ----------------------------------------------------------------------
export const OzziAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        {/* Magical orange glow for wizard feel */}
        <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="white"
          disableFloating={true}
          pattern="sparkles"
          patternOpacity={0.4}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-orange-400/85 via-orange-500/75 to-amber-600/65"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Ozzi</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 8: The "Gamer" (Pixel Art, Retro)
// Purple/Pink glass with pixel pattern
// ----------------------------------------------------------------------
export const GamerAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-pink-400/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="#00ff00"
          disableFloating={true}
          pattern="pixels"
          patternOpacity={0.2}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-purple-600/90 via-fuchsia-600/80 to-pink-500/70 border-purple-400/30"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Gamer</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 9: The "Nature" (Organic, Peaceful)
// Green glass with leaf pattern
// ----------------------------------------------------------------------
export const NatureAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="#f0fdf4"
          disableFloating={true}
          pattern="leaves"
          patternOpacity={0.15}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-lime-400/80 via-green-500/70 to-emerald-600/60"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Nature</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 10: The "Cosmic" (Deep Space, Mysterious)
// Deep blue/indigo glass with star pattern
// ----------------------------------------------------------------------
export const CosmicAgentOrb = ({ 
  state = 'idle', 
  className, 
  size = 64 
}: { 
  state?: SiriOrbState; 
  className?: string; 
  size?: number 
}) => {
  return (
    <div className={cn("relative flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl scale-125" />
        <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-md" />
        <SiriOrb 
          orbState={state} 
          size={size}
          color="#a5b4fc"
          disableFloating={true}
          pattern="stars"
          patternOpacity={0.3}
          className={cn(
            glassBaseStyles,
            "bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-slate-900/80 border-indigo-400/30"
          )} 
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground">Cosmic</span>
    </div>
  );
};

// ----------------------------------------------------------------------
// Variation 7: The "Avatar Wrapper" Example
// Shows how to use glass styles within the SiriOrbAvatar component
// ----------------------------------------------------------------------
export const AgentAvatarRow = () => {
  return (
    <div className="flex -space-x-2 overflow-hidden p-2">
      <SiriOrbAvatar 
        className={cn(
          glassBaseStyles,
          "bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-indigo-500/60 ring-2 ring-background"
        )}
        orbState="idle"
        disableFloating={true}
        variant="seo"
      />
      <SiriOrbAvatar 
        className={cn(
          glassBaseStyles,
          "bg-gradient-to-tr from-violet-500/80 via-fuchsia-500/70 to-rose-400/60 ring-2 ring-background"
        )}
        orbState="listening"
        disableFloating={true}
        variant="social"
      />
      <SiriOrbAvatar 
        className={cn(
          glassBaseStyles,
          "bg-gradient-to-br from-yellow-300/80 via-amber-400/70 to-orange-400/60 ring-2 ring-background"
        )}
        orbState="happy"
        disableFloating={true}
        variant="creative"
      />
      <SiriOrbAvatar 
        className={cn(
          glassBaseStyles,
          "bg-gradient-to-br from-purple-600/90 via-fuchsia-600/80 to-pink-500/70 border-purple-400/30 ring-2 ring-background"
        )}
        orbState="thinking"
        disableFloating={true}
        variant="gamer"
      />
    </div>
  );
};
