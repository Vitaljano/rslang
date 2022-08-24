import React from 'react';
import { Link } from 'react-router-dom';

const fakeRes = [
  {
    id: 1,
    word: 'duck',
    audio: '',
    transcription: '[dʌk]',
    translate: 'утка',
  },
  {
    id: 2,
    word: 'duck',
    audio: '',
    transcription: '[dʌk]',
    translate: 'утка',
  },
  {
    id: 3,
    word: 'duck',
    audio: '',
    transcription: '[dʌk]',
    translate: 'утка',
  },
  {
    id: 4,
    word: 'duck',
    audio: '',
    transcription: '[dʌk]',
    translate: 'шутка',
  },
  {
    id: 5,
    word: 'duck',
    audio: '',
    transcription: '[dʌk]',
    translate: 'ienrf',
  },
];

const Result = ({ word, transcription, translate }) => {
  return (
    <>
      <div className="res flex flex-row text-grey text-2xl m-6 justify-between gap-2">
        <div className="listen cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 24 24"
            width="30"
            height="3-"
          >
            <path
              fill="#676060"
              d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"
            />
            <path
              fill="#676060"
              d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"
            />
            <path
              fill="#676060"
              d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"
            />
          </svg>
        </div>
        <p>{word}</p>
        <p>{transcription}</p>
        <p>{translate}</p>
        <div className="checked">
          <svg
            width="30"
            height="30"
            viewBox="0 0 83 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7993 58C24.4433 58.0009 22.1837 57.0944 20.5192 55.4804L1.53225 37.1076C-0.510751 35.1294 -0.510751 31.9226 1.53225 29.9443C3.57591 27.9666 6.88867 27.9666 8.93233 29.9443L26.7993 47.2397L74.0677 1.48324C76.1113 -0.494414 79.4241 -0.494414 81.4677 1.48324C83.5107 3.46153 83.5107 6.66834 81.4677 8.64662L33.0794 55.4804C31.4148 57.0944 29.1553 58.0009 26.7993 58Z"
              fill="#06BFAD"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

function AudioResults({ setResults }) {
  return (
    <>
      <div className="res w-3/6 h-5/6 bg-white flex flex-col relative fixed p-6 left-2 top-6 rounded-xl shadow-xl">
        {fakeRes.map((item) => (
          <Result key={item.id} {...item} />
        ))}{' '}
      </div>
      <div className="actions ml-20 flex flex-col justify-evenly text-white text-center text-lg">
        <div
          onClick={() => setResults(false)}
          className="again cursor-pointer hover:drop-shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="80"
            height="80"
          >
            <path
              fill="#ffff"
              d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z"
            />
            <path
              fill="#ffff"
              d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z"
            />
          </svg>
          <p className="mt-4">
            Начать <br /> заново
          </p>
        </div>
        <Link to="/textbook">
          <div className="textbook cursor-pointer hover:drop-shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 24 24"
              width="80"
              height="80"
            >
              <path
                fill="#ffff"
                d="M22.2,2.163a4.992,4.992,0,0,0-4.1-1.081l-3.822.694A4,4,0,0,0,12,3.065,4,4,0,0,0,9.716,1.776L5.9,1.082A5,5,0,0,0,0,6V16.793a5,5,0,0,0,4.105,4.919l6.286,1.143a9,9,0,0,0,3.218,0L19.9,21.712A5,5,0,0,0,24,16.793V6A4.983,4.983,0,0,0,22.2,2.163ZM11,20.928c-.084-.012-.168-.026-.252-.041L4.463,19.745A3,3,0,0,1,2,16.793V6A3,3,0,0,1,5,3a3.081,3.081,0,0,1,.54.049l3.82.7A2,2,0,0,1,11,5.712Zm11-4.135a3,3,0,0,1-2.463,2.952l-6.285,1.142c-.084.015-.168.029-.252.041V5.712a2,2,0,0,1,1.642-1.968l3.821-.7A3,3,0,0,1,22,6Z"
              />
            </svg>
            <p className="mt-4">
              Перейти <br /> к учебнику
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AudioResults;