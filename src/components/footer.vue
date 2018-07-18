<template>
  <footer class="footer">
    <div class="center-column" v-html="body"></div>
  </footer>
</template>

<script>
export default {
  props: ['body']
}
</script>

<style scoped>
@import '~assets/core.css';

.footer {
  margin-bottom: var(--spacing-double);
  font-size: var(--font-size-smaller);
  text-align: center;
}

.footer >>> p {
  margin-bottom: 0;
}
</style>