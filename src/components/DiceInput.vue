<template>
  <div class="input-dice">
    <input type="number" @input="setDice" v-model.number="diceNumber" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      diceNumber: null,
    };
  },
  computed: {
    ...mapState(["dice"]),
  },
  methods: {
    ...mapMutations(["SET_DICE"]),
    setDice() {
      if (this.diceNumber < 11111 || this.diceNumber > 66666) return;
      else {
        const digits = this.diceNumber
          .toString(10)
          .replace(/\D/g, "0")
          .split("")
          .map(Number);
        this.SET_DICE(digits);
      }
    },
    clearInput() {
      this.diceNumber = null;
    },
  },
};
</script>

<style lang="scss" scoped src="../assets/css/dice-input.scss"></style>
