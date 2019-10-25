import { api } from '../config/api'

export const getHomePersonalData = async (email) => {
  const response = await api.get(`/Customers/getDataCustomer/${email}`)
  return response
}

export const getHomeBusinessData = async (email) => {
  const response = await api.get(`/Business/getDataBusiness/${email}`)
  return response
}
