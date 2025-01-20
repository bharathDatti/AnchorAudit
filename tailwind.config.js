/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans: ['Parkinsans', 'sans-serif'],
      },
      animation: {
        'text-reveal': 'text-reveal 1s ease forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': { 'background-position': '100% 0%' },
          '100%': { 'background-position': '0% 0%' },
        },
      },
      animation: {
        greentopBubbles: "greentopBubbles 0.6s ease",
        greenbottomBubbles: "greenbottomBubbles 0.6s ease",
      },
      keyframes: {
        greentopBubbles: {
          "0%": {
            "background-position": `
              5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 
              25% 90%, 40% 90%, 55% 90%, 70% 90%`,
          },
          "50%": {
            "background-position": `
              0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 
              22% 50%, 50% 50%, 65% 20%, 90% 30%`,
          },
          "100%": {
            "background-position": `
              0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 
              22% 40%, 50% 40%, 65% 10%, 90% 20%`,
            "background-size": `0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
          },
        },
        greenbottomBubbles: {
          "0%": {
            "background-position": `
              10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 
              70% -10%, 70% 0%`,
          },
          "50%": {
            "background-position": `
              0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 
              95% 60%, 105% 0%`,
          },
          "100%": {
            "background-position": `
              0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 
              95% 70%, 110% 10%`,
            "background-size": `0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
          },
        },
      },
    },
  },
  plugins: [],
},
};
