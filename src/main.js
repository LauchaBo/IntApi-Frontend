import Vue from 'vue'
import VueSimpleSVG from 'vue-simple-svg'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

import App from './App.vue'
import router from './router'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSimpleSVG)
Vue.use(Vuelidate)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
