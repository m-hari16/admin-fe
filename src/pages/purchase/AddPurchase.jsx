const AddPurchase = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Purchsae New Product</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form>
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
              id="code"
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>Kertas A4</option>
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