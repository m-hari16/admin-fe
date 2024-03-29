import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import CategoryList from "./pages/category/CategoryList"
import AddCategory from "./pages/category/AddCategory"
import EditCategory from "./pages/category/EditCategory"
import RoleList from "./pages/role/RoleList"
import AddRole from "./pages/role/AddRole"
import EditRole from "./pages/role/EditRole"
import UserList from "./pages/user/UserList"
import AddUser from "./pages/user/AddUser"
import EditUser from "./pages/user/EditUser"
import ProductList from "./pages/product/ProductList"
import AddProduct from "./pages/product/AddProduct"
import EditProduct from "./pages/product/EditProduct"
import StockList from "./pages/stock/StockList"
import EditStock from "./pages/stock/EditStock"
import PurchaseList from "./pages/purchase/PurchaseList"
import AddPurchase from "./pages/purchase/AddPurchase"
import EditPurchase from "./pages/purchase/EditPurchase"
import ProtectedRoute from "./utils/protectedRoute"
import ProtectedAdministratorRoute from "./utils/administrator"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />

        <Route element={<ProtectedRoute/>}>
          <Route
            path="/admin"
            element={<AdminLayout children={<Dashboard/>}/>}
          />

          <Route
            path="/admin/category"
            element={<AdminLayout children={<CategoryList/>}/>}
          />
          <Route
            path="/admin/category/add"
            element={<AdminLayout children={<AddCategory/>}/>}
          />
          <Route
            path="/admin/category/edit/"
            element={<AdminLayout children={<EditCategory/>}/>}
          />

          <Route
            path="/admin/product"
            element={<AdminLayout children={<ProductList/>}/>}
          />
          <Route
            path="/admin/product/add"
            element={<AdminLayout children={<AddProduct/>}/>}
          />
          <Route
            path="/admin/product/edit"
            element={<AdminLayout children={<EditProduct/>}/>}
          />

          <Route
            path="/admin/stock"
            element={<AdminLayout children={<StockList/>}/>}
          />
          <Route
            path="/admin/stock/edit"
            element={<AdminLayout children={<EditStock/>}/>}
          />

          <Route
            path="/admin/purchase"
            element={<AdminLayout children={<PurchaseList/>}/>}
          />
          <Route
            path="/admin/purchase/add"
            element={<AdminLayout children={<AddPurchase/>}/>}
          />
          <Route
            path="/admin/purchase/edit"
            element={<AdminLayout children={<EditPurchase/>}/>}
          />

          <Route
            path="/admin/role"
            element={<AdminLayout children={<RoleList/>}/>}
          />
          <Route
            path="/admin/role/add"
            element={<AdminLayout children={<AddRole/>}/>}
          />
          <Route
            path="/admin/role/edit"
            element={<AdminLayout children={<EditRole/>}/>}
          />

          <Route element={<ProtectedAdministratorRoute/>}>
            <Route
              path="/admin/user"
              element={<AdminLayout children={<UserList/>}/>}
            />
            <Route
              path="/admin/user/add"
              element={<AdminLayout children={<AddUser/>}/>}
            />
            <Route
              path="/admin/user/edit"
              element={<AdminLayout children={<EditUser/>}/>}
            />
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
