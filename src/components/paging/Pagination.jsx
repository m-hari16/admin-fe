import { LeftScroll, RightScroll } from "../../assets"

function Pagination({page, setPage, totalPage}) {
  let pageList = Array.from({ length: totalPage }, (_, index) => index + 1);
  
  const handlePrev = () => {
    if(page - 1 > 0) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if(page + 1 > totalPage) {
      setPage(totalPage)
    } else {
      setPage(page + 1)
    }
  }

  return(
    <>
      <div className="flex items-center space-x-3">
        <button
          onClick={handlePrev}
          className="hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center"
        >
          <img src={`${LeftScroll}`} alt="icon-article" className="w-5 h-3"/>
        </button>

        <div className="flex items-center space-x-2">
          {
            pageList.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`flex items-center justify-center w-6 h-6 rounded-sm ${item == page ? 'bg-[#51B15C] text-white' : 'text-gray-900 hover:bg-gray-200'}`}
              >
                <span className="font-sans text-xs font-semibold">{item}</span>
              </button>
            ))
          }
        </div>

        <button
          onClick={handleNext}
          className="hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center"
        >
          <img src={`${RightScroll}`} alt="icon-article" className="w-5 h-3"/>
        </button>
      </div>
    </>
  )  
}

export default Pagination