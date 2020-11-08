<template>
  <div class="home">
    <div class="cards" v-for="trivia in state.triviaList" :key="trivia">
      <Trivia-Card :trivia="trivia" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from "vue";
import axios from "axios";
import TriviaCard from "../components/TriviaCard.vue";
import { useStore, ActionTypes, store } from "../store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  components: {
    TriviaCard,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      triviaList: Array,
    });
    const jwt = computed(() => {
      return store.getters.getToken();
    });

    onMounted(() => {
      //   axios
      //     .get("api/trivias/", {
      //       headers: {
      //         Authorization: `JWT ${jwt}`,
      //       },
      //     })
      //     .then((req) => {
      //       state.triviaList = req.data;
      //     });
      axios.get("api/trivias/").then((req) => {
        state.triviaList = req.data;
      });
    });

    return { state, jwt };
  },
});
</script>
<style scoped></style>
