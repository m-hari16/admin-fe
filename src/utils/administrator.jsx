import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const ProtectedAdministratorRoute = () => {
  const navigate = useNavigate()

  const role = JSON.parse(localStorage.getItem('user')).role

  useEffect(() => {
    if(role.role_name !== 'administrator') {
      navigate('/admin')
    }
  },[])


  return(
    <>
      <Outlet/>
    </>
  )
}

export default ProtectedAdministratorRoute