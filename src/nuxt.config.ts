import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
            @use '~/assets/style/variables' as *;
            @use '~/assets/style/main.scss'; 
            `,
        },
      },
    },
  },
});
