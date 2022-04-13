import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import news from "./news.js";
import auth from "./auth.js";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["auth.username", "news"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    news: {
      namespaced: true,
      ...news,
    },
    auth: {
      namespaced: true,
      ...auth,
    },
  },
});
