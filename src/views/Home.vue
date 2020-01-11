<template>
<v-card>
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
    ></v-img>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-container fluid>
    <v-row>
      <v-spacer></v-spacer>
      <v-col col="2" justify="center">
        <v-img xs6 src="https://ifh.cc/g/O6Dtq.jpg"
        max-height="900"
        max-width="700"
        style="cursor:pointer"
        ></v-img>
      </v-col>
      <v-col col="2">
        <v-img src="https://ifh.cc/g/N4iK3.gif"
        max-height="250"
        max-width="320"
        style="cursor:pointer"
        ></v-img>
        <br>
        <v-img src="https://ifh.cc/g/KoVIs.jpg"
        max-height="250"
        max-width="320"
        style="cursor:pointer"
        ></v-img>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
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
      ]
    }
  }
}
</script>
