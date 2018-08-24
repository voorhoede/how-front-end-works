<template>
  <header role="banner">
    <div :class="`header ${ image ? 'header--big' : '' }`" :style="`background-color: ${backgroundColor};`">
      <div class="center-column">
        <h1 class="header__title">
          <nuxt-link to="/">{{ title }}</nuxt-link>
        </h1>

        <div class="header__description" v-html="description"></div>

        <img v-if="image" class="header__image" :src="image" alt="">

        <Button v-if="buttonLabel" :url="buttonUrl" :label="buttonLabel" />
      </div>
    </div>

    <Navigation v-if="concepts" :concepts="concepts" />
  </header>
</template>

<script>
import Button from '../components/button'
import Navigation from '../components/navigation'

export default {
  components: { Button, Navigation },
  props: ['backgroundColor', 'buttonLabel', 'buttonUrl', 'concepts', 'description', 'image', 'title'],
}
</script>

<style>
@import '../assets/variables.css';

.header {
  margin-bottom: var(--spacing-default);
  padding: var(--spacing-double);
  text-align: center;
}

@media (min-width: 600px) {
  .header {
    padding: calc(var(--spacing-double) * 2) 0;
  }

  .header--big {
    padding: var(--spacing-default) 0 var(--spacing-double) 0;
  }
}

.header__title {
  margin-bottom: var(--spacing-half);
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: var(--font-size-large);
}

.header__title a {
  border-bottom: 1px solid transparent;
}

.header__title a:hover,
.header__title a:focus {
  border-bottom: 1px solid var(--grey-dark);
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

.header__image {
  margin-top: var(--spacing-default);
  width: 100%;
  height: auto;
}

@media (min-width: 600px) {
  .header__image {
    margin-top: var(--spacing-double);
  }
}

.header .button {
  margin-top: var(--spacing-default);
}

@media (min-width: 600px) {
  .header .button {
    margin-top: var(--spacing-double);
  }
}
</style>