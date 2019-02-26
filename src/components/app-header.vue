<template>
  <header role="banner">
    <div class="header" :class="{ 'header--big': isBig }" :style="!isBig && `background-color: ${backgroundColor};`">
      <div class="header__column center-column">
        <h1 class="header__title">
          <!-- <nuxt-link to="/">{{ title }}</nuxt-link> -->
          <nuxt-link to="/">How front-end <span class="header__title--bold">works</span></nuxt-link>
        </h1>

        <div v-if="description" class="header__description"><p>Everything you wanted to know but W3Schools taught you wrong.</p></div>



        <navigation-button v-if="buttonLabel"
                           class="header__button"
                           :url="buttonUrl"
                           :label="buttonLabel" />
      </div>
      <div v-if="image" class="header__image">
        <!-- <img :src="image" alt=""> -->
        <header-image />
      </div>
    </div>

    <main-navigation v-if="concepts" :concepts="concepts" />
  </header>
</template>

<script>
import MainNavigation from '../components/main-navigation'
import NavigationButton from '../components/navigation-button'
import HeaderImage from '~/static/icons/image.svg'

export default {
  components: { MainNavigation, NavigationButton, HeaderImage },
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

.header:not(.header--big) {
  padding: var(--spacing-default) 0;
  margin-bottom: var(--spacing-double);
}

.header.header--big {
  text-align: center;
}

@media (min-width: 768px) {
  .header.header--big {
    display: flex;
    padding: 0;
    text-align: left;
  }
}

.header--big .header__column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--spacing-double);
  width: 100%;
  height: var(--header-column-height);
  background-color: var(--white);
}

@media (min-width: 768px) {
  .header--big .header__column {
    order: 2;
    align-items: baseline;
    padding: 0 var(--spacing-double);
    width: 50vw;
  }
}

@media (min-width: 1024px) {
  .header--big .header__column {
    padding: 0 4rem;
  }
}

.header__image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-half);
  height: var(--header-column-height);
  background-color: var(--accent-color-light);
}

@media (min-width: 768px) {
  .header__image {
    order: 1;
    margin-top: 0;
    padding: var(--spacing-double);
    z-index: 2;
    width: 50vw;
  }
}

.header__image img {
  width: 100%;
  height: auto;
}

.header__image svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.header__title {
  margin-bottom: 0;
  font-family: var(--font);
  font-size: var(--font-size-big);
  font-style: normal;
  font-weight: bold;
}

.header--big .header__title {
  margin-bottom: var(--spacing-default);
  font-size: var(--header-title-size);
  line-height: normal;
}

@media (min-width: 768px) {
  .header--big .header__title {
    position: relative;
    margin-bottom: 3rem;
  }

  .header__title:before {
    content: '';
    position: absolute;
    left: -2rem;
    bottom: -1rem;
    width: 30vw;
    height: 1px;
    border-bottom: 2px solid var(--accent-color-light);
  }
}

@media (min-width: 1024px) {
  .header__title:before {
    width: 25vw;
    left: -4rem;
  }
}

.header__title--bold {
  color: var(--accent-color-dark);
}

.header--big .header__title--bold {
  font-size: calc(var(--header-title-size) * 1.4);
  display: block
}

.header__title a {
  border-bottom: 1px solid transparent;
}

.header__title a:hover,
.header__title a:focus {
  border-bottom: 1px solid var(--grey-dark);
}

.header__description {
  margin-bottom: var(--spacing-default);
  line-height: 1.5;
}

@media (min-width: 360px) {
  .header__description {
    margin-bottom: var(--spacing-double);
  }
}

@media (min-width: 768px) {
  .header__description {
    font-size: var(--font-size-big);
  }
}

@media (min-width: 1300px) {
  .header__description {
    max-width: 35vw;
  }
}

.button.header__button {
  margin: var(--spacing-default) 0;
  border: 1px solid var(--accent-color-dark);
  color: var(--accent-color-dark);
}

@media (min-width: 768px) {
  .header__button {
    margin-bottom: 0;
  }
}

.button.header__button svg path {
  fill: var(--accent-color-dark);
}

text {
  opacity: 0;
}
/*
@media (min-width: 1024px) {
  text,
  .circle {
    transition: all .2s ease;
  }

  .header:hover text {
    opacity: 1;
  }

  .header:hover .circle {
    transform: scale(4);
  }

  #cloud .circle {
    transform-origin: 134.17px 36.73px;
  }

  #design .circle {
    transform-origin: 508.53px 84.11px;
  }

  #architecture .circle {
    transform-origin: 49.62px 263.45px;
  }

  #development .circle {
    transform-origin: 461.08px 497.31px;
  }

  #version-control .circle {
    transform-origin: 153.96px 394.84px;
  }

  #configuration .circle {
    transform-origin: 246.02px 283.63px;
  }

  #code .circle {
    transform-origin: 386.28px 213.34px;
  }
} */
</style>
