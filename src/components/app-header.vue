<template>
  <header role="banner">
    <div class="header" :class="{ 'header--big': isBig }">
      <div class="header__column center-column">
        <h1 class="header__title">
          <nuxt-link to="/">{{ formatTitle.normal }} <span class="header__title--highlight">{{ formatTitle.highlight }}</span></nuxt-link>
        </h1>

        <div v-if="description" class="header__description" v-html="description" />

        <navigation-button v-if="buttonLabel"
                           class="header__button"
                           :url="buttonUrl"
                           :label="buttonLabel" />
        <div v-if="conceptIcon" class="header__image">
          <img class="header__concept-icon" :src="conceptIcon" />
        </div>
      </div>
      <div v-if="image" class="header__image">
        <header-image />
      </div>
    </div>

    <main-navigation v-if="concepts" :concepts="concepts" appHeader />

    <scroll-to v-if="isBig" />
  </header>
</template>

<script>
import MainNavigation from '../components/main-navigation'
import NavigationButton from '../components/navigation-button'
import HeaderImage from '~/static/icons/image.svg'
import ScrollTo from '../components/scroll-to'

export default {
  components: { MainNavigation, NavigationButton, HeaderImage, ScrollTo },
  props: {
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
    conceptIcon: {
      type: String,
      required: false,
    },
  },
  computed: {
    formatTitle() {
      const arr = this.title.split(' ')
      return { normal: arr.slice(0, arr.length-1).join(' '), highlight: arr.slice(arr.length-1).join(' ') }
    }
  },
}
</script>

<style>
@import '../assets/variables.css';

.header:not(.header--big) {
  margin-bottom: var(--spacing-double);
  background-color: var(--grey-light);
  height: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.header.header--big {
  text-align: center;
}

@media (min-width: 768px) {
  .header.header--big {
    display: flex;
  }
}

.header:not(.header--big) .header__image {
  position: relative;
  width: 100px;
  height: 100px;
  opacity: .2;
}

.header__concept-icon {
  position: absolute;
  right: -1rem;
  top: 0;
  transform: rotate(25deg);
  transform-origin: center;
}

@media (min-width: 500px) {
  .header:not(.header--big) .header__image {
    width: 150px;
    height: 150px;
  }

  .header__concept-icon {
    right: 0;
  }
}

.header:not(.header--big) .header__column {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 600px;
}

.header--big .header__column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--spacing-half);
  width: 100%;
  height: 50vh;
  background-color: var(--white);
}

@media (min-width: 360px) {
  .header--big .header__column {
    padding: var(--spacing-default);
  }
}

@media (min-width: 768px) {
  .header--big .header__column {
    order: 2;
    align-items: flex-start;
    padding: 0 var(--spacing-double);
    width: 50vw;
    height: 70vh;
  }
}

@media (min-width: 1024px) {
  .header--big .header__column {
    padding: 0 calc(var(--spacing-default) * 3);
  }
}

.header--big .header__image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-half);
  background-color: var(--accent-color-light);
  height: 50vh;
}

@media (min-width: 768px) {
  .header--big .header__image {
    order: 1;
    margin-top: 0;
    padding: var(--spacing-double);
    z-index: 2;
    width: 50vw;
    height: 70vh;
  }
}

.header--big .header__image img {
  width: 100%;
  height: auto;
}

.header--big .header__image svg {
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
    margin-bottom: calc(var(--spacing-default) * 3);
    text-align: left;
  }

  .header--big .header__title:before {
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
  .header--big .header__title:before {
    width: 25vw;
    left: -4rem;
  }
}

.header__title--highlight {
  font-size: var(--font-size-big);
  color: var(--accent-color-dark);
}

.header .header__title--highlight {
  font-size: var(--header-title-size);
}

.header--big .header__title--highlight {
  font-size: calc(var(--header-title-size) * 1.4);
  display: block
}

.header__title a,
.header--big .header__title--highlight {
  border-bottom: 1px solid transparent;
}

.header__title a:hover,
.header--big .header__title a:hover .header__title--highlight,
.header__title a:focus {
  border-bottom: 1px solid var(--accent-color-dark);
}

.header__description {
  margin-bottom: var(--spacing-default);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-height: 24px; /* fallback */
  max-height: calc(4 * 24px); /* fallback */
}

@media (min-width: 360px) {
  .header__description {
    margin-bottom: var(--spacing-double);
    font-size: 18px;
    line-height: 27px;
    -webkit-line-clamp: 3;
    max-height: calc(3 * 27px);
    max-width: 400px;
  }
}

@media (min-width: 600px) {
  .header__description {
    -webkit-line-clamp: 3;
    max-height: calc(3 * 27px);
  }
}

@media (min-width: 768px) {
  .header__description {
    font-size: var(--font-size-big);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-height: 30px;
    max-height: calc(4 * 30px);
  }

  .header__title--highlight {
    text-align: left;
  }
}

@media (min-width: 1300px) {
  .header__description {
    max-width: 35vw;
  }
}

.button.header__button {
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
</style>
