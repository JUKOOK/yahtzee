<template>
  <div id="app">
    <ScoreArea @game-over="showGameResult" />
    <ExplainArea />
    <div class="background-area"></div>
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
      let title, text, cls;
      if (team1Total > team2Total) {
        title = "1팀 승리!!!";
        text = `1팀(${team1Total}) > 2팀(${team2Total})`;
        cls = "team1-win";
      } else if (team2Total > team1Total) {
        title = "2팀 승리!!!";
        text = `1팀(${team1Total}) < 2팀(${team2Total})`;
        cls = "team2-win";
      } else {
        title = "무승부!!!";
        text = `1팀(${team1Total}) = 2팀(${team2Total})`;
        cls = "";
      }

      Swal.fire({
        title,
        text,
        width: 540,
        padding: "0.8rem",
        showConfirmButton: false,
        imageUrl:
          "https://phoneky.co.uk/thumbs/screensavers/down/new/misc/dice_bisFS3Go.gif",
        imageWidth: 400,
        imageHeight: 512,
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
}

#app .background-area {
  width: 49rem;
  height: 41.2rem;
  position: fixed;
  right: 0;
  bottom: 0;
  background: url("./assets/img/dices.jpeg") center center no-repeat;
  background-size: cover;
}
</style>
