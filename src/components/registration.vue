<template>
  <div id="registration">
      <div class="containerLogin_registraton">
          <div class="close" @click="close()"></div>
          <h3>Registration</h3>
          <form class="login_registration-form">
              <input type="text" v-model="username" placeholder="Email"  required/>
              <div class="errors">
                  <div v-if="username == ''">
                      Email required<span class="crimson">*</span>
                  </div>
              </div>
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
              <input type="password" v-model="comfirm_password" @input="passwordConfirmValid()" placeholder="Comfirm Password" required/>
              <div class="errors">
                  <div v-if="comfirm_password == ''">
                        Comfirm Password required<span class="crimson">*</span>
                  </div>
                  <div class="crimson" v-if="error_confirm_password != 1">
                    Passwords are not the same
                  </div>
              </div>
              <p style="align-self: flex-end">
                  Forgot password?
              </p>
              <button @click="create()" >
                  <span v-if="loading == false">Login</span>
                  <div v-if="loading == true" class="spinnerLoginRagistration" ></div>
              </button>
          </form>
      </div>
  </div>
</template>

<script>
    export default {
        name: "registration",
        data(){
            return{
              email:'yarik1999@gmail.com',
              password:'2363796z',
              error_password:0,
              error_mail:0,
              loading:false,
              username:'yarik',
              comfirm_password:'2363796z',
              error_confirm_password:1
            }
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
             passwordConfirmValid(){
                 this.comfirm_password == this.password? this.error_confirm_password = 1:this.error_confirm_password = 0
             },
             create(){
                 this.loading = true
                 if (this.error_mail == 1 || this.error_password == 1 || this.error_confirm_password ==0){
                     event.preventDefault();
                     this.loading = false
                 } else {
                     if(this.email != '' && this.username != '' && this.password != ''){
                         event.preventDefault();
                         this.$store.state.requests.create(this.username,this.email,this.password)
                     }
                 }
                 this.loading = false
             },
             close(){
                 this.$store.state.register.registerDisplay = 'none'
                 this.$router.push({name:'home'})
             }
         }
    }
</script>

<style scoped>

</style>
