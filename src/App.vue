<template>
  <div id="nav">
    <h1 class="nav-bar">トリビア</h1>
    <button @click="registerUser()" class="btn">新規登録</button>
    <button class="btn">ログイン</button>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(){
    function registerUser(){
      return
    }
    return {registerUser}
  }
})
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
  background-color: black;
  color: white;
  text-align: left;
}
#nav .btn{
  background-color:black;
  color: white;
}
</style>
