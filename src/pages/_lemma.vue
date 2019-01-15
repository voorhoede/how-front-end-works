<template>
  <div class="site-content">
    <app-header :backgroundColor="page.headerColor"
                :title="page.title" />

    <main class="site-content__main center-column" role="main">
      <back-button class="site-content__back-button" />

      <lemma-block :lemma="page" />
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
import LemmaBlock from '../components/lemma-block'

export default {
  components: { AppFooter, AppHeader, BackButton, LemmaBlock },
  async asyncData({ params }) {
    const { lemma } = params
    const page = await getPageData(`lemmas/${ lemma }`)
    return { page }
  },
  head() {
    return seoHead(this.page.seo)
  }
}
</script>
