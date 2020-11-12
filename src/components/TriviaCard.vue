<template>
  <div class="trivia">
    <div class="header">
      <div class="user">{{ trivia.id }}</div>
      <div class="genre">
        <div>{{ trivia.genre.name }}</div>
        <div>{{ trivia.created_at }}</div>
      </div>
    </div>
    <div class="content" @click="click()">{{ trivia.content }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrivaiCard",
  props: {
    trivia: {
      type: Object,
    },
  },
  setup() {
    function click() {
      return;
    }
    return { click };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trivia {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  border: solid black 1px;
  margin: 10px;
  width: 28%;
  float: left;
  margin: 10px 30px 0px 30px;
}
.header {
  border-bottom: solid rgba(0, 0, 0, 0.16) 1pt;
  float: left;
  width: 100%;
}
.trivia .user {
  float: left;
  font-size: 25px;
}
.trivia .genre {
  float: right;
}
.trivia .time {
  float: left;
}
.trivia .content {
  clear: both;
  height: 130px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
  cursor: pointer;
}
</style>
