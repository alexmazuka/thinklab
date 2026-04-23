import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        noesis: {
          ink: '#0B0F1A',
          'ink-soft': '#1a1f2e',
          accent: '#E8F14A',
          paper: '#F7F7F2',
          'paper-2': '#EFEFE8',
          grey: '#6B7280',
          'grey-soft': '#A8B2C7',
          line: '#E3E3DC',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
        narrow: '40rem',
      },
    },
  },
  plugins: [],
};

export default config;
