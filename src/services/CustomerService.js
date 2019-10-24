import { api } from '../config/api'

export const getHomePersonalData = async () => {
  const response = await api.get(`/Customers/getDataCustomer/12345`)
  return response
}

export const getHomeBusinessData = async () => {
  const response = await api.get(`/Business/getDataBusiness/123452112`)
  return response
}
