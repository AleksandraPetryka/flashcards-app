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
        customColorBrand: '#24b47e',
        customSecondary: '#666',
        customBgColor: '#101010',
        customPanelColor: '#222',
        customColor: '#fff',
        customBorderColor: '#333',
        customImageBorder: '#c8c8c8',
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
