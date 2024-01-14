const NavbarSection = ({handleLogout}) => {
  const isLoggedIn = true

  return(
    <nav className="flex bg-white justify-end items-center w-full h-20 px-8 shadow-md border-b-1">
      <div className='flex items-center'>
        {
          isLoggedIn && (
          <button
            type='button'
            onClick={handleLogout} 
            className='text-sm font-semibold'
          >
            Logout
          </button>        
          )
        }
      </div>
    </nav>

  )
}

export default NavbarSection