<template>
  <a class="back-button" href="/">
    Back to overview
  </a>
</template>

<script>
export default {
  props: ['label, url']
}
</script>

<style scoped>
@import '../assets/core.css';

.back-button {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--spacing-default);
  background: none;
  font-size: var(--font-size-smaller);
}

.back-button:before {
  content: '';
  display: inline-block;
  transform: rotate(-90deg);
  margin-right: var(--spacing-half);
  width: 1.2rem;
  height: 1.2rem;
  background: url('/icons/arrow.svg') center no-repeat;
}

@media (min-width: 920px) {
  .back-button {
    float: left;
    flex-direction: column;
    align-items: flex-end;
    margin-left: -140px;
  }

  .back-button:before {
    margin-right: 0;
  }
}
</style>