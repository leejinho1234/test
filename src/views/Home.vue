<template>
<v-card flat>
  <v-carousel cycle hide-delimiters show-arrows>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-layout align-center>
    <v-flex><div>{{ item.text }}</div></v-flex>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
  <v-toolbar height="220" flat>
    <v-spacer></v-spacer>
    <v-img src="https://ifh.cc/g/L3Zw0.png"
          max-width="300"
          max-height="500"
           position="center"
    ></v-img>
    <v-spacer></v-spacer>
  </v-toolbar>
    <v-row justify="space-around" style="postion:absolute">
      <v-spacer></v-spacer>
      <v-col col="1" style="position:auto">
        <v-img xs6 src="https://ifh.cc/g/O6Dtq.jpg"
        max-height="900"
        max-width="700"
        style="cursor:pointer"
        ></v-img>
      </v-col>
      <v-col col="2" style="position:auto">
        <v-img src="https://ifh.cc/g/6f4s0.gif"
        max-height="250"
        max-width="320"
        style="cursor:pointer;"
        ></v-img>
        <br>
        <img src="https://ifh.cc/g/KoVIs.jpg"
        max-height="250"
        max-width="320"
        style="cursor:pointer; position: absolute; height:210px; width:320px;"
        >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div style="position: absolute; top:1300px; left:0px; border : 0.5px solid black; width: 100%; height:1px; z-index: 1"></div>
</v-card>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://ifh.cc/g/olWeL.jpg'
        },
        {
          src: 'https://ifh.cc/g/3QMao.jpg'
        }
      ]
    }
  }
}
</script>
