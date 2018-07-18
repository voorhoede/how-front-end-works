<template>
  <div>
    <Header :backgroundColor="content.headerColor"
            :concepts="content.concepts"
            :description="content.introduction"
            :title="content.title" />

    <div class="center-column">
      content
    </div>

    <Footer :body="content.footer" />
  </div>
</template>

<script>
import index from '~/static/data/index.json'
import seoHead from '~/assets/seo-head'
import Footer from '~/components/footer'
import Header from '~/components/header'

export default {
  components: { Footer, Header },
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
