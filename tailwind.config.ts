import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        clr1: '#FFACAC',
        clr2: '#DB68DB',
        clr3: '#313538',
        clr4: '#FF0060',
      },
      fontFamily:{
        gotham: ["GOTHAM"],
        agrandir: ["AGRANDIR"]
      }
    },
  },
  plugins: [],
}
export default config
