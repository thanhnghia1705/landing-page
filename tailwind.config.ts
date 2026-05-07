import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(15,23,42,0.06), 0 24px 48px -24px rgba(15,23,42,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config

