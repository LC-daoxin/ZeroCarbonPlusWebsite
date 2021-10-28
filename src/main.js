import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initI18n } from '@/utils/i18n'
import './plugins'
import { axiosRequest } from '@/utils/request.js'
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

Vue.prototype.$axios = axiosRequest

const i18n = initI18n('en', 'zh')
Vue.use(AOS)
AOS.init()
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
