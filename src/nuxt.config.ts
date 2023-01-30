// import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Mehmet Salih Arslan",
      meta: [
        {
          name: "description",
          content: "My personal web page",
        },
      ],
    },
  },

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
          @use '~/styles/global' as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/content"],

  content: {
    documentDriven: {
      // Will fetch navigation, page and surround.
      navigation: true,
      page: true,
      surround: true,
      // Will fetch `content/_theme.yml` and put it in `globals.theme` if present.
      globals: {
        theme: {
          where: {
            _id: "content:_theme.yml",
          },
          without: ["_"],
        },
      },
      // Will use `theme` global to search for a fallback `layout` key.
      layoutFallbacks: ["theme"],
      // Will inject `[...slug].vue` as the root page.
      injectPage: true,
    },

    ignores: ["LICENSE"],
  },
});
