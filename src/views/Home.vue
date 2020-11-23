<template>
  <div class="home">
    <div class="post" v-if="jwt">
      <router-link to="/post">投稿</router-link>
    </div>
    <div>
      <select id="genre" v-model="state.genreId">
        <option
          v-for="genre in state.genreList"
          :key="genre.id"
          :value="genre.id"
          >{{ genre.name }}</option
        >
      </select>
      <img
        class="glasses"
        :src="require('@/assets/images/虫眼鏡.jpeg')"
        alt="検索"
        @click="search()"
      />
    </div>
    <div class="cards">
      <div v-for="trivia in triviaOnSearch" :key="trivia">
        <Trivia-Card :trivia="trivia" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from "vue";
import axios from "axios";
import TriviaCard from "../components/TriviaCard.vue";
import { useStore } from "../store";
import { useRouter } from "../router";
import { TriviaModel } from "../types/task";
export default defineComponent({
  name: "home",
  components: {
    TriviaCard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      triviaList: [],
      genreList: [],
      genre: "",
      genreId: "",
    });
    const jwt = computed(() => {
      return store.getters.getToken;
    });
    const triviaOnSearch = computed(() => {
      if (state.genre) {
        return state.triviaList.filter((trivia: TriviaModel) => {
          return trivia.genre === state.genre;
        });
      }
      return state.triviaList;
    });
    onMounted(() => {
      axios.get("api/trivias/").then((req) => {
        state.triviaList = req.data;
      });
      axios.get("api/genres/").then((req) => {
        state.genreList = req.data;
      });
    });
    function search() {
      state.genre = state.genreId;
    }

    return { state, jwt, search, triviaOnSearch };
  },
});
</script>
<style scoped>
.home {
  position: relative;
  top: 100px;
}
.post {
  float: right;
}
.glasses {
  width: 20px;
  margin-left: 18px;
  cursor: pointer;
}
</style>
