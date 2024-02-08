const Dialog = ({isOpen, handler, style, children}) => {
  
  return(
    <>
    {
      isOpen && (
        <div
          onClick={handler}
          className={`fixed inset-0 flex justify-center items-center transition-colors visible bg-black/20 ${style}`}          
        >
          <div className={`max-w-lg max-h-min py-8 px-14 rounded-md shadow-slate-100 bg-slate-50`}>
            {children}
          </div>
        </div>
      )
    }
    </>
  )
}

export default Dialog