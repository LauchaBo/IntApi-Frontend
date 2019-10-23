import { api } from '../config/api'
import router, { routes } from '../router'
import store from '../store'

const userBaseEndpoint = '/Purchases'

export const purchase = async (params) => {
  const response = await api.post(`${userBaseEndpoint}/Create`, params)
  return response
}
