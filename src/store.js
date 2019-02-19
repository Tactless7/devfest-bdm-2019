import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    environment: [],
  },

  getters: {
    canWalk: state => (x, y) => {
      let xSquare = (x + 20 - 2) / 40;
      let ySquare = (y + 20) / 40;
      return state.environment[ySquare - 1][xSquare - 1].canWalk;
    },
  },

  actions: {
    getEnvironment({ commit }) {
      const environment = new Array(18).fill([]).map((array, row) =>
        new Array(20).fill([]).map((array, column) => ({
          type: 'floor',
          canWalk: true,
          row,
          column,
        })),
      );
      environment[1][9].type = 'wall';
      environment[1][9].canWalk = false;

      commit('SET_ENVIRONMENT', environment);
      return environment;
    },
  },
  mutations: {
    SET_ENVIRONMENT(state, environment) {
      Vue.set(state, 'environment', environment);
    },
  },
});
