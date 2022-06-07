<template>
  <main style="padding: 100px 0">
    <cv-section
      v-for="(section, index) in cv.sections"
      :key="section.section"
      :data="section"
      :style="{ 'background-color': colors[index % colors.length] }"
    ></cv-section>
  </main>
  <cv-footer :data="cv.socials"></cv-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cv } from "../types/cv-types";
import data from "../content/cv.json";

export default defineComponent({
  data(): { cv: Cv; colors: Array<string> } {
    return {
      cv: null,
      colors: [
        "#32b007",
        "#009e52",
        "#008a73",
        "#007580",
        "#006075",
        "#2e4756",
        "#B01F19",
        "#A8B010",
        "#6919B0",
        "#10B04A",
      ],
    };
  },
  created() {
    this.cv = data;
  },
});
</script>
