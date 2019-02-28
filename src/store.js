import Vue from 'vue';
import Vuex from 'vuex';
import { environment, red_house } from './environment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map:"pallet_town",
    sacha: {
      position: {
        x: 9,
        y: 3,
      },
      orientation: 'down',
    },
    environment: [],
  },

  getters: {
    canWalk: state => (x, y) => {
      return state.environment[y][x].canWalk;
    },
    checkType: state => (x, y) => {
      return state.environment[y][x].type;
    },
    checkDoorName: state => (x, y) => {
      return state.environment[y][x].name;
    },
    sachaPixelPosition: state => {
      let y = (state.sacha.position.y + 1) * 40 - 20;
      let x = (state.sacha.position.x + 1) * 40 - 20 + 2;

      return { x, y };
    },
    getOrientation: state => {
      return state.sacha.orientation;
    },
    getMap: state => {
      return state.map;
    }
  },

  actions: {
    getEnvironment({ commit }) {
      commit('SET_ENVIRONMENT', environment);
    },
    moveSacha({ commit, state, getters }, orientation) {
      commit('CHANGE_ORIENTATION', orientation);
      let position = state.sacha.position;
      switch (orientation) {
        case 'up':
          if (getters.canWalk(position.x, position.y - 1)) position.y--;
          if(getters.checkType(position.x, position.y - 1)) {
            commit('CHANGE_MAP', getters.checkDoorName(position.x, position.y - 1), position = {x: 3, y:7});
            commit('SET_ENVIRONMENT', red_house);
          }
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
    CHANGE_ORIENTATION(state, orientation) {
      Vue.set(state.sacha, 'orientation', orientation);
    },
    CHANGE_MAP(state, map, position){
      if(map !== undefined){
        Vue.set(state, 'map', map);
        Vue.set(state, 'position', position);
      }
    }
  },
});
