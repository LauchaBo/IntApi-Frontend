import { getMonthlySettlement } from "../../services/PurchasesService"

import { isError } from '../../utils/api'

export default {
  state: {
    monthlySettlement: []
  },

  mutations: {
    setData(state, { field, data }) {
      state[field] = data
    }
  },

  actions: {
    async hydrateMonthlySettlement({ commit }) {
      const response = await getMonthlySettlement()
      if (isError(response.status))
        console.log(response)
      else
        commit('setData', { field: 'monthlySettlement', data: response.data })
    }
  }
}
