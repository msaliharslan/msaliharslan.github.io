<template>
  <div class="main-container">
    <side-bar></side-bar>
    <main class="scroll-area">
      <div class="markdown">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  position: fixed;
  inset: 0;
  display: flex;
  flex-flow: row nowrap;
}

.scroll-area {
  overflow-y: scroll;
  flex: 1;
  display: flex;
  padding: 2rem 0;
}
</style>
