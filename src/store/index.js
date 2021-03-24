import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchBarPlaceHolder: null,
    searchTerm: null
  },
  mutations: {
    setSearchPlaceHolder(state, holder) {
      state.searchBarPlaceHolder = holder;
    },
    setSearchTerm(state, searchItem) {
      state.searchTerm = searchItem;
    }
  },
  actions: {},
  modules: {},
  getters: {
    searchPlaceHolder(state) {
      return state.searchBarPlaceHolder;
    },
    searchTerm(state) {
      return state.searchTerm;
    }
  }
});
