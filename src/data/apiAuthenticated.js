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

/** Logout */
export const logout = async () => {
  const toApi = await setupAxios.post(`api/admin/logout`)
  
  return toApi.data
}

/** Dashboard */
export const dashboard = async () => {
  const toApi = await setupAxios.get(`api/admin/dashboard`)
  
  return toApi.data
}

/** Category */
export const categoryCreate = async (data) => {
  const toApi = await setupAxios.post(`api/admin/category`, data)

  return toApi.data
}

export const categoryList = async () => {
  const toApi = await setupAxios.get(`api/admin/category`)

  return toApi.data
}

export const categoryDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/category/${id}`)

  return toApi.data
}

export const categoryUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/category/${id}`, data)

  return toApi.data
}

export const categoryDelete = async (id) => {
  const toApi = await setupAxios.put(`api/admin/category/${id}`)

  return toApi.data
}


/** Product */
export const productCreate = async (data) => {
  const toApi = await setupAxios.post(`api/admin/product`, data)

  return toApi.data
}

export const productList = async () => {
  const toApi = await setupAxios.get(`api/admin/product`)

  return toApi.data
}

export const productDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/product/${id}`)

  return toApi.data
}

export const productUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/product/${id}`, data)

  return toApi.data
}

export const productDelete = async (id) => {
  const toApi = await setupAxios.put(`api/admin/product/${id}`)

  return toApi.data
}