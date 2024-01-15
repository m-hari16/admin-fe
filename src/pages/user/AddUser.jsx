import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { roleList, userCreate } from "../../data/apiAuthenticated";

const AddUser = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role_id: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await roleList();
        setValue(api.data);
      } 
      catch (error) {}
      finally {
        setLoading(false);
      }
    }

    fetchData()
  },[])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postData = await userCreate(formData)

    if (postData.data) {     
      navigate("/admin/user")
    }
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Add User</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Name
            </label>
            <input
              placeholder="John Doe"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Email
            </label>
            <input
              placeholder="email@doamin.com"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Password
            </label>
            <input
              placeholder="Your password"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Role
            </label>
            <select
              placeholder="Input role"
              name="role_id"
              id="role_id"
              value={formData.role_id}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option value="">---Select one---</option>
              {
                loading ? 
                (<p>Loading...</p>) : 
                
                (
                  value.map((item, idx) => (
                    <option key={idx} value={item.id}>{item.role_name}</option>
                  ))
                )
              }
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="rounded-md bg-[#51B15C] w-[90px] h-[40px] text-white text-[16px] font-sans font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUser