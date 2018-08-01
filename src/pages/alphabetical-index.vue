<template>
    <div>
      <Header :backgroundColor="page.headerColor"
            :buttonLabel="label"
            :buttonUrl="url"
            :concepts="page.concepts"
            :description="page.introduction"
            :image="page.headerImage"
            :title="page.title" />

      <main class="center-column">
        [alphabetical index]
      </main>

      <Footer :body="page.footer" />
    </div>
</template>

<script>
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import Footer from '../components/footer'
import Header from '../components/header'

export default {
  components: { Footer, Header },
  async asyncData() {
    const page = await getPageData('alphabetical-index')
    return { page }
  },
  head() {
    return seoHead(this.page.seo)
  },
  data() {
    return {
      label: 'view concepts',
      url: '/',
    }
  }
}
</script>