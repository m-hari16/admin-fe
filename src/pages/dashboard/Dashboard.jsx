import { useEffect, useState } from "react"
import CardStandar from "../../components/card/CardStandar"
import { dashboard } from "../../data/apiAuthenticated"

const Dashboard = () => {
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await dashboard();
        setValue(api.data);
      } 
      catch (error) {}
      finally {
        setLoading(false);
      }
    }

    fetchData()
  },[])

  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Dashboard</h1>
      </div>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
        <div className="grid grid-cols-3 items-center gap-4 h-44 text-white">
          <CardStandar style={'bg-[#51B15C]'}>
            <h1 className="font-extrabold text-4xl mb-10">{value.product_count}</h1>
            <p className="text-lg font-medium">Product</p>
          </CardStandar>
          <CardStandar style={'bg-[#51B15C]'}>
            <h1 className="font-extrabold text-4xl mb-10">{value.category_count}</h1>
            <p className="text-lg font-medium">Category</p>
          </CardStandar>
          <CardStandar style={'bg-[#51B15C]'}>
            <h1 className="font-extrabold text-4xl mb-10">{value.purchase_count}</h1>
            <p className="text-lg font-medium">Purchase</p>
          </CardStandar>
        </div>
        )
      }
    </>
  )
}

export default Dashboard