<template>
  <nav class="navigation center-column">
    <ul class="flat-list">
      <li class="navigation__item" v-for="concept in concepts" :key="concept.slug">
        <a :href="'#' + concept.slug">
          <ConceptIcon :backgroundColor="concept.color" :imageUrl="concept.icon" />
          {{ concept.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import ConceptIcon from '~/components/concept-icon'

export default {
  components: { ConceptIcon },
  props: ['concepts']
}
</script>

<style scoped>
@import '~assets/core.css';

.navigation {
  margin-bottom: var(--spacing-default);
  border-bottom: 1px solid var(--grey-medium);
}

@media (min-width: 600px) {
  .navigation {
    margin-bottom: calc(var(--spacing-default) * 3);
    padding-bottom: var(--spacing-default);
  }

  .navigation ul {
    display: flex;
    flex-wrap: wrap;
  }
}

.navigation__item {
  margin-bottom: var(--spacing-default);
}

@media (min-width: 600px) {
  .navigation__item {
    flex: 0 0 50%;
    padding-right: var(--spacing-default);
  }
}

.navigation__item a {
  display: flex;
  align-items: center;
  background: none;
  line-height: 1.4;
}

.navigation .concept-icon {
  flex: 0 0 auto;
  margin-right: var(--spacing-default);
  width: 3rem;
  height: 3rem;
}
</style>