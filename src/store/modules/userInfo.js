import { loginUser } from '../../services/UserService'

export default {
  state: {
    userInfo: {},
    userLoggedIn: false,
    newUser: {}
  },

  mutations: {
    changeNewUserField(state, { field, value }) {
      state.newUser[field] = value
    },
    loginUser(state) {
      state.userLoggedIn = true
    },
    logoutUser(state) {
      state.userLoggedIn = false
    },
    setUserInfo(state, info) {
      state.userInfo = info
    },
  },

  actions: {
    changeNewUserField({ commit }, payload) {
      commit('changeNewUserField', payload)
    },
    async login({ commit }, { email, password }) {
      try {
        const response = await loginUser(email, password)
        commit('loginUser')
        if (response.data) commit('show', { element: 'onboardingModal' })
      } catch (error) {
        commit('setShowInvalidUserError', true)
      }
    },
    logout({ commit }) {
      commit('logoutUser')
    },
  }
}
