import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
    strict: true,
    typeCheck: "build",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/styles/variables' as *;
            @use '~/styles/main.scss'; 
            `,
        },
      },
    },
  },
});
