import Vue from 'vue'
import VueSimpleSVG from 'vue-simple-svg'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

import App from './App.vue'
import router, { routes } from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueSimpleSVG)
Vue.use(Vuelidate)
Vue.use(Notifications)

if (process.env.NODE_ENV === 'production') {
  Vue.use(vueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
    router
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
