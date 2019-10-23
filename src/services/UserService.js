import { api } from '../config/api'
import router, { routes } from '../router'
import store from '../store'

export const loginUser = async (email, password, type) => {
  const response = await api.post(`/LogIn`, { email, password, type })
  return response
}

export const logoutUser = () => {
  store.dispatch('logout')
  router.push(routes.home)
}
