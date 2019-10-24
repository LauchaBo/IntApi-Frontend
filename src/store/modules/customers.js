import { isError } from '../../utils/api'

import { getHomePersonalData, getHomeBusinessData } from '../../services/CustomerService'

export default {
  state: {
    homePersonal: {},
    homeBusiness: {}
  },

  mutations: {
    setData(state, { field, data }) {
      state[field] = data
    }
  },

  actions: {
    async hydrateHomePersonal({ commit }) {
      const response = await getHomePersonalData()
      if (isError(response.status))
        console.log(response)
      else
        commit('setData', { field: 'homePersonal', data: response.data })
    },
    async hydrateHomeBusiness({ commit }) {
      const response = await getHomeBusinessData()
      if (isError(response.status))
        console.log(response)
      else
        commit('setData', { field: 'homeBusiness', data: response.data })
    }
  }
}
