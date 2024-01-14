export const getTokenValue = () => {
  return localStorage.getItem('token')
}

export const isTokenExist = () => {
  return !!localStorage.getItem('token')
}