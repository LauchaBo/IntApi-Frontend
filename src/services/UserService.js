import { api } from '../config/api'
import router, { routes } from '../router'
import store from '../store'

const userBaseEndpoint = '/AccountApi'

export const loginUser = async (email, password) => {
  const response = await api.post(`${userBaseEndpoint}/SignIn`, { email, password })
  return response
}

export const logoutUser = () => {
  store.dispatch('logout')
  router.push(routes.home)
}
