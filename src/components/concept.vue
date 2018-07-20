<template>
  <section class="concept">
    <img :id="concept.slug" class="concept__image" :src="concept.image" alt="">

    <h2 class="concept__title h1">
      <ConceptIcon :backgroundColor="concept.color" :imageUrl="concept.icon" />
      {{ concept.name }}
    </h2>

    <div class="concept__description" v-html="concept.description"></div>

    <h3 class="h5">Relevant techniques</h3>

    <ul class="concept__labels flat-list">
      <li v-for="lemma in concept.lemmas" :key="lemma.slug">
        <Label :labelInfo="lemma" />
      </li>
    </ul>

    <JumpToTop />
  </section>
</template>

<script>
import ConceptIcon from '../components/concept-icon'
import JumpToTop from '../components/jump-to-top'
import Label from '../components/label'

export default {
  components: { ConceptIcon, JumpToTop, Label },
  props: ['concept']
}
</script>

<style scoped>
@import '../assets/variables.css';

.concept__title {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-half);
}

.concept .concept-icon {
  margin-right: var(--spacing-default);
  width: 3rem;
  height: 3rem;
}

@media (min-width: 800px) {
  .concept .concept-icon {
    margin-right: 1.5rem;
    margin-left: -4.5rem;
  }
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