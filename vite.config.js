import postcss from 'postcss'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css:{
    postcss
  },
  define: {
    "global": {},
  },
})
