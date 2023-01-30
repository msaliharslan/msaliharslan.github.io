<template>
  <address>
    <img src="~/assets/img/ai_pp_16.jpg" alt="profile picture" />
    <h1 class="name">{{ name }}</h1>
    <span>{{ headline }}</span>
    <span>{{ location }}</span>

    <ul class="contact-icons">
      <li>
        <a :href="linkedinUrl" target="_blank" aria-label="Linkedin">
          <i class="bi bi-linkedin" role="img"></i>
        </a>
      </li>
      <li>
        <a :href="githubUrl" target="_blank" aria-label="GitHub">
          <i class="bi bi-github" role="img"></i>
        </a>
      </li>
      <li>
        <a :href="'mailto:' + email" aria-label="email">
          <i class="bi bi-envelope-fill" role="img"></i>
        </a>
      </li>
    </ul>
  </address>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCard",

  data() {
    return {
      name: "M. Salih Arslan",
      headline: "Software Developer",
      location: "Munich, Germany",

      linkedinUrl: "https://www.linkedin.com/in/msaliharslan",
      githubUrl: "https://github.com/msaliharslan",
      email: "m_salih_arslan@hotmail.com",
    };
  },
});
</script>

<style lang="scss" scoped>
address {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: transparent;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

.description {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.contact-icons {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0.5rem auto;
  padding: 0;
  gap: 1.2ch;

  li {
    @extend %center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--sidebar-btn-bg);
  }

  i {
    @include transition(color);

    font-size: 1em;
    color: var(--sidebar-text-color);

    &:hover {
      color: var(--sidebar-active-color);
    }
  }
}
</style>
