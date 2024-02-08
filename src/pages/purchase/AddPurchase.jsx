import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productList, purchaseCreate } from "../../data/apiAuthenticated"
import { useToast } from "../../components/toast/useToast"

const AddPurchase = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    qty: '',
    price: '',
    product_id: '',
  })
  const toast = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await productList();
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

    const postData = await purchaseCreate(formData)

    if (postData.data) {     
      toast('success', 'success create data')
      navigate("/admin/purchase")
    }
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Purchsae New Product</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Product Name
            </label>
            <select
              placeholder="Product code"
              type="text"
              name="product_id"
              id="product_id"
              value={formData.product_id}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>---Select one---</option>
              {
                loading ? 
                (<p>Loading...</p>) : 
                
                (
                  value.map((item, idx) => (
                    <option key={idx} value={item.id}>{item.product_name}</option>
                  ))
                )
              }
            </select>
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Quantity
            </label>
            <input
              placeholder="Product name"
              type="number"
              name="qty"
              id="qty"
              value={formData.qty}
              onChange={handleChange}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Price Total
            </label>
            <input
              placeholder="Product name"
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
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

export default AddPurchase