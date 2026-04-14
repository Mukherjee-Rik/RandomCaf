/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        espresso: '#1A0A00',
        roast: '#2C1503',
        caramel: '#C8883A',
        gold: '#D4AF37',
        latte: '#D4B896',
        steam: '#EDE5D8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
        'fadeUp': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        steam: {
          '0%': { opacity: '0.8', transform: 'translateY(0) scaleX(1)' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scaleX(1.5)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}