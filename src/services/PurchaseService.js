import { api } from '../config/api'

const userBaseEndpoint = '/Purchase'

export const getMonthlySettlement = async () => {
  const response = await api.get(`${userBaseEndpoint}/GetAllAmount`)
  return response
}

export const debitBanksPurchases = async () => {
  const response = await api.get(`${userBaseEndpoint}/GetSummary`)
  return response
}

export const payBusinessesPurchases = async () => {
  const response = await api.get(`${userBaseEndpoint}/getSumPamts`)
  return response
}
