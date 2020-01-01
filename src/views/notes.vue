<template>
  <v-sheet height="1000">
    <v-container fluid grid-list-md>
      <v-layout>
        <v-flex xs5>
          <v-text-field v-model="title" label="title"></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field v-model="content" label="content"></v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-btn color="success" @click="post">post</v-btn>
        </v-flex>
      </v-layout>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title
                  ><h4>{{ item.title }}</h4></v-card-title
                >
                <v-divider></v-divider>
                <v-card-text>
                  {{ item.content }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    itemsPerPageOptions: [1, 5, 10, 12],
    itemsPerPage: 4,
    items: []
  }),
  mounted () {},
  methods: {
    post () {
      this.items.push({
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>
