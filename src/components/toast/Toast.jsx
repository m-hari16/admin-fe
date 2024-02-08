const Toast = ({ type, message }) => {
  const toastClassName = `
    ${type === 'success' ? 'border-l-green-500' : type === 'error' ? 'border-l-red-500' : 'border-l-blue-500'}
  `
  return (
    <div className={`w-full h-20 p-3 bg-white rounded-lg shadow-xl border-l-4 ${toastClassName}`}>
      <div className="flex flex-col">
        <h3 className="text-base font-medium pb-1">{type}</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  ) 
}

export default Toast;
