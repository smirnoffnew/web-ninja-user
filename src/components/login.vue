<template>
  <div id="login">
      <div class="containerLogin" style="margin-left: auto;margin-right: auto">
          <h3 >Autorization</h3>
          <form class="login-form">
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
          }
      }
  }
</script>
<style>
  #login{
    width: 100vw;
    height: 100vh;
    background: #f6f6f6;
    display: flex;
    justify-content:center;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }
  .spinnerLoginRagistration{
    background-image: url('../../src/assets/Spinner.gif');
    background-size: cover;
    width: 20px;
    height: 20px;
    color: red;
    margin-left: auto;
    margin-right: auto;
  }
  .containerLogin{
    width: 360px;
    padding: 40px;
    background: white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
  .login-form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 1s;
    border: 1px solid white;
  }
  h3{
    padding: 20px 0;
  }
  .errors{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

  }
  .crimson{
    color:crimson
  }
   button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    width: 100px;
    border: 0;
     background: darkcyan;
    align-self: flex-end;
    margin-top: 20px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 1s;
    cursor: pointer;
     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
   button:hover{
    background: rgb(0, 82, 82);
  }
  .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: rebeccapurple;
    text-decoration: none;
  }
</style>
