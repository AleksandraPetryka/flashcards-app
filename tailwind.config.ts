import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customColorBrand: '#60A5FA',
        customSecondary: '#939BB4',
        customBgColor: '#101010',
        customPanelColor: '#222',
        customColor: '#fff',
        customBorderColor: '#656b7d',
        customImageBorder: '#c8c8c8',
        customNavigation: '#282e3e',
        customDarkNavigation: '#2e3856',
      },
      boxShadow: {
        'custom': '0 2px 8px 0 rgba(0, 0, 0, 0.8)',
      },
      spacing: {
        'custom': '5px',
      },
      borderWidth: {
        'custom': '1px',
      },
      borderRadius: {
        'custom': '5px',
      },
    },
  },
  plugins: [],
}
export default config
