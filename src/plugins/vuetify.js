// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    icons: {
      iconfont: 'mdiSvg',
    },
    themes: {
      light: {
        primary: '#42A5F6',
        secondary: '#050B1F',
        accent: '#204165',
        title: '#757575',
      },
      dark: {
        primary: '#50778D',
        secondary: '#0B1C3D',
        accent: '#204165',
        title: '#757575',
      },
    },
  },
})
