import React from 'react';

const WordCard = ({ translateName, name, hahdleClick, id }) => {
  return (
    <button
      onClick={() => hahdleClick(id)}
      type="button"
      className="flex  flex-col items-center  px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-32 h-10 md:w-48 h-14 hover:bg-white hover:text-action hover:border-none  ml-4"
    >
      <h2>{name}</h2>
      <p className="text-sm">{translateName}</p>
    </button>
  );
};

export default WordCard;
