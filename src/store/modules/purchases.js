import { getMonthlySettlement } from "../../services/PurchaseService"

import { isError } from '../../utils/api'

export default {
  state: {
    monthlySettlement: []
  },

  mutations: {
    setMonthlySettlement(state, data) {
      state.monthlySettlement = data
    }
  },

  actions: {
    async hydrateMonthlySettlement({ commit }) {
      const response = await getMonthlySettlement()
      if (isError(response.status))
        console.log(response)
      else
        commit('setMonthlySettlement', response.data)
    }
  }
}
