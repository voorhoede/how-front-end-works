<template>
  <header role="banner">
    <div class="header" :class="{ 'header--big': isBig }" :style="`background-color: ${backgroundColor};`">
      <div class="header__column center-column">
        <h1 class="header__title">
          <nuxt-link to="/">{{ title }}</nuxt-link>
        </h1>

        <div v-if="description" class="header__description" v-html="description"></div>

        <div v-if="image" class="header__image">
          <img :src="image" alt="">
        </div>

        <navigation-button v-if="buttonLabel"
                           class="header__button"
                           :url="buttonUrl"
                           :label="buttonLabel" />
      </div>
    </div>

    <main-navigation v-if="concepts" :concepts="concepts" />
  </header>
</template>

<script>
import MainNavigation from '../components/main-navigation'
import NavigationButton from '../components/navigation-button'

export default {
  components: { MainNavigation, NavigationButton },
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: false
    },
    buttonUrl: {
      type: String,
      required: false
    },
    concepts: {
      type: Array,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    isBig: {
      type: Boolean,
      required: false
    },
  },
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
    padding: var(--spacing-default) 0;
  }

  .header--big {
    height: 93vh;
  }

  .header--big .header__column {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    font-size: 2.3rem;
  }
}

.header__description {
  margin-bottom: 0;
  line-height: 1.5;
}

.header__image {
  margin-top: var(--spacing-default);
}

.header__image img {
  width: 100%;
  height: auto;
}

@media (min-width: 600px) {
  .header__image {
    flex: 1 1 auto;
    margin-top: var(--spacing-double);
    height: 1%;
  }

  .header__image img {
    width: auto;
    height: 100%;
  }
}

.header__button {
  margin: var(--spacing-default) 0;
}

@media (min-width: 600px) {
  .header__button {
    align-self: center;
    margin: var(--spacing-double) 0;
  }
}
</style>
