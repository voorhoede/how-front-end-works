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
  font-size: var(--font-size-default);
  text-align: center;
}

@media (min-width: 600px) {
  .footer {
    font-size: var(--font-size-smaller);
  }
}

.footer >>> p {
  margin-bottom: 0;
}
</style>