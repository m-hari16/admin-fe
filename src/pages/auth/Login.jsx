import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { login } from "../../data/api";
import setupAxios from "../../utils/axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postData = await login(formData)

    if (postData.data) {
      const token = postData.data?.access_token

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(postData.data?.user_data))

      setupAxios.defaults.headers.Authorization = `Bearer ${token}`;
      
      navigate("/admin")
    }
  }

  return (
    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-sm py-10 px-16 mt-[5%]'>
      <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
        Log in
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='email'
            placeholder='Your Email'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className={`w-full p-2 border border-gray-300 rounded-md outline-none text-sm mb-6`}
            id='password'
            placeholder='Your Password'
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className='flex justify-center items-center mt-6'>
          <button
            type="submit"
            className={`bg-green-600 py-2 px-4 text-sm text-white rounded hover:bg-green-800`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;