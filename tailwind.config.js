/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f8f8fa',
      'tango': '#e76d03',
      'persian': {
        100: '#2c1078',
        300: '#34087a',
        500: '#28017c'
      },
      'portgore': '#3c4169',
      'blue': {
        100: '#f7f9ff',
        500: '#1fb6ff',
      },
      'purple': {
        500: '#7e5bef'
      },
      'pink': { 500: '#ff49db' },
      'orange': {
        500: '#f97316'
      },
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'midnight-blue': {
        100: '#121063',
        300: '#221F6D',
        500: '#1b1464',
      }
    },
    fontFamily: {
      sans: ['Alata', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        'sans': ['Alata', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
        'hero-lg': 'repeat(2,1fr)',
        'hero-md': 'repeat(1,1fr)'
      }
    },
  },
  plugins: [
    import('@tailwindcss/typography')
  ],
}