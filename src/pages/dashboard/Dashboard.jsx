import CardStandar from "../../components/card/CardStandar"

const Dashboard = () => {
  return(
    <>
      <div className="text-lg font-semibold mb-6">
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-3 items-center gap-4 h-44">
        <CardStandar style={'bg-green-200'}>
          <h1 className="font-extrabold text-4xl mb-10">20</h1>
          <p className="text-lg font-medium">Product</p>
        </CardStandar>
        <CardStandar style={'bg-green-200'}>
          <h1 className="font-extrabold text-4xl mb-10">10</h1>
          <p className="text-lg font-medium">Category</p>
        </CardStandar>
        <CardStandar style={'bg-green-200'}>
          <h1 className="font-extrabold text-4xl mb-10">4</h1>
          <p className="text-lg font-medium">Purchase</p>
        </CardStandar>
      </div>
    </>
  )
}

export default Dashboard