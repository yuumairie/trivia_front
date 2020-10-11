<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent,onMounted, onUpdated, onUnmounted} from 'vue'
import axios from "axios";
// import { AxiosPromise } from "axios";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String
    }
  },
  setup(props) {
    onMounted(()=>{
      axios.get('/tasks/',{
        headers:{
          'Authorization': 'Token 90c33740259990faed5fa260d55d333c1be9f57b'
        }
      }).then(req => {
        console.log(req);
      })
    })
    const message = `${props.msg}. + Vue3`;
    const getUsers = (): void => {
      // let url = 'http://127.0.0.1:8000/api/users';
      axios.get('http://127.0.0.1:8000/api/users/',{
        headers:{
          'Authorization': 'Token 90c33740259990faed5fa260d55d333c1be9f57b'
        }
      }).then(req => {
        console.log(req);
      })
      
    }
    return { message,getUsers};
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
