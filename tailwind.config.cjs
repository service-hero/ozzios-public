/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // Neo-Contemporary Signature Color - Electric Coral
        signature: {
          DEFAULT: 'hsl(var(--oz-signature))',
          light: 'hsl(var(--oz-signature-light))',
        },
        // Accent Colors - Solid, Vibrant
        electric: {
          DEFAULT: 'hsl(var(--oz-electric))',
        },
        mint: {
          DEFAULT: 'hsl(var(--oz-mint))',
        },
        sun: {
          DEFAULT: 'hsl(var(--oz-sun))',
        },
        // Neutral Scale
        ink: 'hsl(var(--oz-ink))',
        paper: 'hsl(var(--oz-paper))',
        stone: 'hsl(var(--oz-stone))',
        // Legacy color support - mapped to new system
        amber: {
          DEFAULT: 'hsl(var(--oz-signature))',
          300: 'hsl(var(--oz-signature-light))',
          400: 'hsl(var(--oz-signature))',
          500: 'hsl(var(--oz-signature))',
          600: 'hsl(12 100% 55%)',
        },
        indigo: {
          DEFAULT: 'hsl(var(--oz-electric))',
          300: 'hsl(250 100% 75%)',
          400: 'hsl(var(--oz-electric))',
          500: 'hsl(var(--oz-electric))',
          600: 'hsl(250 100% 55%)',
        },
        emerald: {
          DEFAULT: 'hsl(var(--oz-mint))',
          300: 'hsl(160 84% 55%)',
          400: 'hsl(var(--oz-mint))',
          500: 'hsl(var(--oz-mint))',
          600: 'hsl(160 84% 35%)',
        },
        violet: {
          DEFAULT: 'hsl(280 100% 65%)',
          300: 'hsl(280 100% 75%)',
          400: 'hsl(280 100% 65%)',
          500: 'hsl(280 100% 60%)',
          600: 'hsl(280 100% 50%)',
        },
        blue: {
          DEFAULT: 'hsl(220 100% 60%)',
          300: 'hsl(220 100% 70%)',
          400: 'hsl(220 100% 60%)',
          500: 'hsl(220 100% 55%)',
          600: 'hsl(220 100% 45%)',
        },
        pink: {
          DEFAULT: 'hsl(330 100% 65%)',
          300: 'hsl(330 100% 75%)',
          400: 'hsl(330 100% 65%)',
          500: 'hsl(330 100% 60%)',
          600: 'hsl(330 100% 50%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pop': 'pop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'neo': '4px 4px 0 0 hsl(var(--border))',
        'neo-lg': '6px 6px 0 0 hsl(var(--border))',
        'neo-signature': '4px 4px 0 0 hsl(var(--oz-signature))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
