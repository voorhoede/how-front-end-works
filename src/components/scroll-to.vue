<template>
  <div class="scroll-to">
    <div class="scroll-to__point-down">
      <span class="scroll-to__text">Scroll</span>
      <arrow-down class="scroll-to__image" />
    </div>
  </div>
</template>

<script>
  import ArrowDown from '~/static/icons/arrow-down.svg'

  export default {
    components: { ArrowDown },
  }
</script>

<style>
.scroll-to {
  display: flex;
  position: absolute;
  bottom: 1.5rem;
  left: .5rem;
  z-index: var(--z-index-low);
  width: 32px;
  height: 150px;
  user-select: none;
}

.scroll-to__text {
  color: var(--accent-color-dark);
  letter-spacing: .0625rem;
  line-height: 32px;
  text-transform: uppercase;
  font-weight: bold;
}

.scroll-to__image {
  width: 32px;
  height: 64px;
  object-fit: contain;
}

.scroll-to__point-down {
  position: relative;
  width: 32px;
  height: 150px;
}

.scroll-to__point-down .scroll-to__text,
.scroll-to__point-down .scroll-to__image {
  position: absolute;
}

.scroll-to__point-down .scroll-to__text {
  left: 0;
  transform: rotate(90deg);
  top: -25px;
  transform-origin: bottom left;
}

.scroll-to__point-down .scroll-to__image {
  animation: arrowBounce ease-in-out 1.4s infinite;
}

.scroll-to__point-down .scroll-to__image {
  bottom: 10px;
}

.scroll-to__point-up .scroll-to__text {
  transform: rotate(-90deg);
  bottom: -32px;
  transform-origin: top left;
}

.scroll-to__point-up .scroll-to__image {
  top: 0;
}

@keyframes arrowBounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
