<template>
  <section :title="data.section" class="cv-section">
    <h2 class="cv-section-title">{{ data.section }}</h2>
    <div class="cv-section-content">
      <ul class="cv-subsection-list">
        <li v-for="subsection in data.subsections" :key="subsection.title">
          <a
            class="cv-subsection-title"
            :class="{ link: subsection.link }"
            :href="subsection.link ? subsection.link : null"
            target="_blank"
          >
            <p>{{ subsection.title }}</p>
            <p>({{ subsection.date }})</p>
            <i
              v-if="subsection.link"
              class="bi bi-link-45deg"
              role="img"
              aria-label="link"
            ></i>
          </a>
          <ul class="cv-subsection-dectription-list">
            <li v-for="item in subsection.description" :key="item">
              <p>{{ item }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { CvSectionData } from "../types/cv-types";

export default defineComponent({
  props: { data: { type: Object as PropType<CvSectionData>, required: true } },
  computed: {}, // Computed
});
</script>

<style scoped lang="scss">
@use "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";

ul {
  list-style-type: none;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  p {
    text-decoration: none;
  }
  &:visited {
    color: inherit;
  }
}

.link {
  cursor: pointer;

  &:hover {
    p {
      text-decoration: underline;
    }
  }
}

.cv-section {
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.cv-section-title {
  @extend .content;
  font-weight: 700;
  font-size: 2rem;
}

.cv-section-content {
  @extend .content;
  text-align: justify;
}

.cv-subsection-list {
  padding: 0;
  li:not(:first-child) {
    padding-top: 1rem;
  }
}

.cv-subsection-title {
  display: flex;
  flex-flow: row wrap;
  gap: 1ch;
  font-weight: 550;
  font-size: 1.25rem;
}

.cv-subsection-dectription-list {
  li {
    padding: 0 !important;
    p {
      font-size: 1.25rem;
      letter-spacing: +0.3px;
    }
  }
}
</style>
