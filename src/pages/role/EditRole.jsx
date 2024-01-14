import { useLocation, useNavigate } from "react-router-dom"
import { roleUpdate } from "../../data/apiAuthenticated"

const EditRole = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const dataFromState = location.state

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const newData = {
      name
    };

    await roleUpdate(dataFromState.id, newData)

    navigate("/admin/role")
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Role</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Role Name
            </label>
            <input
              placeholder="Input category product"
              type="text"
              name="name"
              id="name"
              defaultValue={dataFromState.role_name}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
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

export default EditRole