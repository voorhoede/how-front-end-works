<template>
  <div class="site-content">
    <app-header :buttonLabel="page.headerButton.label"
            :buttonUrl="page.headerButton.url"
            :concepts="page.concepts"
            :description="page.introduction"
            :image="page.headerImage"
            :title="page.title"
            :isBig="true"
            class="site-content__app-header"/>

    <main class="site-content__main center-column">
      <concept-block v-for="concept in page.concepts"
               :concept="concept"
               :key="concept.name" />
    </main>

    <app-footer :body="page.footer" />
  </div>
</template>

<script>
import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import ConceptBlock from '../components/concept-block'

export default {
  components: { AppFooter, AppHeader, ConceptBlock },
  async asyncData() {
    const page = await getPageData('index')
    return { page }
  },
  head() {
    return seoHead(this.page.seo)
  },
  fetch({ route,store }) {
    store.commit('setIndexPageUrl', { indexPageUrl: route.fullPath })
  },
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

.site-content__app-header {
  margin-bottom: calc(var(spacing-double * 2));
}
</style>
