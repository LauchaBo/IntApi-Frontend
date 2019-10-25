import { loginUser, registerUser } from '../../services/UserService'

import { isError } from '../../utils/api'
import router, { routes } from '../../router'

export default {
  state: {
    userInfo: {},
    userLoggedIn: false,
    newUser: {
      name: '',
      lastName: '',
      customerId: '',
      businessId: '',
      email: '',
      dateBirth: '',
      street: '',
      number: '',
      apartment: '',
      postalCode: '',
      country: '',
      province: '',
      city: '',
      phone: '',
      income: '',
      password: ''
    }
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
    }
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
          else if (type === 'Business')
            router.push(routes.homeBusiness)
        }
      } catch (error) {
        console.log(error.response)
      }
    },
    logout({ commit }) {
      commit('logoutUser')
    },
    async register({ commit }) {
      let newUser = this.state.userInfo.newUser
      try {
        const response = await registerUser(this.state.userInfo.newUser)
        if (!isError(response.status)) {
          commit('changeUserInfoField', { field: 'email', value: newUser.email })
          commit('changeUserInfoField', { field: 'type', value: newUser.type })
          commit('loginUser')
          if (newUser.type === 'Personal')
            router.push(routes.homePersonal)
          else if (newUser.type === 'Business')
            router.push(routes.homeBusiness)
        }
      } catch (error) {
        console.log(error.response)
      }
    }
  }
}
