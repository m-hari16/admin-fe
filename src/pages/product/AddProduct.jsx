import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { categoryList, productCreate } from "../../data/apiAuthenticated"
import { useToast } from "../../components/toast/useToast"

const AddProduct = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    uom: '',
    isActive: false,
    category_id: '',
  })
  const toast = useToast()

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

    const postData = await productCreate(formData)

    if (postData.data) {   
      toast('success', 'success create data')  
      navigate("/admin/product")
    }
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Add Product</h1>
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
              placeholder="Product code"
              type="text"
              name="code"
              id="code"
              value={formData.code}
              onChange={handleChange}
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.uom}
              onChange={handleChange}
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
              value={formData.category_id}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>---Select one---</option>
              {
                loading ? 
                (<option>Loading...</option>) : 
                
                (
                  value.map((item, idx) => (
                    <option key={idx} value={item.id}>{item.name}</option>
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
              value={formData.isActive}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option value={1}>Aktif</option>
              <option value={0}>Non Aktif</option>
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

export default AddProduct