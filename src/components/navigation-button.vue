<template>
  <nuxt-link class="navigation-button" :to="url">
    <div class="navigation-button__link-area">
      {{ label }}
      <arrow-icon class="navigation-button__icon" />
    </div>
  </nuxt-link>
</template>

<script>
import ArrowIcon from '../static/icons/arrow.svg'

export default {
  components: { ArrowIcon },
  props: {
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
}
</script>

<style>
@import '../assets/variables.css';

.navigation-button {
  display: inline-block;
  padding-bottom: 0;
  border: 1px solid var(--accent-color-dark);
  border-radius: 30px;
  color: var(--accent-color-dark);
}

.navigation-button__link-area {
  display: flex;
  align-items: center;
  padding: .3rem .9rem;
}

.navigation-button__icon {
  margin-left: var(--spacing-half);
  width: .8rem;
  height: 1.2rem;
  transform: rotate(90deg) translateY(0);
}

.navigation-button__icon path {
  fill: var(--accent-color-dark)
}

.navigation-button:hover,
.navigation-button:focus {
  transition: border-color .15s linear, color .15s linear;
  border-color: var(--grey-dark);
  color: var(--grey-dark);
}

.navigation-button:hover .navigation-button__icon,
.navigation-button:focus .navigation-button__icon {
  animation: bounce-arrow-right .25s ease-in-out;
}

.navigation-button:hover .navigation-button__icon path,
.navigation-button:focus .navigation-button__icon path {
  transition: fill .15s linear;
  fill: var(--grey-dark);
}

@keyframes bounce-arrow-right {
  0% {
    transform: rotate(90deg) translateY(0);
  }
  50% {
    transform: rotate(90deg) translateY(-3px);
  }
  100% {
    transform: rotate(90deg) translateY(0);
  }
}
</style>
