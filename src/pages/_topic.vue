<template>
  <div class="site-content">
    <app-header :title="page.title" :concepts="page.concepts"/>

    <main class="site-content__main center-column" role="main">
      <back-button />

      <topic-block :topic="page" />
    </main>

    <app-footer :body="page.footer" />
  </div>
</template>

<script>
import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import BackButton from '../components/back-button'
import TopicBlock from '../components/topic-block'

export default {
  components: { AppFooter, AppHeader, BackButton, TopicBlock },
  async asyncData({ params }) {
    const { topic } = params
    const page = await getPageData(`topics/${ topic }`)
    return { page }
  },
  head() {
    return seoHead(
      `${this.page.concepts[0].name} - ${this.page.name}`,
      this.page.slug,
      this.paper,
      this.page.seoImage
    )
  }
}
</script>
