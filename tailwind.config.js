/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'neon-teal': 'var(--neon-teal)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        cyber: ['var(--font-orbitron)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'pulse-neon': {
          '0%, 100%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(56, 182, 255, 0.7), 0 0 30px rgba(56, 182, 255, 0.4), 0 0 45px rgba(56, 182, 255, 0.2)'
          },
          '50%': { 
            opacity: 0.7,
            boxShadow: '0 0 30px rgba(56, 182, 255, 0.9), 0 0 60px rgba(56, 182, 255, 0.6), 0 0 90px rgba(56, 182, 255, 0.3)'
          },
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.8 },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'pulse-neon': 'pulse-neon 3s infinite',
        'flicker': 'flicker 5s linear infinite',
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 15s linear infinite',
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'neon-blue': '0 0 5px rgba(56, 182, 255, 0.5), 0 0 20px rgba(56, 182, 255, 0.3)',
        'neon-purple': '0 0 5px rgba(124, 58, 237, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
        'neon-teal': '0 0 5px rgba(45, 212, 191, 0.5), 0 0 20px rgba(45, 212, 191, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(56, 182, 255, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(56, 182, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 182, 255, 0.1) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(56, 182, 255, 0.2) 0%, transparent 70%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(56, 182, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 182, 255, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '30px 30px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
