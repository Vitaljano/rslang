import React from 'react';
import { useSelector } from 'react-redux';

const WordCard = ({
  translateName,
  name,
  showCardInfo,
  id,
  activeWord,
  word,
}) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <button
      onClick={showCardInfo}
      type="button"
      className={
        (isAuth ? activeWord._id === id : activeWord.id === id)
          ? ' bg-red flex  flex-col items-center  px-3 text-white  text-center md:text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-5/12 h-10 md:w-48 h-14 hover:bg-white hover:text-action hover:border-none  ml-4'
          : ` flex  flex-col items-center  px-3 text-white  text-center md:text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-5/12 h-10 md:w-48 h-14 hover:bg-white hover:text-action hover:border-none  ml-4 ${
              word.userWord?.difficulty === 'hard' ? ' bg-yellow ' : ''
            }${word.userWord?.difficulty === 'studied' ? 'bg-green-600' : ''}`
      }
    >
      <h2>{name}</h2>
      <p className="text-sm">{translateName}</p>
    </button>
  );
};

export default WordCard;
