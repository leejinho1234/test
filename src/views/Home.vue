<template>
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
  <!--아 개빡치네-->
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
