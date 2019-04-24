<template>
  <nuxt-link :to="toValue"
             class="label"
             :style="`background: ${labelInfo.color};`">
    <div class="label__link-area">
      <concept-icon v-if="labelInfo.icon" :imageUrl="labelInfo.icon" />
      {{ labelInfo.name }}
    </div>
  </nuxt-link>
</template>

<script>
import ConceptIcon from '../components/concept-icon'

export default {
  components: { ConceptIcon },
  props: {
    labelInfo: {
      type: Object,
      required: true
    },
    labelType: {
      type: String,
      required: true
    },
  },
  computed: {
    toValue() {
      if (this.labelType === 'topic') {
        return { name: this.labelType, params: { 'topic': this.labelInfo.slug } }
      } else {
        return { path: `/#${this.labelInfo.slug}` }
      }
    }
  }
}
</script>

<style>
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

.label:hover,
.label:focus {
  border: none;
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
