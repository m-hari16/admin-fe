const EditUser = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Edit User</h1>
      </div>

      <div className="flex p-5 bg-white">
        <form>
          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Name
            </label>
            <input
              placeholder="John Doe"
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
              Email
            </label>
            <input
              placeholder="email@doamin.com"
              type="email"
              name="email"
              id="email"
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Password
            </label>
            <input
              placeholder="Your password"
              type="password"
              name="password"
              id="password"
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            />
          </div>

          <div className="mb-5">
            <label
              className="mb-2 block text-gray-950 text-[13px] font-sans font-semibold"
            >
              Role
            </label>
            <select
              placeholder="Input role"
              name="name"
              id="name"
              className="w-96 rounded-md border bg-[#F7F7F7] py-3 px-6 text-base font-sans text-text-100"
            >
              <option>administrator</option>
              <option>supervisor</option>
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

export default EditUser