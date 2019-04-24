<template>
  <section :id="concept.slug" class="concept" tabindex="-1">
    <h2 class="concept__title h1">
      <div class="concept__image" :style="`background-image: url('${concept.image}'; background-color: ${concept.color}`" />
      {{ concept.name }}
    </h2>

    <div class="concept__description" v-html="concept.description"></div>

    <h3 class="h5">Relevant topics</h3>

    <ul class="concept__labels flat-list">
      <li v-for="topic in concept.topics" :key="topic.slug">
        <topic-label :labelInfo="topic" labelType="topic" />
      </li>
    </ul>

    <jump-to-top />
  </section>
</template>

<script>
import JumpToTop from '../components/jump-to-top'
import TopicLabel from '../components/topic-label'

export default {
  components: { JumpToTop, TopicLabel },
  props: {
    concept: {
      type: Object,
      required: true
    },
  },
}
</script>

<style>
@import '../assets/variables.css';

.concept {
  margin: var(--spacing-default) 0 var(--spacing-double) ;
  outline: none;
  position: relative;
}

.concept__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: calc(var(--spacing-double) * 2);
}

.concept__image {
  height: 110px;
  width: 110px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: var(--spacing-double);
}

@media (min-width: 420px) {
  .concept__title {
    flex-direction: row;
  }

  .concept__image {
    margin-bottom: 0;
    margin-right: var(--spacing-double);
  }
}

@media (min-width: 600px) {
  .concept {
    margin-bottom: calc(var(--spacing-default) * 5);
  }
}

@media (min-width: 1100px) {
  .concept {
    margin-top: var(--spacing-double);
  }

  .concept__title {
    margin: 0;
    margin-bottom: var(--spacing-double);
  }

  .concept__image {
    height: 150px;
    width: 150px;
    position: absolute;
    left: -180px;
    top: 0;
  }
}

.concept__description {
  margin-bottom: calc(var(--spacing-default) * 3);
}

.concept__labels {
  display: flex;
  flex-wrap: wrap;
}

.concept__labels li {
  margin-right: var(--spacing-default);
  margin-bottom: var(--spacing-half);
}
</style>
