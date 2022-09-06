import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLangGroupNumber, setPage } from '../../store/reducers/WordSlice';
import { setGamesSrartFlag } from '../../store/reducers/GamesSlice';

function ModalStart({ setActiveModal }) {
  const { isGameFromTextbook } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const levels = Array.from({ length: 6 }, (_, i) => i + 1);

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const onClickStart = () => {
    setActiveModal(false);
    dispatch(setGamesSrartFlag(false));
  };

  const onClickDifficulty = (e) => {
    setActiveModal(false);
    dispatch(setLangGroupNumber(e.target.textContent - 1));
    dispatch(setPage(randomInteger(0, 29)));
  };

  return (
    <div className="modal w-5/6 md:w-4/6 h-4/6 md:h-80 bg-white flex items-center justify-center mx-auto relative  top-14 rounded-xl shadow-xl">
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
        <div className="rules text-2xl  text-grey my-10 text-center">
          В этой игре вам необходимо услышать слово и выбрать его перевод
        </div>
        {isGameFromTextbook && (
          <div className="rules md:text-3xl text-grey mt-2 mb-4 text-center">
            Ну что, погнали учить слова ?
          </div>
        )}

        {!isGameFromTextbook && (
          <>
            <div className="text-2xl text-grey mb-2">Выбери уровень</div>
            <div className="mb-7">
              {levels.map((el, index) => (
                <button
                  key={index}
                  onClick={onClickDifficulty}
                  className="w-12 h-12 mx-2 my-2 bg-yellow text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg  hover:bg-lightyellow hover:shadow-lg"
                >
                  {el}
                </button>
              ))}
            </div>
          </>
        )}

        {isGameFromTextbook && (
          <button
            onClick={onClickStart}
            type="button"
            className="text-white text-2xl bg-yellow transition duration-300 ease-in-out font-medium rounded-lg w-48 h-12 hover:bg-lightyellow hover:shadow-lg ml-4"
          >
            Поехали!
          </button>
        )}
      </div>
    </div>
  );
}

export default ModalStart;
