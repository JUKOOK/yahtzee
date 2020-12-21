// import { Utils } from '@/vendors/alpha-chart.min.js';
import Vue from "vue";
import { isNull, sumObjValues } from "../utils";

export default class TeamBoard {
  constructor(teamNum) {
    this.teamNum = teamNum;

    this.mission = {
      aces: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
    };
    this.combination = {
      choice: null,
      fourKind: null,
      fullHouse: null,
      smallStr: null,
      largeStr: null,
      yahtzee: null,
    };

    this._missions = ["aces", "twos", "threes", "fours", "fives", "sixes"];
    this.missionSum = 0;
    this.isMissionSucceed = null;
    this.totalSum = 0;
  }

  setMissionScore(category, val) {
    if (!isNull(this.mission[category])) return false;

    Vue.set(this.mission, category, val);
    this._setMissionSum();
    this._setMissionSucceed();
    this._setTotalSum();
    return true;
  }
  setCombinationScore(category, val) {
    if (!isNull(this.combination[category])) return false;

    Vue.set(this.combination, category, val);
    this._setTotalSum();
    return true;
  }
  getValue(category) {
    return this._missions.includes(category)
      ? this.mission[category]
      : this.combination[category];
  }

  _setMissionSum() {
    this.missionSum = sumObjValues(this.mission);
  }
  _setMissionSucceed() {
    for (let c of this._missions) {
      if (isNull(this.mission[c])) return (this.isMissionSucceed = null);
    }
    this.isMissionSucceed = this.missionSum >= 63;
  }
  _setTotalSum() {
    const combinationSum = sumObjValues(this.combination);
    const bonus = this.isMissionSucceed ? 35 : 0;
    this.totalSum = this.missionSum + bonus + combinationSum;
  }
}
