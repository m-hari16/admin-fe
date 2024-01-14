const EditStock = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Stock Product</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form>
        <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Product Code
            </label>
            <input
              value={'P-8972378'}
              readOnly
              placeholder="Product code"
              type="text"
              name="code"
              id="code"
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