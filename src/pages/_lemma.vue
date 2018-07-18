<template>
  <div>
    <Header :backgroundColor="content.headerColor"
            :description="content.introduction"
            :title="content.title" />

    <main class="center-column">
      <Lemma :lemma="content" />
    </main>

    <Footer :body="content.footer" />
  </div>
</template>

<script>
import index from '~/static/data/a11y.json'
import seoHead from '~/assets/seo-head'
import Footer from '~/components/footer'
import Header from '~/components/header'
import Lemma from '~/components/lemma'

export default {
  components: { Footer, Header, Lemma },
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
