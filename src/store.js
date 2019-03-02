import Vue from 'vue';
import Vuex from 'vuex';
import { environment } from './environment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map:{
      name:"pallet_town",
      gridWidth: "20",
      gridHeight: "18"
    },
    sacha: {
      position: {
        x: 9,
        y: 3,
      },
      orientation: 'down',
      pokemon: {
        hp: 10
      },
    },
    enemy: {
      pokemon: {
        hp: 10
      } 
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
    checkWarpName: state => (x, y) => {
      return state.environment[y][x].warp;
    },
    sachaPixelPosition: state => {
      let y = (state.sacha.position.y + 1) * 40 - 20;
      let x = (state.sacha.position.x + 1) * 40 - 20 + 2;

      return { x, y };
    },
    getOrientation: state => {
      return state.sacha.orientation;
    },
    typeOfCurrentSquare: state => {
      const x = state.sacha.position.x
      const y = state.sacha.position.y
      if (state.environment[y] === undefined) {
        return ''
      } else {
        return state.environment[y][x].type
      }
    },
    getMap: state => {
      return state.map;
    }
  },

  actions: {
    getEnvironment({ commit }) {
      commit('SET_ENVIRONMENT', environment.pallet_town);
    },
    moveSacha({ commit, state, getters }, orientation) {
      let position = state.sacha.position;
      commit('CHANGE_ORIENTATION', orientation);
      switch (orientation) {
        case 'up':
          if (getters.canWalk(position.x, position.y - 1)) position.y--;
          if(getters.checkWarpName(position.x, position.y) !== undefined) {
            commit('CHANGE_MAP', getters.checkWarpName(position.x, position.y));
          }
          break;
        case 'down':
          if (getters.canWalk(position.x, position.y + 1)) position.y++;
          if(getters.checkWarpName(position.x, position.y) !== undefined) {
            commit('CHANGE_MAP', getters.checkWarpName(position.x, position.y));
          }
          break;
        case 'right':
          if (getters.canWalk(position.x + 1, position.y)) position.x++;
          if(getters.checkWarpName(position.x, position.y) !== undefined) {
            commit('CHANGE_MAP', getters.checkWarpName(position.x, position.y));
          }
          break;
        case 'left':
          if (getters.canWalk(position.x - 1, position.y)) position.x--;
          if(getters.checkWarpName(position.x, position.y) !== undefined) {
            commit('CHANGE_MAP', getters.checkWarpName(position.x - 1, position.y));
          }
          break;
      }

      commit('UPDATE_POSITION', position);
    }
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
    DECREASE_SACHA_POKEMON_HP(state, amount) {
      let newHp = state.sacha.pokemon.hp - amount;
      state.sacha.pokemon.hp = newHp < 0 ? 0 : newHp;
    },
    DECREASE_ENEMY_POKEMON_HP(state, amount) {
      let newHp = state.enemy.pokemon.hp - amount;
      state.enemy.pokemon.hp = newHp < 0 ? 0 : newHp;
    },
    RESTORE_SACHA_POKEMON_HP(state) {
      state.sacha.pokemon.hp = 10;
    },
    RESTORE_ENEMY_POKEMON_HP(state) {
      state.enemy.pokemon.hp = 10;
    },
    CHANGE_MAP(state, map){
      Vue.set(state, 'environment', environment[map.name]);
      Vue.set(state, 'map', {name:map.name, gridWidth: environment[map.name][0].length, gridHeight: environment[map.name].length});
      state.sacha.position.x = map.x;
      state.sacha.position.y = map.y;
    }
  },
});
