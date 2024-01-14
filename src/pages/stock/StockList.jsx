import { Link } from "react-router-dom"
import SearchBar from "../../components/search/SearchBar"
import Pagination from "../../components/paging/paination"
import { EditIcon, TrashIcon } from "../../assets"

const StockList = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Stock Product</h1>
      </div>

      <div className="mt-5 pb-5 bg-white">
        <div className="flex justify-between">
          <SearchBar/>
        </div>
        <div className="flex justify-center">
          <table className="w-full m-5">
            <thead>
              <tr className="h-12 bg-[#51B15C] text-white text-[14px] font-sans font-medium text-center">
                <th className="border">No</th>
                <th className="border">Product Code</th>
                <th className="border">Product Name</th>
                <th className="border">Stock</th>
                <th className="border">UoM</th>
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
                <td className="border pl-5">500</td>
                <td className="border pl-5">rim</td>
                <td className="border flex justify-center h-16 space-x-2">
                  <Link
                    to={`/admin/stock/edit?id=1`}
                    className="w-6 h6"
                  >
                    <img src={`${EditIcon}`} alt="edit-data" className="w-full h-full"/>
                  </Link>
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

export default StockList