import { useNavigate } from "react-router-dom"
import { logout } from "../../data/api"

const NavbarSection = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const toApi = await logout()

    if(toApi.success) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate("/login")
    }
  }

  return(
    <nav className="flex bg-white justify-end items-center w-full h-20 px-8 shadow-md border-b-1">
      <div className='flex items-center'>
        <button
          type='button'
          onClick={handleLogout} 
          className='text-sm font-semibold'
        >
          Logout
        </button>        
      </div>
    </nav>

  )
}

export default NavbarSection