import axios from 'axios'

import { logoutUser, isLoggedIn } from '../services/UserService'
import LocalStorageService from '../services/LocalStorageService'
import { locales } from '../constants/languages'

const auth = LocalStorageService.getAuthToken()
const notAuthorized = 401
const defaultLang = locales.spanish
let headers = {
  'Content-Type': 'application/json'
}

if (auth) headers = { ...headers, Authorization: `Bearer ${auth}` }

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers
})

api.interceptors.request.use(
  request => {
    const token = LocalStorageService.getAuthToken()
    request.headers['Authorization'] = `Bearer ${token}`
    const locale = LocalStorageService.getLang() || defaultLang
    if (request.method === 'post') {
      if (typeof request.data === 'object' && !request.data.ignoreLocale) {
        request.data.locale = locale
      }
      delete request.data.ignoreLocale
    } else {
      request.params = request.params ? { locale, ...request.params } : { locale }
    }
    return request
  }
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === notAuthorized && isLoggedIn()) {
      logoutUser()
    }
    return Promise.reject(error)
  }
)
