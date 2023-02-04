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
  <button @click="toggleSideBar" id="toggle-side-bar-visibility-button">
    <i class="bi bi-list"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",

  data() {
    return {
      isVisible: true,
      isScreenSmall: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.checkSideBarVisibility);
    this.checkSideBarVisibility();
  },

  unmounted() {
    window.removeEventListener("resize", this.checkSideBarVisibility);
  },

  methods: {
    setSideBarVisibility(isVisible: boolean) {
      const sideBar = document.querySelector(".side-bar-main") as HTMLElement;
      const toggleSideBarVisibilityButton = document.querySelector(
        "#toggle-side-bar-visibility-button"
      );

      if (sideBar) {
        if (isVisible) {
          sideBar.style.transform = "translateX(0)";
          sideBar.style.position = this.isScreenSmall ? "absolute" : "relative";
          toggleSideBarVisibilityButton.innerHTML = "<i class='bi bi-x'></i>";
          this.isVisible = true;
        } else {
          sideBar.style.transform = "translateX(-100%)";
          sideBar.style.position = "absolute";
          toggleSideBarVisibilityButton.innerHTML =
            "<i class='bi bi-list'></i>";
          this.isVisible = false;
        }
      }
    },

    checkSideBarVisibility() {
      const width = window.innerWidth;
      if (width < 992) {
        this.isScreenSmall = true;
        this.setSideBarVisibility(false);
      } else {
        this.isScreenSmall = false;
        this.setSideBarVisibility(true);
      }
    },

    toggleSideBar() {
      this.setSideBarVisibility(!this.isVisible);
    },
  },
});
</script>

<style lang="scss" scoped>
.side-bar-main {
  position: relative;
  width: 260px;
  top: 0;
  bottom: 0;
  padding: 3rem 1rem 2rem;
  background: var(--sidebar-bg);
  color: var(--sidebar-text-color);
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  @include transition(all);

  @include media("<lg") {
    position: absolute;
    transform: translateX(-100%);
  }
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

#toggle-side-bar-visibility-button {
  @include transition(all);

  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 1rem;
  display: none;

  @include media("<lg") {
    display: block;
  }
}
</style>
