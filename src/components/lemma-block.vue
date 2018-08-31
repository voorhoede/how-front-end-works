<template>
  <section class="lemma">
    <img v-if="lemma.image" class="lemma__image" :src="lemma.image" alt="">

    <h2 class="lemma__title h1">{{ lemma.name }}</h2>

    <div class="lemma__description" v-html="lemma.description"></div>

    <h3 v-if="lemma.concepts.length" class="h5">Part of</h3>

    <ul v-if="lemma.concepts.length" class="lemma__labels flat-list">
      <li v-for="concept in lemma.concepts" :key="concept.slug">
        <lemma-label :labelInfo="concept" labelType="index" />
      </li>
    </ul>

    <h3 v-if="lemma.relatedLemmas.length" class="h5">See also</h3>

    <ul v-if="lemma.relatedLemmas.length" class="lemma__labels flat-list">
      <li v-for="relatedLemma in lemma.relatedLemmas" :key="relatedLemma.slug">
        <lemma-label :labelInfo="relatedLemma" labelType="lemma" />
      </li>
    </ul>
  </section>
</template>

<script>
import LemmaLabel from '../components/lemma-label'

export default {
  components: { LemmaLabel },
  props: ['lemma']
}
</script>

<style>
@import '../assets/variables.css';

.lemma {
  margin-bottom: var(--spacing-default);
  padding-bottom: var(--spacing-half);
  border-bottom: 1px solid var(--grey-medium);
}

@media (min-width: 600px){
  .lemma {
    margin-bottom: calc(var(--spacing-default) * 3);
  }
}

.lemma__title {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-half);
}

.lemma__image {
  margin-bottom: var(--spacing-default);
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.lemma__description {
  margin-bottom: var(--spacing-default);
}

.lemma__labels {
  display: flex;
  flex-wrap: wrap;
}

.lemma__labels li {
  margin-right: var(--spacing-default);
  margin-bottom: var(--spacing-default);
}
</style>