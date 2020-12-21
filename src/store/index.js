import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentTurn: 1, // 현재 턴 : 1 ~ 12
    currentTeamNum: 1, // 현재 텀을 진행 중인 팀 : 1 or 2
    dice: [0, 0, 0, 0, 0], // 주사위 눈
    explainCategory: "", // 현재 설명 중인 카테고리
  },
  getters: {
    isPlaying(state) {
      return state.currentTurn <= 12;
    },
  },
  mutations: {
    SET_CURRENT_TURN(state, turn) {
      state.currentTurn = turn;
    },
    SET_CURRENT_TEAM_NUM(state, num) {
      state.currentTeamNum = num;
    },
    SET_DICE(state, dice) {
      state.dice = dice;
    },
    SET_EXPLAIN_TARGET(state, category) {
      state.explainCategory = category;
    },
  },
});

export default store;
