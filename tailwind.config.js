/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'irish-green': '#169B62',    // Irish flag green
        'irish-orange': '#FF883E',   // Irish flag orange
        'irish-cream': '#f8f6f3',    // Warm cream background
        'emerald': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#169B62',
          600: '#0d6d44',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        primary: '#169B62',          // Map to Irish green
        accent: '#FF883E',           // Map to Irish orange
        teal: '#4ECDC4',
        sand: '#f8f6f3',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
