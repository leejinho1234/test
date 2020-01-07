import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCarousel from 'vue-carousel'
// import test from './plugins/test'
Vue.config.productionTip = false
Vue.use(VueCarousel)
// test.foo()

new Vue({
  router,
  store,
  vuetify,
  VueCarousel,
  render: h => h(App)
}).$mount('#app')
