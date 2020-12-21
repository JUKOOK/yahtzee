<template>
  <div id="scoring-area" class="scoring-area">
    <div class="score-column">
      <table
        class="score-table"
        :class="`team-${currentTeamNum}`"
        v-if="team1 && team2"
      >
        <tbody>
          <tr class="team-name bold-line">
            <th class="turn-number">
              <span v-if="currentTurn <= 12"> Turn {{ currentTurn }}/12 </span>
            </th>
            <td class="team-one">1팀</td>
            <td class="team-two">2팀</td>
          </tr>
          <tr id="aces" class="numberable">
            <th class="mission-aces" @click="SET_EXPLAIN_TARGET('aces')">
              <span class="icon"></span>Aces
            </th>
            <td
              :class="isFilled(team1, 'aces')"
              @click="applyMScore(team1, 'aces')"
            >
              {{ getValueText(team1, "aces") }}
            </td>
            <td
              :class="isFilled(team2, 'aces')"
              @click="applyMScore(team2, 'aces')"
            >
              {{ getValueText(team2, "aces") }}
            </td>
          </tr>
          <tr id="twos" class="numberable">
            <th class="mission-twos" @click="SET_EXPLAIN_TARGET('twos')">
              <span class="icon"></span>Twos
            </th>
            <td
              :class="isFilled(team1, 'twos')"
              @click="applyMScore(team1, 'twos')"
            >
              {{ getValueText(team1, "twos") }}
            </td>
            <td
              :class="isFilled(team2, 'twos')"
              @click="applyMScore(team2, 'twos')"
            >
              {{ getValueText(team2, "twos") }}
            </td>
          </tr>
          <tr id="threes" class="numberable">
            <th class="mission-threes" @click="SET_EXPLAIN_TARGET('threes')">
              <span class="icon"></span>Threes
            </th>
            <td
              :class="isFilled(team1, 'threes')"
              @click="applyMScore(team1, 'threes')"
            >
              {{ getValueText(team1, "threes") }}
            </td>
            <td
              :class="isFilled(team2, 'threes')"
              @click="applyMScore(team2, 'threes')"
            >
              {{ getValueText(team2, "threes") }}
            </td>
          </tr>
          <tr id="fours" class="numberable">
            <th class="mission-fours" @click="SET_EXPLAIN_TARGET('fours')">
              <span class="icon"></span>Fours
            </th>
            <td
              :class="isFilled(team1, 'fours')"
              @click="applyMScore(team1, 'fours')"
            >
              {{ getValueText(team1, "fours") }}
            </td>
            <td
              :class="isFilled(team2, 'fours')"
              @click="applyMScore(team2, 'fours')"
            >
              {{ getValueText(team2, "fours") }}
            </td>
          </tr>
          <tr id="fives" class="numberable">
            <th class="mission-fives" @click="SET_EXPLAIN_TARGET('fives')">
              <span class="icon"></span>Fives
            </th>
            <td
              :class="isFilled(team1, 'fives')"
              @click="applyMScore(team1, 'fives')"
            >
              {{ getValueText(team1, "fives") }}
            </td>
            <td
              :class="isFilled(team2, 'fives')"
              @click="applyMScore(team2, 'fives')"
            >
              {{ getValueText(team2, "fives") }}
            </td>
          </tr>
          <tr id="sixes" class="bold-line numberable">
            <th class="mission-sixes" @click="SET_EXPLAIN_TARGET('sixes')">
              <span class="icon"></span>Sixes
            </th>
            <td
              :class="isFilled(team1, 'sixes')"
              @click="applyMScore(team1, 'sixes')"
            >
              {{ getValueText(team1, "sixes") }}
            </td>
            <td
              :class="isFilled(team2, 'sixes')"
              @click="applyMScore(team2, 'sixes')"
            >
              {{ getValueText(team2, "sixes") }}
            </td>
          </tr>
          <tr id="missionTotal">
            <th class="mission-score">미션 합</th>
            <td>{{ team1.missionSum }}</td>
            <td>{{ team2.missionSum }}</td>
          </tr>
          <tr id="bonus" class="bold-line">
            <th class="mission-bonus">보너스 (+35)</th>
            <td>{{ getBonusText(team1) }}</td>
            <td>{{ getBonusText(team2) }}</td>
          </tr>
          <tr id="choice" class="numberable">
            <th
              class="mission-combination"
              @click="SET_EXPLAIN_TARGET('choice')"
            >
              <span class="icon"></span>Choice
            </th>
            <td
              :class="isFilled(team1, 'choice')"
              @click="applyCScore(team1, 'choice')"
            >
              {{ getValueText(team1, "choice") }}
            </td>
            <td
              :class="isFilled(team2, 'choice')"
              @click="applyCScore(team2, 'choice')"
            >
              {{ getValueText(team2, "choice") }}
            </td>
          </tr>
          <tr id="four-of-a-kind" class="numberable">
            <th
              class="mission-combination"
              @click="SET_EXPLAIN_TARGET('four-kind')"
            >
              <span class="icon"></span>Four of a kind
            </th>
            <td
              :class="isFilled(team1, 'fourKind')"
              @click="applyCScore(team1, 'fourKind')"
            >
              {{ getValueText(team1, "fourKind") }}
            </td>
            <td
              :class="isFilled(team2, 'fourKind')"
              @click="applyCScore(team2, 'fourKind')"
            >
              {{ getValueText(team2, "fourKind") }}
            </td>
          </tr>
          <tr id="full-house" class="numberable">
            <th
              class="mission-combination"
              @click="SET_EXPLAIN_TARGET('full-house')"
            >
              <span class="icon"></span>Full House
            </th>
            <td
              :class="isFilled(team1, 'fullHouse')"
              @click="applyCScore(team1, 'fullHouse')"
            >
              {{ getValueText(team1, "fullHouse") }}
            </td>
            <td
              :class="isFilled(team2, 'fullHouse')"
              @click="applyCScore(team2, 'fullHouse')"
            >
              {{ getValueText(team2, "fullHouse") }}
            </td>
          </tr>
          <tr id="small-straight" class="numberable">
            <th
              class="mission-combination"
              @click="SET_EXPLAIN_TARGET('small-str')"
            >
              <span class="icon"></span>S. Straight
            </th>
            <td
              :class="isFilled(team1, 'smallStr')"
              @click="applyCScore(team1, 'smallStr')"
            >
              {{ getValueText(team1, "smallStr") }}
            </td>
            <td
              :class="isFilled(team2, 'smallStr')"
              @click="applyCScore(team2, 'smallStr')"
            >
              {{ getValueText(team2, "smallStr") }}
            </td>
          </tr>
          <tr id="large-straight" class="numberable">
            <th
              class="mission-combination"
              @click="SET_EXPLAIN_TARGET('large-str')"
            >
              <span class="icon"></span>L. Straight
            </th>
            <td
              :class="isFilled(team1, 'largeStr')"
              @click="applyCScore(team1, 'largeStr')"
            >
              {{ getValueText(team1, "largeStr") }}
            </td>
            <td
              :class="isFilled(team2, 'largeStr')"
              @click="applyCScore(team2, 'largeStr')"
            >
              {{ getValueText(team2, "largeStr") }}
            </td>
          </tr>
          <tr id="yahtzee" class="bold-line numberable">
            <th class="mission-yahtzee" @click="SET_EXPLAIN_TARGET('yahtzee')">
              <span class="icon"></span>YAHTZEE
            </th>
            <td
              :class="isFilled(team1, 'yahtzee')"
              @click="applyCScore(team1, 'yahtzee')"
            >
              {{ getValueText(team1, "yahtzee") }}
            </td>
            <td
              :class="isFilled(team2, 'yahtzee')"
              @click="applyCScore(team2, 'yahtzee')"
            >
              {{ getValueText(team2, "yahtzee") }}
            </td>
          </tr>
          <tr id="total-score" class="bold-line">
            <th class="total-score">종합</th>
            <td>{{ team1.totalSum }}</td>
            <td>{{ team2.totalSum }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <DiceInput ref="diceInput" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { isNull } from "../utils";
import { calcHelper } from "../core/score-calculator";
import TeamBoard from "../core/team-board.js";

import DiceInput from "./DiceInput.vue";

export default {
  components: { DiceInput },
  data() {
    return {
      team1: null,
      team2: null,
    };
  },
  computed: {
    ...mapState(["currentTurn", "currentTeamNum", "dice"]),
    ...mapGetters(["isPlaying"]),
  },
  created() {
    this.team1 = new TeamBoard(1);
    this.team2 = new TeamBoard(2);
  },
  methods: {
    ...mapMutations([
      "SET_CURRENT_TURN",
      "SET_CURRENT_TEAM_NUM",
      "SET_DICE",
      "SET_EXPLAIN_TARGET",
    ]),
    // playing
    processGame() {
      this.SET_DICE([0, 0, 0, 0, 0]);
      this.$refs.diceInput.clearInput();
      if (this.currentTeamNum === 1) {
        this.SET_CURRENT_TEAM_NUM(2);
      } else {
        this.SET_CURRENT_TURN(this.currentTurn + 1);
        if (this.isPlaying) {
          this.SET_CURRENT_TEAM_NUM(1);
        } else {
          this.$emit("game-over", this.team1.totalSum, this.team2.totalSum);
        }
      }
    },
    // mission 항목 점수 결정
    applyMScore(team, category) {
      if (this.currentTeamNum !== team.teamNum) return;
      else {
        const val = calcHelper(category, this.dice);
        const result = team.setMissionScore(category, val);
        if (result) this.processGame();
        else return;
      }
    },
    // combination 항목 점수 결정
    applyCScore(team, category) {
      if (this.currentTeamNum !== team.teamNum) return;
      else {
        const val = calcHelper(category, this.dice);
        const result = team.setCombinationScore(category, val);
        if (result) this.processGame();
        else return;
      }
    },

    // options
    isFilled(team, category) {
      const currentValue = team.getValue(category);
      return !isNull(currentValue) ? "filled" : "";
    },
    helper(team, category) {
      if (this.currentTeamNum !== team.teamNum) return "";
      else return calcHelper(category, this.dice);
    },
    getValueText(team, category) {
      const currentValue = team.getValue(category);
      return !isNull(currentValue) ? currentValue : this.helper(team, category);
    },
    getBonusText(team) {
      if (isNull(team.isMissionSucceed)) return "";
      return team.isMissionSucceed ? "+35" : "+0";
    },
  },
};
</script>

<style lang="scss" scoped src="../assets/css/score-area.scss"></style>
