import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      indexPageUrl: '/'
    }),
    mutations: {
      setIndexPageUrl (state, { indexPageUrl } ) {
        state.indexPageUrl = indexPageUrl
      }
    }
  })
}

export default createStore
