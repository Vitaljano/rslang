import { API_URL } from '../utils/api/http';
import { useSelector } from 'react-redux';

function Card({
  activeWord,
  addtoDifficultWords,
  delDifficultWordById,
  addtoLearnedWords,
}) {
  const { isAuth } = useSelector((state) => state.auth);

  const playText = (audioPath) => {
    const audio = new Audio(`${API_URL}/${audioPath}`);

    audio.play();
  };
  return (
    <div className=" sm:max-w-xs   rounded-xl  md:rounded-xl  mt-5 shadow-2xl  relative md:w-9/12 ">
      <div className="w-full r-0 absolute z-1">
        <img
          className="rounded-t-xl w-full "
          src={`${API_URL}/${activeWord.image}`}
          alt=""
        />
      </div>
      <div className="text-right pt-60 px-4 pb-4 rounded-xl bg-gradient-to-t via-white from-white z-10 relative ">
        <div className="sm:h-56">
          <div className="uppercase text-lg font-medium mb-2">
            {activeWord.word}
          </div>
          <div className="flex justify-end items-center">
            <span className="mx-2">
              {activeWord.word}
              {activeWord.transcription}
            </span>
            <button onClick={() => playText(activeWord.audio)}>
              <svg
                width="38"
                height="36"
                viewBox="0 0 38 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_256)">
                  <path
                    d="M3.81872 8.9745C3.00964 8.9745 2.23369 9.29057 1.66158 9.85318C1.08947 10.4158 0.768066 11.1789 0.768066 11.9745L0.768066 23.9745C0.768066 24.7702 1.08947 25.5332 1.66158 26.0958C2.23369 26.6584 3.00964 26.9745 3.81872 26.9745H8.08964L19.072 35.94V0L8.08964 8.9745H3.81872Z"
                    fill="black"
                  />
                  <path
                    d="M31.2745 18C31.2721 16.0116 30.4678 14.1053 29.0381 12.6993C27.6083 11.2933 25.6699 10.5024 23.6479 10.5H22.1226V13.5H23.6479C24.8615 13.5 26.0254 13.9741 26.8836 14.818C27.7418 15.6619 28.2239 16.8065 28.2239 18C28.2239 19.1935 27.7418 20.3381 26.8836 21.182C26.0254 22.0259 24.8615 22.5 23.6479 22.5H22.1226V25.5H23.6479C25.6699 25.4976 27.6083 24.7067 29.0381 23.3007C30.4678 21.8947 31.2721 19.9884 31.2745 18Z"
                    fill="black"
                  />
                  <path
                    d="M23.6479 4.5H22.1226V7.5H23.6479C26.4797 7.5 29.1955 8.60625 31.1979 10.5754C33.2003 12.5445 34.3252 15.2152 34.3252 18C34.3252 20.7848 33.2003 23.4555 31.1979 25.4246C29.1955 27.3938 26.4797 28.5 23.6479 28.5H22.1226V31.5H23.6479C27.2888 31.5 30.7805 30.0777 33.355 27.5459C35.9295 25.0142 37.3758 21.5804 37.3758 18C37.3758 14.4196 35.9295 10.9858 33.355 8.45406C30.7805 5.92232 27.2888 4.5 23.6479 4.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_256">
                    <rect
                      width="36.6079"
                      height="36"
                      fill="white"
                      transform="translate(0.768066)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: activeWord.textExample }}
            className="my-2 text-md font-medium"
          ></div>

          <div
            dangerouslySetInnerHTML={{
              __html: activeWord.textExampleTranslate,
            }}
            className="font-light"
          ></div>
        </div>
      </div>
      {isAuth && (
        <div className=" flex flex-col  my-3 text-sm font-medium gap-3 justify-items-center sm:flex-row">
          {activeWord.userWord?.difficulty === 'hard' ? (
            <button
              onClick={delDifficultWordById}
              type="button"
              className="w-11/12 flex items-center justify-between px-3 text-white  text-center  border-2 border-bg-white transition duration-300 ease-in-out font-medium bg-red rounded-lg  h-10 md:w-48 h-12 hover:bg-white hover:text-action hover:border-none  ml-4"
            >
              <h2>Удалить из сложных слов</h2>
            </button>
          ) : (
            <button
              onClick={addtoDifficultWords}
              type="button"
              className=" w-11/12 flex  items-center justify-between px-3 text-white  border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg  bg-yellow   h-10 md:w-48 h-12 hover:bg-white hover:text-action hover:border-none  ml-4"
            >
              <h2>Добавить в сложные слова</h2>
            </button>
          )}
          {activeWord.userWord?.difficulty !== 'studied' && (
            <button
              onClick={addtoLearnedWords}
              type="button"
              className="w-11/12 flex items-center justify-between px-3 text-white  text-center  border-2 border-bg-white transition duration-300 ease-in-out font-medium bg-green-600 rounded-lg h-10 md:w-48 h-12 hover:bg-white hover:text-action hover:border-none  ml-4"
            >
              <h2>Отметить как изученное</h2>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
