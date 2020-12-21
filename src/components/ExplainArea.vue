<template>
  <div id="explain-area" class="explain-area">
    <div class="explain-wrap">
      {{ explainCategory }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["explainCategory"]),
  },
};
</script>

<style lang="scss" scoped src="../assets/css/explain-area.scss"></style>
