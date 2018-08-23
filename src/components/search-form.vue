<template>
  <form v-on:submit.prevent class="search-form">
    <label class="search-form__label" for="search">
      <span class="a11y-sr-only">Filter techniques</span>
      <input v-on:input="$emit('input', $event.target.value)"
             class="search-form__input"
             type="text"
             id="search"
             :placeholder="placeholderText">
      <SearchIcon class="search-form__icon" />
    </label>
  </form>
</template>

<script>
import SearchIcon from '../static/icons/search-icon.svg'

export default {
  components: { SearchIcon },
  props: ['placeholderText']
}
</script>

<style>
@import '../assets/variables.css';

.search-form__label {
  position: relative;
  margin: 0 auto calc(var(--spacing-default) * 3) auto;
  display: block;
  width: 50%;
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
  border: 1px solid var(--grey-dark);
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

.search-form__input:focus ~ .search-form__icon {
  fill: var(--grey-dark);
}
</style>