/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'bg-hills',
    'bg-desert',
    'bg-mountain',
    'bg-plains',
    'bg-beach',
    'bg-rainforest'],
  theme: {
    extend: {
      backgroundImage: {
        'desert': "url('assets/desert.jpg')",
        'rainforest': "url('assets/rainforest.jpg')",
        'mountain': "url('assets/mountain.jpg')",
        'beach': "url('assets/beach.jpg')",
        'plains': "url('assets/plains.jpg')",
        'hills': "url('assets/hills.jpg')"
      }
    },
  },
  plugins: [],
}
