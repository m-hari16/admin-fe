import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="w-full px-[12%] py-[5%] text-center">
      <h1 className="text-4xl font-medium mb-4">Wellcome to my site</h1>
      <p className="mb-7">Please login first to manage everything</p>
      <Link
        to={'/login'}
        className="bg-green-600 py-2 px-4 text-sm text-white rounded hover:bg-green-800 w-20 h-8"
      >
        Login
      </Link>
    </div>
  )
}

export default Home