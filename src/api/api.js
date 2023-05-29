import { getVariables } from '../services/getVariables'

const { VITE_API_URL } = getVariables()

export const endpoints = {
  login: `${VITE_API_URL}/user/login`,
  renewtoken: `${VITE_API_URL}/user/renew-token`,
  allusers: `${VITE_API_URL}/user`,
  createuser: `${VITE_API_URL}/user/register`,
  deleteUser: `${VITE_API_URL}/user/delete`
}
