import NavbarSection from "../components/navbar/NavbarSection"
import SidebarSection from "../components/sidebar/SidebarSection"
import { sidebarMenu } from "../data/navMenu"

const AdminLayout = ({children}) => {
  return(
    <>
      <SidebarSection menu={sidebarMenu}/>
      <NavbarSection/>
      <main className="p-6">
        {children}
      </main>
    </>
  )
}

export default AdminLayout