<template>
  <div class="concept-icon" :style="backgroundColor ? `background-color: ${backgroundColor};` : ''">
    <img class="concept-icon__image" :src="imageUrl" alt="">
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      required: false
    },
    imageUrl: {
      type: String,
      required: true
    },
  },
}
</script>

<style>
.concept-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.concept-icon__image {
  display: block;
  width: 65%;
  height: 65%;
}
</style>
