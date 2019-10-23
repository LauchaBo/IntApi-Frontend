import { api } from '../config/api'
import router, { routes } from '../router'
import store from '../store'

const userBaseEndpoint = '/User'

export const loginUser = async (email, password, type) => {
  const response = await api.post(`${userBaseEndpoint}/LogIn`, { email, password, type })
  return response
}

export const logoutUser = () => {
  store.dispatch('logout')
  router.push(routes.home)
}

export const registerUser = async (params) => {
  const response = await api.post(`${userBaseEndpoint}/Register`, params)
  return response
}
