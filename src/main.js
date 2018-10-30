import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import axios from 'axios'
import login from './components/login.vue'
import register from './components/registration.vue'
import home from './components/home/homePage.vue'
Vue.use(Vuex);
Vue.use(VueRouter)
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

const store = new Vuex.Store({
  state:{
      requests:{
          autorization(email,password){
              let config = {
                headers: {'Content-Type': 'application/json'}
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
          },
          create(username,email,password){
              instance.post('/api/register',
              {
                username:username,
                email: email,
                password: password
              })
              .then(response => {
                console.log(response)
              })
              .catch(response => {
                console.log(response.response)
              })
          }
      },
      login:{
        loginDisplay:'none'
      },
      register:{
        registerDisplay:'none'
      },
      home:{
          simpleTest:[
            {
              photo:'https://image.flaticon.com/icons/svg/23/23735.svg',
              title:'Тесты по РЕЬД разметке',
              counts:10,
              time:2,
            },
            {
              photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/2000px-CSS.3.svg.png',
              title:'Тесты по каскадным таблицам стилей',
              counts:15,
              time:2
            },
            {
              photo:'https://mbtskoudsalg.com/images/svg-js-3.png',
              title:'Тесты по джаваскрипт',
              counts:40,
              time:5
            }
          ],
            middleTest:[
              {
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png',
                title:'Тесты по вью жс',
                counts:20,
                time:5
              },
              {
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
                title:'тесты по ангуляр 2-7',
                counts:30,
                time:5
              },
              {
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
                title:'тесты по реакт жс',
                counts:25,
                time:5
              }
            ],
            advanceTest:[
              {
                photo:'https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png',
                title:'тесты по пиашпи',
                counts:40,
                time:7
              },
              {
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
                title:'тесты по ноде жс',
                counts:40,
                time:7
              },
              {
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LaravelLogo.png/1200px-LaravelLogo.png',
                title:'тесты по ларавел ',
                counts:30,
                time:7
              },

            ]
      }
  },
  mutations: {
      logins(display){
          state.login.loginDisplay = display
      }
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
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default:home,
        login:login,
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: home,
        login:register,
      }
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
