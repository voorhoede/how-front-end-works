<template>
  <div class="site-content">
    <Header :backgroundColor="page.headerColor"
            :buttonLabel="label"
            :buttonUrl="url"
            :concepts="page.concepts"
            :description="page.introduction"
            :image="page.headerImage"
            :title="page.title" />

    <main class="site-content__main center-column">
      <Concept v-for="concept in page.concepts"
               :concept="concept"
               :key="concept.name" />
    </main>

    <Footer :body="page.footer" />
  </div>
</template>

<script>
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import Concept from '../components/concept'
import Footer from '../components/footer'
import Header from '../components/header'

export default {
  components: { Concept, Footer, Header },
  async asyncData() {
    const page = await getPageData('index')
    return { page }
  },
  head() {
    return seoHead(this.page.seo)
  },
  data() {
    return {
      label: 'view alphabetical list',
      url: '/alphabetical-index',
    }
  }
}
</script>

<style>
.concept {
  margin-bottom: var(--spacing-double);
}

@media (min-width: 600px) {
  .concept {
    margin-bottom: calc(var(--spacing-default) * 5);
  }
}
</style>
