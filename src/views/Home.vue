<template>
    <v-sheet height="1000">
        <v-card elevation="0" max-width="1700" flat="flat" width="1700" class="mx-auto">
            <v-carousel
                hide-delimiters="hide-delimiters"
                class="a"
                continous="continous"
                cycle="cycle">
                <v-carousel-item v-for="(item, i) in items" :src="item.src" :key="i">
                    <div class="display-3">{{ item.text }}
                    </div>
                    <p v-html="item.content" class="content">{{ item.content }}</p>
                    <div class="text-center">
                        <v-btn rounded="rounded" color="primary" dark="dark" class="btn">알아보기</v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card>
        <div id="app">
            <KakaoLogin
                api-key="9809de32f9aff635780064a60fe91f05"
                image="kakao_login_btn_large"
                :on-success="onSuccess"
                :on-failure="onFailure"/>
        </div>
        <input v-model="email" placeholder="여기를 수정해보세요">
        <p>메시지: {{ email }}</p>
    </v-sheet>
</template>
<script>
import KakaoLogin from 'vue-kakao-login'

let onSuccess = (data) => {
  console.log(data)
  console.log('success')
  // eslint-disable-next-line no-undef
  Kakao.API.request({
    url: '/v1/user/me',
    success: function (res) {
      alert(JSON.stringify(res))
      console.log(res.id)
      console.log(res.kaccount_email)
      this.email = res.kaccount_email
      console.log(res.properties['nickname'])
    }
  })
}
let onFailure = (data) => {
  console.log(data)
  console.log('failure')
}

export default {
  name: 'App',
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess,
    onFailure
  },
  data () {
    return {
      email: '',
      items: [
        {
          src: 'https://ifh.cc/g/QPo8g.jpg',
          text: 'EDUCATION',
          content: '강아지 행동 교정을 위해 강아지 훈련사 알아보고 계시나요? <br>강아지 방문 훈련 비용부터 애견 훈련소 가격까지, 한 번에 비교해보세요.'
        }, {
          src: 'https://ifh.cc/g/jQWFu.jpg',
          text: 'EVENT',
          content: '올해는 어떤 애견 행사가 있는지 알아보고 계시나요?'
        }
      ]
    }
  }
}
</script>

<style></style>
<style scoped="scoped">
    .a {
        box-shadow: 0;
    }
    .display-3 {
        position: absolute;
        top: 100px;
        left: 20px;
    }
    .content {
        position: absolute;
        top: 180px;
        left: 20px;
    }
    .btn {
        position: absolute;
        width: 200px;
        top: 250px;
        left: 40px;
    }
</style>
