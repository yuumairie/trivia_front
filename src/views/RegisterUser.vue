<template>
  <div class="register-page">
    <div class="name">
      <label for="name">ユーザ名</label>
      <input type="text" id="name" v-model="state.name" />
    </div>
    <div class="email">
      <label for="address">アドレス</label>
      <input type="email" id="address" v-model="state.email" />
    </div>
    <div class="password">
      <label for="password">パスワード</label>
      <input type="password" id="password" v-model="state.password" />
    </div>
    <div>
      <button @click="create()">アカウント作成</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore, ActionTypes, store } from "../store";
import {useRouter} from "vue-router";
import axios from "axios";
export default defineComponent({
  setup(props,context) {
    const state = reactive({
      name: "",
      email: "",
      password: "",
    });

    //アカウント作成関数
    function create() {
      const store = useStore();
      const router = useRouter()
      const data = {
        email: state.email,
        password: state.password,
      };
      //アカウント作成
      axios.post("/api/register/", data).then(() => {
        //jwt取得
        axios.post("authen/jwt/create", data).then((req) => {
          store.dispatch(ActionTypes.LOGIN, req).then(()=>{
            //ホーム画面へ移動
            router.push("home")
          })
        });
      });
    }
    return { state, create };
  },
});
</script>

<style scoped></style>
