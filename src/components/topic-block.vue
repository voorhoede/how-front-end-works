<template>
  <section class="topic">
    <img v-if="topic.image" class="topic__image" :src="topic.image" alt="">

    <h2 class="topic__title h1">{{ topic.name }}</h2>

    <div class="topic__description" v-html="topic.description"></div>

    <h3 v-if="topic.concepts.length" class="h5">Part of</h3>

    <ul v-if="topic.concepts.length" class="topic__labels flat-list">
      <li v-for="concept in topic.concepts" :key="concept.slug">
        <topic-label :labelInfo="concept" labelType="index" />
      </li>
    </ul>

    <h3 v-if="topic.relatedTopics.length" class="h5">See also</h3>

    <ul v-if="topic.relatedTopics.length" class="topic__labels flat-list">
      <li v-for="relatedTopic in topic.relatedTopics" :key="relatedTopic.slug">
        <topic-label :labelInfo="relatedTopic" labelType="topic" />
      </li>
    </ul>
  </section>
</template>

<script>
import TopicLabel from '../components/topic-label'

export default {
  components: { TopicLabel },
  props: {
    topic: {
      type: Object,
      required: true
    },
  },
}
</script>

<style>
@import '../assets/variables.css';

.topic {
  margin-bottom: var(--spacing-default);
  padding-bottom: var(--spacing-half);
  border-bottom: 1px solid var(--grey-medium);
}

@media (min-width: 600px){
  .topic {
    margin-bottom: calc(var(--spacing-default) * 3);
  }
}

.topic__title {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.topic__image {
  margin-bottom: var(--spacing-default);
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.topic__description {
  margin-bottom: calc(var(--spacing-default) * 3);
}

.topic__labels {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-default);
}

.topic__labels li {
  margin-right: var(--spacing-default);
  margin-bottom: var(--spacing-default);
}
</style>
