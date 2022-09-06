import React from 'react';
import { API_URL } from '../../utils/api/http';

function Card({ answer, audio, onRightAnswer, onWrongAnswer, wrongAns }) {
  const wordAudio = new Audio(API_URL + '/' + audio);
  const onClickPlay = () => {
    wordAudio.play();
  };

  React.useEffect(() => {
    wordAudio.play();
  }, [audio]);

  //getting random answers
  const allAns = [...wrongAns].sort(() => 0.5 - Math.random()).slice(0, 5);
  if (!allAns.includes(answer)) {
    allAns.pop();
    allAns.push(answer);
  }
  const randomAns = allAns.sort(() => 0.5 - Math.random());

  return (
    <>
      <div
        onClick={onClickPlay}
        className="listen mx-auto my-4 cursor-pointer transition-all hover:drop-shadow-md"
      >
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
        {randomAns.map((el) => (
          <button
            key={el}
            onClick={el !== answer ? onWrongAnswer : onRightAnswer}
            className="answer1 text-grey text-2xl bg-white transition duration-300 ease-in-out font-medium rounded-lg w-56 h-14 hover:bg-white hover:shadow-lg ml-4"
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
}

export default Card;
