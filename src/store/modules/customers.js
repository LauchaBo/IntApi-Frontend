import { isError } from '../../utils/api'

import { getHomePersonalData, getHomeBusinessData } from '../../services/CustomerService'

export default {
  state: {
    homePersonal: {},
    homeBusiness: {}
  },

  mutations: {
    setHomePersonal(state, data) {
      state.homePersonal = data
    },
    setHomeBusiness(state, data) {
      state.homeBusiness = data
    }
  },

  actions: {
    async hydrateHomePersonal({ commit }) {
      const response = await getHomePersonalData(this.state.userInfo.userInfo.email)
      if (isError(response.status))
        console.log(response)
      else
        commit('setHomePersonal', response.data)
    },
    async hydrateHomeBusiness({ commit }) {
      const response = await getHomeBusinessData(this.state.userInfo.userInfo.email)
      if (isError(response.status))
        console.log(response)
      else
        commit('setHomeBusiness', response.data)
    }
  }
}
