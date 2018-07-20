<template>
  <a class="label" :href="labelInfo.slug" :style="`background-color: ${labelInfo.color};`">
      <ConceptIcon v-if="labelInfo.icon"  :backgroundColor="labelInfo.color" :imageUrl="labelInfo.icon" />
      {{ labelInfo.name }}
  </a>
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
  display: flex;
  align-items: center;
  padding: .3rem .9rem;
  border-radius: 30px;
  background: none;
}

.label .concept-icon {
  margin-left: calc(var(--spacing-half) * -1);
  width: 1.7rem;
  height: 1.7rem;
}
</style>