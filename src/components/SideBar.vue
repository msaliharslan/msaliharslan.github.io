<template>
  <div class="side-bar-main">
    <contact-card></contact-card>

    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/inspirations">Inspirations</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
});
</script>

<style lang="scss" scoped>
.side-bar-main {
  width: 260px;
  top: 0;
  bottom: 0;
  padding: 3rem 1rem 2rem;
  background: var(--sidebar-bg);
  color: var(--sidebar-text-color);
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}

nav {
  ul {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: left;
    margin: 0 auto;
    padding: 0;
    gap: 0.2rem;
  }
}

nav a {
  @include transition(color);

  color: var(--sidebar-text-color);
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    color: var(--sidebar-active-color);
  }
}
</style>
