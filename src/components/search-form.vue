<template>
  <form v-on:submit.prevent class="search-form">
    <label class="search-form__label" for="search">
      <span class="a11y-sr-only">Filter topics</span>
      <input v-on:input="$emit('input', $event.target.value)"
             class="search-form__input"
             type="text"
             id="search"
             :placeholder="placeholderText"
             @focus="toggleSearchStatus"
             @blur="toggleSearchStatus">
      <search-icon class="search-form__icon" />
    </label>
  </form>
</template>

<script>
import SearchIcon from '../static/icons/search-icon.svg'

export default {
  components: { SearchIcon },
  props: {
    placeholderText: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isSearching: false,
    }
  },
  methods: {
    toggleSearchStatus() {
      this.isSearching = !this.isSearching
      this.$emit('toggleSearchStatus', this.isSearching)
    }
  },
}
</script>

<style>
@import '../assets/variables.css';

.search-form {
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--grey-medium);
  margin-bottom: calc(var(--spacing-default) * 3);
}

.search-form__label {
  position: relative;
  display: block;
  width: 100%;
  max-width: 320px;
}

.search-form__input {
  padding: var(--spacing-half) var(--spacing-default) var(--spacing-half) var(--spacing-double);
  width: 100%;
  border: 1px solid var(--grey-medium);
  border-radius: 20px;
  background-color: var(--white);
  font-size: var(--font-size-smaller);
  transition: border .08s linear;
}

.search-form__input:focus {
  outline: none;
  border: 1px solid var(--accent-color);
}

.search-form__icon {
  position: absolute;
  top: var(--spacing-half);
  left: var(--spacing-half);
  width: 1.1rem;
  height: 1.1rem;
  fill: var(--grey-medium);
  transition: fill .08s linear;
}
</style>
