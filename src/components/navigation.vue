<template>
  <nav class="navigation center-column" role="navigation">
    <ul class="flat-list">
      <li class="navigation__item" v-for="concept in concepts" :key="concept.slug">
        <a :href="'#' + concept.slug">
          <ConceptIcon :backgroundColor="concept.color" :imageUrl="concept.icon" />
          <span class="navigation__content">{{ concept.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import ConceptIcon from '../components/concept-icon'

export default {
  components: { ConceptIcon },
  props: ['concepts']
}
</script>

<style>
@import '../assets/variables.css';

.navigation {
  margin-bottom: var(--spacing-default);
  border-bottom: 1px solid var(--grey-medium);
}

@media (min-width: 600px) {
  .navigation {
    margin-bottom: calc(var(--spacing-default) * 3);
    padding-bottom: var(--spacing-default);
  }
}

.navigation ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.navigation__item {
  flex: 0 0 40%;
  margin: 0 var(--spacing-half) var(--spacing-default) var(--spacing-half);
}

@media (min-width: 400px) {
  .navigation__item {
    flex: 0 0 20%;
  }
}

.navigation__item a {
  display: block;
  background: none;
  font-size: var(--font-size-smaller);
  text-align: center;
  line-height: 1.4;
  border: none;
}

.navigation__content,
.navigation__content {
  border-bottom: 1px solid transparent;
}

.navigation__item a:hover .navigation__content,
.navigation__item a:focus .navigation__content {
  border-bottom: 1px solid var(--grey-dark);
}

.navigation .concept-icon {
  flex: 0 0 auto;
  margin: 0 auto var(--spacing-half) auto;
  width: 3rem;
  height: 3rem;
}
</style>