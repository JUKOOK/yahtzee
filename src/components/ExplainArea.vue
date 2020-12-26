<template>
  <div id="explain-area" class="explain-area">
    <div class="explain-wrap base-category" v-show="explainCategory === 'base'">
      <h2 class="title">야추 규칙 설명</h2>
      <p class="message">
        - 야추는 <b>주사위 5개를 최대 3번 던져서</b> 나온 눈에 따라 점수표에
        점수를 채우면서 진행됩니다.
      </p>
      <p class="message">
        - 각 팀은 자신의 턴에 주사위를 던지고, 나온 주사위의 눈을 이용하여
        원하는 점수표의 1칸을 <b> 반드시 채워야 합니다.</b>
      </p>
      <p class="message">
        - 각 팀별로 12개의 점수표를 모두 채운 후에 양 팀의 합산을 비교하여
        승자를 결정합니다.
      </p>
      <br />
      <p class="message">
        - 야추의 점수표는 크게 <b>미션 영역</b>과 <b>조합 영역</b>으로
        나누어집니다.
      </p>
      <br />
      <p class="message">
        - <b>미션 영역</b>은 <b>한 개의 숫자에 대해서만</b> 점수를 계산하는
        영역입니다.
      </p>
      <p class="message">
        - <b>미션 영역</b>의 모든 점수를 채웠을 때, 여섯 점수를 합산하여
        <b>'미션 합'이 63점 이상이 된 경우</b>에 보너스 점수 <b>35점</b>을
        획득할 수 있습니다.
      </p>
      <br />
      <p class="message">
        - <b>조합 영역</b>은 주사위들의 눈이 <b>특정 조건을 만족할 경우</b>에만
        점수를 계산하는 영역입니다.
      </p>
      <p class="message">
        - 점수별로 조건과 점수 방식이 다르며
        <b>조건을 만족하지 못하면 0점으로 채워집니다.</b>
      </p>
    </div>
    <div
      class="explain-wrap rule-category"
      v-show="explainCategory === 'rules'"
    >
      <h2 class="title">야추 점수표 설명</h2>
      <table class="rule-table">
        <tbody>
          <tr class="header bold-bottom-line">
            <th class="rull-name">점수</th>
            <td class="explain">설명</td>
            <td class="score">점수 배점</td>
          </tr>
          <tr
            class="rules"
            :class="getClass(rule)"
            v-for="rule in scoreRules"
            :key="rule.id"
          >
            <th class="rull-name">{{ rule.name }}</th>
            <td class="explain">{{ rule.explain }}</td>
            <td class="score">{{ rule.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { RULES } from "../core/explain-rules";

export default {
  data() {
    return {
      scoreRules: RULES,
    };
  },
  computed: {
    ...mapState(["explainCategory"]),
  },
  created() {
    window.addEventListener("keydown", (e) => this.changeExplainCategory(e));
  },
  beforeDestroy() {
    window.removeEventListener("keydown", (e) => this.changeExplainCategory(e));
  },
  methods: {
    ...mapMutations(["SET_EXPLAIN_CATEGORY"]),
    changeExplainCategory(e) {
      if (e.key === "Enter") {
        this.SET_EXPLAIN_CATEGORY(
          this.explainCategory === "base" ? "rules" : "base"
        );
      }
    },
    getClass(rule) {
      switch (rule.name) {
        case "Sixes":
          return "bold-bottom-line";
        case "Choice":
          return "bold-top-line";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped src="../assets/css/explain-area.scss"></style>
