<template>
  <main style="padding: 100px 0">
    <h1 class="page-title content">My resume</h1>
    <cv-section
      v-for="section in cv.sections"
      :key="section.section"
      :data="section"
    ></cv-section>
  </main>
  <cv-footer :data="cv.socials"></cv-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cv } from "../types/cv-types";
import data from "../content/cv.json";

export default defineComponent({
  data(): { cv: Cv } {
    return {
      cv: null,
    };
  },
  created() {
    this.cv = data;
  },
});
</script>

<style scoped>
h1 {
  font-size: 2.83rem;
  line-height: 1.6;
  padding: 2rem 0;
}
</style>
