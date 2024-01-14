import axios from "axios";
import { getTokenValue } from "../utils/token";

const apiBaseUrl = import.meta.env.VITE_BASE_URL
const token = getTokenValue()

const setupAxios = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

/** No need token */
export const login = async (data) => {
  const toApi = await axios.post(`${apiBaseUrl}api/auth/login`, data)
  
  return toApi.data
}

/** Need a token */
export const logout = async () => {
  const toApi = await setupAxios.post(`api/admin/logout`)
  
  return toApi.data
}
