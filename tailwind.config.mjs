/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        text: '#071111',
        background: '#f5fbfc',
        primary: '#0d7c83',
        secondary: '#83dee5',
        accent: '#5fdde6',
      },
      width: {
        '340': '340px',
      },
    },
  },
  plugins: [],
}
