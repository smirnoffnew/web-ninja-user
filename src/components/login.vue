<template>
  <div id="login">
      <div class="containerLogin_registraton" style="margin-left: auto;margin-right: auto">
          <div class="close" @click="close()"></div>
          <h3>Autorization</h3>
          <form class="login_registration-form">
              <input type="text" v-model="email" placeholder="Email" @input="mailValid()" required/>
              <div class="errors">
                  <div v-if="email == ''">
                       Email required<span class="crimson">*</span>
                  </div>
                  <div  class="crimson" v-if="error_mail == 1">
                       Email invalid
                  </div>
              </div>
              <input type="password" v-model="password" @input="passwordValid()" placeholder="Password" required/>
              <div class="errors">
                  <div v-if="password == ''">
                      Password required<span class="crimson">*</span>
                  </div>
                  <div class="crimson" v-if="error_password == 1">
                      min cheraters 8
                  </div>
              </div>
              <p style="align-self: flex-end">
                Forgot password?
              </p>
              <button @click="autorization()" >
                  <span v-if="loading == false">Login</span>
                  <div v-if="loading == true" class="spinnerLoginRagistration" ></div>
              </button>
          </form>
      </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  // import 'material-design-icons-iconfont/dist/material-design-icons.css'
  export default {
      name:'login',
      data(){
          return{
            email:'yarik.roterdamskiy@gmail.com',
            password:'2363796z',
            error_password:0,
            error_mail:0,
            loading:false
          }
      },
      created(){

      },
      methods:{
          mailValid(){
              let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
              if(reg.test(this.email) == false) {
                return this.error_mail = 1
              }
              return this.error_mail = 0
          },
          passwordValid(){
              this.password.length < 8 && this.password != ''?this.error_password = 1:this.error_password = 0
          },
          autorization() {
              this.loading = true
              if (this.error_mail == 1 || this.error_password == 1){
                  event.preventDefault();
                  this.loading = false
              } else {
                  if(this.email != '' && this.password != ''){
                      event.preventDefault();
                      this.$store.state.requests.autorization(this.email,this.password)
                  }
              }
              this.loading = false
          },
          close(){
              // console.log(this.$store)
            this.$store.state.login.loginDisplay = 'none'
            this.$router.push({name:'home'})
          }
      }
  }
</script>
