<template>
  <nuxt-link class="back-button" :to="indexPageUrl">
    <arrow-icon class="back-button__icon" />
    <span class="back-button__content">Back to overview</span>
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'
import ArrowIcon from '../static/icons/arrow.svg'

export default {
  components: { ArrowIcon },
  computed: {
    ...mapState(['indexPageUrl']),
  }
}
</script>

<style>
@import '../assets/variables.css';

.back-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: var(--spacing-double);
  padding-bottom: 0;
  background: none;
  font-size: var(--font-size-smaller);
  border: none;
  text-align: right;
  right: 0;
}

.back-button__icon {
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
  animation: bounce-arrow-left .25s ease-in-out;
}

.back-button:hover .back-button__content,
.back-button:focus .back-button__content {
  padding-bottom: 0;
  border-bottom: 1px solid var(--grey-dark);
}

@keyframes bounce-arrow-left {
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
</style>
