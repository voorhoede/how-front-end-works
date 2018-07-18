<template>
  <a class="label" :href="labelInfo.slug" :style="`background-color: ${labelInfo.color};`">
      {{ labelInfo.name }}
  </a>
</template>

<script>
export default {
  props: ['labelInfo']
}
</script>

<style scoped>
@import '~assets/core.css';

.label {
    display: inline-block;
    padding: .3rem .9rem;
    border-radius: 30px;
    background: none;
}
</style>