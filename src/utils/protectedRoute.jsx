import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { isTokenExist } from "./token"

const ProtectedRoute = () => {
  const navigate = useNavigate()

  const token = isTokenExist()

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  },[])


  return(
    <>
      <Outlet/>
    </>
  )
}

export default ProtectedRoute