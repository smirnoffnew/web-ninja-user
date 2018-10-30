<template>
   <div>
     <router-view></router-view>

     <router-view  name="login"></router-view>
     <router-view  name="register"></router-view>
   </div>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'
  import 'vuetify/dist/vuetify.min.css'
  import login from './components/login'
  Vue.use(Vuetify)
  export default {
      name: 'app',
      data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
      },
      created(){
          this.$router.push({name:'login'})
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
    background: whitesmoke;
    overflow-x: hidden;
  }
</style>
