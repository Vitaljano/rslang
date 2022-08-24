import React from 'react';

const LevelCard = ({ name, levelAbrr, handleClick, langLevel }) => {
  return (
    <button
      onClick={() => handleClick(langLevel)}
      type="button"
      className="flex items-center justify-between px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-32 h-10 md:w-48 h-12 hover:bg-white hover:text-action hover:border-none  ml-4"
    >
      <h2>{name}</h2>
      <p>{levelAbrr}</p>
    </button>
  );
};

export default LevelCard;