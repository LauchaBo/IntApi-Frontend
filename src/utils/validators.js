import { helpers } from 'vuelidate/lib/validators'

import { isLetterCharCode } from './string'

const emailRx = /^(([^<>!?"()[\]\\.,;:\s@"]+(\.[^<>!?"()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const emailRegex = helpers.regex('emailRegex', emailRx)
export const passwordRegex = helpers.regex('passwordRegex', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/)

export const isValidEmail = email => emailRx.test(email)

export const isNumber = event => {
  if (event.which < 48 || event.which > 57) event.preventDefault()
}

export const isUnique = async (value, validator, property) => {
  if (value === '') return true
  const res = await validator({ [property]: value })
  return (!res.data)
}

export const preventIfNotNumber = evt => {
  if (isLetterCharCode(evt.which)) evt.preventDefault()
}
