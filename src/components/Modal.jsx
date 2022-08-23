import ReactDOM from 'react-dom';

function ModalWindow({ children, onClick }) {
  return (
    <>
      <Backdrop />
      <div
        className="absolute top-2/4 left-2/4 z-20 -translate-x-2/4 -translate-y-2/4"
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
function Backdrop() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 opacity-90 bg-grey"></div>
  );
}

function Modal({ children, onClick }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWindow onClick={onClick}>{children}</ModalWindow>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default Modal;
