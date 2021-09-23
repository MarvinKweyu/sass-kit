import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchBarPlaceHolder: null,
    searchTerm: null,
    miniState: false
  },
  mutations: {
    setSearchPlaceHolder(state, holder) {
      state.searchBarPlaceHolder = holder;
    },
    setSearchTerm(state, searchItem) {
      state.searchTerm = searchItem;
    },
    changeMiniState(state) {
      state.miniState = !state.miniState;
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
    },
    miniState(state) {
      return state.miniState;
    }
  }
});
