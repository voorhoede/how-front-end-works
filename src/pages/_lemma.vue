<template>
  <div class="site-content">
    <Header :backgroundColor="page.headerColor"
            :description="page.introduction"
            :title="page.title" />

    <main class="site-content__main center-column" role="main">
      <BackButton />

      <Lemma :lemma="page" />
    </main>

    <Footer :body="page.footer" />
  </div>
</template>

<script>
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import BackButton from '../components/back-button'
import Footer from '../components/footer'
import Header from '../components/header'
import Lemma from '../components/lemma'

export default {
  components: { BackButton, Footer, Header, Lemma },
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
