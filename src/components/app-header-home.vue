<template>
  <header role="banner">
    <div class="header-home">
      <div class="header-home__column center-column">
        <h1 class="header-home__title">
          <nuxt-link to="/">{{ formatTitle.normal }} <span class="header-home__title--highlight">{{ formatTitle.highlight }}</span></nuxt-link>
        </h1>

        <div class="header-home__description" v-html="description" />

        <navigation-button :url="buttonUrl"
                           :label="buttonLabel" />
      </div>

      <div class="header-home__image">
        <header-image />
      </div>
    </div>

    <main-navigation :concepts="concepts" appHeader />

    <scroll-to />
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

.header-home {
  margin-bottom: calc(var(spacing-double * 2));
  text-align: center;
}

@media (min-width: 768px) {
  .header-home {
    display: flex;
  }
}

.header-home__column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--spacing-half);
  width: 100%;
  height: 55vh;
  background-color: var(--white);
}

@media (min-width: 360px) {
  .header-home__column {
    padding: var(--spacing-default);
  }
}

@media (min-width: 768px) {
  .header-home__column {
    order: 2;
    align-items: flex-start;
    padding: 0 var(--spacing-double);
    width: 50vw;
    height: 70vh;
  }
}

@media (min-width: 1024px) {
  .header-home__column {
    padding: 0 calc(var(--spacing-default) * 3);
  }
}

.header-home__image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-half);
  background-color: var(--accent-color-light);
  height: 45vh;
}

@media (min-width: 768px) {
  .header-home__image {
    order: 1;
    margin-top: 0;
    padding: var(--spacing-double);
    z-index: 2;
    width: 50vw;
    height: 70vh;
  }
}

.header-home__image img {
  width: 100%;
  height: auto;
}

.header-home__image svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.header-home__title {
  margin-bottom: var(--spacing-half);
  font-family: var(--font);
  font-size: var(--header-title-size);
  font-style: normal;
  font-weight: bold;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .header-home__title {
    position: relative;
    margin-bottom: calc(var(--spacing-default) * 3);
    text-align: left;
  }

  .header-home__title:before {
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
  .header-home__title:before {
    width: 25vw;
    left: -4rem;
  }
}

.header-home__title--highlight {
  display: block;
  font-size: calc(var(--header-title-size) * 1.4);
  color: var(--accent-color-dark);
}

@media (min-width: 768px) {
  .header-home__title--highlight {
    text-align: left;
  }
}

.header-home__title a,
.header-home__title--highlight {
  border-bottom: 1px solid transparent;
}

.header-home__title a:hover,
.header-home__title a:hover .header-home__title--highlight,
.header-home__title a:focus {
  border-bottom: 1px solid var(--accent-color-dark);
}

.header-home__description {
  margin-bottom: var(--spacing-default);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  line-height: 24px; /* fallback */
  max-height: calc(7 * 24px); /* fallback */
}

@media (min-width: 360px) {
  .header-home__description {
    font-size: 18px;
    line-height: 27px;
    max-height: calc(7 * 27px);
    max-width: 400px;
  }
}

@media (min-width: 600px) {
  .header-home__description {
    margin-bottom: var(--spacing-double);
  }
}

@media (min-width: 768px) {
  .header-home__description {
    font-size: var(--font-size-big);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 30px;
    max-height: calc(7 * 30px);
  }

  .header-home__title--highlight {
    text-align: left;
  }
}

@media (min-width: 1300px) {
  .header-home__description {
    max-width: 35vw;
  }
}
</style>
