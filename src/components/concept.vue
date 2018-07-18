<template>
  <section class="concept">
    <a :id="concept.slug"></a>

    <img class="concept__image" :src="concept.image" alt="">

    <ConceptIcon :backgroundColor="concept.color" :imageUrl="concept.icon" />

    <h2 class="concept__title h1">{{ concept.name }}</h2>

    <div class="concept__description" v-html="concept.description"></div>

    <h3 class="h5">Relevant techniques</h3>

    <ul class="concept__labels flat-list">
      <li v-for="lemma in concept.lemmas" :key="lemma.slug">
        <Label :labelInfo="lemma" />
      </li>
    </ul>
  </section>
</template>

<script>
import { ConceptIcon, Label } from '~/components'

export default {
  components: { ConceptIcon, Label },
  props: ['concept']
}
</script>

<style scoped>
@import '~assets/core.css';

.concept {
  margin-bottom: 4rem;
}

.concept__title {
  margin-bottom: var(--spacing-half);
}

.concept__image {
  margin-bottom: var(--spacing-default);
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.concept__description {
  margin-bottom: var(--spacing-default);
}

.concept__labels {
  display: flex;
  flex-wrap: wrap;
}

.concept__labels li {
  margin-right: var(--spacing-default);
  margin-bottom: var(--spacing-default);
}
</style>