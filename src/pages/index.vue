<template>
  <div>
    <Header :backgroundColor="content.headerColor"
            :concepts="content.concepts"
            :description="content.introduction"
            :title="content.title" />

    <main class="center-column">
      <Concept v-for="concept in content.concepts"
               v-bind:concept="concept"
               v-bind:key="concept.name" />
    </main>

    <Footer :body="content.footer" />
  </div>
</template>

<script>
import index from '~/static/data/index.json'
import seoHead from '~/assets/seo-head'
import { Concept, Footer, Header } from '~/components'

export default {
  components: { Concept, Footer, Header },
  data() {
    return {
      content: index
    }
  },
  head() {
    return seoHead(index.seo)
  }
}
</script>

<style scoped>
@import '~assets/core.css';
</style>
