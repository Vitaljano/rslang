import React from 'react';
import AudioResults from './AudioResults';

function AudioChallenge() {
  const [results, setResults] = React.useState(false);
  const onClickRightAns = () => {
    setResults(true);
  };

  return (
    <>
      {results ? (
        <AudioResults setResults={setResults} />
      ) : (
        <div className="container w-4/6 h-5/6 flex flex-col items-center relative fixed top-4">
          <div className="lives flex flex-row gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill="#E03168"
                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill="#E03168"
                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill="#E03168"
                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill="#E03168"
                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill="#E03168"
                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
              />
            </svg>
          </div>
          <div className="listen mx-auto my-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 24 24"
              width="60"
              height="60"
            >
              <path
                fill="#ffff"
                d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"
              />
              <path
                fill="#ffff"
                d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"
              />
              <path
                fill="#ffff"
                d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"
              />
            </svg>
          </div>
          <div className="answers flex gap-10 flex-wrap items-center justify-center mt-16">
            <button className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4">
              answer
            </button>
            <button className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4">
              answer
            </button>
            <button className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4">
              answer
            </button>
            <button className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4">
              answer
            </button>
            <button
              onClick={onClickRightAns}
              className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4"
            >
              answer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AudioChallenge;
