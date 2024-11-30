/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'menuColor': '#767676',
        'hoverColor': '#262626',
        'catagoriColor': '#F5F5F3',
        'borderColor': '#F0F0F0',
        'gColor': '#6D6D6D',

      },
      backgroundImage: {
        'banner': "url('/src/assets/Intro.png')",
        'yearbg': "url('/src/assets/add2.png')",
        
        
      }
    },
  },
  plugins: [],
}

