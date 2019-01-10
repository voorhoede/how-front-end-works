<template>
  <div class="site-content error-content">
    <main class="site-content__main center-column">
      <h1 v-if="error.statusCode === 404">That page couldn't be found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">Go back to the home page</nuxt-link>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>

<style>
.error-content {
  margin-top: 4rem;
  text-align: center;
}
</style>
