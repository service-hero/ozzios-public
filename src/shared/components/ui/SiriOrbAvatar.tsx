import * as React from 'react';
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import SiriOrb, { SiriOrbState, SiriOrbPattern } from "@/shared/components/ui/smoothui/ui/SiriOrb";
import { cn } from '@/lib/utils';

export type AgentVariant = 'default' | 'seo' | 'social' | 'creative' | 'tech' | 'supervisor' | 'onboarding' | 'sad' | 'gamer' | 'nature' | 'cosmic';

interface SiriOrbAvatarProps {
  size?: 'sm' | 'md' | 'lg' | number;
  className?: string;
  orbState?: SiriOrbState;
  disableFloating?: boolean;
  variant?: AgentVariant | string; // Allow string for loose typing from DB
}

const sizeMap = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

// DiceBear Glass Theme - Frosted glass aesthetic with layered transparency
const glassBase = 'backdrop-blur-md shadow-xl border border-white/20 ring-1 ring-white/10';

const variantClasses: Record<string, string> = {
  default: '',
  seo: `${glassBase} bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-indigo-500/60`,
  social: `${glassBase} bg-gradient-to-tr from-violet-500/80 via-fuchsia-500/70 to-rose-400/60`,
  creative: `${glassBase} bg-gradient-to-br from-yellow-300/80 via-amber-400/70 to-orange-400/60`,
  tech: `${glassBase} bg-gradient-to-br from-zinc-800/90 via-zinc-900/80 to-emerald-950/70 border-emerald-500/20`,
  supervisor: `${glassBase} bg-gradient-to-br from-red-500/80 via-rose-600/70 to-red-800/60`,
  // Onboarding variant: warm orange wizard theme for Ozzi
  // WHY: Orange is welcoming, energetic, and feels magical - perfect for onboarding
  onboarding: `${glassBase} bg-gradient-to-br from-orange-400/85 via-orange-500/75 to-amber-600/65`,
  // Sad variant: red error-like gradient for out-of-credits state
  // WHY: Makes it visually clear something is wrong - orb is "erroring out" while crying
  sad: `${glassBase} bg-gradient-to-br from-red-500/90 via-rose-600/80 to-red-700/70 border-red-400/30`,
  // New Fun Variants
  gamer: `${glassBase} bg-gradient-to-br from-purple-600/90 via-fuchsia-600/80 to-pink-500/70 border-purple-400/30`,
  nature: `${glassBase} bg-gradient-to-br from-lime-400/80 via-green-500/70 to-emerald-600/60`,
  cosmic: `${glassBase} bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-slate-900/80 border-indigo-400/30`,
};

const variantColors: Record<string, string | undefined> = {
  default: undefined,
  seo: 'white',
  social: 'white',
  creative: '#78350f', // Dark amber eyes
  tech: '#10b981', // Emerald eyes
  supervisor: 'white',
  onboarding: 'white', // White eyes on orange background for Ozzi
  sad: 'white', // White eyes against red background for contrast
  gamer: '#00ff00', // Retro green eyes
  nature: '#f0fdf4', // Soft white/green eyes
  cosmic: '#a5b4fc', // Soft indigo eyes
};

const variantPatterns: Record<string, SiriOrbPattern> = {
  default: 'none',
  seo: 'grid',
  social: 'dots',
  creative: 'waves',
  tech: 'circuit',
  supervisor: 'noise',
  onboarding: 'sparkles',
  sad: 'noise',
  gamer: 'pixels',
  nature: 'leaves',
  cosmic: 'stars',
};

export function SiriOrbAvatar({ 
  size = 'md', 
  className, 
  orbState = 'idle', 
  disableFloating = false,
  variant = 'default'
}: SiriOrbAvatarProps) {
  // Resolve size to a pixel value number
  const pixelSize = React.useMemo(() => {
    if (typeof size === 'number') return size;
    const map = { sm: 24, md: 32, lg: 40 };
    return map[size] || 32;
  }, [size]);

  const sizeStyle = { width: `${pixelSize}px`, height: `${pixelSize}px` };
  
  // We override standard Avatar classes if a custom number size is provided
  const sizeClass = typeof size === 'string' ? sizeMap[size] : undefined;

  const orbClassName = variantClasses[variant] || variantClasses.default;
  const orbColor = variantColors[variant] || variantColors.default;
  const orbPattern = variantPatterns[variant] || variantPatterns.default;

  return (
    <Avatar 
      className={cn("bg-transparent overflow-visible", sizeClass, className)}
      style={typeof size === 'number' ? sizeStyle : undefined}
    >
      <AvatarFallback className="overflow-visible border-0 bg-transparent p-0 flex items-center justify-center w-full h-full">
        {/* 
           Wrapper to ensure the Orb has space to bounce without being clipped 
           We remove the strict width/height constraint on the wrapper to allow scaling
        */}
        <div className="relative flex items-center justify-center" style={sizeStyle}>
          <SiriOrb 
            size={pixelSize} 
            orbState={orbState} 
            disableFloating={disableFloating} 
            className={orbClassName}
            color={orbColor}
            pattern={orbPattern}
            patternOpacity={0.2}
          />
        </div>
      </AvatarFallback>
    </Avatar>
  );
}
