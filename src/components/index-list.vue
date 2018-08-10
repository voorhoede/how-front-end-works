<template>
  <section class="index-list">
    <h3 class="index-list__title" :style="`background-color: ${lemmaColor};`">
      <span class="a11y-sr-only">Items starting with</span> {{ indexLetter }}
    </h3>

    <ul class="index-list__lemmas flat-list">
      <li v-for="lemma in lemmas"
          :key="lemma.slug"
          class="index-list__link">
        <nuxt-link :to="{ name: 'lemma', params: { lemma: lemma.slug, referrer: $route.name }}">{{ lemma.name }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['indexLetter', 'lemmaColor', 'lemmas']
}
</script>

<style scoped>
@import '../assets/variables.css';

.index-list {
  margin-bottom: calc(var(--spacing-default) * 3);
  padding: var(--spacing-half) 0;
}

.index-list:last-child {
  margin-bottom: var(--spacing-double);
}

@media (min-width: 600px) {
  .index-list:last-child {
    margin-bottom: calc(var(--spacing-default) * 3);
  }
}

.index-list__title {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -.4rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: var(--font-size-bigger);
  font-style: normal;
  text-transform: uppercase;
}

.index-list__lemmas {
  margin-left: 3.5rem;
}

.index-list__link {
  margin-bottom: var(--spacing-half);
}

.index-list__link a {
  border-bottom: 1px solid transparent;
}

.index-list__link a:hover,
.index-list__link a:focus {
  border-bottom: 1px solid var( --grey-dark);
}
</style>