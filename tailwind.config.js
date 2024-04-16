/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'example': "url(./images/CheckCircle.svg)",
      'justImage': "url(./images/justImage.jpg)",
    }
  },

  plugins: [],
}

