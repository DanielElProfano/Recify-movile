// import { CHECK_SESSION, LOGIN_URL, LOG_OUT_SESSION, REGISTER_URL } from '../config/calls/userCalls'

export const REGISTER_URL = 'http://192.168.1.115:4000/user/register'
export const LOGIN_URL = 'http://192.168.1.115:4000/user/login'
export const CHECK_SESSION = 'http://192.168.1.115:4000/user/check-session'
export const LOG_OUT_SESSION = 'http://192.168.1.115:4000/user/logout'

const HEADERS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
}
export const loginService = async (data) => {
  const request = await fetch(LOGIN_URL, {
    method: 'POST',
    ...HEADERS,
    credentials: 'include',

    body: JSON.stringify(data)
  })
  const response = await request.json()
  return response
}

export const registerService = async (data) => {
  debugger
  const request = await fetch(REGISTER_URL, {
    method: 'POST',
    ...HEADERS,
    credentials: 'include',

    body: JSON.stringify(data)
  })
  const response = await request.json()
  return response
}

export const checkSession = async () => {
  try {
    const request = await fetch(CHECK_SESSION,
      {
        method: 'POST',
        ...HEADERS,
        credentials: 'include'
      })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const logoutSession = async () => {
  try {
    const request = await fetch(LOG_OUT_SESSION, {
      method: 'GET',
      ...HEADERS,
      credentials: 'include'
    })
    const response = await request.json()
    return response
  } catch (error) {
    console.log(error)
  }
}