import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_BASE_URL

/** No need token */
export const login = async (data) => {
  const toApi = await axios.post(`${apiBaseUrl}api/auth/login`, data)
  
  return toApi.data
}