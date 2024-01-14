import { Link } from "react-router-dom"
import SearchBar from "../../components/search/SearchBar"
import Pagination from "../../components/paging/paination"
import { EditIcon, TrashIcon } from "../../assets"

const ProductList = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Product</h1>
      </div>

      <div className="mt-5 pb-5 bg-white">
        <div className="flex justify-between">
          <SearchBar/>
          <Link
            to="/admin/product/add"
            className="flex rounded-md bg-[#51B15C] w-[60px] h-[24px] mt-5 mr-5 items-center justify-center"
          >
            <span className="text-white text-[13px] font-sans font-semibold">+ Add</span>
          </Link>
        </div>
        <div className="flex justify-center">
          <table className="w-full m-5">
            <thead>
              <tr className="h-12 bg-[#51B15C] text-white text-[14px] font-sans font-medium text-center">
                <th className="border">No</th>
                <th className="border">Product Code</th>
                <th className="border">Product Name</th>
                <th className="border">UoM</th>
                <th className="border">Category</th>
                <th className="border">Status</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                className="h-16 text-text-100 text-[15px] font-sans font-normal"
              >
                <td className="border text-center">1</td>
                <td className="border pl-5">P-8972378</td>
                <td className="border pl-5">Kertas A4</td>
                <td className="border pl-5">rim</td>
                <td className="border pl-5">Alat Tulis Kantor (ATK)</td>
                <td className="border pl-5">Aktif</td>
                <td className="border flex justify-center h-16 space-x-2">
                  <Link
                    to={`/admin/product/edit?id=1`}
                    className="w-6 h6"
                  >
                    <img src={`${EditIcon}`} alt="edit-data" className="w-full h-full"/>
                  </Link>

                  <button
                    className="w-6 h6"
                  >
                    <img src={`${TrashIcon}`} alt="delete-data" className="w-full h-full"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-full justify-end pr-5">
          <Pagination/>
        </div>
      </div>
    </>
  )
}

export default ProductList