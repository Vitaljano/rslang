import React from 'react';
import { Link } from 'react-router-dom';

function ModalStart({ setActiveModal }) {
  const onClickStart = () => {
    setActiveModal(false);
  };

  return (
    <div className="modal w-3/6 h-80 bg-white flex items-center justify-center relative fixed top-14 rounded-xl shadow-xl">
      <Link to="/">
        <div className="close flex absolute bg-white bg-opacity-70 -top-8 -right-5 w-8 h-8 rounded-full shadow-xl items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="#FFDC68"
              d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"
            />
          </svg>
        </div>
      </Link>
      <div className="content p-10 flex items-center flex-col justify-center">
        <div className="rules text-3xl text-grey my-10 text-center">
          В этой игре вам необходимо услышать слово и выбрать его перевод
        </div>
        <button
          onClick={onClickStart}
          type="button"
          className="text-white text-2xl bg-yellow transition duration-300 ease-in-out font-medium rounded-lg w-48 h-12 hover:bg-white hover:bg-lightyellow hover:shadow-lg ml-4"
        >
          Поехали!
        </button>
      </div>
    </div>
  );
}

export default ModalStart;
