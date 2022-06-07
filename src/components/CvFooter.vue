<template>
  <footer>
    <div class="content">
      <ul>
        <li v-if="data.email">
          <a :href="'mailto:' + data.email">
            <div class="icon">
              <i class="bi bi-envelope-fill" role="img" aria-label="email"></i>
            </div>
            <p>{{ data.email }}</p>
          </a>
        </li>
        <li v-if="data.linkedin">
          <a :href="data.linkedin.link" target="_blank">
            <div class="icon">
              <i class="bi bi-linkedin" role="img" aria-label="Linkedin"></i>
            </div>
            <p>{{ data.linkedin.username }}</p>
          </a>
        </li>
        <li v-if="data.github">
          <a :href="data.github.link" target="_blank">
            <div class="icon">
              <i class="bi bi-github" role="img" aria-label="GitHub"></i>
            </div>
            <p>{{ data.github.username }}</p>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { Socials } from "../types/cv-types";

export default defineComponent({
  props: { data: { type: Object as PropType<Socials>, required: true } },
});
</script>

<style scoped lang="scss">
@use "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
footer {
  $height: 200px;
  position: absolute;
  left: 0;
  bottom: -$height;
  margin: 0;
  width: 100%;
  height: $height;
  background-color: lightgray;
}

ul {
  list-style-type: none;
}

li {
  div {
    display: inline-block;
  }
  p {
    display: inline-block;
    margin: $icon-margin 0;
    font-size: $icon-size;
    height: $icon-size;
    color: black;
  }
  a:hover {
    p {
      text-decoration: underline;
      color: blue;
    }
  }
}
</style>
