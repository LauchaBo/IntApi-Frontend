import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/userInfo'
import purchases from './modules/purchases'
import customers from './modules/customers'

Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    userInfo,
    purchases,
    customers
  }
})
