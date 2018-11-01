<template>
    <div class="site-content">
      <app-header :backgroundColor="page.headerColor"
              :buttonLabel="label"
              :buttonUrl="url"
              :concepts="page.concepts"
              :description="page.introduction"
              :image="page.headerImage"
              :title="page.title" />

      <main class="site-content__main center-column">
        <h2 class="a11y-sr-only">Filter techniques</h2>

        <search-form v-model="searchValue" placeholderText="Filter techniques" />

        <h2 class="a11y-sr-only">Techniques</h2>

        <div v-if="filteredLemmas.length" class="alphabetical-index">
          <index-list v-for="(lemmas, key) in sortedGroupedLemmas"
                    :key="key"
                    :indexLetter="key"
                    :lemmaColor="page.lemmaColor"
                    :lemmas="lemmas" />
        </div>
        <div v-else class="alphabetical-index__no-results" role="status" aria-live="polite">No filter results</div>
      </main>

      <app-footer :body="page.footer" />
    </div>
</template>

<script>
import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import IndexList from '../components/index-list'
import SearchForm from '../components/search-form'

export default {
  components: { AppFooter, AppHeader, IndexList, SearchForm },
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
      searchValue: undefined,
    }
  },
  fetch({ store, route }) {
    store.commit('setIndexPageUrl', { indexPageUrl: route.fullPath })
  },
  methods: {
    ignoreCaseSort(a, b) {
      const a_lower = a.name.toLowerCase()
      const b_lower = b.name.toLowerCase()
      return ((a_lower > b_lower) ? 1 : ((b_lower > a_lower) ? -1 : 0))
    }
  },
  computed: {
    filteredLemmas() {
      const searchValue = this.searchValue;
      const searchRegExp = new RegExp(searchValue, 'i')

      return searchValue
        ? this.page.lemmas.filter(lemma => searchRegExp.test(lemma.name))
        : this.page.lemmas
    },
    groupedLemmas() {
      return this.filteredLemmas.reduce((acc, lemma) => {
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

<style>
.alphabetical-index__no-results {
  margin-bottom: var(--spacing-double);
  text-align: center;
}

@media (min-width: 600px) {
  .alphabetical-index {
    margin-bottom: var(--spacing-default);
    columns: 2;
    column-gap: var(--spacing-double);
  }

  .alphabetical-index .index-list {
    display: inline-block;
    width: 100%;
  }
}
</style>
