const CardStandar = ({children, style}) => {
  return(
    <>
      <div className={`w-full h-full p-6 rounded-md shadow-md shadow-slate-200 ${style}`}>
        <div className="py-4">
          {children}
        </div>
      </div>
    </>
  )
}

export default CardStandar