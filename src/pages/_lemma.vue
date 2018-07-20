<template>
  <div>
    <Header :backgroundColor="content.headerColor"
            :description="content.introduction"
            :title="content.title" />

    <main class="center-column">
      <BackButton />

      <Lemma :lemma="content" />
    </main>

    <Footer :body="content.footer" />
  </div>
</template>

<script>
import index from '../static/data/a11y.json'
import seoHead from '../assets/seo-head'
import BackButton from '../components/back-button'
import Footer from '../components/footer'
import Header from '../components/header'
import Lemma from '../components/lemma'

export default {
  components: { BackButton, Footer, Header, Lemma },
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
@import '../assets/core.css';
</style>
