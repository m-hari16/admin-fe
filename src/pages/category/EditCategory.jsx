const EditCategory = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit Category Product</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Category Name
            </label>
            <input
              placeholder="Input category product"
              type="text"
              name="name"
              id="name"
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

export default EditCategory