import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f9fb',
        'on-background': '#191c1e',
        'surface-container-low': '#f2f4f6',
        surface: '#f7f9fb',
        'on-surface': '#191c1e',
        'on-surface-variant': '#424656',
        'primary-container': '#0066ff',
        'on-primary': '#ffffff',
        'primary-fixed': '#dae1ff',
        'on-primary-fixed-variant': '#003fa4',
        'secondary-fixed': '#ffe07f',
        'tertiary-container': '#c84346',
        'on-tertiary': '#ffffff',
        'outline-variant': '#c2c6d8',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Lexend', 'sans-serif'],
      },
      animation: {
        'scroll-y': 'scrollVertical 30s linear infinite',
        'pulse-glow': 'pulse-glow-blue 3s ease-in-out infinite',
      },
      keyframes: {
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'pulse-glow-blue': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 102, 255, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 102, 255, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;