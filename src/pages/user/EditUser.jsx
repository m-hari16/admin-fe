import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { roleList, userUpdate } from "../../data/apiAuthenticated"

const EditUser = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)

  const dataFromState = location.state

  console.log(dataFromState.role.id)

  
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

    fetchData();
  },[dataFromState])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const role_id = form.role_id.value

    const newData = {
      name,
      role_id
    };

    await userUpdate(dataFromState.id, newData)

    navigate("/admin/user")
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit User</h1>
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
              defaultValue={dataFromState.name}
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
              readOnly
              placeholder="email@doamin.com"
              type="email"
              name="email"
              id="email"
              defaultValue={dataFromState.email}
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
              defaultValue={dataFromState.role.name}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option value="">---Select one---</option>
              {
                loading ? 
                (<p>Loading...</p>) : 
                
                (
                  value?.map((item, idx) => (
                    <option 
                      key={idx} 
                      value={item.id} 
                      selected={dataFromState.role.id === item.id}
                    >
                      {item.role_name}
                    </option>
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

export default EditUser