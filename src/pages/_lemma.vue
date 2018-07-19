<template>
  <div>
    <Header :backgroundColor="page.headerColor"
            :description="page.introduction"
            :title="page.title" />

    <main class="center-column">
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
    const page = await getPageData({ lemma })
    return { page }
  },
  head() {
    return seoHead(this.page.seo)
  }
}
</script>

<style scoped>
@import '~assets/core.css';
</style>
