import { Link } from 'react-router-dom';
import { setGamesSrartFlag } from '../../store/reducers/GamesSlice';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ModalStart({ setActiveModal, preLoader, setDifficult }) {
  // const { isGameFromTextbook } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const difficultHandle = (e) => {
    setDifficult(e.target.textContent - 1);
    setActiveModal(false);
    preLoader(true);
  };
  const onClickStart = () => {
    setActiveModal(false);
    preLoader(true);
  };

  return (
    <div className="modal w-3/6 h-80 mx-auto bg-white flex items-center justify-center relative top-24 rounded-xl shadow-xl">
      <Link onclick={dispatch(setGamesSrartFlag(false))} to="/">
        <div className="close flex absolute bg-white bg-opacity-70 -top-8 -right-5 w-8 h-8 rounded-full shadow-xl items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="#f5c1d2"
              d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"
            />
          </svg>
        </div>
      </Link>
      <div className="content p-10 flex items-center flex-col justify-center">
        <div className="rules text-3xl text-grey mt-2 mb-4 text-center">
          В этой игре вам необходимо услышать слово и выбрать его перевод
        </div>
        <div className="text-xl text-grey mb-2">Выбери уровеь</div>
        <div className="mb-7">
          <button
            onClick={difficultHandle}
            className="w-12 h-12 mx-2 my-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            1
          </button>
          <button
            onClick={difficultHandle}
            className="w-12 h-12 mx-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            2
          </button>
          <button
            onClick={difficultHandle}
            className="w-12 h-12  mx-2 my-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            3
          </button>
          <button
            onClick={difficultHandle}
            className="w-12 h-12  mx-2 my-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            4
          </button>
          <button
            onClick={difficultHandle}
            className="w-12 h-12  mx-2 my-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            5
          </button>
          <button
            onClick={difficultHandle}
            className="w-12 h-12  mx-2 my-2 bg-sprint text-white text-2xl transition duration-300 ease-in-out font-medium rounded-lg hover:bg-white hover:bg-sprintHover hover:shadow-lg"
          >
            6
          </button>
        </div>
        <button
          onClick={onClickStart}
          type="button"
          className="text-white text-2xl bg-sprint transition duration-300 ease-in-out font-medium rounded-lg w-48 h-12 hover:bg-white hover:bg-sprintHover hover:shadow-lg ml-4"
        >
          Поехали!
        </button>
      </div>
    </div>
  );
}

export default ModalStart;
