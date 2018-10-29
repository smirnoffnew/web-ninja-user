<template>
  <div id="login">
      <div class="errors" >
          <div v-for="err in errors">{{err}}
            <v-btn fab dark small color="primary">
                <v-icon dark>remove</v-icon>
            </v-btn></div>
      </div>
      <div class="containerLogin" style="margin-left: auto;margin-right: auto">
          <h3 style="font-style: italic">Autorization</h3>
          <form class="login-form">
              <input type="text" v-model="email" placeholder="Email" /><br>
              <input type="password" v-model="password" placeholder="Password"/>
              <p style="align-self: flex-end">
                Forgot password?
              </p>
                <button @click="signIn()" >
                  <span >Login</span>
                  <!--<ng-template #spiner>-->
                  <!--<div class="spinnerLoginRagistration" ></div>-->
                  <!--</ng-template>-->
                </button>
          </form>
      </div>
  </div>
</template>
<script>
  export default {
    name:'login',
    data(){
      return{
        email:'',
        password:'',
        errors:[]
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
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 1s;
    border: 1px solid white;
  }
  .errors{
    position: absolute;
    top:0;
    height: auto;
    width: 100vw;
  }
  .errors div{
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: crimson;
    font-weight: bold;
    color: white;
    margin-bottom: 1px;
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
