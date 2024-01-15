import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { productList, purchaseUpdate } from "../../data/apiAuthenticated"

const EditPurchase = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)

  const dataFromState = location.state
  
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

    fetchData();
  },[dataFromState])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const qty = form.qty.value;
    const price = form.price.value;
    const product_id = form.product_id.value;

    const newData = {
      qty,
      price,
      product_id,
    };

    await purchaseUpdate(dataFromState.id, newData)

    navigate("/admin/purchase")
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Purchase</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Purchase Code
            </label>
            <input
              readOnly
              placeholder="Purchase code"
              type="text"
              name="code"
              id="code"
              defaultValue={dataFromState.purchase_code}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>
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
              defaultValue={dataFromState.product.id}
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
                      selected={dataFromState.product.id === item.id}
                    >
                      {item.product_name}
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
              Quantity
            </label>
            <input
              placeholder="2000.00"
              type="number"
              name="qty"
              id="qty"
              defaultValue={dataFromState.qty}
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
              placeholder="50500"
              type="number"
              name="price"
              id="price"
              defaultValue={dataFromState.price}
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

      <div className="flex p-5 bg-white mt-5">
        <form>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Release Purchase?
            </label>
            <select
              placeholder="Product code"
              type="text"
              name="isRelease"
              id="isRelease"
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Add Document <span className="italic font-normal ml-4 text-red-600">file .pdf - max 500kb</span>
            </label>
            <input
              placeholder="Attach document"
              type="file"
              name="file"
              id="file"
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

export default EditPurchase