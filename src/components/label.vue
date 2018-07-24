<template>
  <a class="label" :href="labelInfo.slug" :style="`background: ${labelInfo.color};`">
    <div class="label__test">
      <ConceptIcon v-if="labelInfo.icon" :imageUrl="labelInfo.icon" />
      {{ labelInfo.name }}
    </div>
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
  display: inline-block;
  border: none;
  border-radius: 30px;
}

.label__test {
  display: flex;
  align-items: center;
  padding: .3rem .9rem;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color .08s linear;
}

.label:focus {
  outline: none;
}

.label:hover .label__test,
.label:focus .label__test {
  background-color: rgba(255, 255, 255, .5);
  transition: background-color .15s linear;
}

.label .concept-icon {
  margin-left: calc(var(--spacing-half) * -1);
  width: 1.7rem;
  height: 1.7rem;
}
</style>