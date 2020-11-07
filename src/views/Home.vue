<template>
  <div class="home">
    <div class="cards" v-for="trivia in state.triviaList" :key="trivia">
      <Trivia-Card :trivia="trivia" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import axios from "axios";
import TriviaCard from "../components/TriviaCard.vue";

export default defineComponent({
  name: "home",
  components: {
    TriviaCard,
  },
  setup() {
    const state = reactive({
      triviaList: Array 
    });
    onMounted(() => {
      axios
        .get("api/trivias/", {
          headers: {
            Authorization: "Token 90c33740259990faed5fa260d55d333c1be9f57b",
          },
        })
        .then((req) => {
          state.triviaList = req.data;
        });
    });

    return { state };
  },
});
</script>
<style scoped>

</style>
