import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/dashboard/Dashboard"


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
          element={<AdminLayout/>}
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
