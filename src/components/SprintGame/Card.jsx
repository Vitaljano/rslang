import Button from './Button';
import Points from './Points';
import Timer from './Timer';

function Card({ question, answer, onAnswer, gameStart, gameEnd, level }) {
  const endTimerHandle = (value) => {
    gameEnd(value);
  };
  return (
    <div>
      <div className="mx-auto w-96 flex justify-between pb-2">
        <Timer start={gameStart} end={endTimerHandle} />
        <Points level={level} />
      </div>
      <div className="bg-white rounded-md shadow  pt-20 pb-20 w-96 h-full mx-auto">
        <div className="text-center text-2xl">{question}</div>
        <button className="m-auto block my-4 ">
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
        <div className="text-center text-2xl">{answer}</div>
        <div className="flex mt-10 justify-around">
          <Button content={'Не Верно'} type={'danger'} onAnswer={onAnswer} />
          <Button content={'Верно'} type={'success'} onAnswer={onAnswer} />
        </div>
      </div>
    </div>
  );
}
export default Card;
