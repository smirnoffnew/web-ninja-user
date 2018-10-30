<template>
    <section>
        <div>
          <div class="containerItem" >
              <div class="item" v-for="item in items_simple" >
                  <div style="width: 100%;height: 50px;background-position: center;background-size: contain;background-repeat: no-repeat" :style="{backgroundImage:'url('+item.photo+')'}"></div>
                  <div>{{item.title}}</div>
                  <div>{{'Количество вопросов:'+item.counts}}</div>
                  <div>{{ 'Время на выполнение' +item.time+ times(item.time)}}</div>
                   <v-btn style="background: #FFA640">Пройти -></v-btn>
              </div>
          </div>
          <div class="containerItem" >
            <div v-for="item in items_middle" class="item">
              <div style="width: 100%;height: 50px;background-position: center;background-size: contain;background-repeat: no-repeat" :style="{backgroundImage:'url('+item.photo+')'}"></div>
              <div>{{item.title}}</div>
              <div>{{'Количество вопросов: '+ item.counts}}</div>
              <div>{{ 'Время на выполнение ' + item.time + times(item.time)}}</div>
              <v-btn style="background: #FFA640">Пройти -></v-btn>
            </div>
          </div>
          <div class="containerItem" >
            <div class="item" v-for="item in items_advance">
              <div style="width: 100%;height: 50px;background-position: center;background-size: contain;background-repeat: no-repeat" :style="{backgroundImage:'url('+item.photo+')'}"></div>
              <div>{{item.title}}</div>
              <div>{{'Количество вопросов: '+ item.counts}}</div>
              <div>{{ 'Время на выполнение' +item.time + times(item.time)}}</div>
              <v-btn style="background: #FFA640">Пройти -></v-btn>
            </div>
          </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "main_section_home",
      data(){
          return{
            items_simple:null,
            items_middle:null,
            items_advance:null
          }
      },
        created(){
            this.items_simple = this.$store.state.home.simpleTest
            this.items_middle = this.$store.state.home.middleTest
            this.items_advance = this.$store.state.home.advanceTest
        },
        methods:{
          times(val){
              if(val==1){
                return 'minuta'
              }
              if(val > 1 && val < 5){
                return 'minuts'
              }
              if(val>= 5){
                return 'minutes'
              }
          }
        }
    }
</script>

<style scoped>
  section{
    width: 100vw;
    display: flex;padding: 50px 0;
    justify-content: center;
    /*background-image: url("../../assets/mage.jpg");*/
    background: #f3f3eb;
  }
  section > div{
    width: 1200px;
  }
  .item{
    width: 27%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin: 0 10px;
  }
  .item > div{
    margin: 10px 0;
  }
  .containerItem{
    display: flex;justify-content:center;width: 100%;margin: 10px 0;
  }
</style>
<!--style="flex: 1 1 auto"-->
