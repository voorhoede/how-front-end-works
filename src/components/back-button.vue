<template>
  <nuxt-link class="back-button" to="/">
    <ArrowIcon class="back-button__icon" />
    <span class="back-button__content">Back to overview</span>
  </nuxt-link>
</template>

<script>
import ArrowIcon from '~/static/icons/arrow.svg'

export default {
  components: { ArrowIcon },
  props: ['label, url']
}
</script>

<style scoped>
@import '../assets/variables.css';

.back-button {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--spacing-default);
  padding-bottom: 0;
  background: none;
  font-size: var(--font-size-smaller);
  border: none;
}

.back-button__icon {
  display: inline-block;
  transform: rotate(-90deg);
  margin-right: var(--spacing-half);
  width: 1rem;
  height: 1rem;
  fill: var(--grey-medium--highlight);
  transition: fill .15s linear;
}

.back-button__content,
.back-button__content {
  border-bottom: 1px solid transparent;
}

.back-button:hover,
.back-button:focus {
  outline: none;
  border: none;
}

.back-button:hover .back-button__icon,
.back-button:focus .back-button__icon {
  fill: var(--grey-dark);
  transition: fill .15s linear;
  animation: bounce-arrow .25s ease-in-out;
}

.back-button:hover .back-button__content,
.back-button:focus .back-button__content {
  padding-bottom: 0;
  border-bottom: 1px solid var(--grey-dark);
}

@keyframes bounce-arrow {
  0% {
    margin-left: 0;
    margin-right: var(--spacing-half);
  }
  50% {
    margin-left: -3px;
    margin-right: calc(var(--spacing-half) + 3px);
  }
  100% {
    margin-left: 0;
    margin-right: var(--spacing-half);
  }
}

@media (min-width: 600px) {
  .back-button__icon {
    width: 1.2rem;
    height: 1.2rem;
  }
}

@media (min-width: 920px) {
  .back-button {
    float: left;
    flex-direction: column;
    align-items: flex-end;
    margin-left: -140px;
  }

  .back-button__icon {
    margin-right: 0;
  }

  @keyframes bounce-arrow {
    0% {
      margin-right: 0;
    }
    50% {
      margin-right: 3px;
    }
    100% {
      margin-right: 0;
    }
  }
}
</style>