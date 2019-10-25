import { api } from '../config/api'

const userBaseEndpoint = '/Purchase'

export const getMonthlySettlement = async () => {
  const response = await api.get(`${userBaseEndpoint}/GetAllAmount`)
  return response
}

export const debitBanksPurchases = async () => {
  console.log('debitBanks')
  const response = await api.post()
  return response
}

export const payBusinessesPurchases = async () => {
  console.log('payBusinesses')
  const response = await api.post()
  return response
}
