<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary dark>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" height="100" elevation="0" style="postion: relative; left: 0px">
      <v-toolbar-title style="font-size:15px; cursor: pointer; position: relative; left:100px;">LOGIN</v-toolbar-title>
      <v-toolbar-title style="font-size:15px; cursor: pointer; position: relative; left: 120px; color:orange">JOIN</v-toolbar-title>
    <v-spacer></v-spacer>
    <div><router-link to="/"><img src="https://ifh.cc/g/hCQ3z.png" style="width: 196px; position: relative; top: 4px; cursor: pointer;"></router-link></div>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon>
        <v-icon >mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-toolbar height="60" class="bottomToolbar" elevation="0" style="border-top: 1px solid #EEEEEE;">
     <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
     <v-tabs show-arrows-on-hover>
     <v-spacer></v-spacer>
     <v-tab to="/">EVENT</v-tab>
     <v-spacer></v-spacer>
     <v-tab to="notes">SEARCH</v-tab>
     <v-spacer></v-spacer>
     <v-tab>STORE</v-tab>
     <v-spacer></v-spacer>
     <v-tab>Q&A일까수정일까??</v-tab>
     <v-spacer></v-spacer>
     <v-tab>HELP</v-tab>
     <v-spacer></v-spacer>
     </v-tabs>
  </v-toolbar>
    <v-content>
     <router-view/>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-account-circle',
          title: 'user',
          to: '/'
        },
        {
          icon: 'mdi-alert-box',
          title: 'About2',
          to: '/about2'
        },
        {
          icon: 'mdi-alert-circle',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-information-variant',
          title: 'Home',
          to: '/home'
        },
        {
          icon: 'mdi-magnify-plus',
          title: 'layout',
          to: '/layout'
        },
        {
          icon: 'mdi-magnify-plus',
          title: 'notes',
          to: '/notes'
        }
      ]
    }
  },
  methods: {
    test () {
    }
  }
}
</script>
<style>
  .v-toolbar__content{
    position: relative;
    height: 60px;
  }
</style>
