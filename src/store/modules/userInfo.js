import { loginUser } from '../../services/UserService'

import { isError } from '../../utils/api'
import router, { routes } from '../../router'

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
    changeUserInfoField(state, { field, value }) {
      state.userInfo[field] = value
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
    changeUserInfoField({ commit }, payload) {
      commit('changeUserInfoField', payload)
    },
    async login({ commit }) {
      let { email, password, type } = this.state.userInfo.userInfo
      try {
        const response = await loginUser(email, password, type)
        if (!isError(response.status)) {
          commit('loginUser')
          if (type === 'Personal')
            router.push(routes.homePersonal)
          else
            router.push(routes.homeBusiness)
        }
      } catch (error) {
        console.log(error.response)
      }
    },
    logout({ commit }) {
      commit('logoutUser')
    },
  }
}
