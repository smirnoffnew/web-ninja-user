<template>
    <login>

    </login>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
  // import 'material-design-icons-iconfont/dist/material-design-icons.css'
  Vue.use(Vuetify)
  import login from './components/login'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    login:login
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>
