const AddProduct = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Add Product</h1>
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
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>Alat Tulis Kantor (ATK)</option>
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
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>Aktif</option>
              <option>Non Aktif</option>
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