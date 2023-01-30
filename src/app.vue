<template>
  <NuxtPage />

  <button @click="toggleTheme" class="toggle-theme-button">
    <i v-if="theme == 'dark'" class="bi bi-lightbulb-fill"></i>
    <i v-else class="bi bi-lightbulb"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const theme = useState("theme", () => "");

    return {
      theme,
    };
  },

  mounted() {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        this.theme = "dark";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        this.theme = "light";
      }
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      this.theme = "dark";
    }
  },

  methods: {
    toggleTheme() {
      const theme = document.documentElement.getAttribute("data-theme");

      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        this.theme = "dark";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        this.theme = "light";
      }
    },
  },
});
</script>

<style lang="scss">
@use "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";

.toggle-theme-button {
  @include transition(all);

  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.3rem;
}
</style>
