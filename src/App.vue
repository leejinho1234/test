<template>
  <v-card flat>
    <v-toolbar height="100" style="border-bottom: 1px solid #E3DFDE" flat>
    <v-spacer></v-spacer>
    <div style="color:orange; cursor:pointer">LOGIN</div>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-title><img src="https://ifh.cc/g/ywJDY.png" width="200"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <div>JOIN</div>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-toolbar flat style="border-bottom: 10px solid #E3DFDE" height="50">
    <v-tabs grow centered>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="bar in title" :key="bar.title" :to="bar.to">{{ bar.titleName }}</v-tab>
  </v-tabs>
  </v-toolbar>ss
  <router-view></router-view>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      title: [
        {
          titleName: 'EVENT',
          to: '/event'
        },
        {
          titleName: 'STORE'
        },
        {
          titleName: 'EDUCATION'
        },
        {
          titleName: 'HELP',
          to: '/help'
        },
        {
          titleName: 'Q&A'
        },
        {
          titleName: 'ABOUT'
        }
      ]
    }
  }
}

</script>
