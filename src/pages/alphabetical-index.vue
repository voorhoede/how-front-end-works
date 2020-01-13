<template>
    <div class="site-content">
      <app-header :buttonLabel="page.headerButton.label"
                  :buttonUrl="page.headerButton.url"
                  :title="page.title" />

      <main class="site-content__main center-column">
        <h2 class="a11y-sr-only">Filter topics</h2>

        <search-form v-model="searchValue" placeholderText="Filter topics" @toggleSearchStatus="getSearchStatus" />

        <h2 class="a11y-sr-only">Topics</h2>

        <div v-if="filteredTopics.length" class="alphabetical-index">
          <index-list v-for="(topics, key) in sortedGroupedTopics"
                      :key="key"
                      :indexLetter="key"
                      :topicColor="page.topicColor"
                      :topics="topics" />
          <div v-if="isSearching"
               class="a11y-sr-only"
               role="status"
               aria-live="polite">
            {{ filteredTopics.length }} {{ filteredTopics.length === 1 ? 'filter result' : 'filter results' }}
          </div>
        </div>
        <div v-else
             class="alphabetical-index__no-results"
             role="status"
             aria-live="polite">
          No filter results
        </div>
      </main>

      <app-footer :body="page.footer" />
    </div>
</template>

<script>
import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import BackButton from '../components/back-button'
import getPageData from '../lib/get-page-data'
import seoHead from '../lib/seo-head'
import IndexList from '../components/index-list'
import SearchForm from '../components/search-form'

export default {
  components: { AppFooter, BackButton, AppHeader, IndexList, SearchForm },
  async asyncData() {
    const page = await getPageData('alphabetical-index')
    return { page }
  },
  head() {
    return seoHead(
      this.page.title,
      this.page.slug,
      this.page.introduction,
      this.page.seoImage
    )
  },
  data() {
    return {
      searchValue: undefined,
      isSearching: false,
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
    },
    getSearchStatus(searchStatus) {
      this.isSearching = searchStatus
    }
  },
  computed: {
    filteredTopics() {
      const searchValue = this.searchValue;
      const searchRegExp = new RegExp(searchValue, 'i')

      return searchValue
        ? this.page.topics.filter(topic => searchRegExp.test(topic.name))
        : this.page.topics
    },
    groupedTopics() {
      return this.filteredTopics.reduce((acc, topic) => {
        const firstLetter = topic.name.charAt(0).toLowerCase()
        const content = acc[firstLetter] ? acc[firstLetter] : []
        content.push(topic)
        acc[firstLetter] = content
        return acc
      }, {})
    },
    sortedGroupedTopics() {
      const topics = this.groupedTopics
      if(typeof topics !== undefined) {
        Object.keys(topics).forEach(topicKey => topics[topicKey].sort(this.ignoreCaseSort))
        return topics
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
