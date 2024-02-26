import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#101010',
        secondary: '#0171E2',
        white: '#FFFFFF',
        gray: {
          100: '#F0F0F5',
          200: '#DADADA',
          300: '#626A76',
        },
        auxiliary: {
          success: '#00B775',
          info: '#4C72DC',
          warning: '#FFB728',
          danger: '#F35663',
        },
      },
    },
  },
  plugins: [],
}
export default config
