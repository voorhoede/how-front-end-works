<template>
  <nuxt-link :to="{ name: 'lemma', params: { lemma: labelInfo.slug, referrer: $route.name }}"
             class="label"
             :style="`background: ${labelInfo.color};`">
    <div class="label__link-area">
      <ConceptIcon v-if="labelInfo.icon" :imageUrl="labelInfo.icon" />
      {{ labelInfo.name }}
    </div>
  </nuxt-link>
</template>

<script>
import ConceptIcon from '../components/concept-icon'

export default {
  components: { ConceptIcon },
  props: ['labelInfo']
}
</script>

<style scoped>
@import '../assets/variables.css';

.label {
  display: inline-block;
  border: none;
  border-radius: 30px;
}

.label__link-area {
  display: flex;
  align-items: center;
  padding: .3rem .9rem .25rem .9rem;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color .08s linear;
}

.label:focus {
  outline: none;
}

.label:hover .label__link-area,
.label:focus .label__link-area {
  background-color: rgba(255, 255, 255, .5);
}

.label .concept-icon {
  margin-left: calc(var(--spacing-half) * -1);
  width: 1.7rem;
  height: 1.7rem;
}
</style>