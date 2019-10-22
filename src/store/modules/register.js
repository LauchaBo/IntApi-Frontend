export default {
  state: {
    newUser: {}
  },

  mutations: {
    changeNewUserField(state, { field, value }) {
      state.newUser[field] = value
    }
  },

  actions: {
    changeNewUserField({ commit }, payload) {
      commit('changeNewUserField', payload)
    }
  }
}
