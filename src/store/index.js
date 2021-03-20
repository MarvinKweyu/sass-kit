import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchBarPlaceHolder: null
  },
  mutations: {
    setSearchPlaceHolder(state, holder) {
      state.searchBarPlaceHolder = holder;
    }
  },
  actions: {},
  modules: {},
  getters: {
    searchPlaceHolder(state) {
      return state.searchBarPlaceHolder;
    }
  }
});
