<template>
  <div id="home">
<myheader></myheader>
<home-title></home-title>
<main_section_home></main_section_home>
<myfooter></myfooter>
  </div>
</template>

<script>
  import homeTitle from './homeTitle.vue'
  import header from './header.vue'
  import footer from './footer.vue'
  import main_section_home from './main_section_home.vue'
    export default {
        name: "homePage",
      data(){
          return{
              items:['login','register']
          }
      },
      components:{
        homeTitle:homeTitle,
        myheader:header,
        myfooter:footer,
        main_section_home:main_section_home
      },
      methods:{
        to(name){
          if(name == 'login'){
            this.$store.state.login.loginDisplay = 'flex'
          } else {
            this.$store.state.register.registerDisplay = 'flex'
          }
          this.$router.push({name:name})
        },
        menu(){
          console.log(event.currentTarget)
        }
      },

    }
</script>

<style>

    .header{
      padding: 20px;display: flex;justify-content: space-between;width: 100vw;
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.8), 0px 4px 5px 0px rgba(0,0,0,0.9), 0px 1px 10px 0px rgba(0,0,0,0.62);
    }
    .logo{
      width: 40px;height: 40px;background-size: cover;
      background-image: url('https://stickershop.line-scdn.net/stickershop/v1/product/1541126/LINEStorePC/main@2x.png;compress=true?__=20161019')
    }
  .v-menu__content{
    top:0!important;
    left: auto!important;
    right: 0!important;
  }
    .v-list__tile{
     height: 28px
    }
</style>
