import NavbarSection from "../components/navbar/NavbarSection"
import SidebarSection from "../components/sidebar/SidebarSection"
import { ToastProvider } from "../components/toast/useToast"
import { sidebarMenu } from "../data/navMenu"

const AdminLayout = ({children}) => {
  return(
    <>
      <SidebarSection menu={sidebarMenu}/>
      <NavbarSection/>
      <ToastProvider>
        <main className="pl-64 pr-8 py-6">
          {children}
        </main>
      </ToastProvider>
    </>
  )
}

export default AdminLayout