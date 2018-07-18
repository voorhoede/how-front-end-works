<template>
  <div class="jump-to-top">
    <a class="jump-to-top__button" href="#top">
      Jump to top of page
    </a>
  </div>
</template>

<style scoped>
@import '~assets/core.css';

.jump-to-top {
  border-bottom: 1px solid var(--grey-medium);
}

.jump-to-top__button {
  overflow: hidden;
  display: block;
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  transform: translateY(50%);
  background-image: url('/icons/arrow-up.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--grey-light);
  border: 1px solid var(--grey-medium);
  border-radius: 50%;
  text-indent: 100%;
  white-space: nowrap;
}
</style>