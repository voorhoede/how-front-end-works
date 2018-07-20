<template>
  <header>
    <div id="top" class="header" :style="`background-color: ${backgroundColor};`">
      <div class="center-column">
        <h1 class="header__title">{{ title }}</h1>
        <p class="header__description">{{ description }}</p>
      </div>
    </div>

    <Navigation v-if="concepts" :concepts="concepts" />
  </header>
</template>

<script>
import Navigation from '../components/navigation'

export default {
  components: { Navigation },
  props: ['backgroundColor', 'concepts', 'description', 'title']
}
</script>

<style scoped>
@import '../assets/variables.css';

.header {
  margin-bottom: var(--spacing-default);
  padding: var(--spacing-double);
  text-align: center;
}

@media (min-width: 600px) {
  .header {
    margin-bottom: var(--spacing-double);
    padding: calc(var(--spacing-double) * 2) 0;
  }
}

.header__title {
  margin-bottom: var(--spacing-half);
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--font-size-large);
}

@media (min-width: 600px) {
  .header__title {
    font-size: 2.5rem;
  }
}

.header__description {
  margin-bottom: 0;
  line-height: 1.5;
}

@media (min-width: 600px) {
  .header__description {
    font-size: var(--font-size-bigger);
  }
}
</style>