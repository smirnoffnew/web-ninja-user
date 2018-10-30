import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import axios from 'axios'
import login from './components/login.vue'
Vue.use(Vuex);
Vue.use(VueRouter)
const instance = axios.create({
  baseURL: 'http://api.year-progress.org',
});

const store = new Vuex.Store({
  state:{
      requests:{
          autorization(email,password){
              let config = {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              };
              instance.post('/api/signin',
                  {
                      email: email,
                      password: password
                  },config)
                  .then(response => {
                      console.log(response)
                  })
                  .catch(response => {
                      console.log(response.response)
                  })
          }
      },
  }
    // getters:{
    //     getAutorization: requests =>{
    //       return requests.autorization()
    //     }
    // }
});


const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/login',name:'login', component: login},
  ],
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
