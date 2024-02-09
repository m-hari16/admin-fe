import { Link } from "react-router-dom"
import SearchBar from "../../components/search/SearchBar"
import { EditIcon, TrashIcon } from "../../assets"
import { useEffect, useState } from "react"
import { productDelete, productList } from "../../data/apiAuthenticated"
import Dialog from "../../components/dialog/Dialog"
import Pagination from "../../components/paging/Pagination"

const ProductList = () => {
  const [value, setValue] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [itemId, setItemId] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await productList(`?page=${page}&size=5`);
        setValue(api.data)
        setTotalPage(api.pagination.totalPage)
      } 
      catch (error) {}
      finally {
        setLoading(false);
      }
    }

    fetchData()
  },[page])

  const handleDelete = async (id) => {
    await productDelete(id)
    window.location.reload();
  }

  const handleOpen = (id) => {
    setOpen(!open)
    setItemId(id)
  }

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
          {
            loading ? 
            (<p>Loading...</p>) : 
            (
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
                  {
                    value?.map((item, idx) => (
                      <tr 
                        key={idx}
                        className="h-16 text-text-100 text-[15px] font-sans font-normal"
                      >
                        <td className="border text-center">{idx+1}</td>
                        <td className="border pl-5">{item.product_code}</td>
                        <td className="border pl-5">{item.product_name}</td>
                        <td className="border pl-5">{item.uom}</td>
                        <td className="border pl-5">{item.category.name}</td>
                        <td className="border pl-5">{item.isActive ? 'Tersedia' : 'Tidak Tersedia'}</td>
                        <td className="border">
                          <div className="flex justify-center h-16 space-x-2">
                            <Link
                              to={`/admin/product/edit?id=${item.id}`}
                              state={item}
                              className="w-6 h6"
                            >
                              <img src={`${EditIcon}`} alt="edit-data" className="w-full h-full"/>
                            </Link>

                            <button
                              onClick={() => handleOpen(item.id)}
                              className="w-6 h6"
                            >
                              <img src={`${TrashIcon}`} alt="delete-data" className="w-full h-full"/>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
        <div className="flex w-full justify-end pr-5">
          <Pagination
            page={page}
            setPage={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
      <Dialog
        isOpen={open}
        handler={() => handleOpen('')}
      >
        <h2 className="text-lg font-normal text-gray-700">Are you sure want to delete this item?</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleOpen('')}
            className={`border-2 py-2 px-4 text-sm text-gray-700 rounded hover:bg-gray-200 mt-8`}
          >
            No, Cancel
          </button>
          <button
            onClick={() => handleDelete(itemId)}
            className={`bg-red-500 py-2 px-4 text-sm text-white rounded hover:bg-red-700 mt-8`}
          >
            Yes, Delete
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default ProductList