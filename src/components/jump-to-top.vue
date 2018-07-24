<template>
  <div class="jump-to-top">
    <a class="jump-to-top__button" href="#top">
      <ArrowIcon class="jump-to-top__icon" />
      <span class="jump-to-top__content">Jump to top of page</span>
    </a>
  </div>
</template>

<script>
import ArrowIcon from '~/static/icons/arrow.svg'

export default {
  components: { ArrowIcon }
}
</script>

<style scoped>
@import '../assets/variables.css';

.jump-to-top {
  border-bottom: 1px solid var(--grey-medium);
}

.jump-to-top__button {
  display: block;
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  transform: translateY(50%);
  background: var(--grey-light);
  border: 1px solid var(--grey-medium);
  border-radius: 50%;
  transition: border-color .15s linear;
}

.jump-to-top__icon {
  margin-top: 7px;
  margin-left: 7px;
  width: 50%;
  fill: var(--grey-medium--highlight);
  transition: fill .15s linear;
}

.jump-to-top__button:hover,
.jump-to-top__button:focus {
  outline: none;
  border-color: var(--grey-dark);
  transition: border-color .15s linear;
}

.jump-to-top__button:hover .jump-to-top__icon,
.jump-to-top__button:focus .jump-to-top__icon {
  animation: bounce-arrow .25s ease-in-out;
  transition: fill .15s linear;
  fill: var(--grey-dark);
}

@keyframes bounce-arrow {
  0% {
    margin-top: 7px;
  }
  50% {
    margin-top: 4px;
  }
  100% {
    margin-top: 7px;
  }
}

.jump-to-top__content {
  display: block;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
}
</style>