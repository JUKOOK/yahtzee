<template>
  <div id="app">
    <ScoreArea @game-over="showGameResult" />
    <ExplainArea />
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue";
import ExplainArea from "./components/ExplainArea.vue";

import Swal from "sweetalert2";

export default {
  name: "App",
  components: { ScoreArea, ExplainArea },
  methods: {
    showGameResult(team1Total, team2Total) {
      let title, cls;
      if (team1Total > team2Total) {
        title = "1팀 승리!!!";
        cls = "team1-win";
      } else if (team2Total > team1Total) {
        title = "2팀 승리!!!";
        cls = "team2-win";
      } else {
        title = "무승부!!!";
        cls = "";
      }

      Swal.fire({
        title,
        text: `1팀(${team1Total}) - 2팀(${team2Total})`,
        width: 540,
        padding: "0.8rem",
        showConfirmButton: false,
        imageUrl:
          "https://thumbs.gfycat.com/PersonalSoreIbadanmalimbe-size_restricted.gif",
        imageWidth: 400,
        imageHeight: 320,
        imageAlt: "Dice Rain",
        customClass: {
          title: cls,
        },
      }).then(() => {
        window.location.reload();
      });
    },
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: aliceblue;
}
</style>
