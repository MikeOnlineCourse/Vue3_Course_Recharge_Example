import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpen: false,
  },
  actions: {
    handMenuOpen({ commit }, bool) {
      commit("handMenuOpen", bool);
    },
  },
  mutations: {
    handMenuOpen(state, bool) {
      state.isMenuOpen = bool;
    },
  },
  getters: {
    isMenuOpen: (state) => state.isMenuOpen,
  },
});
