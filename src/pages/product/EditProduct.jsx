import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { categoryList, productUpdate } from "../../data/apiAuthenticated"

const EditProduct = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)

  const dataFromState = location.state
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await categoryList();
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
    const uom = form.name.value;
    const isActive = form.name.value;
    const category_id = form.name.value;


    const newData = {
      name,
      uom,
      isActive,
      category_id,
    };

    await productUpdate(dataFromState.id, newData)

    navigate("/admin/product")
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Product</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Product Code
            </label>
            <input
              readOnly
              placeholder="Product code"
              type="text"
              name="code"
              id="code"
              defaultValue={dataFromState.product_code}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Product Name
            </label>
            <input
              placeholder="Product name"
              type="text"
              name="name"
              id="name"
              defaultValue={dataFromState.product_name}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              UoM
            </label>
            <input
              placeholder="m3 or pcs"
              type="text"
              name="uom"
              id="uom"
              defaultValue={dataFromState.uom}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>
          
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Category Product
            </label>
            <select
              placeholder="category"
              name="category_id"
              id="category_id"
              defaultValue={dataFromState.category.id}
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
                      selected={dataFromState.category.id === item.id}
                    >
                      {item.name}
                    </option>
                  ))
                )
              }
            </select>
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Status
            </label>
            <select
              placeholder="Status"
              name="isActive"
              id="isActive"
              defaultValue={dataFromState.isActive}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option value={1} selected={dataFromState.isActive === true}>Aktif</option>
              <option value={0} selected={dataFromState.isActive === false}>Non Aktif</option>
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

export default EditProduct