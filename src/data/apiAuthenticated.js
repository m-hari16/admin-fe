import setupAxios from "../utils/axiosConfig"

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
  const toApi = await setupAxios.delete(`api/admin/category/${id}`)

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
  const toApi = await setupAxios.delete(`api/admin/product/${id}`)

  return toApi.data
}

/** Stock */
export const stockList = async () => {
  const toApi = await setupAxios.get(`api/admin/stock`)

  return toApi.data
}

export const stockDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/stock/${id}`)

  return toApi.data
}

export const stockUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/stock/${id}`, data)

  return toApi.data
}

/** Purchase */
export const purchaseCreate = async (data) => {
  const toApi = await setupAxios.post(`api/admin/purchase`, data)

  return toApi.data
}

export const purchaseList = async () => {
  const toApi = await setupAxios.get(`api/admin/purchase`)

  return toApi.data
}

export const purchaseDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/purchase/${id}`)

  return toApi.data
}

export const purchaseUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/purchase/${id}`, data)

  return toApi.data
}

export const purchaseDelete = async (id) => {
  const toApi = await setupAxios.delete(`api/admin/purchase/${id}`)

  return toApi.data
}

/** Role */
export const roleCreate = async (data) => {
  const toApi = await setupAxios.post(`api/admin/role`, data)

  return toApi.data
}

export const roleList = async () => {
  const toApi = await setupAxios.get(`api/admin/role`)

  return toApi.data
}

export const roleDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/role/${id}`)

  return toApi.data
}

export const roleUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/role/${id}`, data)

  return toApi.data
}

export const roleDelete = async (id) => {
  const toApi = await setupAxios.delete(`api/admin/role/${id}`)

  return toApi.data
}

/** User */
export const userCreate = async (data) => {
  const toApi = await setupAxios.post(`api/admin/user`, data)

  return toApi.data
}

export const userList = async () => {
  const toApi = await setupAxios.get(`api/admin/user`)

  return toApi.data
}

export const userDetail = async (id) => {
  const toApi = await setupAxios.get(`api/admin/user/${id}`)

  return toApi.data
}

export const userUpdate = async (id, data) => {
  const toApi = await setupAxios.put(`api/admin/user/${id}`, data)

  return toApi.data
}

export const userDelete = async (id) => {
  const toApi = await setupAxios.delete(`api/admin/user/${id}`)

  return toApi.data
}