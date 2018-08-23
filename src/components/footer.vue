<template>
  <footer class="footer" role="contentinfo">
    <div class="center-column" v-html="body"></div>
  </footer>
</template>

<script>
export default {
  props: ['body']
}
</script>

<style>
@import '../assets/variables.css';

.footer {
  margin-bottom: var(--spacing-double);
  font-size: var(--font-size-small);
  text-align: center;
}

.footer >>> p {
  margin-bottom: 0;
}
</style>