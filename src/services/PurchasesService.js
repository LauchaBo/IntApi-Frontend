import { api } from '../config/api'

const userBaseEndpoint = '/Purchase'

export const getMonthlySettlement = async () => {
  const response = await api.get(`${userBaseEndpoint}/GetAllAmount`)
  return response
}
