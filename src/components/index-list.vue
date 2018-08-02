<template>
  <section class="index-list">
    <h2 class="index-list__title" :style="`background-color: ${lemmaColor};`">
      <span class="a11y-sr-only">Items starting with</span> {{ indexLetter }}
    </h2>

    <ul class="index-list__lemmas flat-list">
      <li v-for="lemma in lemmas"
          :key="lemma.slug"
          class="index-list__link">
        <nuxt-link :to="lemma.slug">{{ lemma.name }}</nuxt-link>
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
  padding-top: var(--spacing-half);
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