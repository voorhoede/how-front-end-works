<template>
  <header role="banner">
    <div class="header">
      <div class="header__column center-column">
        <h1 class="header__title">
          <nuxt-link to="/">{{ formatTitle.normal }} <span class="header__title--highlight">{{ formatTitle.highlight }}</span></nuxt-link>
        </h1>

        <navigation-button v-if="buttonLabel"
                           class="header__button"
                           :url="buttonUrl"
                           :label="buttonLabel" />

        <div v-if="concepts && concepts.length"
             class="header__image">
          <img class="header__concept-icon" :src="concepts[0].icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationButton from '../components/navigation-button'

export default {
  components: { NavigationButton },
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

.header {
  margin-bottom: var(--spacing-double);
  background-color: var(--grey-light);
  height: 100px;
  display: flex;
  align-items: center;
  position: relative;
}

.header__column {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
}

.header__title {
  margin-bottom: 0;
  font-family: var(--font);
  font-size: var(--font-size-big);
  font-style: normal;
  font-weight: bold;
}

.header__title--highlight {
  font-size: calc(var(--font-size-big) * 1.3);
  color: var(--accent-color-dark);
}

@media (min-width: 768px) {
  .header__title--highlight {
    text-align: left;
  }
}

.header__title a {
  border-bottom: 1px solid transparent;
}

.header__title a:hover,
.header__title a:focus {
  border-bottom: 1px solid var(--accent-color-dark);
}

.button.header__button {
  border: 1px solid var(--accent-color-dark);
  color: var(--accent-color-dark);
}

@media (min-width: 768px) {
  .button.header__button {
    margin-bottom: 0;
  }
}

.button.header__button svg path {
  fill: var(--accent-color-dark);
}

.header__image {
  position: relative;
  width: 100px;
  height: 100px;
  opacity: .2;
}

@media (min-width: 500px) {
  .header__image {
    width: 150px;
    height: 150px;
  }
}

.header__concept-icon {
  position: absolute;
  right: -1rem;
  top: 0;
  transform: rotate(15deg);
  transform-origin: center;
}

@media (min-width: 500px) {
  .header__concept-icon {
    right: 0;
  }
}
</style>
