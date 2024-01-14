import { Link } from "react-router-dom"
import { LeftScroll, RightScroll } from "../../assets"

function Pagination() {
  return(
    <ul className="inline-flex items-center space-x-3 ">
      <li className="block bg-white w-9 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <img src={`${LeftScroll}`} alt="icon-article" className="w-5 h-3"/>
        </Link>
      </li>
      <li className="block bg-[#51B15C] w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-white">1</span>
        </Link>
      </li>
      <li className="block bg-white w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">2</span>
        </Link>
      </li>
      <li className="block bg-white w-6 h-6">
        <Link to="#" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">...</span>
        </Link>
      </li>
      <li className="block bg-white w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">10</span>
        </Link>
      </li>
      <li className="block bg-white w-9 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <img src={`${RightScroll}`} alt="icon-article" className="w-5 h-3"/>
        </Link>
      </li>
  </ul>
  )  
}

export default Pagination