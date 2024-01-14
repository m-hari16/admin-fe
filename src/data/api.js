import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL

export const login = async (data) => {
  const toApi = await axios.post(`${apiBaseUrl}api/auth/login`, data)
  
  return toApi.data
}

export const logout = async (data) => {
  const toApi = await axios.post(`${apiBaseUrl}api/admin/logout`, data)
  
  return toApi.data
}
