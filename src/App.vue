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
  <v-toolbar flat style="border-bottom: 1px solid #E3DFDE" height="50">
    <v-tabs grow centered>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="bar in title" :key="bar.title">{{ bar.titleName }}</v-tab>
  </v-tabs>
  </v-toolbar>
  <v-carousel cycle hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :adjustableHeightEasing="true"
    >
    <v-layout align-center>
    <v-flex text-xs-center text-sm-left class="box"><div>{{ item.text }}</div></v-flex>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://ifh.cc/g/olWeL.jpg',
          text: 'gdgd'
        },
        {
          src: 'https://ifh.cc/g/3QMao.jpg',
          text: 'gdasdd'
        }
      ],
      title: [
        {
          titleName: 'EVENT'
        },
        {
          titleName: 'STORE'
        },
        {
          titleName: 'EDUCATION'
        },
        {
          titleName: 'Q&A'
        },
        {
          titleName: 'HELP'
        },
        {
          titleName: 'JJJ'
        }
      ]
    }
  }
}

</script>
<style>
.box {
  display: block;
  padding: 10px;
}
</style>
