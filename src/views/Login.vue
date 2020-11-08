<template>
  <div class="register-page">
    <div class="email">
      <label for="address">アドレス</label>
      <input type="email" id="address" v-model="state.email" />
    </div>
    <div class="password">
      <label for="password">パスワード</label>
      <input type="password" id="password" v-model="state.password" />
    </div>
    <div>
      <button @click="login()">ログイン</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore, ActionTypes } from "../store";
import { useRouter } from "../router";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "",
      email: "",
      password: "",
    });

    //ログイン
    function login() {
      const store = useStore();
      const router = useRouter();
      const data = {
        email: state.email,
        password: state.password,
      };

      //jwt取得
      store.dispatch(ActionTypes.LOGIN, data).then(() => {
        //ホーム画面へ移動
        router.push("home");
      });
    }
    return { state, login };
  },
});
</script>

<style scoped></style>
