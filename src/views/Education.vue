<template>
  <v-container fluid="true" style="padding:0px">
    <v-img src="https://ifh.cc/g/BS5mM.jpg"
          max-height="400" min-height="400"></v-img>
    <v-spacer></v-spacer>
    <v-tabs grow centered id="tabs">
      <v-tab id="tab" v-for="tabs in tab" :key="tabs.title" :to="tabs.to">{{ tabs.title }}</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      tab: [
        {
          title: '전체보기'
        },
        {
          title: '기본지식 배우기'
        },
        {
          title: '견종별 모아보기'
        }
      ]
    }
  }
}
</script>
<style>
#tabs{
  background-color: black;
}
#tab{
  /* background-color:azure; */
  color: black;
  border-right: 0.5px solid gray;
}
</style>
