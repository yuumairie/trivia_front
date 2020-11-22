<template>
  <div id="nav">
    <h1 class="nav-bar" @click="goToHome()">
      <img
        style="height:20px"
        :src="require('@/assets/images/クラーケン.jpeg')"
      />UKNOWN<img
        style="height:20px"
        :src="require('@/assets/images/ギャング.jpeg')"
      />
    </h1>
    <div class="icons">
      <router-link to="/register">
        <div class="icon">
          <img
            style="height:20px"
            :src="require('@/assets/images/登録.jpeg')"
          />
          新規登録
        </div></router-link
      >
      <router-link to="/login">
        <div class="icon">
          <img
            style="height:20px"
            :src="require('@/assets/images/ログイン.jpeg')"
          />
          ログイン
        </div></router-link
      >
    </div>
  </div>
  <hr />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "../src/router";

export default defineComponent({
  setup() {
    function goToHome() {
      const router = useRouter();
      router.push("/home");
    }
    return { goToHome };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app #nav {
  background-color: white;
  color: black;
  text-align: left;
  height: 90px;
  background-image: url("../src/assets/images/brain-2029391_1280.png");
}
#nav .btn {
  background-color: white;
  color: black;
}
#nav .nav-bar {
  margin-top: 0;
  cursor: pointer;
  width: 200px;
}
#nav .icon {
  background-color: white;
  width: 98px;
  margin-right: 15px;
}
#nav .icons {
  position: absolute;
  top: 60px;
  display: flex;
  right: 5px;
}
</style>
