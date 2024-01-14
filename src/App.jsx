import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import CategoryList from "./pages/category/CategoryList"
import AddCategory from "./pages/category/AddCategory"
import EditCategory from "./pages/category/EditCategory"


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
          element={<AdminLayout/>}
        />
        <Route
          path="/admin/stock"
          element={<AdminLayout/>}
        />
        <Route
          path="/admin/purchase"
          element={<AdminLayout/>}
        />
        <Route
          path="/admin/role"
          element={<AdminLayout/>}
        />
        <Route
          path="/admin/user"
          element={<AdminLayout/>}
        />

      </Routes>
    </Router>
  )
}

export default App
