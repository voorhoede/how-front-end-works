<template>
  <nuxt-link class="button" :to="url">
    <div class="button__link-area">
      {{ label }}
      <arrow-icon class="button__icon" />
    </div>
  </nuxt-link>
</template>

<script>
import ArrowIcon from '../static/icons/arrow.svg'

export default {
  components: { ArrowIcon },
  props: ['label', 'url']
}
</script>

<style>
@import '../assets/variables.css';

.button {
  display: inline-block;
  padding-bottom: 0;
  border: 1px solid var(--grey-dark);
  border-radius: 30px;
}

.button__link-area {
  display: flex;
  align-items: center;
  padding: .3rem .9rem;
  border-radius: 30px;
  background-color: transparent;
  transition: background-color .08s linear;
}

.button__icon {
  margin-left: var(--spacing-half);
  width: .8rem;
  height: 1.2rem;
  fill: var(--grey-dark);
  transform: rotate(90deg) translateY(0);
}

.button:hover .button__link-area,
.button:focus .button__link-area {
  background-color: rgba(255, 255, 255, .5);
}

.button:hover .button__icon,
.button:focus .button__icon {
  animation: bounce-arrow-right .25s ease-in-out;
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