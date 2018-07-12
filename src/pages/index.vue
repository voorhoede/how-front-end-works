<template>
  <div>
    <Header />

    <div class="center-column">
      content
    </div>
  </div>
</template>

<script>
import index from '~/static/data/index.json'
import seoHead from '~/assets/seo-head'
import { Header } from '~/components'

export default {
  components: { Header },
  head () {
    return seoHead(index.seo)
  }
}
</script>

<style scoped>
@import '~assets/core.css';
</style>
