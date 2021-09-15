import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

Vue.use(AOS)
AOS.init()
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
