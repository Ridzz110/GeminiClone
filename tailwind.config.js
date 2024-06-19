// tailwind.config.js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        side_bar_grey: '#f0f4f9',
        sidebar_circle_grey: '#dde3ea',
        sidebar_plus: '#b0b0b0',
        hovered_grey: '#c9cfd6',
        black: '#1f1f1f',
        textGrey: '#C4C7C5',
        gradientBlue: '#5681EB',
        gradientPurple: '#B06EAC',
        gradientPink: '#D46678',
        loadBlue: '#5486EF'
      },
      fontFamily: { 
        "noto": ['outfit', 'sans-serif'] 
      },
      animation: {
        'loading-combined': 'loading-width 1s ease-in-out forwards, loading-gradient 2s ease-in-out infinite',
      },
      keyframes: {
        'loading-width': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left'},
        },
        'loading-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '25%' : { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        'loading': '200% 100%',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
