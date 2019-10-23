import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/userInfo'
import payments from './modules/payments'

Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    userInfo,
    payments
  }
})
