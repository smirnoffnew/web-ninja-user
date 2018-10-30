<template>
  <header style="height: 100px;" >
      <v-toolbar style="background: white;height: auto;padding: 20px">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <div class="logo"></div>
          <!--<v-toolbar-title slot="extension" class="white&#45;&#45;text"></v-toolbar-title>-->
          <v-spacer></v-spacer>

          <v-menu :nudge-width="100" >
              <v-toolbar-title slot="activator" style="width: 60px">
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
              </v-toolbar-title>
              <v-list style="padding: 0" @mouseleave="menu()">
                  <v-list-tile v-for="item in items" :key="item" @click="to(item)" >
                    <v-list-tile-title  v-text="item"></v-list-tile-title>
                  </v-list-tile>
              </v-list>
          </v-menu>
      </v-toolbar>
  </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
