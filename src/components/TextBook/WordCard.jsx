import React from 'react';

const WordCard = ({ translateName, name, showCardInfo, id, activeWord }) => {
  return (
    <button
      onClick={showCardInfo}
      type="button"
      className={
        activeWord === id
          ? ' bg-red flex  flex-col items-center  px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-32 h-10 md:w-48 h-14 hover:bg-white hover:text-action hover:border-none  ml-4'
          : ' flex  flex-col items-center  px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-32 h-10 md:w-48 h-14 hover:bg-white hover:text-action hover:border-none  ml-4'
      }
    >
      <h2>{name}</h2>
      <p className="text-sm">{translateName}</p>
    </button>
  );
};

export default WordCard;
