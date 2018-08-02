<template>
    <div>
      <Header :backgroundColor="page.headerColor"
              :buttonLabel="label"
              :buttonUrl="url"
              :concepts="page.concepts"
              :description="page.introduction"
              :image="page.headerImage"
              :title="page.title" />

      <main class="alphabetical-index center-column">
        <IndexList v-for="(lemmas, key) in sortedGroupedLemmas"
                   :key="key"
                   :indexLetter="key"
                   :lemmaColor="page.lemmaColor"
                   :lemmas="lemmas" />
      </main>

      <Footer :body="page.footer" />
    </div>
</template>

<script>
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import Footer from '../components/footer'
import Header from '../components/header'
import IndexList from '../components/index-list'

export default {
  components: { Footer, Header, IndexList },
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
  },
  methods: {
    ignoreCaseSort(a, b) {
      const a_lower = a.name.toLowerCase()
      const b_lower = b.name.toLowerCase()
      return ((a_lower > b_lower) ? 1 : ((b_lower > a_lower) ? -1 : 0))
    }
  },
  computed: {
    groupedLemmas() {
      return this.page.lemmas.reduce((acc, lemma) => {
        const firstLetter = lemma.name.charAt(0).toLowerCase()
        const content = acc[firstLetter] ? acc[firstLetter] : []
        content.push(lemma)
        acc[firstLetter] = content
        return acc
      }, {})
    },
    sortedGroupedLemmas() {
      const lemmas = this.groupedLemmas
      if(typeof lemmas !== undefined) {
        Object.keys(lemmas).forEach(lemmaKey => lemmas[lemmaKey].sort(this.ignoreCaseSort))
        return lemmas
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/variables.css';

.alphabetical-index .index-list {
  margin-bottom: calc(var(--spacing-default) * 3);
}

.alphabetical-index .index-list:last-child {
  margin-bottom: var(--spacing-double);
}

@media (min-width: 600px) {
  .alphabetical-index {
    margin-bottom: var(--spacing-default);
    columns: 2;
    column-gap: var(--spacing-double);
  }

  .alphabetical-index .index-list:last-child {
    margin-bottom: calc(var(--spacing-default) * 3);
  }
}
</style>