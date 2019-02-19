import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sacha: {
      position: {
        x: 9,
        y: 3,
      },
    },
    environment: [],
  },

  getters: {
    canWalk: state => (x, y) => {
      return state.environment[y][x].canWalk;
    },
    sachaPixelPosition: state => {
      let y = (state.sacha.position.y + 1) * 40 - 20;
      let x = (state.sacha.position.x + 1) * 40 - 20 + 2;

      return { x, y };
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
    moveSacha({ commit, state, getters }, orientation) {
      let position = state.sacha.position;
      switch (orientation) {
        case 'up':
          if (getters.canWalk(position.x, position.y - 1)) position.y--;
          break;
        case 'down':
          if (getters.canWalk(position.x, position.y + 1)) position.y++;
          break;
        case 'right':
          if (getters.canWalk(position.x + 1, position.y)) position.x++;
          break;
        case 'left':
          if (getters.canWalk(position.x - 1, position.y)) position.x--;
          break;
      }

      commit('UPDATE_POSITION', position);
    },
  },
  mutations: {
    SET_ENVIRONMENT(state, environment) {
      Vue.set(state, 'environment', environment);
    },
    UPDATE_POSITION(state, position) {
      Vue.set(state.sacha, 'position', position);
    },
  },
});
