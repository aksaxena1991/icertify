import axios from 'axios'
import {UserModel} from '../models/UserModel'

const API_URL = process.env.REACT_APP_BACKEND_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/verify-token`
export const LOGIN_URL = `${API_URL}/auth/login`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post(REGISTER_URL, {
    email,
    name: firstname+" "+lastname,
    password,
    
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email
  })
}

export function getUserByToken(token:string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    token:token
  })
}
