import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { stockUpdate } from "../../data/apiAuthenticated"

const EditStock = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const dataFromState = location.state
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const qty = form.qty.value;

    const newData = {
      qty
    };

    await stockUpdate(dataFromState.id, newData)

    navigate("/admin/stock")
  }

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Stock Product</h1>
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
              defaultValue={dataFromState.product.product_code}
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
              readOnly
              placeholder="Product name"
              type="text"
              name="name"
              id="name"
              defaultValue={dataFromState.product.name}
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Stock
            </label>
            <input
              placeholder="1000"
              type="number"
              name="qty"
              id="qty"
              defaultValue={dataFromState.stock}
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
              readOnly
              placeholder="m3 or pcs"
              type="text"
              name="uom"
              id="uom"
              defaultValue={dataFromState.product.uom}
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

export default EditStock