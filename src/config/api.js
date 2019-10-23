import axios from 'axios'

import { logoutUser } from '../services/UserService'
import { isLoggedIn } from '../store/modules/userInfo'

const notAuthorized = 401
let headers = {
  'Content-Type': 'application/json'
}

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === notAuthorized && isLoggedIn()) {
      logoutUser()
    }
    return Promise.reject(error)
  }
)
