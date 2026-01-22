import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    //   colors: {
    //     'primaryRed': '#9D2137',
    //     'primary-blue': '#0066FF',
    //     'secondary-green': '#00AA00',
    //     // Add more colors here
    //   },
    },
  },
  plugins: [],
}
export default config