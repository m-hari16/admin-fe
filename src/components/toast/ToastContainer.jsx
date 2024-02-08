import Toast from './Toast';

const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed bottom-3 right-4 z-99 w-[22%]">
      {
        toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))
      }
    </div>
  );
};

export default ToastContainer;
