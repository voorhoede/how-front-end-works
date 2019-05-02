export const state = () => ({
  indexPageUrl: '/'
})

export const mutations = {
  setIndexPageUrl (state, { indexPageUrl }) {
    state.indexPageUrl = indexPageUrl
  }
}
